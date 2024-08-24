interface BUTTON {
  text: string;
  className?: string;
}
const Button = ({ className, text }: BUTTON) => {
  const BUTTON_classes = `py-[14px] px-6 text-white bg-orange-10 rounded-lg font-semibold hover:bg-white hover:text-orange-10 ease-linear duration-300 border border-orange-10 ${className}`
  return (
    <button className={BUTTON_classes}>{text}</button>
  )
}

export default Button