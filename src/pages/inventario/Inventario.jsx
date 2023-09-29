import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card, CardBody} from "@nextui-org/react";

export const Inventario = () => {

    return (

        <div className="py-16 px-24">
          <div className="mb-10">
            <h2 className="text-5xl text-center text-gray-800">INVENTARIO</h2>
          </div>

          
            
          <form className="columns-2">   
            <div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar producto por código o nombre" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-sky-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                </div>
            </div>

            <div className="flex justify-end">
            <div className="w-1/2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="#" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sucursal" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-sky-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Filtrar</button>
                  </div>
              </div>
            </div>   
          </form>

          <div className="mb-6">
            <button href="#" className="mw-1/4 mt-5 active:scale-95 hover:scale-105 shadow-xl rounded-lg py-2 px-10 bg-sky-950 text-white transition duration-500">Agregar producto</button>
          </div>


          <div>
            <Card className="h-auto shadow-none -mx-6">
              <CardBody className="">
                <Table removeWrapper aria-label="Example static collection table" className="table-auto">
                  <TableHeader>
                    <TableColumn>SUCURSAL</TableColumn>
                    <TableColumn>PRODUCTO</TableColumn>
                    <TableColumn>CODIGO</TableColumn>
                    <TableColumn>CANTIDAD</TableColumn>
                    <TableColumn>COSTO UNITARIO</TableColumn>
                    <TableColumn>COSTO TOTAL</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>Montejo</TableCell>
                      <TableCell>Cebolla morada</TableCell>
                      <TableCell>002</TableCell>
                      <TableCell>$10.00 MX</TableCell>
                      <TableCell>Limon</TableCell>
                      <TableCell>Cebolla morada</TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>Altabrisa</TableCell>
                      <TableCell>Ajo</TableCell>
                      <TableCell>003</TableCell>
                      <TableCell>$10.00 MX</TableCell>
                      <TableCell>Limon</TableCell>
                      <TableCell>Cebolla morada</TableCell>
                    </TableRow>
                    <TableRow key="3">
                      <TableCell>Carmen</TableCell>
                      <TableCell>Senior Developer</TableCell>
                      <TableCell>004</TableCell>
                      <TableCell>$10.00 MX</TableCell>
                      <TableCell>Limon</TableCell>
                      <TableCell>Cebolla morada</TableCell>
                    </TableRow>
                    <TableRow key="4">
                      <TableCell>Ciudad Caucel</TableCell>
                      <TableCell>Community Manager</TableCell>
                      <TableCell>005</TableCell>
                      <TableCell>10 U.</TableCell>
                      <TableCell>$10.00 MX</TableCell>
                      <TableCell>Cebolla morada</TableCell>
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