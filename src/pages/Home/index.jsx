import { useNavigate  } from "react-router-dom";
import bannerImage from '../../assets/banner.png'

import { Button } from '../../components/Button';

import { Header } from '../../components/Header';

import { Container, Title, TitleHighlight, TextContent } from './styles';

export default function Home(){

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente <br />
                    </TitleHighlight>
                o seu futuro global agora!</Title>
                <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                     desafio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <a href="https://github.com/paulohramoss/dio-clone" target="_blank" rel="noreferrer">
                <img src={bannerImage} alt="Imagem principal do site." />
                </a>
            </div>
        </Container>
    </>)
}