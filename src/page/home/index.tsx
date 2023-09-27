import { SessionAboutUs } from '../../components/session/sessionAboutUs';
import { SessionAssistance } from '../../components/session/sessionAssistance';
import { SessionContact } from '../../components/session/sessionContact';
import { SessionInitial } from '../../components/session/sessionInitial';
import { Container, Buttons } from './style';
import { FaWhatsappSquare, FaPhoneAlt } from 'react-icons/fa';

export function Home() {
  const phoneNumber = '77988461478';

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
          aria-label="Número do WhatsApp de AG Guincho"
          title="Número do WhatsApp de AG Guincho"
        >
          <FaWhatsappSquare
            className="whatsApp"
            alt="Ícone representando o WhatsApp de AG Guincho"
          />
        </a>
        <a className="phoneButton" onClick={handlePhoneButtonClick}>
          <FaPhoneAlt
            className="phone"
            alt="Ícone representando o telefone de AG Guincho"
          />
        </a>
      </Buttons>
      <SessionInitial />
      <SessionAssistance />
      <SessionAboutUs />
      <SessionContact />
    </Container>
  );
}
