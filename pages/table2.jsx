import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Schedule = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/api/booking',
    })
      .then((response) => {
        if (response.data.success) setBookings(response.data.success);
        else console.log('Error fetching bookings');
      })
      .catch((err) => {
        console.log('Error booking the venue');
      });
  }, []);

  return (
    <div
      style={{
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
      }}
    >
      <div className="flex flex-col" style={{ maxWidth: 600 }}>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Venue
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Booked By
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr key={booking._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.venue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
