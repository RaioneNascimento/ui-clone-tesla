import { LoadingContainer, LoadingImage } from './styles';
import imageSource from '../../assets/images/image_loading.svg';
import ReactLoading from 'react-loading';

export const Loading = () => (
  <LoadingContainer>
    <LoadingImage src={imageSource} alt="Loading" />

    <ReactLoading type="spinningBubbles" color="#fff" width={22} />
  </LoadingContainer>
);