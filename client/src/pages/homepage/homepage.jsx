import laundry from "../../assets/welcome.jpg";

import { Container } from "react-bootstrap";
import { Welcome } from "./homepage.style";
import NearByShopComponent from "../../components/homepage/nearByShop.component";
import ServicesComponent from "../../components/homepage/services.component";

const HomePage = () => {
  return (
    <Container>
      <Welcome>
        <img src={laundry} alt="welcome" />
        <h1 className="d-flex justify-content-center align-items-center h-100 text-info">
          Welcome to Dhobi
        </h1>
      </Welcome>
      <ServicesComponent />
      <NearByShopComponent />
    </Container>
  );
};

export default HomePage;
