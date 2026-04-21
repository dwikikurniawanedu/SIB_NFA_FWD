import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages";
import Books from "./Pages/Books";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <div className="container">
        {" "}
        <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="Books" element={<Books />} />
              <Route path="Team" element={<Team />} />
              <Route path="Team" element={<Contact />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Login" element={<Login />} />
              <Route path="Register" element={<Register />} />
              <Route path="books" element={<Books />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
