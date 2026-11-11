import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        name: 'Навушники',
        price: 1200,
        image: 'https://picsum.photos/id/1084/200/150',
    },
    {
        id: 2,
        name: 'Клавіатура',
        price: 800,
        image: 'https://picsum.photos/id/0/200/150',
    },
    {
        id: 3,
        name: 'Мишка',
        price: 600,
        image: 'https://picsum.photos/id/26/200/150',
    },
];

function ProductList() {
    const handleBuy = (productName) => {
        alert(`Товар "${productName}" додано до кошика!`);
    };

    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {products.map((item) => (
                <ProductCard
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    onBuy={() => handleBuy(item.name)}
                />
            ))}
        </div>
    );
}

export default ProductList;