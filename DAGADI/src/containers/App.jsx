import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Descri from "../pages/DrescriPR";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Descricion" element={<Descri />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;