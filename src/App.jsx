import React, { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage";
import CategoryPage from "./component/CategoryPage";
import AccountPage from "./component/AccountPage";
import ViewAllScreen from "./component/ViewAllScreen";
import BottomNavigation from "./component/BottomNavigation";
import { mockRetailers } from "./Data/mockRetailers";
 
 

export default function  App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [retailers, setRetailers] = useState(mockRetailers);
  const [viewAllData, setViewAllData] = useState(null);
  const [previousPage, setPreviousPage] = useState("home");
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedRetailers = mockRetailers.map(retailer => ({
        ...retailer,
        distance: Number((retailer.distance + Math.random() * 0.2 - 0.1).toFixed(1))
      }));
      setRetailers(updatedRetailers.sort((a, b) => a.distance - b.distance));
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle page navigation
  const handlePageChange = (pageId) => {
    setPreviousPage(currentPage);
    setCurrentPage(pageId);
  };
  
  // Handle View All click
  const handleViewAll = (title, offers) => {
    setPreviousPage(currentPage);
    setViewAllData({ title, offers });
    setCurrentPage("viewAll");
  };
  
  // Handle back navigation
  const handleBack = () => {
    if (currentPage === "viewAll") {
      setViewAllData(null);
    }
    setCurrentPage(previousPage);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {currentPage === "home" && (
        <HomePage 
          retailers={retailers} 
          onViewAll={handleViewAll}
        />
      )}
      
      {(currentPage === "grocery" || currentPage === "pharmacy" || currentPage === "essentials") && (
        <CategoryPage 
          categoryId={currentPage} 
          retailers={retailers} 
          onViewAll={handleViewAll}
          onBack={handleBack}
        />
      )}
      
      {currentPage === "account" && (
        <AccountPage onBack={handleBack} />
      )}
      
      {currentPage === "viewAll" && viewAllData && (
        <ViewAllScreen
          title={viewAllData.title}
          offers={viewAllData.offers}
          retailers={retailers}
          onBack={handleBack}
        />
      )}
      
      {/* Bottom Navigation */}
      <BottomNavigation activePage={currentPage} onChangePage={handlePageChange} />
      
     
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}