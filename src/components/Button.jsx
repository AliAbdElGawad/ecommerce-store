const Button = ({ children, onClick, bgColor }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
      className="btn"
    >
      {children}
    </button>
  );
};

export default Button;
