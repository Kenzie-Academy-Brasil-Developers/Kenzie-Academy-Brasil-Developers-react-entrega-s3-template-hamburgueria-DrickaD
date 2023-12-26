import Logo from "../../assets/Logo.svg";
import {MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({setIsOpen, cartList}) => {

   return (
      <header className= {styles.header}>
         <div className={styles.containerHeader}>
               <img className={styles.img_logo}src={Logo} alt="Logo Kenzie Burguer" />

               <button className={styles.button_cart} onClick= {() => setIsOpen(true)}>
                  <MdShoppingCart size={22} className={styles.cart}/>
                  <span className={`${styles.span_price} span`}>{cartList.length}</span>
               </button>
         </div>
      </header>
   );
};
