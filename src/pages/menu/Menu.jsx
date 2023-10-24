import { useEffect, useState } from "react";
import {Link, Button} from "@nextui-org/react";
import MenuItem from '/src/components/menu-item/MenuItem'
import TagButton from '/src/components/menu-item/TagButton'
import axios from "axios";



export const Menu = () => {

  const [item, setItem] = useState([])
  useEffect(()=> {
      axios.get('/api/items')
      .then(res => setItem(res.data))
      .catch(err => console.log(err));
  }, [])

  const [itemCat, setItemCat] = useState([])
    useEffect(()=> {
        axios.get('/api/items-categoria')
        .then(res => setItemCat(res.data))
        .catch(err => console.log(err));
    }, [])

  //const [cat, setCat] = useState('all');
  const [filtered, setFiltered] = useState([]);

  useEffect( () => {
    item.idcategoria === 1 ? setFiltered(item) : setFiltered(item.filter( project => project.cat === cat))
  }, [])

  return (
    <div className="py-16 px-24 font-marcellus">
      <div className="mb-20">
          <h2 className="text-5xl text-center text-gray-800 font-medium">MENÚ</h2>
      </div>

      <div>
          <TagButton item={data} handleSetCat={setItemCat} catActive={ itemCat.idcategoria === data.idcategoria ? true : false}/>
      </div>

      <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-2 mb-12">
        {item.map((data, i) => (
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

  