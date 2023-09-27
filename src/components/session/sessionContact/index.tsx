import { ContactSession } from './style';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export function SessionContact() {
  return (
    <section aria-label="Contato" id="contato">
      <ContactSession>
        <h2>Entre em contato</h2>
        <div>
          <a
            href="https://instagram.com/ag_guincho?igshid=MzRlODBiNWFlZA=="
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Perfil do Instagram de AG Guincho"
            title="Perfil do Instagram de AG Guincho"
          >
            <h3>
              <FaInstagram
                className="instagram"
                alt="Ícone representando o perfil do Instagram de AG Guincho"
              />
              <span>Instagram</span>
            </h3>
            <p>ag_guincho</p>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5577988461478"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Número do WhatsApp de AG Guincho"
            title="Número do WhatsApp de AG Guincho"
          >
            <h3>
              <FaWhatsapp
                className="whatsApp"
                alt="Ícone representando o WhatsApp de AG Guincho"
              />
              <span />
              WhatsApp
            </h3>
            <p>(77) 9 8846-1478</p>
          </a>
          <a
            href="mailto:alanadps123@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email de AG Guincho"
            title="Email de AG Guincho"
          >
            <h3>
              <AiOutlineMail
                className="email"
                alt="Ícone representando o Email de AG Guincho"
              />
              <span />
              Email
            </h3>
            <p>alanadps123@hotmail.com</p>
          </a>
        </div>
      </ContactSession>
    </section>
  );
}
