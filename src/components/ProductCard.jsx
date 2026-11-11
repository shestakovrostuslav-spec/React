import Image from './Image';
import PriceTag from './PriceTag';
import BuyButton from './BuyButton';
import styles from './ProductCard.module.css';

function ProductCard({ name, price, image, onBuy }) {
    return (
        <div className={styles.card}>
            <Image src={image} alt={name} />
            <h2>{name}</h2>
            <PriceTag price={price} />
            <BuyButton onClick={onBuy} />
        </div>
    );
}

export default ProductCard;