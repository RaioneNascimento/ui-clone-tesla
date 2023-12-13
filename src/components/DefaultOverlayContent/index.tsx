import { TitleContainer } from '../TitleContainer';
import { Container, Content } from './styles';

interface Props {
  type: string;
  label: string;
  description: string;
}

const DefaultOverlayContent: React.FC<Props> = ({ type, label, description }) => {
  return (
    <Container>
      <TitleContainer
        title={label}
        subtitle={description}
        activeContainer
        titleContainer={label}
      />

      {type && <Content>{type}</Content>}

    </Container>
  );
};

export default DefaultOverlayContent;