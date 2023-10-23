import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <h2 className='text-8xl font-bold text-stone-500 '>Error 404</h2>
      <p className='text-xl text-red-300 my-10'>esta pagina no existe</p>
      <NavLink to='/books'>Volver</NavLink>
    </div>
  )
}

export default ErrorPage
