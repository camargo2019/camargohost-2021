import './VPS.css';
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
import MemoryIcon from '@material-ui/icons/Memory';

const useStyles = makeStyles({
  margin: {
    margin: 10,
    height: 50,
    background_color: 'white',
  }
});


function VPS() {
  document.title = "VPS no Brasil | CamargoHost | CamargoHost.com.br";
  const classes = useStyles();
    return (
      <div>
        <Menu tipo="vps" />
        <Container>
          <Grid container spacing={2} className="margin-bottom">

            <Grid item xs className="max-width">
              <div className="popular-price bg-white pricing-new-wrapper mt-4 p-5 shadow-sm border">
                <div class="pricing-info">
                  <div class="pricing-price d-flex justify-content-between align-items-center pb-4">

                    <span class="p-icon">
                      <h5>Started</h5>
                    </span>

                    <div class="h3 mb-0 text-dark">
                      R$44.99<span class="price-cycle h6">/Mês</span>
                    </div>
                  </div>

                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">

                    <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p><strong>1</strong> núcleo Ryzen</p>
                    </li>
                    <li>
                      <MemoryIcon className="icone-plano"/>
                      <p><strong>2GB</strong> de Memória RAM</p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>30GB</strong> de disco SSD</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                    <li>
                      <img src="/assets/img/sistemas-operacionais.png"/>
                    </li>
                    
                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=23">
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
                      R$93.99<span class="price-cycle h6">/Mês</span>
                    </div>
                  </div>
                    
                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">
                  
                    <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p><strong>2</strong> núcleo Ryzen</p>
                    </li>
                    <li>
                      <MemoryIcon className="icone-plano"/>
                      <p><strong>4GB</strong> de Memória RAM</p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>40GB</strong> de disco SSD</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                    <li>
                      <img src="/assets/img/sistemas-operacionais.png"/>
                    </li>

                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=24">
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
                      R$178.99<span class="price-cycle h6">/Mês</span>
                    </div>
                  </div>
                  
                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">
                  
                  <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p><strong>3</strong> núcleo Ryzen</p>
                    </li>
                    <li>
                      <MemoryIcon className="icone-plano"/>
                      <p><strong>6GB</strong> de Memória RAM</p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>50GB</strong> de disco SSD</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                    <li>
                      <img src="/assets/img/sistemas-operacionais.png"/>
                    </li>

                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=25">
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
                      R$276.99<span class="price-cycle h6">/Mês</span>
                    </div>
                  </div>
                    
                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">
                  
                  
                  <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p><strong>4</strong> núcleo Ryzen</p>
                    </li>
                    <li>
                      <MemoryIcon className="icone-plano"/>
                      <p><strong>8GB</strong> de Memória RAM</p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>60GB</strong> de disco SSD</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                    <li>
                      <img src="/assets/img/sistemas-operacionais.png"/>
                    </li>
                    
                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=26">
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
  
export default VPS;
