import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";


function App () {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/login" element={<SignUp />}></Route>
            
        </Routes>
    )
}
export default App;