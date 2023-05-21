import { useState } from "react";
import Card from "../Card/Card";
import { Permission } from "./Permission";

const Share = () => {
 
 
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const handleToggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
   
  
  return (
    <Card>
  


    <div className="relative inline-block">
      <div
        className="w-48 px-2 py-1 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring focus:ring-blue-200"
        onClick={handleToggleDropdown}
      >
        {selectedOption || 'دسترسی کامل'}
      </div>
     <Permission isOpen={isOpen} setIsOpen={setIsOpen} setSelectedOption={setSelectedOption}/>
    </div>
    </Card>
  );
};

export default Share;
