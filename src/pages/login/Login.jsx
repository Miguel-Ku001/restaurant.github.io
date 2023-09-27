
export const Login = () => {

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: './images/LOGO3.png',
    imageSize: 90,
  };


  return (

    <div className="flex flex-row" >

      <div className="flex justify-center" style={{width: '50%',backgroundColor: '#262626'}}>
        <div>

          <div>

            <img
              src={user.imageUrl}
              className="avatar"
              style={{
                width: user.imageSize,
                height: user.imageSize
              }}
            />

          </div>
          <div>
            <h1 className="text-4xl font-semibold" style={{color: '#f8fafc'}}>Bienvenido</h1>
          </div>
          <div>
            <h1 style={{color: '#f8fafc', marginTop: '15px', }}>Iniciar Sesion</h1>
            <div className="flex flex-column">
              <form action="">

                <div style={{marginTop: '15px'}}>
                  <div className="w-72">
                    <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" style={{color: 'white'}}>
                        Ingresar Usuario
                      </label>
                    </div>
                  </div>
                </div>

                <div style={{marginTop: '15px'}}>
                  <div className="w-72">
                    <div className="relative h-10 w-full min-w-[200px]">
                      <input
                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      />
                      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" style={{color: 'white'}}>
                        Ingresar Contraseña
                      </label>
                    </div>
                  </div>
                </div>

                {/*
                <div style={{marginTop: '15px'}}>
                  <input className="rounded" type="text" placeholder="Ingresa tu usuario" style={{height: '46px', width: '350px', marginBottom: '10px',paddingLeft: '5px'}}/>
                </div>
                <div>
                <input className="rounded" type="text" placeholder="Ingresa tu usuario" style={{height: '46px', width: '350px', marginBottom: '10px',paddingLeft: '5px'}}/>
                </div>
            */}
                <div>
                  <button className="rounded-xl" style={{width: '110px',padding: '4px',border:'none',marginTop:'12px', backgroundColor: '#CD9B4A', color: 'White'}}>Ingresar</button>
                </div>    
            
              </form>
            </div>
          </div>

        </div>
      </div>
      <div className="flex justify-center" style={{backgroundColor: 'red', width: '50%'}}>San Roman</div>

    </div>

    
  )
}
export default Login