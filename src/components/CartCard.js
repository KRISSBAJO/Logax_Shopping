import "./cartCard.css"

export default function CartCard({product}) {
  const { name, price, image } = product;
  return (
    <div className="cartCard">
      <img src={image} alt="" />
          <p className="productName">{name}</p>
          <p productPrice>${price}</p>
          <button className="btn btn-primary">
            Remove 
          </button>
    </div>
   
  )
}

