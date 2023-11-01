import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody} from "@nextui-org/react";


const EditIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M2.5 18.3333H17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);

const DeleteIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M8.60834 13.75H11.3833"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.91669 10.4167H12.0834"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const Inventario = () => {

    return (

        <div className="py-16 px-24 font-marcellus">
          <div className="mb-10">
            <h2 className="text-5xl text-center text-gray-800">INVENTARIO</h2>
          </div>
        
          <form>   
            <div className="w-1/2 content-center">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white font-medium border border-gray-300 rounded-lg bg-[#cd9b4a] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-white" placeholder="Buscar producto por sucursal, código o nombre" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#092A3A] hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                </div>
            </div>  
          </form>

          <div className="mb-6">
            <button href="#" className="mw-1/4 mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-[#092A3A] text-white transition duration-500">Agregar producto</button>
          </div>


          <div>
            <Card className="h-auto shadow-none -mx-6">
              <CardBody className="">
                <Table removeWrapper aria-label="Example static collection table" className="table-auto rounded-lg ">{/*bg-gray-200*/}
                  <TableHeader>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">PROVEEDOR</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">SUCURSAL</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">CODIGO</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">FAMILIA</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">PRODUCTO</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">UNIDAD</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">CANTIDAD</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">COSTO UNITARIO</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium">COSTO TOTAL</TableColumn>
                    <TableColumn className="bg-[#092A3A] text-white font-medium"></TableColumn>
                    
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Proveedor A</TableCell>
                      <TableCell>Montejo</TableCell>
                      <TableCell>0001</TableCell>
                      <TableCell>Carnes</TableCell>
                      <TableCell>Carne de cerdo</TableCell>
                      <TableCell>Kg</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>$90.00</TableCell>
                      <TableCell>$3,600.00</TableCell>
                      <TableCell className="w-12">
                        <div className="relative flex">
                          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                              <EditIcon />
                            </span>
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                              <DeleteIcon />
                            </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
              </CardBody>
            </Card>
          </div>


          







        </div>

    )
  }
  export default Inventario