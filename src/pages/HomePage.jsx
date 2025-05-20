import axios from "axios";
import Card from "../component/Card";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";

function HomePage() {
  const [books ,setBooks] = useState([])
  const fetchBook = async()=>{
   const response = await axios.get('http://localhost:4000/books')
   setBooks(response.data.data)
  }


  useEffect(()=>{
    fetchBook()
  },[])

  return (
    <>
      <Navbar />
    <div className="flex flex-wrap items-center justify-center mt-2">
      {
        books.map((book)=>{
          
          return (
            <Card book={book}/>
          )

        })
      }
     
    </div>
    </>
  );
}
export default HomePage;
