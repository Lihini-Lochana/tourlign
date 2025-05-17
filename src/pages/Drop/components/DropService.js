import React, { useState, useCallback, useRef, useEffect } from 'react';
import { LoadScript, GoogleMap, DirectionsRenderer, Autocomplete } from '@react-google-maps/api';
import './DropService.css';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();


const handleBookNow = () => {
  navigate('/DropBookingForm', {
    state: {
      pickup,
      drop,
      distance,
      duration
    }
  });
};


const libraries = ['places', 'geocoding', 'directions', 'distanceMatrix'];
const mapContainerStyle = { width: '100%', height: '400px' };
const defaultCenter = { lat: 6.9271, lng: 79.8612 }; // Colombo

const DropService = () => {
  const navigate = useNavigate();


  const handleBookNow = () => {
    navigate('/DropBookingForm', {
      state: {
        pickup,
        drop,
        distance,
        duration
      }
    });
  };

  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const pickupAutocompleteRef = useRef(null);
  const dropAutocompleteRef = useRef(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      setMapLoaded(true);
    }
  }, []);

  const onPickupLoad = (autocomplete) => (pickupAutocompleteRef.current = autocomplete);
  const onDropLoad = (autocomplete) => (dropAutocompleteRef.current = autocomplete);

  const onPlaceChanged = (type) => {
    const autocomplete = type === 'pickup' ? pickupAutocompleteRef.current : dropAutocompleteRef.current;
    if (!autocomplete) return;
    const place = autocomplete.getPlace();
    if (!place.formatted_address || !place.geometry) return;

    if (type === 'pickup') {
      setPickup(place.formatted_address);
    } else {
      setDrop(place.formatted_address);
    }
  };

  const clearRoute = () => {
    setPickup('');
    setDrop('');
    setDistance(null);
    setDuration(null);
    setDirections(null);
    setError(null);
  };

  const calculateRoute = useCallback(async () => {
    if (!pickup || !drop) {
      setError('Please enter both pickup and drop locations');
      return;
    }

    if (pickup === drop) {
      setError('Pickup and drop locations cannot be the same');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (!mapLoaded) throw new Error('Maps API not loaded');

      // Get coordinates from autocomplete
      const pickupPlace = pickupAutocompleteRef.current.getPlace();
      const dropPlace = dropAutocompleteRef.current.getPlace();

      if (!pickupPlace.geometry || !dropPlace.geometry) {
        throw new Error('Could not get coordinates for locations');
      }

      const pickupLoc = pickupPlace.geometry.location;
      const dropLoc = dropPlace.geometry.location;

      // Calculate distance using Distance Matrix Service
      const distanceService = new window.google.maps.DistanceMatrixService();
      const distanceResponse = await new Promise((resolve, reject) => {
        distanceService.getDistanceMatrix({
          origins: [pickupLoc],
          destinations: [dropLoc],
          travelMode: 'DRIVING',
          unitSystem: window.google.maps.UnitSystem.METRIC // Ensure kilometers
        }, (response, status) => {
          status === 'OK' ? resolve(response) : reject(status);
        });
      });

      const result = distanceResponse.rows[0].elements[0];
      if (result.status === 'OK') {
        setDistance(result.distance.text);
        setDuration(result.duration.text);
      } else {
        throw new Error(result.status);
      }

      // Get directions
      const directionsService = new window.google.maps.DirectionsService();
      const directionsResult = await new Promise((resolve, reject) => {
        directionsService.route({
          origin: pickupLoc,
          destination: dropLoc,
          travelMode: 'DRIVING',
        }, (result, status) => {
          status === 'OK' ? resolve(result) : reject(status);
        });
      });

      setDirections(directionsResult);
    } catch (err) {
      console.error('Route calculation error:', err);
      setError(`Failed to calculate route: ${err.message || err}`);
    } finally {
      setLoading(false);
    }
  }, [pickup, drop, mapLoaded]);

  return (
    <div className="drop-service-container">
      <h2>Journey Distance Calculator</h2>

      <div className="input-container">
        <div className="input-group">
          <label htmlFor="pickup">Pickup Location</label>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            libraries={libraries}
            onLoad={() => setMapLoaded(true)}
          >
            <Autocomplete
              onLoad={onPickupLoad}
              onPlaceChanged={() => onPlaceChanged('pickup')}
              fields={['formatted_address', 'geometry']}
            >
              <input
                id="pickup"
                type="text"
                placeholder="Enter pickup address"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="location-input"
              />
            </Autocomplete>
          </LoadScript>
        </div>

        <div className="input-group">
          <label htmlFor="drop">Drop Location</label>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            libraries={libraries}
          >
            <Autocomplete
              onLoad={onDropLoad}
              onPlaceChanged={() => onPlaceChanged('drop')}
              fields={['formatted_address', 'geometry']}
            >
              <input
                id="drop"
                type="text"
                placeholder="Enter drop address"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="location-input"
              />
            </Autocomplete>
          </LoadScript>
        </div>

        <div className="button-group">
          <button 
            onClick={calculateRoute}
            disabled={loading || !pickup || !drop}
            className="calculate-button"
          >


<button onClick={handleBookNow} className="calculate-button">
      Book Now
    </button>

            {loading ? 'Calculating...' : 'Calculate Route'}
          </button>
          <button onClick={clearRoute} className="clear-button">
            Clear
          </button>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      {(distance || duration) && (
        <div className="results-container">
          <div className="result-item">
            <span className="result-label">Distance:</span>
            <span className="result-value">{distance}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Duration:</span>
            <span className="result-value">{duration}</span>
          </div>
        </div>
      )}
       
      <div className="map-container">
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={libraries}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={directions ? 12 : 10}
            center={directions ? undefined : defaultCenter}
          >
            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  polylineOptions: {
                    strokeColor: "#1976D2",
                    strokeWeight: 5
                  }
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default DropService;