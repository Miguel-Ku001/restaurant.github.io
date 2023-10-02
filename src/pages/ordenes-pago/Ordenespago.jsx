import React from 'react';

const Ordenespago = () => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl py-24 sm:px-6 sm:py-10 lg:px-8 font-marcellus">
      {/* Título */}
      <h2 className="text-center text-2xl mb-8">¿CÓMO QUIERES PAGAR?</h2>

      {/* Descripción */}
      <div className="flex flex-row justify-center mb-4 border border-black rounded">
        {/* Izquierda (Tarjetas de pago) */}
        <div className="flex flex-col items-start p-4 w-1/2">
          <div className="flex items-center mb-4 bg-gray-300 rounded p-6 w-full">
            <div className="w-10 h-10 rounded-full mr-4">
              <img src="/src/images/pagos/ruta_icono_tarjeta_credito.png" alt="Tarjeta de crédito" className="w-full h-full object-contain" />
            </div>
            <span className="bg-gray-300 p-0">Tarjeta de crédito</span>
          </div>
          <div className="flex items-center mb-4 bg-gray-300 rounded p-6 w-full">
            <div className="w-10 h-10 rounded-full mr-4">
              <img src="/src/images/pagos/ruta_icono_tarjeta_debito.png" alt="Tarjeta de débito" className="w-full h-full object-contain" />
            </div>
            <span className="bg-gray-300 p-0">Tarjeta de débito</span>
          </div>
          <div className="flex items-center bg-gray-300 rounded p-6 w-full">
            <div className="w-10 h-10 rounded-full mr-4">
              <img src="/src/images/pagos/ruta_icono_efectivo.png" alt="Efectivo" className="w-full h-full object-contain" />
            </div>
            <span className="bg-gray-300 p-0">Efectivo</span>
          </div>
        </div>

        {/* Derecha (Cantidad, Producto, Envío, Total) */}
        <div className="flex flex-col items-start justify-start p-7 w-1/3" style={{ backgroundColor: '#f0f0f0', marginTop: '20px', marginBottom: '20px' }}>
          <div className="mb-11" style={{ backgroundColor: '#f0f0f0' }}>
            <span className="mx-auto">Cantidad:</span>
          </div>
          <div className="mb-11" style={{ backgroundColor: '#f0f0f0' }}>
            <span className="mx-auto">Producto:</span>
          </div>
          <div className="mb-11" style={{ backgroundColor: '#f0f0f0' }}>
            <span className="mx-auto">Envío:</span>
          </div>
          <div style={{ backgroundColor: '#f0f0f0' }}>
            <span className="mx-auto">Total:</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ordenespago;
