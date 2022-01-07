import { Switch, Route } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";
import Card from "../Pages/ProductDetails";

function AllRoutes() {
  return (
    <Switch>
      <Route path="/" exact>
        <h1>Home</h1>
      </Route>
      <Route exact path="/products">
        <AllProducts />
      </Route>
      <Route path="/products/:id">
        <Card />
      </Route>
    </Switch>
  );
}

export default AllRoutes;
