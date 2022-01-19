import { useState, useEffect } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return { handleChange, values, handleSubmit };
};

export default useForm;
