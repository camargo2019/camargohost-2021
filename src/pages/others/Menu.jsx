import './Menu.css';
import {
    Link
  } from "react-router-dom";

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DehazeIcon from '@material-ui/icons/Dehaze';

import GamesIcon from '@material-ui/icons/Games';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import StorageIcon from '@material-ui/icons/Storage';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import CloudIcon from '@material-ui/icons/Cloud';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});

function Menu(props) {

    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >
      <div className="logo">
        <img src="/assets/img/logo.png" />
      </div>
      <List>
      
            <Link to={"/"} className="link-button-menu">
                <ListItem button key={"home"}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
            </Link>
      
            <Link to={"/hospedagem"} className="link-button-menu">
                <ListItem button key={"hospedagem"}>
                    <ListItemIcon>
                        <StorageIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Hospedagem de Sites"} />
                </ListItem>
            </Link>
      
            <Link to={"/streaming"} className="link-button-menu">
                <ListItem button key={"streaming"}>
                    <ListItemIcon>
                        <GraphicEqIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Streaming de Áudio"} />
                </ListItem>
            </Link>
      
          <Link to={"/mta"} className="link-button-menu">
            <ListItem button key={"mta"}>
                <ListItemIcon>
                    <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText primary={"Multi Theft Auto"} />
            </ListItem>
          </Link>

          <Link to={"/minecraft"} className="link-button-menu">
            <ListItem button key={"minecraft"}>
                <ListItemIcon>
                    <GamesIcon />
                </ListItemIcon>
                <ListItemText primary={"Minecraft"} />
            </ListItem>
          </Link>

          <Link to={"/vps"} className="link-button-menu">
            <ListItem button key={"vps"}>
                <ListItemIcon>
                    <CloudIcon />
                </ListItemIcon>
                <ListItemText primary={"VPS Gamer"} />
            </ListItem>
          </Link>

      </List>


      <Divider />

      <List>
        
        <a href={"https://sac.camargohost.com.br/index.php?rp=/login"} className="link-button-menu">
            <ListItem button key={"area-do-cliente"}>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"Área do Cliente"} />
            </ListItem>
        </a>
        
        <Link to={"/sobre-nos"} className="link-button-menu">
            <ListItem button key={"sobre-nos"}>
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Sobre Nós"} />
            </ListItem>
        </Link>
        
        <Link to={"/termos-de-uso"} className="link-button-menu">
            <ListItem button key={"termos-de-uso"}>
                <ListItemIcon>
                    <HelpOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={"Termos de Uso"} />
            </ListItem>
        </Link>

      </List>
    </div>
  );

    return (
    <>
    <header>
      <div className="header-flex">
        <div className="logo-header">
          <img src="/assets/img/logo_site.png" />
        </div>

        <div className="button-menu">
          <Button onClick={toggleDrawer("left", true)} className="button-menu-color">
              <DehazeIcon className="button-menu-font" />
          </Button>
        </div>
      </div>

      <div className="mineBanner">
          {props.tipo === "home"
          ? <>
            <div className="mensagemHeader">
              <h1>A MELHOR <br /> HOST MINECRAFT</h1>
              <h2>Servidores brasileiro com o melhor desempenho, com processadores Ryzen 5, Ryzen 7 é até mesmo Ryzen 9</h2>
            </div> 
            <img src="/assets/img/skins-mine.png" />
            </>
          : ''
          }

          {props.tipo === "hospedagem"
          ? <>
            <div className="mensagemHeader">
              <h1>HOSPEDAGEM DE <br /> SITES NO BRASIL</h1>
              <h2>Hospedagem de Site com tudo que você precisa para ter sucesso na internet. Domínio e SSL Grátis. Suporte 24h o ano todo.</h2>
            </div> 
            <img src="/assets/img/hospedagem-banner.png" />
            </>
          : ''
          }

          {props.tipo === "streaming"
          ? <>
            <div className="mensagemHeader">
              <h1>STREAMING DE QUALIDADE <br />
              DELAY ATÉ 4/seg</h1>
              <h2>Hospedagem de Site com tudo que você precisa para ter sucesso na internet. Domínio e SSL Grátis. Suporte 24h o ano todo.</h2>
            </div> 
            <img src="/assets/img/streaming-banner.png" />
            </>
          : ''
          }

          {props.tipo === "mta"
          ? <>
            <div className="mensagemHeader">
              <h1>HOST DE MTA <br />
              SERVIDORES BRASILEIRO</h1>
              <h2>Servidores brasileiro com o melhor desempenho, com processadores Ryzen 5 e Ryzen 7</h2>
            </div> 
            <img src="/assets/img/mta_logo.png" />
            </>
          : ''
          }

          {props.tipo === "minecraft"
          ? <>
            <div className="mensagemHeader">
              <h1>A MELHOR <br /> HOST MINECRAFT</h1>
              <h2>Servidores brasileiro com o melhor desempenho, com processadores Ryzen 5, Ryzen 7 é até mesmo Ryzen 9</h2>
            </div> 
            <img src="/assets/img/minecraft-plano.png" />
            </>
          : ''
          }

          {props.tipo === "vps"
          ? <>
            <div className="mensagemHeader">
              <h1>VPS NO BRASIL <br/> PROPRIA PARA JOGOS</h1>
              <h2>Nossos planos de VPS Gamer oferecem excelentes recursos e desempenho, mantendo a melhor relação custo-benefício, na melhor infraestrutura do Brasil.</h2>
            </div> 
            <img src="/assets/img/vps-banner.png" />
            </>
          : ''
          }


          {props.tipo === "sobre-nos"
          ? <>
            <div className="mensagemHeader">
              <h1>SOBRE NÓS</h1>
              <h2>Vem conhecer um pouco dessa empresa que está ganhando o mercado com seus excelentes serviços prestado no brasil.</h2>
            </div> 
            <img src="/assets/img/sobre-nos.webp" />
            </>
          : ''
          }

          {props.tipo === "termos-de-uso"
          ? <>
            <div className="mensagemHeader">
              <h1>TERMOS DE USO</h1>
              <h2>Saiba sobre nossos termos de uso, para evitar suspensões ou até mesmo cancelamento permanentemente.</h2>
            </div> 
            <img src="/assets/img/termos-de-uso.png" />
            </>
          : ''
          }


          {props.tipo === "confirmar"
          ? <>
            <div className="mensagemHeader">
              <h1>CONFIRMAÇÃO DE PEDIDO</h1>
              <h2>Nós já estamos analisando seu pedido e logo mais estaremos atualizando, lembrando que todas as atualizações você recebe via e-mail.</h2>
            </div> 
            <img src="/assets/img/confirmacao.png" className="img-confirmar-pedido" />
            </>
          : ''
          }
        
      </div>
    
      {props.tipo === "home"
      ? <ArrowDownwardIcon className="IconeWhiteServices"/>
      : ''
      }
    </header>
    
    <React.Fragment key={"left"}>
        <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
        </Drawer>
    </React.Fragment>
    
    </>
    );
  }
  
export default Menu;
  