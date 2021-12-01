import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'International Convention City Bashundhara',
    price: '$1490',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://www.event71.com/file/2019/10/international-convention-center-bashundhara.jpg',
    imageAlt: 'TODO',
    href: '/product',
  },
  {
    id: 2,
    name: 'Sena Kunja',
    price: '$1520',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'data:image/jpeg;base64,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',
    imageAlt: 'TODO',
    href: '/product',
  },
  {
    id: 3,
    name: 'Raowa',
    price: '$800',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://alpha360.co/uploads/vendor_profile_page/list_photo//7a3e6ff10c4caa4ecb4000f08cd8d099.jpg',
    imageAlt: 'TODO',
    href: '/product',
  },
	{
    id: 4,
    name: 'Radisson',
    price: '$2990',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://media.radissonhotels.net/image/radisson-blu-dhaka-water-garden/exteriorview/16256-113891-f63612886_3xl.jpg',
    imageAlt: 'TODO',
    href: '/product',
  },
  {
    id: 5,
    name: 'Golf Garden',
    price: '$2000',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://www.goldenmomentevent.com/wp-content/uploads/2020/10/Sena-Malancha-Event-43.jpg',
    imageAlt: 'TODO',
    href: '/product',
  },
  {
    id: 6,
    name: 'Sena Malancha',
    price: '$1900',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://www.goldenmomentevent.com/wp-content/uploads/2020/10/Sena-Malancha-Event-36.jpg',
    imageAlt: 'TODO',
    href: '/product',
  },
  {
    id: 7,
    name: 'Westin',
    price: '$1950',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://ak-d.tripcdn.com/images/0220w1200084a7aqa129E_Z_550_412_R5_Q70_D.jpg',
    imageAlt: 'TODO',
    href: '/product',
  },
	{
    id: 8,
    name: 'Amari Dhaka',
    price: '$1409',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/153343146.jpg?k=657a09b8dfe49a6e095f02186d6258c7eaca471025c13810d40c5a2fb937bb61&o=&hp=1',
    imageAlt: 'TODO',
    href: '/product',
  },
  {
    id: 9,
    name: 'Six Sessions',
    price: '$2000',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://www.thewaydhaka.com/image/gallery/36.jpg',
    imageAlt: 'TODO',
    href: '/product',
  },
  {
    id: 10,
    name: 'The Way',
    price: '$1500',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://www.thewaydhaka.com/image/gallery/3.jpg',
    imageAlt: 'TODO',
    href: '/product',
  },
  {
    id: 11,
    name: '4 Points Sheraton',
    price: '$1900',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://www.thewaydhaka.com/image/gallery/9.jpg',
    imageAlt: 'TODO',
    href: '/product',
  },
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Products= () => {
  return (
    <div className="bg-white mt-20">
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
              <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link href={product.href}>
                    {product.name}
                  </Link>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'flex-shrink-0 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.reviewCount} reviews</p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
