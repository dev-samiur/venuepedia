import React, { useState, useRef, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import axios from 'axios'

export default function Paypal({ venueId, venueTitle, price, date }) {
  const [paidFor, setPaidFor] = useState(false);
  const paypalRef = useRef();

  const router = useRouter();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: venueTitle,
                amount: {
                  currency_code: 'USD',
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          saveTransaction();
          bookVenue();
					setPaidFor(true);
          console.log(order);
        },
        onError: (err) => {
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [venueTitle, price]);

  const saveTransaction = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/transaction',
      data: {
        venueId: venueId,
        userId: localStorage.getItem('userId'),
				paidBy: localStorage.getItem('email'),
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
      url: 'http://localhost:5000/api/booking',
      data: {
        venueId,
        userId: localStorage.getItem('userId'),
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
          Congrats, you just booked {venueTitle} at {date}
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
      <div ref={paypalRef} style={{width: 200}} />
    </div>
  );
}
