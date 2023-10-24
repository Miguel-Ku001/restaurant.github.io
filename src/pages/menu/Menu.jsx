import { useEffect, useState } from "react";
import {Link, Button} from "@nextui-org/react";
import MenuItem from '/src/components/menu-item/MenuItem'
import axios, { all } from "axios";

export const Menu = () => {

  const [item, setItem] = useState([])
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  useEffect(()=> {
      axios.get('/api/items')
      .then(res => {
        setItem(res.data);
        setFilteredItems(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  const filterCategory = (category) => {
    if (category === 0) {
      setFilterActive(false);
      setFilteredItems(item);
    } else {
      const filteredData = item.filter(data => data.idcategoria === category);
      setFilterActive(true);
      setFilteredItems(filteredData)
    }
    
  }

  return (
    <div className="py-16 mr-36 font-marcellus">
      <div className="mb-20">
          <h2 className="text-5xl text-center text-gray-800 font-medium">MENÚ</h2>
      </div>

      <div className="flex justify-center mb-10">
        
        <button className="mx-4 bg-[#cd9b4a] text-white px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(0)}> Todos </button>
        <button className="mx-4 bg-[#cd9b4a] text-white px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(1)}> Comidas </button>
        <button className="mx-4 bg-[#cd9b4a] text-white px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(2)}> Bebidas </button>
        <button className="mx-4 bg-[#cd9b4a] text-white px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(3)}> Postres </button>
        <button className="mx-4 bg-[#cd9b4a] text-white px-4 py-2 rounded-lg active:scale-95 hover:scale-105 transition duration-500 shadow-lg" onClick={() => filterCategory(4)}> Paquetes </button>
      </div>

      <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-2 mb-12">
        {filteredItems.map((data, i) => (
          <MenuItem key={data.id_items} {...data}/>

        ))}
      </div>

  

      <div className="flex flex-row-reverse justify-center">
        <div className="w-1/5">
          <Button as={Link} color="primary"  href="/menu/ordenes" variant="flat" className=" w-full active:scale-95 hover:scale-105 mt-20 shadow-xl rounded-lg py-3 px-10 text-white transition duration-500 bg-[#092A3A]">
            <h3>Ordenar</h3>
          </Button>
          {/* <button href="/menu/ordenes/forma-de-pago" className="w-full mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-sky-950 text-white transition duration-500">Ordenar</button>                   */}
        </div>
      </div>

    </div>
  )
  }
  export default Menu