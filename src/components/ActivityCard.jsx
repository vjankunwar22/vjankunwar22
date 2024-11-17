import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import BookNowModal from "./common/BookNowModal";

function ActivityCard({ title, location, duration, rating, price, imgSrc }) {
  const [opened, { open, close }] = useDisclosure(false);


    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer text-sm">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-500">{location} • {duration}</p>
          <p className="text-yellow-500">⭐ {rating}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-green-600 font-bold">${price}/Price</span>
            
          </div>
          <Modal className="rounded-[17px]" opened={opened} onClose={close} title="" centered>
          <BookNowModal/>
        
          </Modal>
          <button onClick={open} className="w-full mt-4 py-2 bg-green-600 hover:bg-black text-white rounded ">Book now</button>
        </div>
      </div>
    );
  }
  
  export default ActivityCard;