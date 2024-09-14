import React from 'react'

const Card = ({name, direction, phone}) => {
  return (
    <div className='w-[300px] bg-black h-[400px] rounded-2xl p-4'>
      <div className="flex flex-col bg-white w-full h-full rounded-2xl">
        <div>
            <img className="object-contain w-full rounded-t-2xl" src="https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726185600&semt=ais_hybrid" alt="" />
        </div>

        <div className='w-full flex flex-col justify-center items-center mt-4'>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p>{direction}</p>
            <p>{phone}</p>
        </div>

      </div>
    </div>
  )
}

export default Card
