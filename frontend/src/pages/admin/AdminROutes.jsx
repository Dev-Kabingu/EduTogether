import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notification from "../pages/admin/Notification";
import Meeting from "../pages/admin/Meeting";

function AdminRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/notification" element={<Notification />} />
        <Route path="/admin/meeting" element={<Meeting />} />
      </Routes>
    </Router>
  );
}

export default AdminRoutes;
