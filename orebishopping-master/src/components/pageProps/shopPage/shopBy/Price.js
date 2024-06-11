import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0,
      priceTwo: 9.999,
    },
    {
      _id: 951,
      priceOne: 10.000,
      priceTwo: 19.999,
    },
    {
      _id: 952,
      priceOne: 20.000,
      priceTwo: 29.999,
    },
    {
      _id: 953,
      priceOne: 30.000,
      priceTwo: 39.999,
    },
    {
      _id: 954,
      priceOne: 40.000,
      priceTwo: 49.999,
    },
    {
      _id: 955,
      priceOne: 50.000,
      priceTwo: 100.000,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Urutkan berdasar Harga" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              Rp {item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
