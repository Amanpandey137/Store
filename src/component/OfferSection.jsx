import OfferCard from "./OfferCard";
import { ChevronRight } from "lucide-react";

const OfferSection = ({ title, offers, retailers, onViewAll }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold">{title}</h2>
          <button 
            className="flex items-center text-blue-600"
            onClick={() => onViewAll(title, offers)}
          >
            View all <ChevronRight size={16} />
          </button>
        </div>
        <div className="flex overflow-x-auto pb-4 hide-scrollbar">
          {offers.slice(0, 5).map(offer => {
            const retailer = retailers.find(r => r.id === offer.retailerId);
            return <OfferCard key={offer.id} offer={offer} retailer={retailer} />;
          })}
        </div>
      </div>
    );
  };
  export default OfferSection;