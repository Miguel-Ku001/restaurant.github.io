import {Image} from "@nextui-org/react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const Registro = () => {
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    idrol: 1
  })
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    if (!values.nombre || !values.apellidos || !values.email || !values.password || !values.confirmpassword) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (values.password !== values.confirmpassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    axios.post("/api/registro", values, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    .then(res => navigate('/'))
    .then(err => console.log(err));

  }

 
  

  return (

    <div className="flex flex-row font-marcellus">

      <div className="flex justify-center" style={{width: '50%',backgroundColor: '#262626', backgroundSize: '100%'}}>
        <div className="mt-10">
          
          <div className=" flex justify-center">
            <Image
              width={300}
              src="/src/images/LOGO3.png"
            />
          </div>

          <div>
            <h1 className="text-4xl  text-center font-serif" style={{color: '#f8fafc', marginTop:'-50px'}}>BIENVENIDO</h1>
          </div>

          <div>
            <h1 style={{color: '#f8fafc', marginTop: '15px', }}>Crear cuenta</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="flex flex-column">
              <form onSubmit={handleSubmit}>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div style={{marginTop: '5px'}}>
                    <div className="w-72">
                      <div className="relative h-10 w-full min-w-[200px]">
                        <input
                          className="text-white font-semibold peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          onChange={e => setValues({...values, nombre: e.target.value})}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" style={{color: 'white'}}>
                          Ingresar tu nombre
                        </label>
                      </div>
                    </div>
                  </div>

                  <div style={{marginTop: '5px'}}>
                    <div className="w-72">
                      <div className="relative h-10 w-full min-w-[200px]">
                        <input
                          className="text-white font-semibold peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          onChange={e => setValues({...values, apellidos: e.target.value})}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" style={{color: 'white'}}>
                          Ingresar tus apellidos 
                        </label>
                      </div>
                    </div>
                  </div>

                </div>

                <div style={{marginTop: '15px'}}>
                  <div className="w-72">
                    <div className="relative h-10 w-full min-w-[592px]">
                      <input
                        className="text-white font-semibold peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        onChange={e => setValues({...values, email: e.target.value})}
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" style={{color: 'white'}}>
                        Ingresar tu correo
                      </label>
                    </div>
                  </div>
                </div>

                <div style={{marginTop: '15px'}}>
                  <div className="w-72">
                    <div className="relative h-10 w-full min-w-[592px]">
                      <input
                        className="text-white font-semibold peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        onChange={e => setValues({...values, password: e.target.value})}
                        type="password"
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" style={{color: 'white'}}>
                        Ingresar tu contraseña
                      </label>
                    </div>
                  </div>
                </div>

                <div style={{marginTop: '15px'}}>
                  <div className="w-72">
                    <div className="relative h-10 w-full min-w-[592px]">
                      <input
                        className="text-white font-semibold peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        onChange={e => setValues({...values, confirmpassword: e.target.value})}
                        type="password"
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" style={{color: 'white'}}>
                        Confirmar contraseña
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <button className="active:scale-95 hover:scale-105 duration-500 rounded-xl" style={{width: '110px',padding: '4px',border:'none',marginTop:'15px', backgroundColor: '#CD9B4A', color: 'White'}}>Registrarse</button>
                </div>    
            
              </form>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center" style={{width: '50%'}}>
        <div>
          
          <div className="sticky">
            <Image
              className="items-center"
              src="/src/images/loginbg.jpg"
            /> 
          </div>  
         
        </div>
      </div>
    </div>

    
  )
}
export default Registro