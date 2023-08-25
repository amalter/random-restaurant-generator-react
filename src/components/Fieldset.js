import Checkbox from "./Checkbox";
export default function Fieldset({ category, fieldsetClass, legend, inputs }) {
  return (
    <fieldset className="{fieldsetClass} {category}">
      <legend>{legend}:</legend>
      {inputs.map((input) => (
        <Checkbox
          fieldsetClass={fieldsetClass}
          checkboxClass={input.class}
          checkboxName={input.name}
          checkboxId={input.id}
        />
      ))}
    </fieldset>
  );
}
