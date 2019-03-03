import React from "react";
import { FormGroup, Label, Input, FormText, FormFeedback } from "reactstrap";
import propTypes from "prop-types";

const TextInput = ({
  name,
  value,
  type,
  change,
  error,
  placeholder,
  label,
  blur,
  focus
}) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        invalid={error ? true : false}
        onChange={change}
        onBlur={blur}
        onFocus={focus}
      />
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  );
};

TextInput.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  value: propTypes.string,
  error: propTypes.string,
  change: propTypes.func.isRequired
};

TextInput.defaultProps = {
  type: "text",
  value: ""
};
export default TextInput;
