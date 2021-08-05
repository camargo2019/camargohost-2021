import './SobreNos.css';
import Menu from "../others/Menu";
import Container from '@material-ui/core/Container';

function SobreNos() {
  document.title = "Sobre nós | CamargoHost | CamargoHost.com.br";
    return (
      <div>
        <Menu tipo="sobre-nos"/>
        <section className="terms-condition ptb-50">
          <Container>
            <div className="pt-5">
                <h5>Sobre Nós</h5>
                <p>
                A CamargoHost oferece uma ampla linha de serviços de datacenter para seu negócio, que vão desde soluções em servidores dedicados e colocation até proteção DDoS a nível de rede e virtualização de servidores.
                <br />
                Atualmente ofeceremos serviços em nosso próprio data center em Cascavel - PR e temos presença em outros 4 datacenter em Muriaé - MG, São Paulo, em Quebec no Canadá e em Miami nos EUA.
                <br /><br />
                Temos conexão com as maiores operadoras do Brasil e do mundo, além de saída no PTT Metro de São Paulo, o que garante um tempo de resposta (ping) sempre baixo para nossos servidores em todo o país. Todos os servidores também contam com proteção DDoS gratuita e permanente.
                <br /><br />
                Buscamos sempre oferecer qualidade superior a nossos clientes, utilizando tecnologia de ponta e profissionais que sabem o que fazem.
                <br /><br />
                Temos presença em datacenters Tier III e Tier IV no Brasil, EUA e Canadá, garantindo assim a qualidade dos serviços prestados por nós. Com equipe 24/7 no datacenter, garantimos o uptime de nossos serviços, além de correção rápida de qualquer problema.
                </p>
            </div>
          </Container>
          </section>
      </div>
    );
  }
  
export default SobreNos;
  