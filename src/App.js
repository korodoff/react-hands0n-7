import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Contact from "./component/contact";
import Student from "./component/student";
import NavBar from "./component/navBar";
import Addstudent from "./component/addStudent";
import Memory from "./component/memory";
import "./component/style.css";
function App() {
  return (
    <Memory>
      <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Student />} />
          <Route path="/addstudent" element={<Addstudent />} />
        </Routes>
      </BrowserRouter>
    </div>
    </Memory>
  );
}
export default App;