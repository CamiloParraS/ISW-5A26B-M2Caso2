import Pill from "./Pill";
import ProductCard, { type Product } from "./ProductCard";

const products: Product[] = [
  {
    name: ["Rich Chocolate Truffle", "Cake"],
    img: "cake-truffle",
    alt: "Chocolate truffle cake",
    price: 500,
    reviews: 500,
  },
  {
    name: ["Choco Chip Truffle", "Cake"],
    img: "cake-choco-chip",
    alt: "Choco chip truffle cake",
    price: 599,
    reviews: 300,
  },
  {
    name: ["Tropical Fruit N Almond", "Cake"],
    img: "cake-almond",
    alt: "Tropical fruit and almond chocolate cake",
    price: 509,
    reviews: 368,
  },
  {
    name: ["Rich Butterscotch Crunch", "Cake"],
    img: "cake-butterscotch",
    alt: "Butterscotch crunch cake slice",
    price: 399,
    reviews: 508,
  },
];

export default function Bestsellers() {
  return (
    <section className="mt-px" aria-labelledby="bestsellers-heading">
      <h2
        className="mb-5 text-base font-black text-brand desk:text-2xl mobile:mt-6"
        id="bestsellers-heading"
      >
        Bestsellers from Across the Country
      </h2>
      <div className="grid grid-cols-4 gap-3 mobile:grid-cols-2 mobile:gap-3">
        {products.map((p) => (
          <ProductCard key={p.img} {...p} />
        ))}
      </div>
      <div className="mt-3 flex justify-end">
        <Pill className="px-8 tracking-wider py-2 text-xs">VIEW ALL</Pill>
      </div>
    </section>
  );
}
