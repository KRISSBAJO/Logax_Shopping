import "./productCard.css"

export default function ProductCart({ product}) {
   const { name, price, image } = product;
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
        <div className="action">
          <p>${price}</p>
          <button className="btn btn-primary">
            Add to Cart
          </button>
        </div>
     
    </div>
  )
}
