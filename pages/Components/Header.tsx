import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "./Logo.png";
import Image from "next/image"


export default function Header() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto pl-6 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center  justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 gap-2 items-center">
                  <Image className="w-16 h-16" src={Logo} alt="" /> <p className="text-white text-2xl">LENPOST</p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 gap-20 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="text-[#0af7ef] cursor-pointer">Product</button>
                <button className="text-[#0af7ef] cursor-pointer">Features</button>
                <button className="text-[#0af7ef] cursor-pointer">Team</button>
                <button className="text-[#0af7ef] cursor-pointer">Twitter</button>
                <button className="text-[#0af7ef] cursor-pointer">Discord</button>
                <button className="text-white bg-gradient pl-5 cursor-pointer pt-1 pb-1 rounded-l-2xl pr-16">Join Whitelist NOW</button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
            <Image className="w-10" src={Logo} alt="" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}