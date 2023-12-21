import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";
import { useOutClick, useKeydown } from "../Hooks/hooks";

export const CartModal = ({cartList, removeProductCart, removeAllProductCart,setIsOpen}) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const modalRef = useOutClick(()=>{
      setIsOpen(false)
   })
   
   const buttonRef = useKeydown("Escape", (element) =>{
         element.click()
   })

   return (
      <div role="dialog" className={styles.bottomModal}>
         <div ref={modalRef} className={styles.modal}>
            <div className={styles.heading}>
               <h2 className="heading1">Carrinho de compras</h2>
               <button ref={buttonRef} 
               className={styles.closeButton}
               onClick = {()=> setIsOpen(false)}
               aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.bodyModal}>
               <div className={styles.divUl}>
                  <ul className={styles.listCart}>
                     {cartList.map((product) => (
                        <CartItemCard key={product.id} product={product} removeProductCart={removeProductCart}/>
                     ))}
                  </ul>
               </div>
               <div className={styles.divBottom}>
                  <div className={styles.divTotal}>
                     <span className="body">Total</span>
                     <span className="body300">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                  </div>
                  <button onClick={()=> removeAllProductCart()} className="btnModal title">Remover todos</button>
               </div>
            </div>
         </div>
         
      </div>
   );
};
