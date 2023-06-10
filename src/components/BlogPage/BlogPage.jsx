import BlogItem from './BlogItem/BlogItem';
import blogCards from '../../helpers/blogCards.json';
import { Title, Wrapper, List } from './BlogPage.styled';

const BlogPage = () => {
  return (
    <Wrapper>
      <Title>Blog</Title>

      <List>
        <BlogItem item={blogCards} />
      </List>
    </Wrapper>
  );
};

export default BlogPage;
