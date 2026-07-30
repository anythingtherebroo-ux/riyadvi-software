const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#f4e5a1] via-[#d4af37] to-[#a9822a] px-8 py-3.5 font-poppins text-sm font-semibold uppercase tracking-wider text-black shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${className}`}
    >
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Shine Reflection Overlay */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </button>
  );
};

export default Button;