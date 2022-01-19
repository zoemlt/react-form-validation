import { useState, useEffect } from "react";

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setisSubmitting] = useState(false);

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
    setErrors(validate(values));
    setisSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors, isSubmitting };
};

export default useForm;
