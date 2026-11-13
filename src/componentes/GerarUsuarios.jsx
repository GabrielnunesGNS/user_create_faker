import {gerarUsuariosAleatoriosUnicos,gerarUsuariosSequenciais} from '../script/faker'
import ButtonDownload from './ButtonDownload'
import { useState } from 'react'
const GerarUsuarios = ({setListaUsuarios,usuarios}) => {
    const[setParam,setParams] = useState({
        qtdUsuarios:100,
        geracaoId:'auto-incremento'
    })
    const[ignoreLimit,setIgnore] = useState(false)
    const[mensagemErro,setMensagemError] = useState(false)
    const[disabled,setDisabled] = useState(false)

    const userMin = 1
    const userMax = 1000000

    
    function handleCheckBox(value){
        if(!value) return
            setIgnore(true)
    }

    function handleBtnId(value){
        
        setParams(prev=>({
            ...prev,
            geracaoId:value
        }))
    }

    function handleGerarLista(){
        if(setParam.qtdUsuarios <= userMin ) return alert('insira um valor maior que o valor minimo')
        if(!ignoreLimit){
            if(setParam.qtdUsuarios > userMax) return alert('insira um valor menos que o limite')
        }

        let user
        if(setParam.geracaoId.toLowerCase() == 'aleatorio') user = gerarUsuariosAleatoriosUnicos(setParam.qtdUsuarios)
        if(setParam.geracaoId.toLowerCase() == 'auto-incremento') user = gerarUsuariosSequenciais(setParam.qtdUsuarios)

        setListaUsuarios(user)
    }

    

    function handleQtdUsuarios(value){
        let valor  = Number(value)
        if(!Number.isFinite(valor) || valor  < 1 || value == '' ) value = 0
        setParams(prev =>({
            ...prev,
            qtdUsuarios:Number(value)
        }))
       
    }

  

  return (
    <div className='mt-2 mt-lg-5 d-flex justify-content-center flex-column align-items-center w-100'>
        <p className='px-lg-5 px-2'>Crie registros fictícios de 1 a 1 milhão usuários (caso deseje criar quantidades maiores click em <span className='fw-bold'>ignorar limite</span> , assim podendo criar a quantidades ilimitadas ou até sua máquina travar ) </p>
        <div className='col-lg-9 col-12'>
            <div>
                <label htmlFor="" className='form-label fw-bold'>Insira a quantidade de registro:</label>
                <input type="text" className="form-control" placeholder='quantidade de registros' value={setParam.qtdUsuarios} onChange={(e)=>{handleQtdUsuarios(e.target.value)}} disabled={disabled} /></div>
                { mensagemErro ? (<p className='small text-danger'>Insira limites válidos...</p>):''}
                <div className='mt-2 w-100 d-flex gap-3 border-3 align-items-start'>
                    <label className='d-flex align-items-center gap-1' htmlFor="ignoreLimit"><input type="checkbox" className='form-check' name="ignoreLimit" onChange={(e)=>{handleCheckBox(e.target.checked) }} id="igonoreLimit" />
                    ignorar limites</label>
                    <div className=' gap-1 justify-items-start'>
                        <p className='m-0 fw-bold '>Geração de Ids</p>
                        <label className='d-flex align-items-center gap-1' htmlFor="">
                        <input type="radio" className='form-check' name="geracaoId" defaultChecked value='auto-incremento' onClick={(e)=>{handleBtnId(e.target.value) }} id="geracaoId" />Auto-incremento</label>
                        <label className='d-flex align-items-center gap-1' htmlFor="">
                        <input type="radio" className='form-check' name="geracaoId" value='aleatorio' onClick={(e)=>{handleBtnId(e.target.value) }} id="geracaoId" />Aleatórios</label>
                    
                 </div>
                 </div>
                
            </div>
            
        <div className='mt-3 d-flex gap-2 '>
            <button onClick={handleGerarLista} className='px-lg-5 btn btn-primary px-3'>Gerar usuários</button>
            <ButtonDownload dados={usuarios}></ButtonDownload>

        </div>

    </div>
  )
}

export default GerarUsuarios