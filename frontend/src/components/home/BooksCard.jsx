import PropTypes from "prop-types";
import Card from "./Card";

function BooksCard({ books }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => {
        return <Card key={item._id} item={item} />;
      })}
    </div>
  );
}

BooksCard.propTypes = {
  books: PropTypes.array,
};

export default BooksCard;
