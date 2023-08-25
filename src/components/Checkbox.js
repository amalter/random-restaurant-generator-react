import { useEffect, useState } from "react";

export default function Checkbox({
  fieldsetClass,
  checkboxClass,
  checkboxName,
  checkboxId,
  selectAll,
  setSelectAll,
}) {
  const [checked, setChecked] = useState(true);
  const isChecked = selectAll ? true : !checked;
  function handleCheck() {
    setSelectAll(false);
    setChecked((check) => !check);
  }
  useEffect(
    function () {
      if (selectAll) {
        setChecked(false);
        setChecked(true);
      }
    },
    [selectAll]
  );

  return (
    <div className={`${fieldsetClass}__field`}>
      <input
        className={checkboxClass}
        type="checkbox"
        id={checkboxId}
        name={checkboxName}
        checked={isChecked}
        onChange={handleCheck}
      />
      <label htmlFor={checkboxName}>{checkboxName}</label>
    </div>
  );
}
