import styles from './ProductCard.module.css';

function Image({ src, alt }) {
    return <img src={src} alt={alt} className={styles.image} />;
}

export default Image;