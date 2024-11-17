import { Checkbox, Divider, Group, HoverCard, ScrollArea, Slider, Text } from '@mantine/core'
import React, { useState } from 'react'

const MobileSidebar = () => {
 const [price, setPrice] = useState(10);
  const handlePriceChange = (value) => {
    setPrice(value);
  }
  return (
    <div>
         <Group  justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <button className='bg-green-500 hover:bg-black text-white px-4 py-2 rounded-md'>Filter</button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
        <ScrollArea h={400}>
        <div className=" overflow-y-scroll  bg-white shadow-md rounded-lg">
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
      
    </ScrollArea>
                 
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
    </div>
  )
}

export default MobileSidebar