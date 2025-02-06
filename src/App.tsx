// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import BoardLayout from "./components/ui/layouts/board";
import EventPage from "./pages/eventDetail";
import MyEventPage from "./pages/myEvent";
import { BgLayout } from "./components/ui/layouts/background";
import DashboardOrga from "./pages/dashboardOrga";
import ParticipantOrga from "./pages/participantOrga";
import UpdateProfile from "./pages/updateProfile";

import EventListPage from "./pages/eventList";
import { AddEventPage } from "./pages/addEvent";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<BoardLayout />}>
            <Route index element={<HomePage />} />
            <Route element={<BgLayout/>}>
              <Route path="event/:id_event" element={<EventPage />} />
              <Route path="myevent" element={<MyEventPage />} />
              <Route path="event-list" element={<EventListPage />} />
              <Route path="dashboard" element={<DashboardOrga />} />
              <Route path="participant" element={<ParticipantOrga/>} />
              <Route path="update" element={<UpdateProfile/>} />
              
            </Route>
            
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/add-event" element={<AddEventPage />} />
        </Routes>
    </Router>
  );
}
