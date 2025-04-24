import { getColorForImage } from "./getColorsForImage";
import { MapPin } from "lucide-react";


const OfferCard = ({ offer, retailer, fullWidth = false }) => {
    const colorClass = getColorForImage(offer.image);
    
    return (
      <div className={`flex-shrink-0 rounded-lg overflow-hidden shadow-md bg-white mr-4 mb-4 ${fullWidth ? 'w-full' : 'w-64 sm:w-56 md:w-64'}`}>
        <div className={`h-32 ${colorClass} flex items-center justify-center`}>
          
          <img src={offer.image} alt="Image" className="w-full h-full object-cover"/>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{offer.title}</h3>
          <div className="flex items-center text-gray-600 text-sm flex-wrap">
            <span>{retailer.name}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <MapPin size={14} className="mr-1" />
              {retailer.distance} km away
            </span>
          </div>
        </div>
      </div>
    );
  };
  export default OfferCard;