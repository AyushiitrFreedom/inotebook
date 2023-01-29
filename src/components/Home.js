import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";

const Home = (props) => {
  const {showAlert} = props
  
  return (
    <>
      
      <Notes showAlert={showAlert}></Notes>
      
    </>
  );
};

export default Home;
