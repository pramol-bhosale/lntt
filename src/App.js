import logo from "./logo.svg";
import "./App.css";
import BaseTemplate from "./Layout/BaseTemplate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SettingPage from "./pages/Setting";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import AvailabiltyPage from "./pages/Availability";
import ScheduleCreatePage from "./pages/Schedules";
import ViewSchedules from "./pages/Schedules/ViewSchedules";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="schedules/add" element={<ScheduleCreatePage />} />
          <Route path="schedules/view" element={<ViewSchedules />} />
          <Route path="availability" element={<AvailabiltyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
