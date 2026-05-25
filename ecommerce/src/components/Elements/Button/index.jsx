function Button(props) {
  // *onclick,type event handler
  const { children, variant = "bg-blue-600", onClick = () => {}, type = "button" } = props;
  return (
    <button className={`cursor-pointer px-4 py-2 rounded ${variant} text-white`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
