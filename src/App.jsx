import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Layout from './Layout';
import { CssBaseline, Container } from '@mui/material';
import './App.css'; // Optional, for additional styling

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BookList />} />
            <Route path="book-details" element={<BookDetails />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
