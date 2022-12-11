export function Button(props) {
  return (
    <div className="h-1/6 justify-center items-center text-base sm:text-4xl">
      <button className="button block">{props.text}</button>
    </div>
  );
}
