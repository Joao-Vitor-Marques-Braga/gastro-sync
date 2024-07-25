import React, { useState } from 'react'
import LateralBar from '../Components/LateralBar'

const Tables = () => {
  const [status, setStatus] = useState('');

  return (
    <div className='flex flex-row'>
      <div>
        <LateralBar />
      </div>
      <div className='m-16 grid grid-cols-3'>
        <div className='px-6 w-96 h-44 mr-10 rounded-2xl bg-slate-200'>
          <p className='pt-6'>Mesa 1</p>

          <div className='grid grid-flow-col'>
            <h2 className='bg-amber-300 w-32 h-9 flex items-center px-4 rounded-md'>Em produção</h2>

            <button className='w-48 h-9 rounded-2xl bg-cyan-950 text-white'>
              Detalhes do pedido
            </button>
          </div>

          <button className='mt-5 w-full h-9 rounded-2xl bg-cyan-950 text-white'>
            Cancelar pedido
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tables