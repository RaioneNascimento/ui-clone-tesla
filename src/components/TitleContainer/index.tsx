import { ITitleBack } from 'src/@types/titleBack';
import { TitleContent, Container } from './styles';

export const TitleContainer = ({ activeContainer = false, titleContainer, title, subtitle }: ITitleBack) => {
  return (
    <Container>
      {activeContainer && <TitleContent>
        <span className='shadow-text'>{titleContainer}</span>
      </TitleContent>
      }
      <h2 className='title'>{title}</h2>
      <p>{subtitle}</p>
    </Container>
  );
}
