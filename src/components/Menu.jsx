import Dish from './Dish.jsx';
import styles from '../styles/Menu.module.css';

function Menu({ items, title }) {
    return (
        <div className={styles.menuContainer}>
            {<h2 className={styles.menuTitle}>{title}</h2>}
            <div className={styles.menuList}>
                {items.map((item) => (
                    <Dish
                        key={item.id}
                        tittel={item.tittel}
                        pris={item.pris}
                        ingredienser={item.ingredienser}
                        kategori={item.kategori}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;