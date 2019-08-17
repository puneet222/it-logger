import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { editLog } from "../../action/logAction";
import PropTypes from "prop-types";

const EditLogModal = ({ current, editLog }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    if (current) {
      const { message, tech, attention, id } = current;
      setMessage(message);
      setAttention(attention);
      setTech(tech);
    }
  }, [current]);

  const onSubmit = e => {
    if (message === "" || tech === "") {
      M.toast({
        html: "Please fill the fields",
        classes: "rounded"
      });
    }
    editLog({
      id: current.id,
      message,
      tech,
      attention,
      date: new Date()
    });
  };

  return (
    <div id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h5 className="center">Edit Log</h5>
        <div className="input-field">
          <input
            value={message}
            type="text"
            name="message"
            placeholder="Message"
            onChange={e => setMessage(e.target.value)}
          />
          <label htmlFor="message">Message</label>
        </div>
        <div className="input-field">
          <select value={tech} onChange={e => setTech(e.target.value)}>
            <option value="" disabled>
              Select Tech
            </option>
            <option value="Puneet Aggarwal">Puneet Aggarwal</option>
            <option value="Harish Saini">Harish Saini</option>
          </select>
        </div>
        <label>
          <input
            type="checkbox"
            className="filled-in"
            value={attention}
            checked={attention}
            onChange={e => setAttention(!attention)}
          />
          <span>Attention</span>
        </label>
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

EditLogModal.propTypes = {
  current: PropTypes.object,
  editLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(
  mapStateToProps,
  { editLog }
)(EditLogModal);
