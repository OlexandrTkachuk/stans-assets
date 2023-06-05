import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 0 30px;
  margin-bottom: 80px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #194484;
  margin-bottom: 14px;
  text-align: center;
`;

export const BoldText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: #242424;
  margin-bottom: 32px;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  color: #242424;
  margin-bottom: 32px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  margin-bottom: 66px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledLink = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-transform: capitalize;
  color: #242424;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  background: #ffffff;
  box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
  border-radius: 6px;
  padding: 40px 22px;
  margin: 0 auto;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  padding: 10px 0 10px 16px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #a9a9a9;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 0 0 16px;
  background: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  margin-bottom: 30px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #a9a9a9;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #2da531;
  border-radius: 6px;
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  padding: 14px 0;
`;
