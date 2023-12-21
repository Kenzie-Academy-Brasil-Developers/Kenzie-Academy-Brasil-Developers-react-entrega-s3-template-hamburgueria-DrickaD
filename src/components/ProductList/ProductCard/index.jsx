import styles from "./style.module.scss";

export const ProductCard = ({ product, addProductsCart}) => {
    return(
        <li className={styles.card}>
            <div className={styles.img}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.info}>
                <h3 className="heading3">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="body-600">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="btnDefaul body600" onClick={() =>addProductsCart(product)}> Adicionar </button>
            </div>
        </li>
    )
}