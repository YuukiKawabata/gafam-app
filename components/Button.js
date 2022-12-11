export function Button(props) {
  return (
    <div className="h-1/6 flex justify-center items-center">
      <button className="button block sm:text-2xl">{props.text}</button>
    </div>
  );
}
