import {
  Admin, Resource
} from "react-admin";
import {dataProvider} from "./dataProvider";
import post from "./operations";

export const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="post" {...post} />
    </Admin>
);
