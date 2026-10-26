import { useContext } from 'react';
import classes from './BookItem.module.css';
import BookItemForm from './BookItemForm';
import CartContext from '../../../store/CartContext';

const BookItem = (props) => {

    const cartCtx = useContext(CartContext);
    // This JavaScript number method ensures our numeric price always 
    // renders with two decimal places (e.g., 12.5 becomes $12.50)
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={classes.book}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <BookItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};
export default BookItem;