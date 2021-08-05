import './Minecraft.css';
import Menu from "../others/Menu";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function Minecraft() {
  document.title = "Minecraft | CamargoHost | CamargoHost.com.br";
    return (
      <div className="background-color-plan">
        <Menu tipo="minecraft" />
        <div class="section wide img">
          <Container>

            <Grid container spacing={4}>
              <Grid item xs className="max-width">
                <div className="plan">

                  <img src="/assets/img/produto-01.png" className="image-7-plan" />
                    <h2 className="heading-5-plan">2GB</h2>

                    <div className="text-block-3-plan">R$ 27,99</div>

                    <h4 className="heading-6-plan">R$ 18,99 / mês</h4>
                    
                    <p className="paragraph-4">Plano recomendado para proxys (bungeecord)&nbsp;e testes simples.<br /></p>
                    
                    <a href="http://sac.camargohost.com.br/cart.php?a=add&pid=28">
                      <Button variant="contained" color="secondary" className="button-sell button-sell-white">
                      Assinar - Java Edition
                      </Button>
                    </a>

                  </div>
                </Grid>

              <Grid item xs className="max-width">
                <div className="plan">

                  <img src="/assets/img/produto-02.png" className="image-7-plan" />
                    <h2 className="heading-5-plan">3GB</h2>

                    <div className="text-block-3-plan">R$ 48,99</div>

                    <h4 className="heading-6-plan">R$ 27,99 / mês</h4>
                    
                    <p className="paragraph-4">Plano recomendado para survival vanilla e pequenos servidores que estão começando.<br /></p>
                    
                    <a href="https://sac.camargohost.com.br/cart.php?a=add&pid=29">
                      <Button variant="contained" color="secondary" className="button-sell button-sell-white">
                      Assinar - Java Edition
                      </Button>
                    </a>

                  </div>
              </Grid>

              <Grid item xs className="max-width">
                <div className="plan">

                  <img src="/assets/img/produto-03.png" className="image-7-plan" />
                    <h2 className="heading-5-plan">4GB</h2>

                    <div className="text-block-3-plan">R$ 64,00</div>

                    <h4 className="heading-6-plan">R$ 48,99 / mês</h4>
                    
                    <p className="paragraph-4">Plano ideal para começar a jogar com versões mais novas e modpacks de versões mais antigas. Também recomendado para servidores públicos de pequeno porte.<br /></p>
                    
                    <a href="http://sac.camargohost.com.br/cart.php?a=add&pid=30">
                      <Button variant="contained" color="secondary" className="button-sell button-sell-white">
                      Assinar - Java Edition
                      </Button>
                    </a>

                  </div>
              </Grid>
            </Grid>


            <Grid container spacing={4} className="margin-top">
              <Grid item xs className="max-width">
                <div className="plan">

                  <img src="/assets/img/produto-04.png" className="image-7-plan" />
                    <h2 className="heading-5-plan">8GB</h2>

                    <div className="text-block-3-plan">R$ 114,99</div>

                    <h4 className="heading-6-plan">R$ 94,60 / mês</h4>
                    
                    <p className="paragraph-4">Plano para os modpacks mais exigentes, já comporta servidores públicos de grande porte.<br /></p>
                    
                    <a href="http://sac.camargohost.com.br/cart.php?a=add&pid=31">
                      <Button variant="contained" color="secondary" className="button-sell button-sell-white">
                      Assinar - Java Edition
                      </Button>
                    </a>

                  </div>
                </Grid>

              <Grid item xs className="max-width">
                <div className="plan">

                  <img src="/assets/img/produto-05.png" className="image-7-plan" />
                    <h2 className="heading-5-plan">16GB</h2>

                    <div className="text-block-3-plan">R$ 189,99</div>

                    <h4 className="heading-6-plan">R$ 154,99 / mês</h4>
                    
                    <p className="paragraph-4">Um de nossos planos mais avançados, ideal para grandes servidores de factions com muitos jogadores.<br /></p>
                    
                    <a href="http://sac.camargohost.com.br/cart.php?a=add&pid=32">
                      <Button variant="contained" color="secondary" className="button-sell button-sell-white">
                      Assinar - Java Edition
                      </Button>
                    </a>

                  </div>
              </Grid>

              <Grid item xs className="max-width">
                <div className="plan">

                  <img src="/assets/img/produto-06.png" className="image-7-plan" />
                    <h2 className="heading-5-plan">20GB</h2>

                    <div className="text-block-3-plan">R$ 249,99</div>

                    <h4 className="heading-6-plan">R$ 201,99 / mês</h4>
                    
                    <p className="paragraph-4">O mais poderoso, para os maiores e mais exigentes servidores.<br /></p>
                    
                    <a href="http://sac.camargohost.com.br/cart.php?a=add&pid=33">
                      <Button variant="contained" color="secondary" className="button-sell button-sell-white">
                      Assinar - Java Edition
                      </Button>
                    </a>

                  </div>
              </Grid>
            </Grid>
            

          </Container>
        </div>
      </div>
    );
  }
  
export default Minecraft;
