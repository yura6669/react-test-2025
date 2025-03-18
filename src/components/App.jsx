// src/App.jsx

import Product from './Product';
import BookList from './BookList';
import  Alert  from './Alert';
import UserMenu from './UserMenu';

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
      <Alert variant="info" outlined elevated>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      <UserMenu name="Yurii Shyian" />
    </>
  );
}
