import { Link } from "react-router-dom";

function Card({book}) {
  return (
    <>
      <Link to={`/single-page/${book.id}`}>
        <div className="flex px-3 py-3  ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{book.bookName}</div>
              <p className="text-gray-700 text-base">
                {book.bookAuthor}
              </p>
            </div>
         
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
