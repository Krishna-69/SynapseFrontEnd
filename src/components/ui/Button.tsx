import type { ReactElement } from "react"

interface ButtonProps {
  variant: "primary" | "secondary"
  text: string
  startIcon?: ReactElement
  endIcon?: ReactElement
  onClick?: () => void
  fullWidth?: boolean
  loading?: boolean
}

const variantClasses = {
  "primary": "bg-teal-500 text-white",
  "secondary": "bg-teal-300 text-purple-800"
};

const defaultStyles = "px-4 py-2 rounded-md font-normal flex items-center hover:cursor-pointer hover:bg-teal-600"


export function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={variantClasses[props.variant] + " " + defaultStyles + " " + `${props.fullWidth ? " w-full flex justify-center items-center" : " justify-center items-center"} ${props.loading ? "opacity-45" : " "}`} disabled={props.loading}>
      <div className="pr-2">
        {props.startIcon}
      </div>
      {props.text}
      <div className="pl-2">
        {props.endIcon}
      </div>
    </button>
  )
}