import Footer from './components/Footer'
import Header from './components/Header'
import PrincipalRouter from './components/PrincipalRouter'

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
