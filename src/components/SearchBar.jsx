import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");

  const handleSearch = () => {
    console.log(
      `Searching for activities in ${location} on ${date} for ${activity}`
    );
  };

  return (
    <div className="flex items-center gap-3 py-2 px-4 bg-gray-200 shadow-md mt-4 mx-4 rounded-md">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg w-5/12"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg w-2/12"
      />
      <select
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg w-5/12"
      >
        <option value="">Select activity type</option>
        <option value="crafts">Crafts workshops</option>
        <option value="outdoor">Outdoor adventures</option>
        <option value="cooking">Cooking classes</option>
        <option value="cultural">Cultural tours</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-black text-white py-2 px-4 rounded-xl flex items-center gap-2 hover:bg-gray-500 "
      >
        <IconSearch size={18} />
        Search
      </button>
    </div>
  );
}

export default SearchBar;
