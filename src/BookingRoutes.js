import React from "react";
import { Routes, Route } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";
import PreVehicleSelection from "./components/PreVehicleSelection";
import BookingForm from "./components/BookingForm";
import EventSelection from "./components/EventSelection";
import ViewPackageDetails from "./components/ViewPackageDetails";
import ViewSeasonPackages from "./components/ViewSeasonPackages";
import { ViewSeason } from "./components/ViewSeason";

export default function BookingRoutes() {
  return (
    <BookingProvider>
      <Routes>
                    <Route path="/booking-form/:packageId" element={<BookingForm />} />
                    <Route path="/event-selection/:packageId" element={<EventSelection />} />
                    <Route path="/vehicle-selection/:packageId/:passengerCount" element={<PreVehicleSelection />} />
                    <Route path="/view-package-details/:packageId" element={<ViewPackageDetails />} />
                    <Route path="/view-season-packages/:seasonId" element={<ViewSeasonPackages />} />
                    <Route path="/tourist-view-season" element={<ViewSeason />} />
                    

      </Routes>
    </BookingProvider>
  );
}
