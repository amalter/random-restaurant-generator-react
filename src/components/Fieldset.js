import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Fieldset({ category, fieldsetClass, legend, inputs }) {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(inputs.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  return (
    <fieldset className={`${fieldsetClass} ${category}s`} key={category}>
      <legend>{legend}:</legend>

      <Checkbox
        key={category}
        fieldsetClass={fieldsetClass}
        checkboxClass={category}
        checkboxName="Select All"
        checkboxId="all"
        onChange={handleSelectAll}
        isChecked={isCheckAll}
      />

      {inputs.map((input) => (
        <Checkbox
          key={input.id}
          fieldsetClass={fieldsetClass}
          checkboxClass={input.class}
          checkboxName={input.name}
          checkboxId={input.id}
          onChange={handleClick}
          isChecked={isCheck.includes(input.id)}
        />
      ))}
    </fieldset>
  );
}
