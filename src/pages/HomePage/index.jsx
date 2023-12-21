import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);

   const getCartList = localStorage.getItem("@MyCartProducts")
   const [cartList, setCartList] = useState(getCartList? JSON.parse(getCartList): []);

   const [isOpen, setIsOpen] = useState(false);

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   useEffect(()=>{
      const loadProductList = async () => {
         try {
            const {data} = await api.get("/products");
            setProductList(data);
         } catch (error) {
            console.log(error);
         } 
      }
      loadProductList()
      
   }, [])
   
   useEffect(()=>{
      localStorage.setItem("@MyCartProducts", JSON.stringify(cartList))  
   },[cartList]);
   
   const addProductsCart = (product)=>{
      setCartList([... cartList, product]);
   }
   
   const removeProductCart = (productId) =>{
      const filter = cartList.filter(({id})=> id !== productId);
      setCartList(filter);
   }
   
   const removeAllProductCart = () =>{
      setCartList([])
   }
   
   return (
      <>
         <Header setIsOpen={setIsOpen} cartList={cartList}/>
         <main>
            <ProductList productList={productList} addProductsCart = {addProductsCart}/>
            {isOpen ? 
               <CartModal 
                  cartList={cartList} 
                  removeProductCart={removeProductCart} 
                  removeAllProductCart = {removeAllProductCart} 
                  setIsOpen={setIsOpen} 
               />
                     : null}
         </main>
      </>
   );
};
