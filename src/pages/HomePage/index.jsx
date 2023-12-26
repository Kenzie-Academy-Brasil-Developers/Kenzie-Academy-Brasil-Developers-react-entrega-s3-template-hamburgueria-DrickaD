import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { ProductList } from "../../components/ProductList";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { api } from "../../services/api";
import { toast } from "react-toastify";


export const HomePage = () => {
   const [productList, setProductList] = useState([]);

   const getCartList = localStorage.getItem("@MyCartProducts");
   const [cartList, setCartList] = useState(getCartList? JSON.parse(getCartList): []);

   const [isOpen, setIsOpen] = useState(false);

   useEffect(()=>{
      const loadProductList = async () => {
         try {
            const {data} = await api.get("/products");
            setProductList(data);
         } catch (error) {
         
         } 
      }
      loadProductList();
      
   }, [])
   
   useEffect(()=>{
      localStorage.setItem("@MyCartProducts", JSON.stringify(cartList))  
   },[cartList]);
   
   const removeAllProductCart = () =>{
      setCartList([]);
   }

   const addProductsCart = (product)=>{
      const item = cartList.some((productItem) => productItem.id === product.id)
      if(item){
         toast.error(`${product.name} já está adicionado ao carrinho!`);
      } else{
         setCartList([... cartList, product]);
         toast.success(`${product.name} adicionado com sucesso!`);
      }
   }
   
   const removeProductCart = (productId) =>{
      const filter = cartList.filter(({id})=> id !== productId);
      setCartList(filter);
   }
   
   
   return (
         <DefaultTemplate setIsOpen={setIsOpen} cartList={cartList}>
            <ProductList productList={productList} addProductsCart = {addProductsCart}/>
               {isOpen ? 
                  <CartModal 
                     cartList={cartList} 
                     removeProductCart={removeProductCart} 
                     removeAllProductCart = {removeAllProductCart} 
                     setIsOpen={setIsOpen} 
                  />
                        : null}
         </DefaultTemplate>
   );
};
