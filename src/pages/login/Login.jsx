
export const Login = () => {

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: '',
    imageSize: 90,
  };


  return (

    <div className="container-login container flex flex-row">

      <div className="basis-1/2">
        <div style={{backgroundColor: '#262626'}}>

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
            <h1 className="text-4xl font-semibold">Bienvenidos</h1>
          </div>
          <div>3</div>

        </div>
      </div>
      <div className="basis-1/2" style={{backgroundColor: 'red'}}>San Roman</div>

    </div>

    
  )
}
export default Login