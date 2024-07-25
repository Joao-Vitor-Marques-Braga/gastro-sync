import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LateralBar() {

  const navigate = useNavigate();

  const navigateToTables = () => {
    navigate('/Tables');
  }

  const navigateToManagement = () => {
    navigate('/Management');
  }

  const navigateToInvoicing = () => {
    navigate('/Invoicing');
  }

  return (
    <div className='w-80 h-screen bg-cyan-950'>
      <div className='py-8 flex items-center justify-start'>
        <button className='w-64 h-14 bg-amber-50 rounded-e-full flex items-center justify-start pl-10 text-lg font-semibold' onClick={navigateToTables}>
          <h1>Mesas</h1>
        </button>
      </div>
      <div className='py-8 flex items-center justify-start'>
        <button className='w-64 h-14 bg-amber-50 rounded-e-full flex items-center justify-start pl-10 text-lg font-semibold' onClick={navigateToManagement}>
          <h1>Gerência</h1>
        </button>
      </div>
      <div className='py-8 flex items-center justify-start'>
        <button className='w-64 h-14 bg-amber-50 rounded-e-full flex items-center justify-start pl-10 text-lg font-semibold' onClick={navigateToInvoicing}>
          <h1>Faturamento</h1>
        </button>
      </div>
    </div>
  )
}