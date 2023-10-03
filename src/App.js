import "./App.css";
import Dashbord from "./components/Dashbord";
import DetailForm from "./components/detailform/DetailForm";
import EditForm from "./components/editform/EditForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeDetail from "./components/employeDetail/EmployeDetail";
// import Chart from "./components/employeDetail/chart/Chart";

function App() {
  return (
    <>
      {/* <Chart /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/detailForm" element={<DetailForm />} />
          <Route path="/editForm/:id" element={<EditForm />} />
          <Route path="/employeDetail/:id" element={<EmployeDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
