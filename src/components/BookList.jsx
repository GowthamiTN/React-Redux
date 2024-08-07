import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks, selectBook, deselectBook } from '../actions';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
  Checkbox,
  Button
} from '@mui/material';

const BookList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const selectedBooks = useSelector(state => state.books.selectedBooks);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/books');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        dispatch(setBooks(data));
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchBooks();
  }, [dispatch]);

  const handleBookClick = (book) => {
    if (selectedBooks.find(b => b.id === book.id)) {
      dispatch(deselectBook(book));
    } else {
      dispatch(selectBook(book));
    }
  };

  const handleDetailsNavigation = () => {
    if (selectedBooks.length > 0) {
      navigate('/book-details');
    }
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
        Book List
      </Typography>
      {loading ? (
        <CircularProgress
          sx={{
            display: 'block',
            margin: 'auto',
            mt: 4
          }}
        />
      ) : (
        <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
          <List>
            {Array.isArray(books) && books.length > 0 ? (
              books.map(book => {
                const isSelected = selectedBooks.some(b => b.id === book.id);
                return (
                  <React.Fragment key={book.id}>
                    <ListItem
                      button
                      onClick={() => handleBookClick(book)}
                      selected={isSelected}
                    >
                      <Checkbox
                        checked={isSelected}
                        onChange={() => handleBookClick(book)}
                      />
                      <ListItemText
                        primary={book.title}
                        secondary={`by ${book.author}`}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })
            ) : (
              <ListItem>No books available</ListItem>
            )}
          </List>
          <Typography
            variant="h6"
            sx={{ mt: 2, textAlign: 'center' }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleDetailsNavigation}
            >
              View Selected Books
            </Button>
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default BookList;
