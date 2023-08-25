import Checkbox from "./Checkbox";
export default function Fieldset({ category, fieldsetClass, legend, inputs }) {
  return (
    <fieldset className="{fieldsetClass} {category}s" key={category}>
      <legend>{legend}:</legend>
      <div className="{fieldsetClass}__field">
        <input
          className="{category}"
          type="checkbox"
          id="all"
          name="All"
          checked
        />
        <label for="All">Select All</label>
      </div>
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
