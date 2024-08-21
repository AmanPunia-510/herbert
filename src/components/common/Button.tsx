interface BUTTON {
  text: string;
  className: string;
}
const Button = ({ className, text }: BUTTON) => {
  const BUTTON_classes = `py-[14px] px-6 text-white bg-orange-10 rounded-lg ${className}`
  return (
    <button className={BUTTON_classes}>{text}</button>
  )
}

export default Button