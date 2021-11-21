import './App.css';
import Header from './Components/Header/Header.components';
import Footer from './Components/Footer.components';
import HomePage from './Components/HomePage';
import PrivacyNote from './Components/PrivacyNote';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
        </Routes>
        <PrivacyNote/>
        <Footer />
      </Router>
    </>
  );
}

export default App;