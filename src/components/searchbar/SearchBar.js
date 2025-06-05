import './SearchBar.css';
import icon from '../../assets/images/menu.png';
import icon2 from '../../assets/images/search.png';

function SeachBar({ value, onInput }) {
    return <div className="search-bar">
        <button className="menu-button">
            <img src={icon} alt="icon" className="menu-icon" />
        </button>
        <input 
            type="text" 
            placeholder="Hinted search text" 
            className="search-input"
            value={value}
            onInput={onInput}
        />
        <button className="search-button">
            <img src={icon2} alt="icon" className="search-icon" />
        </button>
    </div>
}

export default SeachBar;