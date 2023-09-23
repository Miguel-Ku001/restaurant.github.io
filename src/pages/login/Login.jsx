
export const Login = () => {

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: '',
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
            <h1 style={{color: '#f8fafc'}}>Iniciar Sesion</h1>
            <div>
              <form action="">

                <input
                  type="email"
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="floatingInput"
                  placeholder="name@example.com" />
                <label
                  for="floatingInput"
                  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >Email address</label>

                <input className="rounded" type="text" placeholder="Ingresa tu usuario" style={{height: '46px', width: '250px', marginBottom: '10px',paddingLeft: '5px'}}/>
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