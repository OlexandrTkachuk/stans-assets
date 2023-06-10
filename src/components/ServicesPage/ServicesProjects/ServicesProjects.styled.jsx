import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 80px;
  padding: 40px 30px 80px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #194484;
  margin-bottom: 60px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const Item = styled.li`
  min-width: 320px;
  background: #ffffff;
  box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
  border-radius: 16px;
  min-height: 390px;
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  width: 320px;
  height: 224px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const TextWrapper = styled.div`
  padding: 12px 13px 16px;
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 2.11;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #0d6eb7;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  color: #000000;
`;
