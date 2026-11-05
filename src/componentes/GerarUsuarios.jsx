import React from 'react'
import gerarUsuarios from '../script/faker'
import ButtonDownload from './ButtonDownload'
import { useState } from 'react'
import { de } from '@faker-js/faker'
const GerarUsuarios = ({setListaUsuarios,usuarios}) => {
    const[qtdUsuarios,setUsuarios] = useState(100)
    const[ignoreLimit,setIgnore] = useState(false)

    function handleCheckBox(value){
        debugger
        if(!value) return
            setIgnore(true)
    }

    function handleGerarLista(){
        const userMin = 0
        const userMax = 1000000
        

        if(qtdUsuarios <= userMin ) return alert(`quantidade deve ser maior que ${userMin}`)
        if(!ignoreLimit){
            if(qtdUsuarios > userMax) return alert(`quantidade de usuarios não pode ser maior que ${userMax}`)
        }
        const user = gerarUsuarios(qtdUsuarios)
        setListaUsuarios(user)
        
    }

    function handleQtdUsuarios(value){
        let valor  = Number(value)
        console.log(typeof valor)
        if(!Number.isFinite(valor) || valor  < 1 ) return setUsuarios(1)

            setUsuarios(valor)
    }

  return (
    <div className='mt-5 d-flex justify-content-center flex-column align-items-center w-100'>
        <p className='px-5'>Crie registros fictícios de 1 a 1 milhão usuários (caso deseje criar quantidades maiores click em <span className='fw-bold'>ignorar limite</span> , assim podendo criar a quantidades ilimitadas ou até sua máquina travar ) </p>
        <div className='w-75'>
            <div>
                <label htmlFor="" className='form-label fw-bold'>Insira a quantidade de registro:</label>
                <input type="text" className="form-control" placeholder='quantidade de registros' value={qtdUsuarios} onChange={(e)=>{handleQtdUsuarios(e.target.value)}} /></div>
                <div className='mt-2 w-100 d-flex gap-1 justify-items-start'>
                    <input type="checkbox" className='form-check' name="ignoreLimit" onChange={(e)=>{handleCheckBox(e.target.checked) }} id="igonoreLimit" />
                    <label className='form-check-label' htmlFor="ignoreLimit">ignorar limites</label>
                 </div>
            </div>
            
        <div className='mt-3 d-flex gap-2 '>
            <button onClick={handleGerarLista} className='btn btn-primary px-5'>Gerar usuários</button>
            <ButtonDownload dados={usuarios}></ButtonDownload>

        </div>

    </div>
  )
}

export default GerarUsuarios