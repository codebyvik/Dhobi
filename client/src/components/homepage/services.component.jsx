import { Link } from "react-router-dom";
import handwash from "../../assets/handwash.png";
import iron from "../../assets/iron.png";
import stain from "../../assets/stain.png";
import wash from "../../assets/wash.png";
import washingMachine from "../../assets/washingMachine.png";
const ServicesComponent = () => {
  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between mb-4">
        <h5>Services offered</h5>
        <Link to="/shops">explore </Link>
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="text-center">
          <img src={iron} alt="iron" />
          <p>Iron</p>
        </div>
        <div className="text-center">
          <img src={stain} alt="stain" />
          <p>Stain removal </p>
        </div>
        <div className="text-center">
          <img src={wash} alt="wash" />
          <p>Wash</p>
        </div>
        <div className="text-center">
          <img src={handwash} alt="handwash" />
          <p>Hand wash</p>
        </div>
        <div className="text-center">
          <img src={washingMachine} alt="washingMachine" />
          <p>Machine wash</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
