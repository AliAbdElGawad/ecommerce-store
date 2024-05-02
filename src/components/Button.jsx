const Button = ({ children, onClick, bgColor, width }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, width }}
      onClick={onClick}
      className="btn"
    >
      {children}
    </button>
  );
};

export default Button;
