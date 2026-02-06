import { useState } from "react";
import FoodItems from "./FoodItems";
const foodItems = [
  { id: 1, food: "Pizza", price: "200" },
  { id: 2, food: "Pasta", price: "3025" },
  { id: 3, food: "Momos", price: "9501" },
  { id: 4, food: "Kabab", price: "6000" },
  { id: 5, food: "Chicken", price: "6850" },
  { id: 6, food: "Paneer", price: "2800" },
  { id: 7, food: "Burger", price: "600" },
  { id: 8, food: "Poha", price: "1200" },
  { id: 9, food: "Daal", price: "300" },
  { id: 10, food: "Rice", price: "100" },
];


export default function Card() {
    
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {foodItems.map((value) => {
        return (
          <div key={value.id}>
            <FoodItems value={value}></FoodItems>
          </div>
        );
      })}
    </div>
  );
}
