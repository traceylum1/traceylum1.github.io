import Header from '../../../Components/Header';
import { useNavigate } from 'react-router';

function Reading() {
  const navigate = useNavigate();

  const books = [
    { title: "Kitchen Table Wisdom", author: "Rachel Naomi Remen M.D.", dateFinished: "in progress", rating: "--/5"},
    { title: "The Moth", author: "Various Authors", dateFinished: "2026-02-09", rating: "4/5"},
    { title: "Elantris", author: "Brandon Sanderson", dateFinished: "2026-01-11", rating: "4/5"},
    { title: "Babel", author: "R.F. Kuang", dateFinished: "2025-10-24", rating: "5/5"},
    { title: "Exhalation", author: "Tim Chiang", dateFinished: "2024", rating: "5/5"},
    { title: "Zen Keys", author: "Thich Nhat Hanh", dateFinished: "2024", rating: "3/5"},
    { title: "China Road", author: "Rob Gifford", dateFinished: "2024", rating: "5/5"},
    { title: "Never Finished", author: "David Goggins", dateFinished: "2024", rating: "4/5"},
    { title: "Can't Hurt Me", author: "David Goggins", dateFinished: "2024", rating: "4/5"},
  ];
  return (
    <>
      <Header/>
      <div className="reading">
        <button className="back-button" onClick={() => navigate(-1)}>back</button>
        <br/><br/>
        <table>
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
                        <td>{item.rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>
  );
}

export default Reading;