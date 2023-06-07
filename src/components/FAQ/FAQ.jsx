import faq from '../../helpers/faq.json';
import { Item, Link, List, Title, Wrapper } from './FAQ.styled';

console.log(faq);

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
    </Wrapper>
  );
};

export default FAQ;
