import {useState, useEffect} from "react";
import axios from "axios";

const {REACT_APP_API_URL} = process.env;

const BookList = ()=> {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        const fetchBooks = async()=> {
            try {
                const {data} = await axios.get(`${REACT_APP_API_URL}/books`);
                setBooks(data);
            }
            catch(error) {

            }
        }

        fetchBooks();
    }, [])

    const elements = books.map(({_id, title, author}) => <li key={_id}>Название: {title}. Автор: {author}.</li>);

    return (
        <ul>
            {elements}
        </ul>
    )

}

export default BookList;