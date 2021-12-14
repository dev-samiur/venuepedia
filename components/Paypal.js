import React, { useState, useRef, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import axios from 'axios'

export default function Paypal({ venue, user, date }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  const router = useRouter();

  const handleSnackBar = (e) => {
    setSnackBarVal(null);
    setSnackBarVal(e);
  };

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: venue.title,
                amount: {
                  currency_code: 'USD',
                  value: venue.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          saveTransaction();
          bookVenue();
          console.log(order);
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [venue.title, venue.fees]);

  const saveTransaction = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/transaction',
      data: {
        venueId: venue._id,
        userId: user.id,
        method: 'Paypal',
        date: Date.now(),
      },
    })
      .then((response) => {
        if (response.data.success) console.log('Success saving transaction');
        else alert('Error saving transaction');
      })
      .catch((err) => {
        alert('Error saving transaction');
      });
  };

  const bookVenue = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/ap/booking',
      data: {
        venueId: venue._id,
        userId: user._id,
        date,
      },
    })
      .then((response) => {
        if (response.data.success) alert('Successfully booked');
        else alert('Error booking the venue');
      })
      .catch((err) => {
        alert('Error booking the venue');
      });
  };

  if (paidFor) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="h5">
          Congrats, you just booked {venue.title} at {date}
        </Typography>
        <Button
          onClick={(e) => router.back()}
          style={{ marginTop: 20 }}
          variant="contained"
          color="primary"
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <div style={{display: 'flex', justifyContent:"center", alignItems:"center"}}>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <div ref={paypalRef} style={{width: 200}} />
    </div>
  );
}
