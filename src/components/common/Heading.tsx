type PRIMARY_HEADING_PROPS = {
  className?: string;
  textName: string;
  orangeTextClass?: string;
  blackTextClass?: string;
  orangeText?: string;
  blackText?: string;
};
const Heading = ({
  className,
  textName,
  blackText,
  blackTextClass,
  orangeTextClass,
  orangeText,
}:PRIMARY_HEADING_PROPS) => {
  return (
    <h2
      className={`xl:text-5xl lg:text-[44px] md:text-[40px] sm:text-4xl text-[28px] xl:!leading-[56px] md:!leading-[52px] sm:!leading-[48px] !leading-[35px] text-black font-rubik font-semibold ${className}`}
    >
      {textName}
      <span className={`text-black ${blackTextClass}`}>{blackText}</span>
      <span className={`text-orange-20 ${orangeTextClass}`}>{orangeText}</span>
    </h2>
  );
};
export default Heading