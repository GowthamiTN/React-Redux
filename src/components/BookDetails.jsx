import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../actions';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedBooks = useSelector(state => state.books.selectedBooks);
  console.log("bl",selectedBooks);

  const handleAddToCart = (book) => {
    dispatch(addItem(book));
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
        Selected Books
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
        <List>
          {Array.isArray(selectedBooks) && selectedBooks.length > 0 ? (
            selectedBooks.map(book => (
              <React.Fragment key={book.id}>
                <ListItem
                  secondaryAction={
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToCart(book)}
                    >
                      Add to Cart
                    </Button>
                  }
                >
                  <ListItemText
                    primary={book.title}
                    secondary={`by ${book.author}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))
          ) : (
            <ListItem>No books selected</ListItem>
          )}
        </List>
      </Paper>
    </Container>
  );
};

export default BookDetails;

