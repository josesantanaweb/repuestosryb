interface ButtonProps {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center h-[3.125rem] w-full gap-1 px-6 py-3 text-sm text-white rounded-lg bg-primary hover:bg-opacity-95">
      {children}
    </button>
  )
}

export default Button
