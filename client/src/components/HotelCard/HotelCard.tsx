import Image from "next/image";
import React from "react";

type HotelCardProps = {
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly price: number;
  readonly imageUrl: string;
  clickHandler?: (id: string) => void;
};

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  name,
  location,
  price,
  imageUrl,
  clickHandler,
}) => {
  return (
    <div className="flex flex-col w-[18rem] h-[15rem] border rounded-2xl p-1 cursor-pointer">
      <div className="relative w-full aspect-[5/3] rounded-2xl">
        <Image
          src={imageUrl}
          alt={name}
          style={{ objectFit: "cover", borderRadius: ".5rem" }}
          priority
          fill
        />
      </div>
      <div className="flex justify-between items-center m-4">
        <span className="flex flex-col">
          <h1 className="font-bold">{name}</h1>
          <h4>{location}</h4>
        </span>
        <span>
          <h4 className="font-extrabold">{price}</h4>
          <h4 className="text-gray-400 text-sm">/Night</h4>
        </span>
      </div>
    </div>
  );
};

export default HotelCard;
