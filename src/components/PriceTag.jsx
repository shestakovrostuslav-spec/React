import styles from './ProductCard.module.css';

function PriceTag({ price }) {
    return <p className={styles.price}>Ціна: {price} грн</p>;
}

export default PriceTag;