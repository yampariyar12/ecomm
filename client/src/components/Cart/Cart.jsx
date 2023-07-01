import React from 'react';
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import { removeItem, resetCart } from "../../redux/cartReducer";
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';


// const data = [
//     {
//         id:2,
//         img:"https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         title:"Coat",
//         desc:"Lorem Ipsum is simply dummy text of the printing ",
//         isNew:true,
//         oldPrice:13,
//         price:11,
//     },
//     {
//         id:3,
//         img:"https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         title:"Hat",
//         desc:"ever since the 1500s, when an unknown printer took ",
//         isNew:true,
//         oldPrice:20,
//         price:18,
//     },
// ]

const Cart = () => {

  const products = useSelector(state=>state.cart.products)

  const dispatch = useDispatch();


  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe('pk_test_51NMZDxLJycBvQGCLIv35CTehkHixn0TDCtTxVfJHyNTlHxuJEwtykXKXfxSe6rokp4nA4A9FtHbFotGLQ98j8R1x00hBGHv2Wm');

  const handlePayement = async () =>{
    console.log('somthing')
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders",{
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err);
      // res.status(500).json({error: err.message});
    }
  };

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map(item=>(
        <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
            <div className='details'>
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">{item.quantity} * ${item.price}</div>        
            </div>
            <DeleteOutlineIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayement}>PROCEED TO CHECKOUT</button>
      <div className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</div>
    </div>
  );
}

export default Cart;



// return (
//   <div className='cart'>
//     <h1>Products in your cart</h1>
//     {data?.map(item=>(
//       <div className="item" key={item.id}>
//           <img src={item.img} alt="" />
//           <div className='details'>
//               <h1>{item.title}</h1>
//               <p>{item.desc?.substring(0,100)}</p>
//               <div className="price">1 * ${item.price}</div>        
//           </div>
//           <DeleteOutlineIcon className='delete'/>
//       </div>
//     ))}
//     <div className="total">
//       <span>SUBTOTAL</span>
//       <span>$123</span>
//     </div>
//     <button>PROCEED TO CHECKOUT</button>
//     <div className="reset">Reset Cart</div>
//   </div>
// );
// }