
import { Home, ShoppingCart, Package, Menu, User } from "lucide-react";
const BottomNavigation = ({ activePage, onChangePage }) => {
    const navItems = [
      { id: "home", icon: <Home size={20} />, label: "Home" },
      { id: "grocery", icon: <ShoppingCart size={20} />, label: "Grocery" },
      { id: "pharmacy", icon: <Package size={20} />, label: "Pharmacy" },
      { id: "essentials", icon: <Menu size={20} />, label: "Essentials" },
      { id: "account", icon: <User size={20} />, label: "Account" }
    ];
    
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`py-3 flex flex-col items-center flex-1 ${
              activePage === item.id ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => onChangePage(item.id)}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </nav>
    );
  };
  export default BottomNavigation;