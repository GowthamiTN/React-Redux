import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../actions';
import { Container, Typography, List, ListItem, ListItemText, Button, Paper } from '@mui/material';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveClick = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <List>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <ListItem key={item.id} secondaryAction={
                <Button variant="contained" color="error" onClick={() => handleRemoveClick(item.id)}>
                  Remove
                </Button>
              }>
                <ListItemText primary={item.title} />
              </ListItem>
            ))
          ) : (
            <ListItem>No items in cart</ListItem>
          )}
        </List>
      </Paper>
    </Container>
  );
};

export default Cart;
