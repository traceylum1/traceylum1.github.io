import Header from '../../../Components/Header';
import { useNavigate } from 'react-router';
import { BiSolidStar } from "react-icons/bi";

function Reading() {
  const navigate = useNavigate();

  const books = [
    { title: "Kitchen Table Wisdom", author: "Rachel Naomi Remen M.D.", dateFinished: "in progress", rating: 0},
    { title: "Circe", author: "Madeline Miller", dateFinished: "2025-05-15", rating: 5},
    { title: "Yellowface", author: "R.F. Kuang", dateFinished: "2026-04-11", rating: 4},
    { title: "The Moth", author: "Various Authors", dateFinished: "2026-02-09", rating: 5},
    { title: "Elantris", author: "Brandon Sanderson", dateFinished: "2026-01-11", rating: 4},
    { title: "Babel", author: "R.F. Kuang", dateFinished: "2025-10-24", rating: 5},
    { title: "Exhalation", author: "Ted Chiang", dateFinished: "2024", rating: 5},
    { title: "Zen Keys", author: "Thich Nhat Hanh", dateFinished: "2024", rating: 3},
    { title: "China Road", author: "Rob Gifford", dateFinished: "2024", rating: 5},
    { title: "Never Finished", author: "David Goggins", dateFinished: "2024", rating: 4},
    { title: "Can't Hurt Me", author: "David Goggins", dateFinished: "2024", rating: 4},
    { title: "Grit: The Power of Passion and Perseverance", author: "Angela Duckworth", dateFinished: "2019", rating: 5},
  ];

  const StarRating = ({ count }) => {
    // Create an array with the length of 'count'
    // Use the spread operator to fill it with undefined values, making it iterable
    // Map over the array to return an icon component for each item
    return (
      <div>
        {[...Array(count)].map((_, index) => (
          // A unique 'key' is essential for performance and to avoid errors
          <BiSolidStar key={index}/>
        ))}
      </div>
    );
  };

  return (
    <>
      <Header/>
      <div className="reading">
        <button className="back-button" onClick={() => navigate(-1)}>back</button>
        <br/><br/>
        <table className="book-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Finished on</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {books.map((item) => (
                    <tr key={item.title + item.author}>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.dateFinished}</td>
                        <td>{<StarRating count={item.rating}/>}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>
  );
}

export default Reading;