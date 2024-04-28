import PostList from './PostList';
import PostEdit from './PostEdit';
import PostShow from './PostShow';

const post = {
  list: <PostList />,
  edit: <PostEdit />,
  show: <PostShow />,
  options: { label: 'Post' },
};

export default post;
