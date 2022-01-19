import Signup from "./Signup";
import "../css/Form.css";

const Form = () => {
  return (
    <>
      <div className="form-container">
        <span className="close-btn">X</span>
        <div className="form-content-left">
          <img src="" alt="spaceship" className="form-img" />
        </div>
        <Signup />
      </div>
    </>
  );
};

export default Form;
