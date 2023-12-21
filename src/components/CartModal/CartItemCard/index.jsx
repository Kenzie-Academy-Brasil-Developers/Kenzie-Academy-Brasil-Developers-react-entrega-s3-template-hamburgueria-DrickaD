import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeProductCart}) => {
   return (
      <li className={styles.itemList}>
         <div className={styles.divItem}>
            <div className={styles.divImg}>
               <img src={product.img} alt={product.name} className={styles.img}/>
            </div>
            <div className={styles.divInfo}>
               <h3 className="heading3">{product.name}</h3>
               <p className="body-600">Preço unitário: {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
            </div>
         </div>
         <div className={styles.divBtn}>
            <button aria-label="delete" title="Remover item" className={styles.icone} onClick = {()=> removeProductCart(product.id)}>
               <MdDelete size={21}/>
            </button>
         </div>
      </li>
   );
};
