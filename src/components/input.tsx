import { ChangeEvent } from "react"

interface InputCompProps {
  label: string
  value: string
  onchange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default function InputComp({
  label,
  value,
  onchange,
  placeholder,
}: InputCompProps) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900 outline-none">
          {label}
        </label>
        <div className="mt-2">
          <input
            placeholder={placeholder}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none p-4"
            value={value}
            onChange={onchange}
          />
        </div>
      </div>
    </>
  )
}
