interface InputProps {
  label: string
  placeholder: string
}

const Input = ({ label, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor="#" className="mb-2 text-xs font-semibold text-black">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>
  )
}

export default Input
