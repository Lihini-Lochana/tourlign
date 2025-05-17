

import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage";
import Sidebar from"./compornents/Sidebar";
import Selectplaces from "./pages/selecttours/Selectplaces";
import Addtocart from "./pages/addtocart/Addtocart";
import Cart from "./pages/cart/Cart";
import Selectvehicle from "./pages/selectvehicle/Selectvehicle";
import Tourbooking from "./pages/tourbooking/Tourbooking";
import Bookingpending from "./pages/Bookingpending/Bookingpending";

import Admindropvehicle from "./pages/Admin/Admindropvehicles/Admindropvehicle"

import Adminvehicle from "./pages/Admin/Adminvehicle";
import Admintourlist from "./pages/Admin/Admintourlist/Admintourlist";
import Admintourrejected from "./pages/Admin/Admintourrejected/Admintourrejected";
import AdmintourAccept from "./pages/Admin/AdmintourAcceptlist/AdmintourAccept";
import Admintourdiscription from "./pages/Admin/Admintourdiscription/Admintourdiscription";
import Admintourplaces from "./pages/Admin/Admintourrplaces/Admintourplaces";

import Admindropitems from "./pages/Admin/Admindropitems/Admindropitems";
import AdmindropAccept from "./pages/Admin/Admindropaccept/Admindropaccept";
import Admindropreject from "./pages/Admin/Admindropreject/Admindropreject";

import Dropservice from "./pages/Drop/components/DropService/DropService";
import Dropbooking from "./pages/Drop/Dropbooking/Dropbooking";


import Dashboad from "./pages/Dashboad/Dashboad";
import Tourcatagory from "./pages/Tourcatagory/Tourcatagory";
import Predesign from "./pages/Selectsesion/Predesign";
import Userprofile from "./pages/Profile/Userprofile";
import Notification from "./pages/Notification/Notification";



//import About from "./About";


import { ViewSeason } from "./components/ViewSeason";
import { CreateSeason } from "./components/CreateSeason";
import { ViewSeasonTable } from "./components/ViewSeasonTable";
import CreatePackage from "./components/CreatePackage";
import AddPlace from "./components/AddPlace";
import AddVehicle from "./components/AddVehicle";
import PackagePlace from "./components/PackagePlace";
import VehiclePackage from "./components/VehiclePackage";
import ViewPackage from "./components/ViewPackage";
import ViewSeasonPackages from "./components/ViewSeasonPackages";
import ViewPackageDetails from "./components/ViewPackageDetails";
import PreVehicleSelection from "./components/PreVehicleSelection";
import EventCreation from "./components/EventCreation";
import EventSelection from "./components/EventSelection";
import BookingForm from "./components/BookingForm";
import TouristBookings from "./components/TouristBookings";
import CancelReasonForm from "./components/CancelReasonForm";
import AdminBookings from "./components/AdminBookings";
import RejectReasonForm from "./components/RejectReasonForm";
import CreateGuideForm from "./components/CreateGuideForm";
import GuideDetails from "./components/GuideDetails";
import TouristNotification from "./components/TouristNotification";
import ViewBookingAccept from "./components/ViewBookingAccept";
import BookingAcceptForm from "./components/BookingAcceptForm";
import RejectReasonView from "./components/RejectReasonView";
import BookingStatusRedirect from "./components/BookingStatusRedirect";
import AdminBookingById from "./components/AdminBookingById";
import GuideNotification from "./components/GuideNotification";
import CancelReasonView from "./components/CancelReasonView";
import BookingLayout from "./BookingLayout";

function App() {
  return (
   
    <Router>
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Selectplaces" element={<Selectplaces />} />
        <Route path='/Addtocart' element={<Addtocart />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path="/Selectvehicle" element={<Selectvehicle />} />
        <Route path ="/Tourbooking" element={<Tourbooking />} />
        <Route path="/Bookingpending" element={<Bookingpending />} />

        <Route path="/Adminvehicle" element={<Adminvehicle />} />
        <Route path="/Admintourlist" element={<Admintourlist />} />
        <Route path="/Admintourrejected" element={<Admintourrejected />} />
        <Route path="/AdmintourAccept" element={<AdmintourAccept />} />
        <Route path="/Admintourdiscription" element={<Admintourdiscription />} />
        <Route path="/Admintourplaces" element={<Admintourplaces />} />

        <Route path="/Admindropitems" element={<Admindropitems/>} />
        <Route path="/AdmindropAccept" element={<AdmindropAccept/>} />
        <Route path="/Admindropreject" element={<Admindropreject/>} /> 
        <Route path="/Admindropvehicle" element={<Admindropvehicle></Admindropvehicle>} />

        <Route path="/Dropservice" element={<Dropservice />} />
        <Route path="/Dropbooking"  element={<Dropbooking />} />
        <Route path="/Dropbooking"  element={<Dropbooking />} />

        <Route path="/Dashboad" element={<Dashboad />} />
        <Route path="/Tourcatagory" element={<Tourcatagory />} />
        <Route path="/Predesign" element={<Predesign />} />
        <Route path="/Userprofile"  element={<Userprofile />} />
        <Route path="/Notification" element={<Notification />} />

        {/*...........................*/}



                    <Route path="/create-season" element={<CreateSeason />} />
                    <Route path="/admin-view-season" element={<ViewSeasonTable />} />
                    <Route path="/create-package/:seasonId" element={<CreatePackage />} />
                    <Route path="/add-package-places/:packageId" element={<PackagePlace />} />
                    <Route path="/add-package-vehicles/:packageId" element={<VehiclePackage />} />
                    <Route path="/view-package/:packageId" element={<ViewPackage />} />
                    <Route path="/add-place" element={<AddPlace />} />
                    <Route path="/add-vehicle" element={<AddVehicle />} />
                    <Route path="/create-event" element={<EventCreation />} />
                    <Route path="/tourist-bookings/:touristId" element={<TouristBookings />} />
                    <Route path="/cancel-booking/:bookingId" element={<CancelReasonForm />} />
                    <Route path="/admin-bookings" element={<AdminBookings />} />
                    <Route path="/bookings-accept/:bookingId" element={<BookingAcceptForm />} />
                    <Route path="/bookings-reject/:bookingId" element={<RejectReasonForm />} />
                    <Route path="/create-guide" element={<CreateGuideForm />} />
                    <Route path="/view-accept/:bookingId" element={<ViewBookingAccept />} />
                    <Route path="/guides/:guideId" element={<GuideDetails />} />
                    <Route path="/t-notifications" element={<TouristNotification />} />
                    <Route path="/view-reject/:bookingId" element={<RejectReasonView />} />
                    <Route path="/booking-status-redirect/:bookingId" element={<BookingStatusRedirect />} />
                    <Route path="/booking-by-id/:id" element={<AdminBookingById />} />
                    <Route path="/g-notifications" element={<GuideNotification />} />
                    <Route path="/view-cancel/:bookingId" element={<CancelReasonView />} />




                     <Route element={<BookingLayout />}>
                    <Route path="/booking-form/:packageId" element={<BookingForm />} />
                    <Route path="/event-selection/:packageId" element={<EventSelection />} />
                    <Route path="/vehicle-selection/:packageId/:passengerCount" element={<PreVehicleSelection />} />
                    <Route path="/view-package-details/:packageId" element={<ViewPackageDetails />} />
                    <Route path="/view-season-packages/:seasonId" element={<ViewSeasonPackages />} />
                    <Route path="/tourist-view-season" element={<ViewSeason />} />
                  </Route>

        </Routes> 
    </Router>
    
    
  );
}

export default App;
