import {Link} from 'react-router-dom'
import { Button } from '../../components/Button'
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Container, Title, TitleHighlightd, TextContent} from './styles'
 
const Login = () => { 
    return ( <>
        <Header />
        <Container>
            <div>
                <Title>  
                    <TitleHighlightd> 
                        Implemente
                        <br/>
                    </TitleHighlightd>  
                    O seu futuro Global Agora!
                </Title>
                <TextContent> 
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title='Comecar agora' variant='secondary' onClick={() => null}/> 
            </div>
            <div>
                <Input placeholder='test'></Input>
            </div>    
        </Container> 
    </>)
}

export {Login}