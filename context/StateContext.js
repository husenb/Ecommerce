import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();
export const StateContext = ({ children }) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState();
  const [totalQty, settotalQty] = useState(0);
  const [qty, setqty] = useState(1);

  const onAdd=(product, quantity)=>{
    const checkProductInCart=cartItems.find((item)=>item._id===product._id);
    settotalQty((previousQty)=>previousQty+quantity);
    settotalPrice((previousTotalPrice)=>previousTotalPrice+product.price*quantity)
    if(checkProductInCart){
      const updatedCartItems=cartItems.map((cartProduct)=>{
        if(cartProduct._id===product._id)
        return{
          ...cartProduct,
          quantity: cartProduct.quantity+quantity
        }
      })
      setcartItems(updatedCartItems);
    }
    else{
      product.quantity=quantity
      setcartItems([...cartItems, {...product}])
    }
    toast.success(`${qty}${product.name} added successfully`);

  }

  const incQty = () => {
    setqty((previousQty) => previousQty + 1);
  };
  const decQty = () => {
    setqty((previousQty) =>{
        if (previousQty-1<1)
        return 1;
        else
        return previousQty-1;
    } );
  };
  return (
    <Context.Provider
      value={{ showCart, cartItems, totalPrice, totalQty, qty, incQty, decQty, onAdd }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext= ()=> useContext(Context);
