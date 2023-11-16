import { AssistanceSession } from './style';
import { GiTowTruck } from 'react-icons/gi';
import { BsCreditCard } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';

export function SessionAssistance() {
  return (
    <article aria-label="Sobre a Assistência 24h" id="assistência">
      <AssistanceSession>
        <header>
          <h2>
            SERVIÇO DE REBOQUE 24 HORAS EM VITÓRIA DA CONQUISTA E E REGIÃO
          </h2>
        </header>
        <div className="container">
          <section className="assistance">
            <div className="info">
              <BiMap className="icon" alt="Ícone de mapa" />
              <h2>ATENDEMOS VOCÊ</h2>
              <p>
                Oferecemos serviços de reboque e guincho 24 horas em Vitória da
                Conquista e arredores, garantindo tranquilidade enquanto
                cuidamos do transporte do seu veículo.
              </p>
            </div>
            <div className="info">
              <GiTowTruck className="icon" alt="Ícone de caminhão de reboque" />
              <h2>RAPIDEZ NO REBOQUE</h2>
              <p>
                Contamos com uma frota de veículos novos, modernos e equipados,
                além de uma equipe de profissionais altamente treinados e
                experientes, assegurando reboque rápido e eficiente.
              </p>
            </div>
            <div className="info">
              <BsCreditCard className="icon" alt="Ícone de cartão de crédito" />
              <h2>OPÇÕES DE PAGAMENTO</h2>
              <p>
                Oferecemos diversas opções de pagamento, incluindo dinheiro, PIX
                e cartões de crédito e débito, para garantir que ninguém fique
                desamparado quando mais precisa.
              </p>
            </div>
          </section>
        </div>
      </AssistanceSession>
    </article>
  );
}
