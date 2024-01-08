"use client";
import { decrement, increment } from "@/helpers/reducers/counterSlice";
import type { RootState } from "@/helpers/store";
import Hotel from "@/types/Hotel";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "@/helpers/services/pokemon";

type HotelPageProps = {
  readonly params: { hotelId: string };
};

const HotelPage = ({ params }: HotelPageProps) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  const hotel: Hotel = {
    id: "1",
    name: "Taj International",
    location: "Bangalore, India",
    price: 2500,
    imageUrl:
      "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
  };
  return (
    <div className="container">
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
      <div className="relative w-full aspect-[5/3] rounded-2xl">
        <Image
          src={hotel.imageUrl}
          alt={hotel.name}
          style={{ objectFit: "cover", borderRadius: ".5rem" }}
          priority
          fill
        />
      </div>
      <h1>{hotel.name}</h1>
      <h2>{hotel.location}</h2>
      <h2>{hotel.price}</h2>
    </div>
  );
};

export default HotelPage;
