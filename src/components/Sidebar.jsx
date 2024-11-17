import { Checkbox, Divider, Slider } from "@mantine/core";
import { useState } from "react";

function Sidebar() {
  const [price, setPrice] = useState(10);
  const handlePriceChange = (value) => {
    setPrice(value);
  };

  return (
    <div className="w-1/4 p-4 ml-4 mt-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filter</h2>
      <Divider my="sm" />
      <div className="mb-6">
        <h3 className="font-medium mb-1">Destination</h3>
        <div className="flex gap-1 flex-col">
          <Checkbox
            label="Ubud"
            classNames={{ label: "text-7 " }}
            color="orange"
            size="sm"
          />
          <Checkbox
            label="Kuta"
            classNames={{ label: "text-7 " }}
            color="orange"
            size="sm"
          />
          <Checkbox
            label="Canggu"
            classNames={{ label: "text-7 " }}
            color="orange"
            size="sm"
          />
          <Checkbox
            label="Seminyak"
            classNames={{ label: "text-7 " }}
            color="orange"
            size="sm"
          />
          <Checkbox
            label="Nusa Dua"
            classNames={{ label: "text-7 " }}
            color="orange"
            size="sm"
          />
          <Checkbox
            label="Jimbaran"
            classNames={{ label: "text-7 " }}
            color="orange"
            size="sm"
          />
          <Checkbox
            label="Sanur"
            classNames={{ label: "text-7 " }}
            color="orange"
            size="sm"
          />
        </div>
        <Divider my="sm" />
      </div>
      <div className="mb-6">
        <h3 className="font-medium">Price</h3>
        <div className="flex items-center ">
          <Slider
            min={10}
            max={200}
            value={price}
            onChange={handlePriceChange}
            className="w-full"
            color="orange"
          />

          <span className="ml-2 text-gray-600">${price}</span>
        </div>
        <Divider my="sm" />
      </div>
      <div className="mb-6">
        <h3 className="font-medium">Duration</h3>
        <select className="w-full border-gray-300 rounded">
          <option>3h</option>
          <option>3-5 hours</option>
          <option>5-7 hours</option>
          <option>2 days</option>
          <option>3 days</option>
        </select>
      </div>
      <Divider my="sm" />
      <div>
        <h3 className="font-medium">Services</h3>
        <div className="flex gap-1 flex-col">
          <Checkbox
            label="Hotel Pickup"
            classNames={{ label: "text-7 " }}
            color="orange"
            size="sm"
          />
          <Checkbox
            label="Small Group"
            classNames={{ label: "text-7 " }}
            color="orange"
            size="sm"
          />
          <Checkbox
            label="Private"
            classNames={{ label: "text-7 " }}
            color="orange"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
