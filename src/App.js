import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <>
    <AuthProvider>

  
      <Router>
       <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute> }></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signup/>}></Route>
        <Route path="*" element={<Signup/>}></Route>
       </Routes>
      </Router> 
       </AuthProvider>
    </>
  );
}

export default App;
