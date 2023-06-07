import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #194484;
  margin-bottom: 38px;
  text-align: center;
`;

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 30px;
  margin-bottom: 70px;

  &::before {
    content: '';
    width: 19px;
    height: 96%;
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
    background-image: url(https://i.ibb.co/B3FfZJD/FAQ-left-border.png);
    background-repeat: no-repeat;
  }

  &::after {
    content: '';
    width: 19px;
    height: 96%;
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    background-image: url(https://i.ibb.co/dBxcP4D/FAQ-right-border.png);
    background-repeat: no-repeat;
  }
`;

export const Item = styled.li`
  max-width: 300px;
  transition: all 0.2s linear;
  text-align: start;
  padding-left: 12px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Link = styled.a`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.56;
  color: #0d6eb7;
`;

export const InfoList = styled.ul``;

export const InfoItem = styled.li``;
