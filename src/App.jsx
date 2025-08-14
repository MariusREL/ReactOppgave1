
import Menu from './components/Menu.jsx';
import { forrett, hovedrett, desserts } from './services/FilterByCourse.jsx';
import './App.css';


function App() {
    return (

            <>
                <Menu items={forrett} title="Forretter" />
                <Menu items={hovedrett} title="Hovedretter" />
                <Menu items={desserts} title="Desserter" />
            </>

    );
}

export default App;
