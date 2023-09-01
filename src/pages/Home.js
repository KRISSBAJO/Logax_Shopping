

import { ProductCart } from '../components'

import "./home.css"
export default function Home() {
  const products = [
    { id: 1, name: "Blue Gem Laptop", price: 1700, image: "/assets/image1.png" },
    { id: 2, name: "Galaxy X Laptop", price: 2500, image: "/assets/image2.png" },
    { id: 3, name: "NextJ Book", price: 1300, image: "/assets/image.png" },
    { id: 4, name: "GenZ ", price: 400, image: "/assets/image3.png" },
    { id: 5, name: "Fire Splash", price: 3500, image: "/assets/image4.png" },
    { id: 6, name: "Nars Cloud", price: 2600, image: "/assets/image7.png" },
  ]
  return (
    <main>
      <section className="products">
        <div className="product-row">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

