
export const Login = () => {

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (

    <div className="container-login container flex flex-row">

      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-10 lg:px-8">
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
          <div>2</div>
          <div>3</div>

        </div>
      </div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-10 lg:px-8">San Roman</div>

    </div>

    
  )
}
export default Login