import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink
import About from '../pages/About';

const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'About', to: '/about', current: true },
  { name: 'Projects', to: '/project', current: true },
  { name: 'KDA', to: '/kda', current: true },
  { name: 'Secret', to: '/secret', current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ isUsed }) {
  return (
    <Disclosure as="nav" className={`sticky-nav ${isUsed ? 'bg-slate-950' : ''}`}>
      {({ open }) => (
        <>
          <div className="md:flex items-center justify-center ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      'px-3 py-2 rounded-md text-sm font-medium',
                      item.current
                        ? 'text-white text-glow' // Add text-glow here
                        : 'text-gray-300 hover:text-white'
                    )}
                    activeClassName="nav-button-active"
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? 'text-white'
                      : 'text-gray-300  hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  activeClassName="text-white" // Add activeClassName
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
