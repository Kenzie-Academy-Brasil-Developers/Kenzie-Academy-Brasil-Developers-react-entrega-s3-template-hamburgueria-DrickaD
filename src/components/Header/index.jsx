import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss"

export const Header = ({setIsOpen, cartList}) => {
   const [value, setValue] = useState("");

   return (
      <header className= {styles.header}>
         <div className={styles.containerHeader}>
               <img className={styles.img_logo}src={Logo} alt="Logo Kenzie Burguer" />

               <button className={styles.button_cart} onClick= {() => setIsOpen(true)}>
                  <MdShoppingCart size={22} className={styles.cart}/>
                  <span className={`${styles.span_price} span`}>{cartList.length}</span>
               </button>
            {/* <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form> */}
         </div>
      </header>
   );
};
