import { Admin, Resource } from 'react-admin';
import { dataProvider } from './providers/dataProvider';
import post from './operations/post';
import comments from './operations/comments';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='posts' {...post} />
    <Resource name='comments' {...comments} />
  </Admin>
);
