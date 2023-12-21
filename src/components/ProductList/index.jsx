import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ productList, addProductsCart }) => {
   return (
      <div className={styles.container_list}>
         <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} 
            addProductsCart = {addProductsCart}/>
         ))}
      </ul>
      </div>
      
   );
};
