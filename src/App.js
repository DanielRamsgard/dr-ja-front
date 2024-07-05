import Land from "./components/Land";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forms from "./components/forms";

function App() {
    return (
        <>
            <Router >
                <Routes>
                    <Route path="/" element={<Land />}/>
                    <Route path="new-patient-forms" element={<Forms />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
