import React, { useState, useContext } from "react";
import AppContext from "../../context/context";
import img from "../../assets/avatar-4.png";
import "./formCreateNew.scss";
import { Redirect } from "react-router";

const validate = (input) => {
  const errors = {};
  if (!input.name || !input.surname || !input.ocupation || !input.msj) {
    errors.name = input.name ? "" : "name is required ";
    errors.surname = input.surname ? "" : "surname is required";
    errors.occupation = input.ocupation ? "" : "occupation is required";
    errors.msj = input.msj ? "" : "message is required";
  }
  return errors;
};
const FormCreateNew = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    ocupation: "",
    msj: "",
  });

  const [errors, setErrors] = useState({});

  const { addContact } = useContext(AppContext);
  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors(validate({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    for (let clave in errors) {
      if (errors[clave].length > 0) {
        valid = false;
      } else {
        continue;
      }
    }
    if (valid) {
      const contact = {
        ...formData,
        msjReceived: [],
        name: `${formData.name} ${formData.surname}`,
        img,
        lastMsj: [],
      };
      addContact(contact);
      alert("contactAdded");
      setTimeout(() => {
        return <Redirect to="/home" />;
      }, 2000);
    } else {
      alert("please fix your errors before submit");
    }
  };
  return (
    <div className="mainContainer">
      <form className="formNewContainer" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>
            <p>Name</p>
          </label>
          <input
            type="text"
            className="inputForm"
            name="name"
            onChange={handleFormChange}
          />
          {errors.name ? <p>{errors.name}</p> : ""}
        </div>
        <div className="inputContainer">
          <label>
            <p>Surname</p>
          </label>
          <input
            type="text"
            className="inputForm"
            name="surname"
            onChange={handleFormChange}
          />
          {errors.surname ? <p>{errors.surname}</p> : ""}
        </div>
        <div className="inputContainer">
          <label>
            <p>Occupation</p>
          </label>
          <input
            type="text"
            className="inputForm"
            name="ocupation"
            onChange={handleFormChange}
          />
          {errors.ocupation ? <p>{errors.ocupation}</p> : ""}
        </div>
        <div className="inputContainer">
          <label>
            <p>msj</p>
          </label>
          <textarea
            type="text"
            className="inputForm"
            name="msj"
            onChange={handleFormChange}
          />
          {errors.msj ? <p>{errors.msj}</p> : ""}
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default FormCreateNew;
