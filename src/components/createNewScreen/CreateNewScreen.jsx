import React from "react";
import "./createNewScreen.scss";
import NavForm from "./NavForm";
import FormCreateNew from "./FormCreateNew";

const CreateNewScreen = () => {
  return (
    <div className="createNewScreenContainer">
      <NavForm />
      <FormCreateNew />
    </div>
  );
};

export default CreateNewScreen;
