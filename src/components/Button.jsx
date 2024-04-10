const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`btn  ${className ? className : ""}`}>
      {children}
    </button>
  );
};


export default Button;
