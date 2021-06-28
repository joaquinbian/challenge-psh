import React, { useState, useContext } from "react";
import AppContext from "../../context/context";
import img from "../../assets/img/avatar-4.png";
import "./formCreateNew.scss";
import getTime from "../../assets/getDate";

const validate = (input) => {
  const errors = {};
  if (!input.name || !input.surname || !input.job || !input.msj) {
    errors.name = input.name ? "" : "name is required ";
    errors.surname = input.surname ? "" : "surname is required";
    errors.job = input.job ? "" : "occupation is required";
    errors.msj = input.msj ? "" : "message is required";
  }
  return errors;
};
const FormCreateNew = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    job: "",
    msj: "",
  });

  const [errors, setErrors] = useState({});

  const { addContact } = useContext(AppContext);

  const resetState = () => {
    setFormData({ name: "", surname: "", job: "", msj: "" });
  };
  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleBlur = (e) => {
    const { value, name } = e.target;
    setErrors(validate({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    for (let clave in errors) {
      if (errors[clave].length > 0) {
        return alert("please fix your errors before submit");
      } else {
        continue;
      }
    }
    for (let clave in formData) {
      if (formData[clave].length < 1) {
        return alert("please, fill all the inputs before submit");
      } else {
        continue;
      }
    }
    if (valid) {
      const contact = {
        ...formData,
        msj: { msj: formData.msj, hour: getTime() },
        msjReceived: [],
        name: `${formData.name} ${formData.surname}`,
        img,
        lastMsj: [{ msj: formData.msj, hour: getTime() }],
      };
      addContact(contact);
      alert("contactAdded");
      return resetState();
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
            value={formData.name}
            type="text"
            className="inputForm"
            name="name"
            onChange={handleFormChange}
            onBlur={handleBlur}
          />
          {errors.name ? <p className="error">{errors.name}</p> : ""}
        </div>
        <div className="inputContainer">
          <label>
            <p>Surname</p>
          </label>
          <input
            value={formData.surname}
            type="text"
            className="inputForm"
            name="surname"
            onChange={handleFormChange}
            onBlur={handleBlur}
          />
          {errors.surname ? <p className="error">{errors.surname}</p> : ""}
        </div>
        <div className="inputContainer">
          <label>
            <p>job</p>
          </label>
          <input
            type="text"
            value={formData.job}
            className="inputForm"
            name="job"
            onChange={handleFormChange}
            onBlur={handleBlur}
          />
          {errors.job ? <p className="error">{errors.job}</p> : ""}
        </div>
        <div className="inputContainer">
          <label>
            <p>Message</p>
          </label>
          <textarea
            type="text"
            value={formData.msj}
            className="inputForm"
            name="msj"
            onChange={handleFormChange}
            onBlur={handleBlur}
          />
          {errors.msj ? <p className="error">{errors.msj}</p> : ""}
        </div>
        <div className="submitContainer">
          <button type="submit">
            <p>SUBMIT</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCreateNew;
