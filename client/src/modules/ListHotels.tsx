import Filters from "@/components/Filters/Filters";
import HotelCardGrid from "@/components/HotelCardGrid/HotelCardGrid";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function ListHotels() {
  const data = [
    {
      id: "1",
      name: "Taj International",
      location: "Bangalore, India",
      price: 2500,
      imageUrl:
        "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    },
    {
      id: "2",
      name: "aj International",
      location: "Bangalore, India",
      price: 3500,
      imageUrl:
        "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    },
    {
      id: "3",
      name: "j International",
      location: "Bangalore, India",
      price: 4500,
      imageUrl:
        "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    },
  ];

  return (
    <main>
      <div className="flex flex-col items-center container m-auto my-4">
        <Filters />
        <SearchBar />
      </div>
      <HotelCardGrid data={[]} />
    </main>
  );
}
