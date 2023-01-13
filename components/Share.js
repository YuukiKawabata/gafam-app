import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  HatenaShareButton,
  TwitterIcon,
  FacebookIcon,
  LineIcon,
  HatenaIcon,
} from "react-share";

export function Share() {
  return (
    <div className="whitespace-pre-wrap leading-loose font-black h-1/6 p-5 text-3xl text-center tracking-wider flex justify-center items-center  sm:text-6xl ">
      <div className="shareButton">
        {" "}
        <TwitterShareButton
          url="https://gafam-i426t75nl-yuukikawabata.vercel.app/"
          title="ビッグ・テック名言"
        >
          <TwitterIcon size={30} round={true} />
        </TwitterShareButton>
      </div>
      <div className="shareButton">
        {" "}
        <FacebookShareButton
          url="https://gafam-i426t75nl-yuukikawabata.vercel.app/"
          quote="ビッグ・テック名言"
        >
          <FacebookIcon size={30} round={true} />
        </FacebookShareButton>
      </div>
      <div className="shareButton">
        {" "}
        <LineShareButton
          url="https://gafam-i426t75nl-yuukikawabata.vercel.app/"
          title="ビッグ・テック名言"
        >
          <LineIcon size={30} round={true} />
        </LineShareButton>
      </div>
      <div className="shareButton">
        {" "}
        <HatenaShareButton
          url="https://gafam-i426t75nl-yuukikawabata.vercel.app/"
          title="ビッグ・テック名言"
        >
          <HatenaIcon size={30} round={true} />
        </HatenaShareButton>
      </div>
    </div>
  );
}
