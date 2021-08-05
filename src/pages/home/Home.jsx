import React from 'react';
import './Home.css';
import Menu from "../others/Menu";
import {
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StorageIcon from '@material-ui/icons/Storage';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LanguageIcon from '@material-ui/icons/Language';
import BrushIcon from '@material-ui/icons/Brush';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  margin: {
    margin: 10,
    height: 50,
    color: 'white',
  },
  media: {
    height: 140,
  },
});

function Home() {
    document.title = "Serviços de Hospedagem | CamargoHost | CamargoHost.com.br";
    const classes = useStyles();
    return (
    <>
    <Menu tipo="home" />
      <div className="container-principais-services">
        <Container>
          <div className="background-principais-services">
            <div className="title-principais-services">
            Cuidamos de tudo para que você <br />
            tenha uma experiência incrível <br />
              com sua host de minecraft.
            </div>
            <div className="produtos-principais-services">
                <img src="/assets/img/cuidamos-para-voce.png" />
            </div>
          </div>
        </Container>
      </div>

      <div className="container-benificios-anuncios">
        <Container>
        <div className="background-anuncios-protecao">
          <Grid container spacing={2}>

            <Grid item xs className="max-width">
            <div class="anuncios-title color-black">Qualidade de serviços e atendimento!</div>
            <div className="feature-contents section-heading">
            {/*<h2 className="font-protecao">Qualidade de serviços e atendimento</h2>*/}
            <p>Nossos serviços contam com atendimento de qualidade e desburocratizado. Você sempre pode contar com nossa equipe para auxiliá-lo e orientá-lo da melhor forma possível. Veja abaixo mais alguns diferenciais!</p>
            <ul className="check-list-wrap list-two-col py-3">
            <li className="li"><CheckCircleIcon className="verify-color"/>Monitoramento 24/7</li>
            <li className="li"><CheckCircleIcon className="verify-color"/>Suporte especializado 24/7</li>
            <li className="li"><CheckCircleIcon className="verify-color"/>Servidores de última geração</li>
            <li className="li"><CheckCircleIcon className="verify-color"/>Rede de alta disponibilidade</li>
            <li className="li"><CheckCircleIcon className="verify-color"/>Proteção DDoS</li>
            <li className="li"><CheckCircleIcon className="verify-color"/>Sistema desburocratizado</li>
            </ul>
            </div>


            </Grid>

            <Grid item xs className="max-width">
              <img className="img-fluid" src="/assets/img/feature-17.svg" alt="animation image" />
            </Grid>


          </Grid>

          </div>



          <div className="background-anuncios-benificios">
          <Grid container spacing={10}>

            <Grid item xs className="max-width">
              <div className="reduzirDiv">
                <div className="icon-anuncions">
                  <BrushIcon className="font-icon-anuncions" />
                </div>
                <h4 className="icon-h4-text">Painel Personalizado</h4>
                <p>Nossos serviços contam com um painel personalizado com diversas funções para facilitar a sua vida. Altere a versão do jogo com um clique, faça backups e muito mais.</p>
              </div>
            </Grid>

            <Grid item xs className="max-width">
              <div className="reduzirDiv">
                  <div className="icon-anuncions">
                    <LanguageIcon className="font-icon-anuncions" />
                  </div>
                  <h4 className="icon-h4-text">Subdominio Gratuito</h4>
                  <p>Chega de números, IPs e portas, todos os nossos serviços incluem um subdomínio gratuito para que você possa personalizar o seu endereço de conexão do seu jeito.</p>
                </div>
            </Grid>

            <Grid item xs className="max-width">
              <div className="reduzirDiv">
                <div className="icon-anuncions">
                  <FlashOnIcon className="font-icon-anuncions" />
                </div>
                <h4 className="icon-h4-text">Ativação Instantânea</h4>
                <p>Assim que seu pagamento for aprovado, o seu serviço será ativado. Pagou por boleto e não quer esperar? Mande seu comprovante no chat e vamos ativar seu serviço!</p>
                </div>
            </Grid>

          </Grid>

          </div>
        </Container>
      </div>

      <div className="container-clientes">
        <Container>
          <div className="background-clientes">
            <Grid container spacing={3}>

                <Grid item xs className="max-width">

                  <div className="icone-user-clientes">
                    <AccountCircleIcon className="font-user-clientes"/>
                  </div>

                  <div className="quantidade-user-clientes">
                    +300
                  </div>

                  <div className="texto-user-clientes">
                    Clientes
                  </div>

                </Grid>

                <Grid item xs className="max-width">

                  <div className="icone-user-clientes">
                    <StorageIcon className="font-user-clientes"/>
                  </div>

                  <div className="quantidade-user-clientes">
                    +20
                  </div>

                  <div className="texto-user-clientes">
                    Dedicados
                  </div>

                </Grid>

                
                <Grid item xs className="max-width">

                    <div className="icone-user-clientes">
                      <SportsEsportsIcon className="font-user-clientes"/>
                    </div>

                    <div className="quantidade-user-clientes">
                      +750
                    </div>

                    <div className="texto-user-clientes">
                      Instalações
                    </div>

                </Grid>
            </Grid>
            </div>
        </Container>
      </div>

      <div className="container-anuncios">
        <Container>
          <div className="background-anuncios">
            <div className="anuncios-title">Pronto para ter a melhor experiência?</div>
            <div className="anuncios-descricao">
            <Link to={"/minecraft"} className="link-button-home">
              <Button variant="contained" size="large" color="primary" className={classes.margin}>
                Encontrar Plano
              </Button>
            </Link>

            <Link to={"/sobre-nos"} className="link-button-home">
              <Button variant="outlined" size="large" className={classes.margin}>
                Ainda com dúvidas?
              </Button>
            </Link>
            </div>
          </div>
        </Container>
      </div>


      </>
    );
  }
  
export default Home;
