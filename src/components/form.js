import React from "react";

const Form = props => (
   <form onSubmit={props.weatherMethod}>
      <input type="text" name="city" placeholder="Your city.." autocomplete="off" />
      <button>Enter</button>
   </form>
)

export default Form;