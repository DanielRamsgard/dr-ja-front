import Land from "./components/Land";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forms from "./components/forms";
import MapLocations from "./components/mapLocations";
import About from "./components/about";
import Specialty from "./components/specialty";
import { useState } from "react";

function App() {
    const [index, setIndex] = useState(0);

    function updateIndex(index) {
        setIndex(index);
    }

    return (
        <>
            <Router >
                <Routes>
                    <Route path="/" element={<Land updateIndex={updateIndex}/>}/>
                    <Route path="new-patient-forms" element={<Forms updateIndex={updateIndex}/>}/>
                    <Route path="locations" element={<MapLocations updateIndex={updateIndex}/>}/>
                    <Route path="about" element={<About updateIndex={updateIndex}/>}/>
                    <Route path="specialty" element={<Specialty index={index} updateIndex={updateIndex}/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
