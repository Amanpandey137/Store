import LocationHeader from "./LocationHeader";
import { User } from "lucide-react";
const AccountPage = ({ onBack }) => {
    return (
      <div className="pb-20">
        <LocationHeader showBack title="My Account" onBack={onBack} />
        
        <div className="p-4">
          <div className="bg-white rounded-lg shadow p-6 mb-4">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                <User size={32} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Guest User</h2>
                <p className="text-gray-600">Sign in to access your account</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Sign In / Register
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="border-b p-4">
              <h3 className="font-medium">My Orders</h3>
            </div>
            <div className="border-b p-4">
              <h3 className="font-medium">Saved Stores</h3>
            </div>
            <div className="border-b p-4">
              <h3 className="font-medium">My Lists</h3>
            </div>
            <div className="border-b p-4">
              <h3 className="font-medium">Payment Methods</h3>
            </div>
            <div className="border-b p-4">
              <h3 className="font-medium">Address Book</h3>
            </div>
            <div className="border-b p-4">
              <h3 className="font-medium">Help & Support</h3>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Settings</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default AccountPage;