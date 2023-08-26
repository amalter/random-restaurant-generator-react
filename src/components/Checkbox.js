export default function Checkbox({
  fieldsetClass,
  checkboxClass,
  checkboxName,
  checkboxId,
  onChange,
  isChecked,
}) {
  return (
    <div className={`${fieldsetClass}__field`}>
      <input
        className={checkboxClass}
        type="checkbox"
        id={checkboxId}
        name={checkboxName}
        checked={isChecked}
        onChange={onChange}
        value={checkboxName}
      />
      <label htmlFor={checkboxName}>{checkboxName}</label>
    </div>
  );
}
