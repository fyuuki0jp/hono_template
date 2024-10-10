import { tv } from 'tailwind-variants'

type ButtonType = 'primary' | 'hidden' | 'secondary' | 'disabled'

const buttonStyle = tv({
  base: 'focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2',
  variants: {
    color: {
      primary: 'text-white bg-blue-700',
      secondary: 'text-white bg-red-700',
      hidden: 'text-white bg-gray-700',
      disabled: 'text-white bg-white',
    },
  },
})

type ButtonProps = {
  children: HTMLElement | string
  buttonType: ButtonType
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={buttonStyle({ color: props.buttonType })}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
