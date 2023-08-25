import { useState } from "react";
import Checkbox from "./Checkbox";
export default function Fieldset({ category, fieldsetClass, legend, inputs }) {
  return (
    <fieldset className={`${fieldsetClass} ${category}s`} key={category}>
      <legend>{legend}:</legend>

      <Checkbox
        key={category}
        fieldsetClass={fieldsetClass}
        checkboxClass={category}
        checkboxName="Select All"
        checkboxId="all"
      />

      {inputs.map((input) => (
        <Checkbox
          key={input.id}
          fieldsetClass={fieldsetClass}
          checkboxClass={input.class}
          checkboxName={input.name}
          checkboxId={input.id}
        />
      ))}
    </fieldset>
  );
}
