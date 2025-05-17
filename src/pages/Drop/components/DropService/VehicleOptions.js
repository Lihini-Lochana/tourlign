import React from 'react';
import PropTypes from 'prop-types';
import './VehicleOptions.css';

const VehicleOptions = ({ vehicles, passengerCount, onSelect, selectedVehicle }) => {
  const filteredVehicles = vehicles.filter(vehicle => vehicle.capacity >= passengerCount);

  return (
    <div className="vehicle-options-container">
      <h3>Select Vehicle Type</h3>
      {filteredVehicles.length === 0 ? (
        <div className="no-vehicles-message">
          No vehicles available for {passengerCount} passengers. Please reduce passenger count.
        </div>
      ) : (
        <div className="vehicle-grid">
          {filteredVehicles.map(vehicle => (
            <div 
              key={vehicle.id}
              className={`vehicle-card ${selectedVehicle?.id === vehicle.id ? 'selected' : ''}`}
              onClick={() => onSelect(vehicle)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelect(vehicle)}
            >
              <div className="vehicle-name">{vehicle.name}</div>
              <div className="vehicle-price">LKR {vehicle.pricePerKm} per 1 KM</div>
              <div className="vehicle-capacity">Up to {vehicle.capacity} passengers</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

VehicleOptions.propTypes = {
  vehicles: PropTypes.array.isRequired,
  passengerCount: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedVehicle: PropTypes.object
};

export default VehicleOptions;