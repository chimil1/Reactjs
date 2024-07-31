import "./App.css";
import Dashboard from "./admin/Dash";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import AddPersonnel from "./admin/AddPersonnel";
import AddList from "./admin/AddList";
import AddProduct from "./admin/AddProduct";
import QlPersonnel from "./admin/QlPersonnel";
import QlProduct from "./admin/QlProduct";
import QlList from "./admin/QlList";



function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
         <Route path="/qllist" element={<QlList/>}/>
          <Route path="/qlpersonnel" element={<QlPersonnel />} />
          <Route path="/qlproduct" element={<QlProduct />} />

          <Route path="/addlist" element={<AddList />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addpersonnel" element={<AddPersonnel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
