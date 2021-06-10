import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";



const Form = () => {
 

  return (
    <div className="form-container">
      <ConditionallyRender
       
        elseShow={
          <>
          <div>
              <form className="intro">
                <div>Name :- &nbsp;&nbsp;
                  <input className="intro-input"></input>
                  </div>
                  <div>Email :-  &nbsp; &nbsp;
                  <input className="intro-input"></input>
                  </div>
                  <div>Phone :- &nbsp;
                  <input className="intro-input"></input>
                  </div>       
                  
                  <button className="intro-button">Submit</button>
                </form>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Form;