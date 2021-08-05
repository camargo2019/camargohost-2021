import './Streaming.css';
import Menu from "../others/Menu";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SaveIcon from '@material-ui/icons/Save';
import DoneIcon from '@material-ui/icons/Done';
import SecurityIcon from '@material-ui/icons/Security';
import StorageIcon from '@material-ui/icons/Storage';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';

const useStyles = makeStyles({
  margin: {
    margin: 10,
    height: 50,
    background_color: 'white',
  }
});


function Streaming() {
  document.title = "Streaming de Áudio| CamargoHost | CamargoHost.com.br";
  const classes = useStyles();
    return (
      <div>
        <Menu tipo="streaming" />
        <Container>
          <div class="anuncios-title color-black">Streaming de Áudio!</div>
          <Grid container spacing={2} className="margin-bottom">

            <Grid item xs className="max-width">
              <div className="popular-price bg-white pricing-new-wrapper mt-4 p-5 shadow-sm border">
                <div class="pricing-info">
                  <div class="pricing-price d-flex justify-content-between align-items-center pb-4">

                    <span class="p-icon">
                      <h5>Started</h5>
                    </span>

                    <div class="h3 mb-0 text-dark">
                      R$9.99<span class="price-cycle h6">/Mês</span>
                    </div>
                  </div>
                    
                    <p class="text-muted">Para quem está começando!</p>
                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">
                    <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p><strong>200</strong> Ouvintes</p>
                    </li>
                    <li>
                      <DoneIcon className="icone-plano"/>
                      <p>Painel <strong>CmrStreaming</strong></p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>2GB</strong> de Disco</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos/Flood</strong></p>
                    </li>
                    <li>
                      <PhoneIphoneIcon className="icone-plano"/>
                      <p><strong>App </strong>android </p>
                    </li>
                    <li>
                      <EqualizerIcon className="icone-plano"/>
                      <p>até <strong>320kbps</strong> de Bitrate</p>
                    </li>
                    <li>
                      <SurroundSoundIcon className="icone-plano"/>
                      <p><strong>AACPlus e MP3</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                    
                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=13">
                  <Button variant="outlined" color="primary" className="button-sell">
                    Comprar agora
                  </Button>
                  </a>
                  
                </div>
              </div>

            </Grid>

            <Grid item xs className="max-width">
            <div className="popular-price bg-white pricing-new-wrapper mt-4 p-5 shadow-sm border">
                <div class="pricing-info">
                  <div class="pricing-price d-flex justify-content-between align-items-center pb-4">

                    <span class="p-icon">
                      <h5>Business</h5>
                    </span>

                    <div class="h3 mb-0 text-dark">
                      R$19.99<span class="price-cycle h6">/Mês</span>
                    </div>
                  </div>
                    
                  <p class="text-muted">Recomendado para rádios pequenas!</p>
                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">
                  <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p><strong>700</strong> Ouvintes</p>
                    </li>
                    <li>
                      <DoneIcon className="icone-plano"/>
                      <p>Painel <strong>CmrStreaming</strong></p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>5GB</strong> de Disco</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos/Flood</strong></p>
                    </li>
                    <li>
                      <PhoneIphoneIcon className="icone-plano"/>
                      <p><strong>App </strong>android </p>
                    </li>
                    <li>
                      <EqualizerIcon className="icone-plano"/>
                      <p>até <strong>320kbps</strong> de Bitrate</p>
                    </li>
                    <li>
                      <SurroundSoundIcon className="icone-plano"/>
                      <p><strong>AACPlus e MP3</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=14">
                  <Button variant="outlined" color="primary" className="button-sell">
                    Comprar agora
                  </Button>
                  </a>
                  
                </div>
              </div>

            </Grid>

            <Grid item xs className="max-width">
            <div className="popular-price bg-white pricing-new-wrapper mt-4 p-5 shadow-sm border">
                <div class="pricing-info">
                  <div class="pricing-price d-flex justify-content-between align-items-center pb-4">

                    <span class="p-icon">
                      <h5>Premium</h5>
                    </span>

                    <div class="h3 mb-0 text-dark">
                      R$34.99<span class="price-cycle h6">/Mês</span>
                    </div>
                  </div>
                    
                  <p class="text-muted">Recomendado para rádios média!</p>
                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">
                  <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p>Ouvintes <strong>ilimitados</strong></p>
                    </li>
                    <li>
                      <DoneIcon className="icone-plano"/>
                      <p>Painel <strong>CmrStreaming</strong></p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>20GB</strong> de Disco</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos/Flood</strong></p>
                    </li>
                    <li>
                      <PhoneIphoneIcon className="icone-plano"/>
                      <p><strong>App </strong>android </p>
                    </li>
                    <li>
                      <EqualizerIcon className="icone-plano"/>
                      <p>até <strong>320kbps</strong> de Bitrate</p>
                    </li>
                    <li>
                      <SurroundSoundIcon className="icone-plano"/>
                      <p><strong>AACPlus e MP3</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=15">
                  <Button variant="outlined" color="primary" className="button-sell">
                    Comprar agora
                  </Button>
                  </a>
                  
                </div>
              </div>
            </Grid>

            <Grid item xs className="max-width">
            <div className="popular-price bg-white pricing-new-wrapper mt-4 p-5 shadow-sm border">
                <div class="pricing-info">
                  <div class="pricing-price d-flex justify-content-between align-items-center pb-4">

                    <span class="p-icon">
                      <h5>Dedicated</h5>
                    </span>

                    <div class="h3 mb-0 text-dark">
                      R$49.99<span class="price-cycle h6">/Mês</span>
                    </div>
                  </div>
                    
                  <p class="text-muted">Recomendado para rádios grandes!</p>
                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">
                  <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p>Ouvintes <strong>ilimitados</strong></p>
                    </li>
                    <li>
                      <DoneIcon className="icone-plano"/>
                      <p>Painel <strong>CmrStreaming</strong></p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>40GB</strong> de Disco</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos/Flood</strong></p>
                    </li>
                    <li>
                      <PhoneIphoneIcon className="icone-plano"/>
                      <p><strong>App </strong>android </p>
                    </li>
                    <li>
                      <EqualizerIcon className="icone-plano"/>
                      <p>até <strong>320kbps</strong> de Bitrate</p>
                    </li>
                    <li>
                      <SurroundSoundIcon className="icone-plano"/>
                      <p><strong>AACPlus e MP3</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                    
                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=16">
                  <Button variant="outlined" color="primary" className="button-sell">
                    Comprar agora
                  </Button>
                  </a>
                  
                </div>
              </div>
            </Grid>


          </Grid>

        </Container>
        
        

      <div className="container-anuncios">
        <Container>
          <div className="background-anuncios">
            <div className="anuncios-title">Precisando de ajuda?</div>
            <div className="anuncios-descricao">
            <a target="_blank" href={"https://api.whatsapp.com/send/?phone=5545991537449&text=%22Ol%C3%A1,%20estou%20precisando%20de%20ajuda%22&app_absent=0"} className="link-button-home">
              <Button variant="contained" size="large" className={classes.margin}>
                Fale Conosco! 
              </Button>
            </a>
            </div>
          </div>
        </Container>
      </div>
      </div>
    );
  }
  
export default Streaming;
