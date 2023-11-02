import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";

export const Sucursales = () => {

  const [item, setItem] = useState([])

  useEffect(() => {
    axios.get('/api/sucursal')
      .then(res => {
        setItem(res.data);
        // setFilteredItems(res.data);
      })
      .catch(err => console.log(err));
  }, [])



  return (
    <div className="flex flex-col items-center p-4 mx-auto mb-64 font-marcellus">
      <h2 className="text-center py-1.5 pt-8 text-5xl text-gray-800 mb-8">SUCURSALES</h2>

      {
      item.map((data, i) => (
        <div key={i} className="flex flex-row justify-between w-full p-4">
          <div className="flex flex-col items-center p-4 w-1/2">
            <Image
              width={280}
              height={280}
              radius="none"
              src={`../src/images/vista-sucursales/${data.imagen}`}            />
          </div>

          <div className="flex flex-col items-left p-4 w-4/5 grow w-50">
                <h3 className="w-35 text-2xl text-gray-800 text-left">
                  {data.nombre}
                </h3>
                <br />
                <p className="mb-2 text-black">
                  Dirección:
                </p>
                <p className="mb-2 text-gray-600">
                  {data.direccion}
                </p>
                <p className="mb-2 text-black" style={{ marginTop: '5px' }}>
                  Horario de restaurante:
                </p>
                <p className="mb-2 text-gray-600 whitespace-pre-wrap">
                  {data.horario}
                </p>
          </div>
          
        </div>
      ))
      }
    </div>
  )
}

export default Sucursales



// function handleSubmit(event) {
//   event.preventDefault();
//   const idusuario = localStorage.getItem('idusuario');

//   formData.append('idusuario', idusuario);

//   axios.post('/api/reservacion/crear', formData, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => {
//       console.log(res);
//       window.location.reload()
//     }).catch(err => console.log(err));
// }