import { AssistanceSession } from './style';
import { GiTowTruck } from 'react-icons/gi';
import { BsCreditCard } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';

export function SessionAssistance() {
  return (
    <section aria-label="Explicação Sobre os valores: amor, compromisso e dedicação">
      <AssistanceSession>
        <h2>SERVIÇO DE REBOQUE 24 HORAS EM VITÓRIA DA CONQUISTA E E REGIÃO</h2>
        <div className="container">
          <div className="assistance">
            <div className="info">
              <BiMap className="icon" />
              <h3>ATENDEMOS VOCÊ</h3>
              <p>
                Oferecemos serviços de reboque e guincho 24 horas em Vitória da
                Conquista e arredores, garantindo tranquilidade enquanto
                cuidamos do transporte do seu veículo.
              </p>
            </div>
            <div className="info">
              <GiTowTruck className="icon" />
              <h3>RAPIDEZ NO REBOQUE</h3>
              <p>
                Contamos com uma frota de veículos novos, modernos e equipados,
                além de uma equipe de profissionais altamente treinados e
                experientes, assegurando reboque rápido e eficiente.
              </p>
            </div>
            <div className="info">
              <BsCreditCard className="icon" />
              <h3>OPÇÕES DE PAGAMENTO</h3>
              <p>
                Oferecemos diversas opções de pagamento, incluindo dinheiro, PIX
                e cartões de crédito e débito, para garantir que ninguém fique
                desamparado quando mais precisa.
              </p>
            </div>
          </div>
        </div>
      </AssistanceSession>
    </section>
  );
}
