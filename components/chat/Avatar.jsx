import Image from "next/image";

function Avatar({ hero }) {
  return (
    <div
      className="absolute h-8 w-8 bg-no-repeat"
      style={{
        backgroundImage: `url(./sprites/skins/${hero}.png)`,
        backgroundPosition: `-${0}px -${64}px`,
      }}
    ></div>
  );
}

export default Avatar;
