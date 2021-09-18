import { Switch, Route } from "react-router-dom";

import NavbarComponent from "./components/navbar/navbar";
import AddItems from "./pages/addItems/addItems.page";
import CustomerSignin from "./pages/auth/customerSignin.page";
import HomePage from "./pages/homepage/homepage";
import ShopDetails from "./pages/shopDetails/shopDetails.page";
import ShopPage from "./pages/shops/shop.page";

function App() {
  return (
    <>
      <NavbarComponent />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shops" component={ShopPage} exact />
        <Route path="/shopDetails" component={ShopDetails} exact />
        <Route path="/shopDetails/add-items" component={AddItems} exact />
        <Route path="/signin" component={CustomerSignin} exact />
      </Switch>
    </>
  );
}

export default App;
