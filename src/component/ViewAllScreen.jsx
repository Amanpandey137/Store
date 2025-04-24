import LocationHeader from './LocationHeader';
import OfferCard from './OfferCard';

const ViewAllScreen = ({ title, offers, retailers, onBack }) => {
    return (
      <div className="pb-20">
        <LocationHeader showBack title={title} onBack={onBack} />
        
        <div className="p-4">
          <div className="flex flex-wrap -mr-4">
            {offers.map(offer => {
              const retailer = retailers.find(r => r.id === offer.retailerId);
              return (
                <div key={offer.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <OfferCard offer={offer} retailer={retailer} fullWidth={true} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  export default ViewAllScreen;