import classes from './BooksSummary.module.css';
const BooksSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Curated Stories, Delivered to Your Door</h2>
            <p>
                Explore our curated collection of bestsellers, timeless classics,
                and hidden literary gems. Find your next favorite read today.
            </p>
            <p>
                Every book in our catalog is hand-selected, printed with care on
                high-quality paper, and delivered fast straight to your library shelf.
            </p>
        </section>
    );
};
export default BooksSummary;