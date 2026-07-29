const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#f4e5a1] via-[#d4af37] to-[#a9822a] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_8px_30px_rgba(212,175,55,0.25)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
    </button>
  );
};

export default Button;