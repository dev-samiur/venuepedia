import React, { useEffect, useState, Fragment } from 'react';
import Router from 'next/router';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import {
  BellIcon,
  MenuIcon,
  UserCircleIcon,
  XIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import Modal from '../components/Modal';
import SlotForm from '../components/SlotForm';
import Schedule from '../components/schedule';
import Head from 'next/head';

const user = {
  name: 'The Way Dhaka',
  handle: 'theway',
  email: 'theway@example.com',
  imageUrl: 'https://www.thewaydhaka.com/image/gallery/36.jpg',
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Add Venue', href: '#', current: false },
  { name: 'Add Slot', href: '#', current: false },
  { name: 'Venues', href: '/', current: false },
];
const subNavigation = [
  { name: 'Schedule', icon: UserCircleIcon, current: true },
];
const userNavigation = [{ name: 'Sign out' }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Dashboard = () => {
  const [showAddVenueForm, setShowAddVenueForm] = useState(false);
  const [showAddSlotForm, setShowAddSlotForm] = useState(false);

  const handleSignout = () => {
    if (localStorage) {
      localStorage.removeItem('user');
      Router.push('/signin');
    }
  };

  const handleShowAddVenueForm = (open) => {
    setShowAddVenueForm(open);
  };

  const handleShowAddSlotForm = (open) => {
    setShowAddSlotForm(open);
  };

  useEffect(() => {
    if (!localStorage.getItem('user')) Router.push('/signin');
    console.log(localStorage.getItem('type'));
  }, []);

  if (typeof window !== 'undefined' && localStorage.getItem('user')) {
    return (
      <div>
        <Head>
          <title>Venue Q - Dashboard</title>
        </Head>
        <Modal
          showAddVenueForm={showAddVenueForm}
          handleShowAddVenueForm={handleShowAddVenueForm}
        />
        <SlotForm
          showAddSlotForm={showAddSlotForm}
          handleShowAddSlotForm={handleShowAddSlotForm}
        />
        <Disclosure
          as="div"
          className="relative bg-sky-700 pb-32 overflow-hidden"
        >
          {({ open }) => (
            <>
              <nav
                className={classNames(
                  open ? 'bg-sky-900' : 'bg-transparent',
                  'relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none'
                )}
              >
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                  <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-sky-800">
                    <div className="px-2 flex items-center lg:px-0">
                      <div className="flex-shrink-0">
                        <img
                          className="block h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-teal-400.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="hidden lg:block lg:ml-6 lg:space-x-4">
                        <div className="flex">
                          {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <span
                                className={classNames(
                                  item.current
                                    ? 'bg-black bg-opacity-25'
                                    : 'hover:bg-sky-800',
                                  'rounded-md py-2 px-3 text-sm font-medium text-white cursor-pointer'
                                )}
                                onClick={
                                  item.name === 'Add Venue'
                                    ? () => setShowAddVenueForm(true)
                                    : item.name === 'Add Slot'
                                    ? () => setShowAddSlotForm(true)
                                    : null
                                }
                              >
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                      <div className="max-w-lg w-full lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-sky-100 focus-within:text-gray-400">
                          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <SearchIcon
                              className="flex-shrink-0 h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full bg-sky-700 bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-sky-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="p-2 rounded-md inline-flex items-center justify-center text-sky-200 hover:text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon
                            className="block flex-shrink-0 h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <MenuIcon
                            className="block flex-shrink-0 h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:block lg:ml-4">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative flex-shrink-0 ml-4">
                          <div>
                            <Menu.Button className="rounded-full flex text-sm text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="rounded-full h-8 w-8"
                                src={user.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link href="">
                                      <span
                                        className={classNames(
                                          active
                                            ? 'bg-gray-100 cursor-pointer'
                                            : '',
                                          'block py-2 px-4 text-sm text-gray-700 cursor-pointer'
                                        )}
                                        onClick={handleSignout}
                                      >
                                        {item.name}
                                      </span>
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="bg-sky-900 lg:hidden">
                  <div className="pt-2 pb-3 px-2 space-y-1">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-black bg-opacity-25'
                            : 'hover:bg-sky-800',
                          'block rounded-md py-2 px-3 text-base font-medium text-white'
                        )}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="pt-4 pb-3 border-t border-sky-800">
                    <div className="flex items-center px-4">
                      <div className="flex-shrink-0">
                        <img
                          className="rounded-full h-10 w-10"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-sky-200">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:text-white hover:bg-sky-800"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </nav>
              <div
                aria-hidden="true"
                className={classNames(
                  open ? 'bottom-0' : 'inset-y-0',
                  'absolute inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0'
                )}
              >
                <div className="absolute inset-0 flex">
                  <div
                    className="h-full w-1/2"
                    style={{ backgroundColor: '#0a527b' }}
                  />
                  <div
                    className="h-full w-1/2"
                    style={{ backgroundColor: '#065d8c' }}
                  />
                </div>
                <div className="relative flex justify-center">
                  <svg
                    className="flex-shrink-0"
                    width={1750}
                    height={308}
                    viewBox="0 0 1750 308"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
                      fill="#0369a1"
                    />
                    <path
                      d="M1465.84 308L16.816 0H1750v308h-284.16z"
                      fill="#065d8c"
                    />
                    <path
                      d="M1733.19 0L284.161 308H0V0h1733.19z"
                      fill="#0a527b"
                    />
                    <path
                      d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
                      fill="#0a4f76"
                    />
                  </svg>
                </div>
              </div>
              <header className="relative py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold text-white">Settings</h1>
                </div>
              </header>
            </>
          )}
        </Disclosure>

        <main className="relative -mt-32">
          <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-6 lg:col-span-3">
                  <nav className="space-y-1">
                    {subNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700'
                            : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                          'group border-l-4 px-3 py-2 flex items-center text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-teal-500 group-hover:text-teal-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </aside>
                <Schedule />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } else return null;
};

Dashboard.displayName = 'Dashboard';
export default Dashboard;
