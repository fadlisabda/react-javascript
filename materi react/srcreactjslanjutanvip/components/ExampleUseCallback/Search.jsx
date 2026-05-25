import { memo } from "react";

const Search = (props) => {
  const { onChange } = props;
  console.log("Search rendered!");
  return <input type="text" onChange={(e) => onChange(e.target.value)} />;
};

export default memo(Search);
