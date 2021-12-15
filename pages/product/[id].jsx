import React, { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Reviews from '../../components/Reviews';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState('');

  useEffect(() => {
    if (id) {
      axios({
        url: 'http://localhost:5000/api/venue/' + id,
        method: 'GET',
      })
        .then((res) => {
          if (res.data.success) setProduct(res.data.success);
        })
        .catch((err) => console.log(err.message));
    }
  }, [id]);

  return (
    <div className="bg-white">
      <div className="pt-6 pb-16 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ></nav>
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {product.title}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  {product.price} BDT
                </p>
              </div>
              <div className="flex justify-between mt-5">
                <h3 className="text-xl font-medium text-gray-900">
                  {product.address}
                </h3>
                <p className="text-lg font-medium text-gray-900">
                  Capacity: {product.capacity}
                </p>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? 'text-yellow-400'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300"
                  >
                    ·
                  </div>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <img
                  key={product._id}
                  src={`/venues/${product.thumbnail}`}
                  alt="thumbnail"
                  className={'rounded-lg'}
									style={{maxHeight: 300}}
                />
                <img
                  key={product._id}
                  src={`/venues/${product.gallery_1}`}
                  alt="thumbnail"
                  className={'rounded-lg'}
                />
                <img
                  key={product._id}
                  src={`/venues/${product.gallery_2}`}
                  alt="thumbnail"
                  className={'rounded-lg'}
                />
              </div>
            </div>
            <div className="mt-8 lg:col-span-5">
              <form>
                <Link href={{ pathname: '/booking', query: { venueId: id, venueTitle: product.title, price: product.price } }}>
                  <button
                    type="button"
                    className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Book the venue
                  </button>
                </Link>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Product;
