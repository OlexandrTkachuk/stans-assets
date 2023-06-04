import StarRate from 'components/StarRate/StarRate';
import { Wrapper, Image, ReviewButton } from './HomeClatch.styled';

const HomeClatch = () => {
  return (
    <Wrapper>
      <Image src="https://i.ibb.co/JB2QLnp/clutch.jpg" alt="clutch" />

      <StarRate />

      <ReviewButton type="button">Check out reviews</ReviewButton>
    </Wrapper>
  );
};

export default HomeClatch;
