import "./App.css";
import Dashbord from "./components/Dashbord";
import DetailForm from "./components/detailform/DetailForm";
import EditForm from "./components/editform/EditForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeDetail from "./components/employeDetail/EmployeDetail";
import Graph from './components/employeDetail/graph/Graph'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/detailForm" element={<DetailForm />} />
          <Route path="/editForm/:id" element={<EditForm />} />
          <Route path="/employeDetail/:id" element={<EmployeDetail />} />
          <Route path="/graph" element={<Graph />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
