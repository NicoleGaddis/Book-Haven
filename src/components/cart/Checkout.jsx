import { useRef, useState } from 'react';
import classes from './Checkout.module.css';


// Helper validation functions
const isEmpty = (value) => value.trim() === '';
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        address: true,
        city: true,
        postal: true,
    });

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef()

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = !isNotFiveChars(enteredPostal);

        setFormInputValidity({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid,
        });
        const formIsValid =
            enteredNameIsValid &&
            enteredAddressIsValid &&
            enteredCityIsValid &&
            enteredPostalIsValid;
        if (!formIsValid) {
            return;
        }
        // Pass validated customer details to parent submit handler
        props.onConfirm({
            name: enteredName,
            address: enteredAddress,
            city: enteredCity,
            postal: enteredPostal,
        });
    };
    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid
        }`;
    const addressControlClasses = `${classes.control} ${formInputValidity.address ? '' : classes.invalid
        }`;
    const postalControlClasses = `${classes.control} ${formInputValidity.postal ? '' : classes.invalid
        }`;
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid
        }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={addressControlClasses}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" ref={addressInputRef} />
                {!formInputValidity.address && <p>Please enter a valid address!</p>}
            </div>
            <div className={postalControlClasses}>
                <label htmlFor="postal">Zip Code</label>
                <input type="text" id="postal" ref={postalInputRef} />
                {!formInputValidity.postal && (
                    <p>Please enter a valid zip code (5 characters)!</p>
                )}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};
export default Checkout;