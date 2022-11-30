import {useState} from 'react'

const Teste = () => { 
    const [name, setName] = useState('Pedro')

    const handleChangeName = () => { 
        setName('Pedro')
    }
    return (
        <div>
            <p>{name}</p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}

export {Teste}

