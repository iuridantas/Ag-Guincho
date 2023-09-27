import { SessionAboutUs } from '../../components/session/sessionAboutUs';
import { SessionAssistance } from '../../components/session/sessionAssistance';
import { SessionContact } from '../../components/session/sessionContact';
import { SessionInitial } from '../../components/session/sessionInitial';
import { Container, Buttons } from './style';
import { FaWhatsappSquare, FaPhoneAlt } from 'react-icons/fa';

export function Home() {
  const phoneNumber = '77988461478';

  const operatorCodes = {
    Claro: '21',
    CTBC: '12',
    Oi: '31',
    OiBrasilTelecom: '14',
    Nextel: '99',
    Sercomtel: '4',
    TIM: '41',
    Vivo: '15',
  };

  const handlePhoneButtonClick = (operator: keyof typeof operatorCodes) => {
    const operatorCode = operatorCodes[operator];
    if (operatorCode) {
      const fullPhoneNumber = `0${operatorCode}${phoneNumber}`;
      window.location.href = `tel:${fullPhoneNumber}`;
    }
  };

  return (
    <Container aria-label="Página inicial">
      <Buttons>
        <a
          href="https://api.whatsapp.com/send?phone=5577988461478"
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
        <a
          className="phoneButton"
          onClick={() => handlePhoneButtonClick('Claro')}
        >
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
