import { useState } from 'react';
import {
  Title,
  Wrapper,
  BoldText,
  Text,
  List,
  Item,
  StyledLink,
  Form,
  Input,
  Textarea,
  Button,
} from './HomeContacts.styled';

import { ImLocation } from 'react-icons/im';
import { BsFillTelephoneFill, BsSkype, BsFacebook } from 'react-icons/bs';
import { FaViber } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const HomeContacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    console.log({ name, email, message });

    resetForm();
  };

  return (
    <Wrapper>
      <Title>Contacts</Title>

      <BoldText>
        We are open for dialog and you are welcome to share your opinions or
        thoughts with us.
      </BoldText>

      <Text>
        Hit us up any time through email with any idea and help us turn your
        great ideas into brilliant projects.
      </Text>

      <List>
        <Item>
          <ImLocation size={20} color="#276ED8" />
          <StyledLink href="https://goo.gl/maps/5VrsMpk5kMiZiES36">
            Ukraine, Kyiv, Rodyny Kristeriv 20B
          </StyledLink>
        </Item>

        <Item>
          <BsFillTelephoneFill size={20} color="#276ED8" />
          <StyledLink href="tel:+380933455676">+38 (093) 345 56 76</StyledLink>
        </Item>

        <Item>
          <FaViber size={20} color="#276ED8" />
          <StyledLink href="tel:+380933455677">+38 (093) 345 56 77</StyledLink>
        </Item>

        <Item>
          <BsSkype size={20} color="#276ED8" />
          <StyledLink href="stype:stanassets">Stanassets</StyledLink>
        </Item>

        <Item>
          <MdEmail size={20} color="#276ED8" />
          <StyledLink href="mailto:stanAssets@gmail.com">
            stanAssets@gmail.com
          </StyledLink>
        </Item>

        <Item>
          <BsFacebook size={20} color="#276ED8" />
          <StyledLink href="Facebook.com/Stanassets">
            Facebook.com/Stanassets
          </StyledLink>
        </Item>
      </List>

      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />

        <Textarea
          name="message"
          cols="24"
          rows="4"
          placeholder="Message"
          value={message}
          onChange={handleInputChange}
        ></Textarea>

        <Button type="submit">Send request</Button>
      </Form>
    </Wrapper>
  );
};

export default HomeContacts;
