import { forwardRef } from "react";

// *materi use ref
const Input = forwardRef((props, ref) => {
  const { type, name } = props;
  return <input type={type} className="border-2 border-solid ml-2 mb-2 mt-2" name={name} id={name} ref={ref}/>;
});

export default Input;
