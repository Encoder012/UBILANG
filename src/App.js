import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
// import Music from './components/Music';
// import Test from './components/Test';
// import Profile from './components/Profile';
// import VoiceSwap from './components/VoiceSwap';
import LandingPage from "./Pages/LandingPage";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

function App() {
    return (
        <Router>
      {/* <div className='w-[100%]'> */}
      <>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        {/* </div> */}
      </>
    </Router>
    );
}

export default App;
