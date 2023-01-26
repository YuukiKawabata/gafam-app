import Image from "next/image";

export function Card(props) {
  return (
    <div className="">
      <Image src={props.img} width={100} height={100} className="card-avatar" alt="" />
      <div className="">{props.name}</div>
      <div className="">{props.content}</div>
    </div>
  );
}

