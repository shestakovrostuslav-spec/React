import styles from './ProductCard.module.css';

function BuyButton({ onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            Купити
        </button>
    );
}

export default BuyButton;