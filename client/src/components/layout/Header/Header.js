import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";
import styles from './Header.module.scss';

const Header = () => {

    return (
        <div className={styles.header}>
            <TopBar />
            <NavBar />
        </div>
    )
}

export default Header;