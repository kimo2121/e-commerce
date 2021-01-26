// import React from "react";
// import Items from "./shop-data";
// import "./shop-item.css";

// const ShopItem = () => {
//   return (
//     <div className="shop-item-component">
//       <div className="item-container">
//         {Items.map((ele) => (
//           <div key={ele.id} className="each-item">
//             <div className="item-img">
//               <img src={ele.img} alt="" />
//             </div>
//             <span className="item-name">{ele.name}</span>
//             <br />
//             <span className="item-price">{ele.price}</span>
//             <span className="item-rating">
//               {Array(ele.rating)
//                 .fill()
//                 .map((_, i) => (
//                   <p key={ele.id}>⭐</p>
//                 ))}
//             </span>
//             <div className="add-item">
//               <label className="label">Add to cart</label>
//               <span className="span">+</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopItem;
