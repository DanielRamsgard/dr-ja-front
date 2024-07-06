import Land from "./components/Land";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forms from "./components/forms";
import MapLocations from "./components/mapLocations";
import About from "./components/about";
import Specialty from "./components/specialty";

function App() {
    return (
        <>
            <Router >
                <Routes>
                    <Route path="/" element={<Land />}/>
                    <Route path="new-patient-forms" element={<Forms />}/>
                    <Route path="locations" element={<MapLocations />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="specialty" element={<Specialty />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
