import booksImage from '../../assets/books.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Book Haven</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={booksImage} alt="Open books layered upon each other." />
            </div>
        </>
    );
};
export default Header;