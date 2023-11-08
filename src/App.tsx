import { storeName } from './app/middlewares/persistenceStorage'
import store from './app/store'
import Footer from './components/Footer'
import Header from './components/Header'
import PrincipalRouter from './components/PrincipalRouter'
import { setStateLibrary } from './features/library/librarySlice'

function App(): JSX.Element {
  // Agregando sincronización de pestañas
  window.addEventListener('storage', (event) => {
    if (event.newValue && event.key === storeName) {
      const newState = JSON.parse(event.newValue).library

      console.log('newState', newState)
      store.dispatch(setStateLibrary(newState))
    }
  })

  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1'>
        <PrincipalRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App
