import TimeAgo from "timeago-react";
import Avatar from "./AVatar";

function Message({ message }) {
  return (
    <div className="relative flex px-2 font-mono">
      <div className="w-8 h-8  items-center ">
        <Avatar user={message.address} hero={message.hero} />{" "}
      </div>
      <div
        className={`flex ml-4 px-2 left-8 transform items-center rounded-lg bg-white/60 text-[#041836] shadow-md  shadow-sky-100`}
      >
        {" "}
        <p>
          {message.message}{" "}
          <TimeAgo
            className="text-center text-[12px] italic text-gray-400"
            datetime={message.timestamp}
          />
        </p>
      </div>

      <p className="absolute -top-5 flex flex-col rounded-lg bg-white/60 p-0.5 px-3 text-xs text-[#041836] shadow-md shadow-sky-100">
        {" "}
        {message.address?.substring(0, 4)}
        ...
        {message.address?.substring(message.address?.length - 4)}
      </p>
    </div>
  );
}

export default Message;
