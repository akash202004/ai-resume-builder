import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditResume = () => {
  const parmas = useParams();

  useEffect(() => {
    console.log(parmas);
  }, []);

  return <div>EditResume</div>;
};

export default EditResume;
