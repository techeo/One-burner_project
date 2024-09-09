import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import EnterprisePage from './Pages/EnterprisePage/EnterprisePage'
import ContactSalesPage from "./Pages/ContactSalesPage/ContactSalesPage";
import Login from "./Pages/LoginPage/Login";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        <Route path="/contact" element={<ContactSalesPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;