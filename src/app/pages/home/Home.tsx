import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <div className='flex flex-col justify-center items-center text-center p-5'>
        <h2 className='text-2xl sm:text-4xl font-bold text-stone-500'>
          Bienvenido a Learning Reading Meaning
        </h2>
        <p className='text-lg sm:text-xl text-cyan-300 my-10 max-w-xl'>
          En esta aplicación podrás encontrar todos los libros disponibles de
          nuestra biblioteca para reservar para su lectura.
        </p>
        <NavLink
          className='hover:bg-gray-400 my-2 bg-gray-500 px-2 py-1 rounded-md'
          to='/books'>
          Ingresar
        </NavLink>
      </div>
    </div>
  )
}

export default Home
