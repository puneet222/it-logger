import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteLog, setCurrentLog } from "../../action/logAction";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

const LogItem = ({ log, deleteLog, setCurrentLog }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({
      html: `Log ${log.id} is Deleted`
    });
  };

  const setLog = () => {
    console.log(log);
    setCurrentLog(log);
  };

  return (
    <li className="collection-item">
      <div>
        <a
          onClick={setLog}
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID# {log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on
          <Moment format="MMMM do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i onClick={onDelete} className="material-icons grey-text">
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  deleteLog: PropTypes.func.isRequired,
  setCurrentLog: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteLog, setCurrentLog }
)(LogItem);
