import { SessionAssistance } from '../../components/session/sessionAssistance';
import { SessionInitial } from '../../components/session/sessionInitial';
import { Container } from './style';

export function Home() {
  return <Container aria-label="Página inicial">
    <SessionInitial/>
    <SessionAssistance/>
  </Container>;
}
