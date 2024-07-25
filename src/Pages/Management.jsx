import React from 'react'
import LateralBar from '../Components/LateralBar'

export default function Management() {
  return (
    <div className='flex flex-row'>
      <div>
        <LateralBar />
      </div>
      <div className='w-full mt-6'>


        <div className='flex items-center justify-center text-center'>
          <div>
            <h1>G E R Ê N C I A</h1>
          </div>
        </div>

        <div className='mx-28'>
          <h1 className='flex items-center justify-center text-center my-8'>Mesas</h1>
          <div className='grid grid-cols-8'>
          <div className='w-36 h-36 bg-slate-200 rounded-lg p-3'>
            <p>Mesa 1</p>
            <p>4 Lugares</p>
            <button className='w-full h-auto p-1 rounded-2xl bg-cyan-950 text-white my-1'>Editar mesa</button>
            <button className='w-full h-auto p-1 rounded-2xl bg-cyan-950 text-white'>Excluir mesa</button>
          </div>
          <div className='w-36 h-36 bg-slate-200 rounded-lg p-3'>
            <p>Mesa 2</p>
            <p>4 Lugares</p>
            <button className='w-full h-auto p-1 rounded-2xl bg-cyan-950 text-white my-1'>Editar mesa</button>
            <button className='w-full h-auto p-1 rounded-2xl bg-cyan-950 text-white'>Excluir mesa</button>
          </div>
          <div className='w-36 h-36 bg-slate-200 rounded-lg p-3'>
            <p>Mesa 3</p>
            <p>4 Lugares</p>
            <button className='w-full h-auto p-1 rounded-2xl bg-cyan-950 text-white my-1'>Editar mesa</button>
            <button className='w-full h-auto p-1 rounded-2xl bg-cyan-950 text-white'>Excluir mesa</button>
          </div>
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  )
}