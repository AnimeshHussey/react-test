import React from "react";
import { Checkbox } from "semantic-ui-react";

export const CheckboxExampleToggle = (props) => {
  const handleCheckboxChange = (checked) => {
    props.toggleButton(checked);
  };
  return (
    <Checkbox
      toggle
      onChange={(event, { checked }) => handleCheckboxChange(checked)}
    />
  );
};
