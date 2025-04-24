import { MapPin,Search,ArrowLeft } from "lucide-react";
import { use } from "react";
import { useState, useEffect } from "react";

const LocationHeader = ({setSearchText, showBack = false, title = "Your Location", onBack = () => {} }) => {
  const [temp, setTemp] = useState("");
  useEffect(() => {
    setSearchText(temp);},[temp]);
    return (
      <header className="bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          {showBack ? (
            <>
              <button onClick={onBack} className="p-1">
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-lg font-bold">{title}</h1>
              <div className="w-8"></div> 
            </>
          ) : (
            <>
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-1" />
                <span className="font-medium">Your Location</span>
              </div>
              <button className="p-2 rounded-full bg-gray-100">
                <MapPin size={20} />
              </button>
            </>
          )}
        </div>
        
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="search"
            placeholder="Search for deals, products, stores..."
            className="w-full p-2 pl-10 bg-gray-100 rounded-lg"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
        </div>
      </header>
    );
  };
  export default LocationHeader;