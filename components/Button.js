export function Button(props) {
  return (
    <div className="h-1/6 justify-center items-center text-base">
      <button className="button block sm:text-2xl">{props.text}</button>
    </div>
  );
}
