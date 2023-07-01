import React, { useState } from "react";
import "./Product.scss";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  // const images = [
  //   "https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   "https://images.pexels.com/photos/5599007/pexels-photo-5599007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  // ];

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>
            {data?.attributes?.desc}
            </p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add" onClick={()=>dispatch(addToCart({
              id:data.id,
              title:data.attributes.title,
              desc:data.attributes.desc,
              price:data.attributes.price,
              img:data.attributes.img.data.attributes.url,
              quantity,
            }))}>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Saira</span>
              <span>Product Type: Saree</span>
              <span>Tag: Saree, Women</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

{
  /* <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
<img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} /> */
}


{/* <div className="right">
<h1>Title</h1>
<span className="price">$199</span>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book.{" "}
</p>
<div className="quantity">
  <button
    onClick={() =>
      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
    }
  >
    -
  </button>
  {quantity}
  <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
</div>
<button className="add">
  <AddShoppingCartIcon /> ADD TO CART
</button>
<div className="link">
  <div className="item">
    <FavoriteBorderIcon /> ADD TO WISH LIST
  </div>
  <div className="item">
    <BalanceIcon /> ADD TO COMPARE
  </div>
</div>
<div className="info">
  <span>Vendor: Saira</span>
  <span>Product Type: Saree</span>
  <span>Tag: Saree, Women</span>
</div>
<hr />
<div className="info">
  <span>DESCRIPTION</span>
  <hr />
  <span>ADITIONAL INFORMATION</span>
  <hr />
  <span>FAQ</span>
</div>
</div> */}