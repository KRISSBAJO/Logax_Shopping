
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export default function Cart() {
  useTitle("Cart");
  const products = [
    { id: 1, name: "Blue Gem Laptop", price: 1700, image: "/assets/image1.png" },
    { id: 2, name: "Galaxy X Laptop", price: 2500, image: "/assets/image2.png" },
  ];
  return (
    <main>
      <section className="cart">
        <h1>Cart: {products.length}</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

