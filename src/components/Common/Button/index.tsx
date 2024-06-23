interface ButtonProps {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-1 px-6 py-3 text-sm text-white rounded-lg bg-gradient-to-r from-blue-500 to-blue-800">
      {children}
    </button>
  )
}

export default Button
