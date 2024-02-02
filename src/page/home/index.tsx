import { SessionAboutUs } from '../../components/session/sessionAboutUs';
import { SessionAssistance } from '../../components/session/sessionAssistance';
import { SessionContact } from '../../components/session/sessionContact';
import { SessionInitial } from '../../components/session/sessionInitial';
import { Container, Buttons } from './style';
import { FaWhatsappSquare, FaPhoneAlt } from 'react-icons/fa';

export function Home() {
  const phoneNumber = '077988461478';

  const handlePhoneButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Container aria-label="Página inicial">
      <Buttons>
        <a
          href={`https://api.whatsapp.com/send?phone=55${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Número do WhatsApp de AG Guincho - Clique para abrir no WhatsApp"
          title="Número do WhatsApp de AG Guincho - Clique para abrir no WhatsApp"
        >
          <FaWhatsappSquare
            className="whatsApp"
            alt="Ícone do WhatsApp de AG Guincho"
          />
        </a>
        <a
          className="phoneButton"
          onClick={handlePhoneButtonClick}
          aria-label="Telefone de AG Guincho - Clique para ligar"
          title="Telefone de AG Guincho - Clique para ligar"
        >
          <FaPhoneAlt className="phone" alt="Ícone de telefone de AG Guincho" />
        </a>
      </Buttons>
      <SessionInitial />
      <SessionAssistance />
      <SessionAboutUs />
      <SessionContact />
    </Container>
  );
}
