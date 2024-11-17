import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Activity from "./components/Activity";
import Accomodation from "./components/Accomodation";
import Rent from "./components/Rent";
import Tour from "./components/Tour";
import Activites from "./components/Activites";
import Profile from "./components/Profile";
import CarDetails from "./components/CarDetails";
import Login from "./components/Login";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<Activites />} />
          <Route path="/accommodation" element={<Accomodation />} />
          <Route path="/car-rent" element={<Rent />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path= "/cardetails/:id" element={<CarDetails/>} />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
