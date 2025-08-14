import styles from '../styles/Dish.module.css';

function Dish({ tittel, pris, ingredienser, kategori }) {
    return (
        <section className={styles.menuItem}>
            <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>{tittel}</h3>
                <p className={styles.itemDescription}>{ingredienser}</p>
                <span className={styles.itemCategory}>{kategori}</span>
            </div>
            <p className={styles.itemPrice}>{pris}</p>
        </section>
    );
}

export default Dish;