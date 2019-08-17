import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTech } from "../../action/techAction";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({
        html: "Please Enter the values",
        classes: "rounded"
      });
    } else {
      addTech({
        firstName,
        lastName
      });
      M.toast({
        html: `${firstName} is added as a Tech`
      });
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
          <a
            className="modal-close waves-effect blue waves-light btn"
            onClick={onSubmit}
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTech }
)(AddTechModal);
