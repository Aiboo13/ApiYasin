

function Button({
  label,
  onClick,
  disabled = false,
  className = '',
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className}`}
    >
      {label}
    </button>
  );
}

export default Button;