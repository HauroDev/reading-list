import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import PrincipalRouter from './components/routers/PrincipalRouter'

function App(): JSX.Element {
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
