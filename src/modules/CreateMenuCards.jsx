import {menu} from "../data/Menu.jsx";
import menustyle from "../styles/CreateMenuCards.module.css"
const forrett = menu.filter(forrett=>forrett.kategori === "Forrett")
const hovedrett = menu.filter(hovedrett=>hovedrett.kategori === "Hovedrett")
const desserts = menu.filter(dessert=>dessert.kategori === "Dessert")


export default function CreateMenuCards(arr) {
    return arr.map((item, index) => (
        <section key={index} className={`${menustyle.divContainer} ${menustyle.flex} ${menustyle.borderWhite}`}>
            <h1>{item.tittel}</h1>
        
        </section>
    ));
};

