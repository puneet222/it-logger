import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({
        html: "Please Enter the values",
        classes: "rounded"
      });
    } else {
      console.log(firstName, lastName);
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h5 className="center">Add Technician</h5>
        <div className="input-field">
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={e => setFirstName(e.target.value)}
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="input-field">
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={e => setLastName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
      </div>
      <div className="modal-footer">
        <div className="secondary-content">
          <a className="waves-effect blue waves-light btn" onClick={onSubmit}>
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddTechModal;
