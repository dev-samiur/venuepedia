import { React } from 'react';
import { useRouter } from 'next/router';
import { TrashIcon } from '@heroicons/react/solid';
import Paypal from '../components/Paypal'

const product = {
  id: 1,
  title: 'The Way',
  href: '#',
  price: '320000',
  imageSrc: 'https://www.thewaydhaka.com/image/gallery/3.jpg',
  imageAlt: "Front of men's Basic Tee in black.",
  capacity: 1000,
  date: '12th Nov 2022',
};

const Checkout = () => {
	const router = useRouter();
  const { venueId, venueTitle, price } = router.query;

  return (
    <div className="bg-gray-50 h-screen">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>
        <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Venue Summary</h2>

            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                <li key={product.id} className="flex py-6 px-4 sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-20 rounded-md"
                    />
                  </div>

                  <div className="ml-6 flex-1 flex flex-col">
                    <div className="flex">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm">
                          <a
                            href={product.href}
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            Vanue: {product.title}
                          </a>
                        </h4>
                      </div>

                      <div className="ml-4 flex-shrink-0 flow-root">
                        <button
                          type="button"
                          className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Remove</span>
                          <TrashIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="flex-1 pt-2 flex items-end justify-between">
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        Capacity: {product.capacity}
                      </p>
                    </div>
                    <div className="flex-1 pt-2 flex items-end justify-between">
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        Date: {product.date}
                      </p>
                    </div>
                    <div className="flex-1 pt-2 flex items-end justify-between">
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        Price: {product.price}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Total</dt>
                  <dd className="text-base font-medium text-gray-900">
                    {product.price} BDT
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
								<Paypal venueId={venueId} venueTitle={venueTitle} price={price} user="sam" date="12 Nov" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
