import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../action/techAction";
import PropTypes from "prop-types";

const TechSelectOptions = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);
  console.log(techs);
  return (
    !loading &&
    techs &&
    techs.map(tech => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {`${tech.firstName} ${tech.lastName}`}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  techs: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  techs: state.tech.techs,
  loading: state.tech.loading
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechSelectOptions);
