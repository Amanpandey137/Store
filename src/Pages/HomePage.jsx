import { useState } from "react";
import { mockOffers  } from "../Data/mockOffers"
 import LocationHeader from "../component/LocationHeader";
import OfferSection from "../component/OfferSection";
import OfferCard from "../component/OfferCard";
const HomePage = ({ retailers, onViewAll }) => {
    const [activeCategory, setActiveCategory] = useState("all");
    
    // Filter offers by section
    const topOffers = mockOffers.filter(offer => offer.section === "top");
    const groceryOffers = mockOffers.filter(offer => offer.section === "grocery");
    const pharmacyOffers = mockOffers.filter(offer => offer.section === "pharmacy");
    const essentialsOffers = mockOffers.filter(offer => offer.section === "essentials");
    
    // Category filter buttons
    const categories = [
      { id: "all", name: "All" },
      { id: "grocery", name: "Grocery" },
      { id: "pharmacy", name: "Pharmacy" },
      { id: "essentials", name: "Essentials" }
    ];
    
    return (
      <div className="pb-20">
        <LocationHeader />
        
        {/* Category filters */}
        <div className="px-4 pt-4 pb-2 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Main content with offer sections */}
        <main className="p-4">
          {(activeCategory === "all" || activeCategory === "top") && (
            <OfferSection
              title="Top Offers Near You"
              offers={topOffers}
              retailers={retailers}
              onViewAll={onViewAll}
            />
          )}
          
          {(activeCategory === "all" || activeCategory === "grocery") && (
            <OfferSection
              title="Grocery Deals"
              offers={groceryOffers}
              retailers={retailers}
              onViewAll={onViewAll}
            />
          )}
          
          {(activeCategory === "all" || activeCategory === "pharmacy") && (
            <OfferSection
              title="Pharmacy Specials"
              offers={pharmacyOffers}
              retailers={retailers}
              onViewAll={onViewAll}
            />
          )}
          
          {(activeCategory === "all" || activeCategory === "essentials") && (
            <OfferSection
              title="Daily Essentials"
              offers={essentialsOffers}
              retailers={retailers}
              onViewAll={onViewAll}
            />
          )}
        </main>
      </div>
    );
  };
  export default HomePage;