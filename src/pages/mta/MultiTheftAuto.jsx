import './MultiTheftAuto.css';
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
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import StorageIcon from '@material-ui/icons/Storage';

const useStyles = makeStyles({
  margin: {
    margin: 10,
    height: 50,
    background_color: 'white',
  }
});

function MultiTheftAuto() {
  const classes = useStyles();
  document.title = "Multi Theft Auto | CamargoHost | CamargoHost.com.br";
    return (
      <div>
        <Menu tipo="mta" />
        <Container>
          <div class="anuncios-title color-black">Hospedagem Multi Theft Auto!</div>
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
                      <p><strong>50</strong> slots</p>
                    </li>
                    <li>
                      <DoneIcon className="icone-plano"/>
                      <p><strong>5~40ms</strong> de Ping</p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>10GB</strong> de Disco</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos</strong></p>
                    </li>
                    <li>
                      <AlternateEmailIcon className="icone-plano"/>
                      <p><strong>Acelerador e Compactador</strong> de download</p>
                    </li>
                    <li>
                      <FileCopyIcon className="icone-plano"/>
                      <p>Servidor <strong>Brasileiro</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                    
                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=7">
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
                    
                  <p class="text-muted">Recomendado para servidores pequenos!</p>
                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">
                  <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p><strong>100</strong> slots</p>
                    </li>
                    <li>
                      <DoneIcon className="icone-plano"/>
                      <p><strong>5~40ms</strong> de Ping</p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>10GB</strong> de Disco</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos</strong></p>
                    </li>
                    <li>
                      <AlternateEmailIcon className="icone-plano"/>
                      <p><strong>Acelerador e Compactador</strong> de download</p>
                    </li>
                    <li>
                      <FileCopyIcon className="icone-plano"/>
                      <p>Servidor <strong>Brasileiro</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=8">
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
                    
                  <p class="text-muted">Recomendado para servidores médio!</p>
                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">
                    <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p><strong>200</strong> slots</p>
                    </li>
                    <li>
                      <DoneIcon className="icone-plano"/>
                      <p><strong>5~40ms</strong> de Ping</p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>10GB</strong> de Disco</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos</strong></p>
                    </li>
                    <li>
                      <AlternateEmailIcon className="icone-plano"/>
                      <p><strong>Acelerador e Compactador</strong> de download</p>
                    </li>
                    <li>
                      <FileCopyIcon className="icone-plano"/>
                      <p>Servidor <strong>Brasileiro</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=10">
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
                      R$59.99<span class="price-cycle h6">/Mês</span>
                    </div>
                  </div>
                    
                  <p class="text-muted">Recomendado para servidores grandes!</p>
                </div>
                <div class="pricing-content">
                  <ul class="list-unstyled pricing-feature-list-2 mt-4">
                  <li>
                      <PeopleAltIcon className="icone-plano"/>
                      <p><strong>300</strong> slots</p>
                    </li>
                    <li>
                      <DoneIcon className="icone-plano"/>
                      <p><strong>5~40ms</strong> de Ping</p>
                    </li>
                    <li>
                      <SaveIcon className="icone-plano"/>
                      <p><strong>Ilimitado</strong> de Disco</p>
                    </li>
                    <li>
                      <SecurityIcon className="icone-plano"/>
                      <p>Proteção <strong>Ddos/Dos</strong></p>
                    </li>
                    <li>
                      <AlternateEmailIcon className="icone-plano"/>
                      <p><strong>Acelerador e Compactador</strong> de download</p>
                    </li>
                    <li>
                      <FileCopyIcon className="icone-plano"/>
                      <p>Servidor <strong>Brasileiro</strong></p>
                    </li>
                    <li>
                      <StorageIcon className="icone-plano"/>
                      <p><strong>99.9%</strong> de UPTIME garantido</p>
                    </li>
                    
                  </ul>
                  <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=12">
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
  
export default MultiTheftAuto;
