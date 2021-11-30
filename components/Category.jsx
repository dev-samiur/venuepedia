import React from 'react'

const categories = [
  {
    name: 'New on VenueQ',
    href: '#',
    imageSrc: 'https://www.donchanpalacelaopdr.com/images/gallery/Hall_B_1.jpg',
  },
  {
    name: 'Top rated',
    href: '#',
    imageSrc: 'https://alpha360.co/uploads/vendor_profile_page/profile_photo//16cf1fe6515805cb9d25d4da147f04e6.jpg',
  },
  {
    name: 'Hot Deals',
    href: '#',
    imageSrc: 'https://i.pinimg.com/originals/1e/3e/9c/1e3e9c0f92b0ec4aa574f8664129023f.jpg',
  },
  {
    name: 'All',
    href: '#',
    imageSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/bd/f6/72/kushiara-colonnade.jpg?w=500&h=400&s=1',
  },
  { name: 'Sale', href: '#', imageSrc: 'https://alpha360.co/uploads/vendor_profile_page/profile_photo//61608183b1f6a4d3d4f6109a86949573.jpg' },
]

const Category= () => {
  return (
    <div className="bg-white mt-20">
      <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Explore by Category</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={category.imageSrc} alt="" className="w-full h-full object-center object-cover" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Category