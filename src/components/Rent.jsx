import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import carsData from "../components/cars";
import { Link } from "react-router-dom";
import { Spoiler } from "@mantine/core";

const Rent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [openMarkerId, setOpenMarkerId] = useState(null);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = carsData.filter((car) =>
      car.location && car.location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCars(filtered);
  };
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center">
        Car Rental
      </h1>
      <input
        type="text"
        placeholder="Search by destination..."
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 mb-4 rounded-lg w-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg p-4 flex flex-col gap-4"
          >
            <div className="w-full h-64">
              <img
                src={car.image}
                alt={car.name}
                className="object-fill h-full w-full rounded"
              />
            </div>
            <h2 className="text-xl font-semibold">{car.name}</h2>
            <Link to={`/cardetails/${car.id}`}>
              <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
                <p className=" text-justify">{car.description}</p>
              </Spoiler>
            </Link>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="font-bold">${car.price} per day</p>
                <p>Location: {car.location}</p>
              </div>
              <Link to={`/cardetails/${car.id}`}>
                <button className=" bg-green-500 text-white hover:bg-black px-4 py-2 rounded">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "100%" }}
          center={{ lat: 37.0902, lng: -95.7129 }}
          zoom={4}
        >
          {filteredCars.map((car) => (
            <Marker 
              key={car.id} 
              position={car.coordinates}
              title={car.location}
              onClick={() => {
                setOpenMarkerId(car.id);
               
                const map = document.querySelector('iframe').contentWindow.google.maps.Map;
                map.panTo(car.coordinates);
                map.setZoom(12);
              }}
            >
              {openMarkerId === car.id && (
                <InfoWindow
                  onCloseClick={() => setOpenMarkerId(null)}
                >
                  <div>
                    <h3>{car.name}</h3>
                    <p>{car.location}</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Rent;
