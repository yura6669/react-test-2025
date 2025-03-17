// src/App.jsx

import Product from './Product';
import BookList from './BookList';

export default function App() {
  const favBooks = [
  {name: "HTML and CSS for beginners"},
  { name: "JS for beginners" },
  { name: "React basics" },
  { name: "React Router overview" }
];
  return (
    <>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
        />
      <Product
      name="Fries and Burger"
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      price={14.29}
      />
      <h2>Books of the week</h2>
      <BookList books={favBooks} />
    </>
  );
}
