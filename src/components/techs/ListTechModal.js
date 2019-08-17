import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../action/techAction";

const ListTechModal = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="list-tech-modal" className="modal">
      <div className="modal-content">
        <h5 className="center">Technicians</h5>
        <ul className="collection">
          {(!loading && techs === null) || techs.length === 0 ? (
            <h4 className="center">No Tech Present</h4>
          ) : (
            techs.map(tech => {
              return <TechItem key={tech.id} tech={tech} />;
            })
          )}
        </ul>
      </div>
    </div>
  );
};

ListTechModal.propTypes = {
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
)(ListTechModal);
