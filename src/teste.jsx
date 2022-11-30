import {useState, useEffect, useMemo} from 'react'

const Teste = () => { 
    const [age, setAge] = useState(19)

    const handleChangeName = () => { 
        setAge(prev => prev === 30 ? 19 : 30)
    }

   const calculo = useMemo(() => { 
    console.log('Calculou', age)
    return 10 * age
   }, [])

    

    return (
        <div>
            <p>{age}</p>
            <button onClick={calculo}>Alterar</button>
        </div>
    )
}

export {Teste}


/*
 USE STATE ARMAZENAMENTO DE STATUS E PARA E ALTERACAO NA APLICACAO
 USE STATE GERENCIAR O ESTADO DE UM COMPONENTE

 HOOKS PERMITEM O USO DE VARIOS RECURSOS DE FORMA SIMPLES NA FUNCAO

 USE EFFECT -> HOOK PARA GERENCIAR O CICLO DE VIDA DE UM COMPONENTE

 USE MEMO -> REFERENCIA EM VARIAVEIS
 USE CALLBACK -> REFERENCIA DE FUNCAO
 */