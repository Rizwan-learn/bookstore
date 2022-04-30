import React from 'react';
import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';
import './Books.css';

function Books() {
  return (
    <div>
      <div>
        <div className="card"><Book title="Harry Potter" author="JK Rollings" category="Action" progress="64" chapter="Chapter 17" /></div>
        <div className="card"><Book title="Avengers" author="Marvel" category="Science Fiction" progress="11" chapter="Chapter 3: A Lesson Learned" /></div>
        <div className="card"><Book title="Cat in the hate" author="Some Donnei" category="Horror" progress="0" chapter="Introduction" /></div>
      </div>
      <div className="hr"> </div>
      <AddBook />
    </div>
  );
}

export default Books;
