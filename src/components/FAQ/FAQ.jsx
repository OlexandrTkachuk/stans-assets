import faq from '../../helpers/faq.json';
import { Item, Link, List, Title, Wrapper } from './FAQ.styled';
import InfoList from './InfoList/InfoList';

const FAQ = () => {
  return (
    <Wrapper>
      <Title>FAQ’s</Title>

      <List>
        {faq.map(({ id, name }) => (
          <Item key={id}>
            <Link href={`#${id}`}>{name}</Link>
          </Item>
        ))}
      </List>

      <InfoList />
    </Wrapper>
  );
};

export default FAQ;
