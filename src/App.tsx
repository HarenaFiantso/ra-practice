import { Admin, Resource } from 'react-admin';
import { dataProvider } from './providers/dataProvider';
import post from './operations';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='posts' {...post} />
  </Admin>
);
