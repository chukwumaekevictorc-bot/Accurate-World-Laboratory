import React from "react";
import { Route, Routes } from "react-router-dom";
import AccurateWorldLaboratory from "./Pages/Accurate World Laboratory/AccurateWorldLaboratory";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import PatientRegister from "./Pages/Patient Register/PatientRegister";
import UserDetails from "./Pages/UserDetails/UserDetails";
import SelectAssay from "./Pages/Select Assay/SelectAssay";
import SuccessPage from "./Pages/SuccessPage/SuccessPage";
import VisitorDashboard from "./Pages/VisitorDashboard/VisitorDashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AccurateWorldLaboratory />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PatientRegister" element={<PatientRegister />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/SelectAssay" element={<SelectAssay />} />
        <Route path="/SuccessPage" element={<SuccessPage />} />
        <Route path="/VisitorDashboard" element={<VisitorDashboard />} />
      </Routes>
    </div>
  );
};
export default App;
