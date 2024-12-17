interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string; // Optional aria-label prop for accessibility
}

const Button = ({ children, className, ariaLabel }: ButtonProps) => {
  return (
    <button
      className={`text-black text-base font-bold py-2 px-10 bg-yellow-500 hover:bg-yellow-600 transition-all ${className}`}
      aria-label={ariaLabel} // Use aria-label if provided for better accessibility
    >
      {children}
    </button>
  );
};

export { Button };
