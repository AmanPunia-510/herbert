interface PARAGRAPH {
  className?: string;
  textName: string;
}

const Paragraph = ({ className, textName }: PARAGRAPH) => {
  return <p className={`text-black-10 ${className}`}>{textName}</p>;
};

export default Paragraph