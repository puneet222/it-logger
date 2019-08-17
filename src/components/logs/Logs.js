import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";
import { getLogs } from "../../action/logAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Logs = ({ logs, loading, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show...</p>
      ) : (
        logs.map(log => {
          return <LogItem key={log.id} log={log} />;
        })
      )}
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToParams = state => ({
  logs: state.log.logs,
  loading: state.log.loading
});

export default connect(
  mapStateToParams,
  { getLogs }
)(Logs);
