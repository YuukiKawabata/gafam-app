export function Title(props) {
  return (
    <div className="whitespace-pre-wrap leading-loose font-black h-2/6 p-5 text-3xl text-center tracking-wider flex justify-center items-center sm:text-6xl ">
      <h1>{props.text}</h1>
    </div>
  );
}
