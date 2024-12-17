interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`text-white text-base font-bold py-2 px-10 bg-yellow-500 hover:bg-yellow-600 transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
