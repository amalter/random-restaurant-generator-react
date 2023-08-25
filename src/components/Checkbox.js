import { useState } from "react";

export default function Checkbox({
  fieldsetClass,
  checkboxClass,
  checkboxName,
  checkboxId,
  // checked,
  selectAll,
  setSelectAll,
}) {
  const [checked, setChecked] = useState(true);
  function handleCheck() {
    setSelectAll(false);
    setChecked((check) => !check);
  }
  return (
    <div className={`${fieldsetClass}__field`}>
      <input
        className={checkboxClass}
        type="checkbox"
        id={checkboxId}
        name={checkboxName}
        checked={selectAll ? true : !checked}
        onChange={handleCheck}
      />
      <label for={checkboxName}>{checkboxName}</label>
    </div>
  );
}
