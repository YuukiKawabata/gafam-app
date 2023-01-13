import Image from "next/image";

export function Img(props) {
  return (
    <div className="h-1/6 ">
      <Image src={props.img} width={100} height={100} className="img"/>
    </div>
  );
}
