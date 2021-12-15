import {useContext} from 'react' ;
import './composent.css'
import { ThemeContext } from './themeContext';
export default function Contenu() {

    const {theme} = useContext(ThemeContext);

    return (
    <div
    className={theme ? 'contenu light' : 'contenu dark'}
    >
    <h1>Jeu du pendu
    </h1>

    </div>
    )
}