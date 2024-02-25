import {changeBackgroundColor} from "./EasterEggs";

export default function Footer() {
    return (
        <footer>
            <p  onClick={changeBackgroundColor}>&copy; 2024</p>
        </footer>
    );
}