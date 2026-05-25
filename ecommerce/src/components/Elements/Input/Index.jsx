import Input from "./Input";
import Label from "./Label";
import { forwardRef } from "react";
// *materi use ref
const InputForm = forwardRef((props, ref) => {
  const { label, name, type } = props;
  return (
    <div className="grid grid-cols-1">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} className="border-2 border-solid" ref={ref} />
    </div>
  );
});

export default InputForm;
