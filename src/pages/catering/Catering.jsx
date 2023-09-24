import React from "react";

import {Select, SelectItem} from "@nextui-org/react";



export const Catering = () => {
    return (
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select 
        label="Select an animal" 
        className="max-w-xs" 
      >
        
      </Select>
      <Select
        label="Favorite Animal"
        placeholder="Select an animal"
        className="max-w-xs"
      >
       
      </Select>
    </div>
    )
  }
  
  export default Catering