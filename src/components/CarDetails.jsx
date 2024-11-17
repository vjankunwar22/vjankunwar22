import React from "react";
import { useParams } from "react-router-dom";
import carsData from "../components/cars";
import { Modal, Spoiler } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import BookNowModal from "./common/BookNowModal";
import { useDisclosure } from "@mantine/hooks";

const CarDetails = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { id } = useParams();
  const car = carsData.find((car) => car.id === parseInt(id));

  if (!car) {
    return <p>Car not found.</p>;
  }

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6 md:gap-20 h-auto md:h-[90vh] py-10">
      
      <Carousel
        className="md:w-1/2 w-full rounded-2xl h-64 md:h-full"
        withIndicators
        dragFree
        slideGap="md"
        align="start"
        loop
      >
        <Carousel.Slide className="w-full h-full">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover rounded-2xl "
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src={car.image2}
            alt={car.name}
            className="w-full h-full object-cover rounded-2xl "
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src={car.image3}
            alt={car.name}
            className="w-full h-full object-cover rounded-2xl "
          />
        </Carousel.Slide>
      </Carousel>

      
      <div className="md:w-1/2 w-full">
        <h2 className="text-2xl font-bold mb-4">{car.name}</h2>
        <Spoiler maxHeight={240} showLabel="Show more" hideLabel="Hide">
          <p className="mt-4 text-justify">{car.description}</p>
        </Spoiler>
        <div className="w-full flex flex-col items-start md:items-end mt-4">
          <p className="font-bold text-lg mt-2">${car.price} per day</p>
          <p>Location: {car.location}</p>
          <Modal
            className="rounded-[17px]"
            opened={opened}
            onClose={close}
            title=""
            centered
          >
            <BookNowModal />
          </Modal>
          <button
            onClick={open}
            className="mt-4 md:mt-2 w-full md:w-fit bg-green-500 text-white hover:bg-black px-4 py-2 rounded"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

