import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

const ListTechModal = () => {
  useEffect(() => {
    getTechs();
  }, []);

  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTechs = async () => {
    setLoading(true);
    let res = await fetch("/techs");
    let data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="list-tech-modal" className="modal">
      <div className="modal-content">
        <h5 className="center">Technicians</h5>
        <ul className="collection">
          {!loading && techs.length === 0 ? (
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

export default ListTechModal;
