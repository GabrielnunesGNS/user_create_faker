import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import 'bootstrap'
import TableUsuarios from './componentes/TableUsuarios'
import GerarUsuarios from './componentes/GerarUsuarios'
function App() {
  const[listaUsuarios,setLista] = useState([])
  return (
    
      <div className='position-relative container-display'>
        <header className='p-3 shadow bg-light text-center position-relative'>
            <h3>Gerador de <span className='text-uppercase text-warning fw-bold'>faker js</span></h3>
            

        </header>
        <main className='container '>
          <div className='border shadow rounded shadow my-4 p-4 bg-light'>
            <GerarUsuarios setListaUsuarios={setLista} usuarios={listaUsuarios}></GerarUsuarios>
          </div>
          <div className='mt-4 pb-5 '>
            <p className='fs-2 text-capitalize'>dados gerados:</p>
            <TableUsuarios dados={listaUsuarios}></TableUsuarios>
          </div>
        </main>
        <footer className='mt-2 p-3 position-relative bottom-0 bg-white z-100 text-center w-100 shadow'>
            <p className=''>Desenvolvido por <span className='fw-bold'>@GabrielNunes</span> by 2026</p>
        </footer>
    </div>
  )
}

export default App
