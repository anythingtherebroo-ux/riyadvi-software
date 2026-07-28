function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,.4)] sm:px-7 sm:text-base ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;