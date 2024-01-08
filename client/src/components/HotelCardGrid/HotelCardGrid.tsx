import Hotel from "@/types/Hotel";
import React from "react";
import HotelCard from "../HotelCard/HotelCard";

type HotelCardGridProps = {
  readonly data: Array<Hotel>;
};

const HotelCardGrid: React.FC<HotelCardGridProps> = ({ data }) => {
  return (
    <div className="flex gap-4 flex-wrap container m-auto my-4 justify-center">
      {data.length === 0 ? (
        <div>No hotels available</div>
      ) : (
        data.map((hotel) => (
          <HotelCard
            key={hotel.id}
            {...hotel}
            clickHandler={(id: string) => console.log(id)}
          />
        ))
      )}
    </div>
  );
};

export default HotelCardGrid;
