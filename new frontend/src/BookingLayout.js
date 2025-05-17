// BookingLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";

export default function BookingLayout() {
  return (
    <BookingProvider>
      <Outlet />
    </BookingProvider>
  );
}
