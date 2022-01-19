import Signup from "./Signup";
import "../css/Form.css";
import { useState } from "react";
import Success from "./Success";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = e => {
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="form-container">
        <span className="close-btn">X</span>
        <div className="form-content-left">
          <img src="img/img-2.svg" alt="spaceship" className="form-img" />
        </div>
        {!isSubmitted ? <Signup submitForm={submitForm} /> : <Success />}
      </div>
    </>
  );
};

export default Form;
