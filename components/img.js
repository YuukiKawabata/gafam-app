import Image from "next/image";

export function Img(props) {
  return (
    <div className="h-1/6 ">
      <Image src={props.img} width={110} height={110}  alt="人物画" className="img"/>
    </div>
  );
}
