import Logo from "/assets/Logo.svg"

import { Fragment, useEffect, useState } from "react"
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid"

const products = [
  {
    name: "Programação",
    href: "#",
  },
  {
    name: "Front-end",
    href: "#",
  },
  {
    name: "Infraestutura",
    href: "#",
  },
  {
    name: "Business",
    href: "#",
  },
  {
    name: "Design & UX",
    href: "#",
  },
]

function classNames(...classes: (string | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLoginButton, setShowLoginButton] = useState(true)
  const [showLogoutButton, setShowLogoutButton] = useState(true)
  const [showFavorites, setShowFavorites] = useState(true)
  const [showMyBookshelf, setShowMyBookshelf] = useState(true)
  const [showMyBag, setShowMyBag] = useState(true)

  const location = useLocation()

  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem("token")
    navigate("/")
  }

  useEffect(() => {
    if (
      location.pathname === "/logged" ||
      location.pathname === "/updatepage" ||
      location.pathname === "/updatepage/requests"
    ) {
      setShowLoginButton(false)
    } else {
      setShowLoginButton(true)
    }

    if (location.pathname === "/") {
      setShowLogoutButton(false)
    } else {
      setShowLogoutButton(true)
    }

    if (location.pathname === "/") {
      setShowFavorites(false)
    } else {
      setShowFavorites(true)
    }

    if (location.pathname === "/") {
      setShowMyBookshelf(false)
    } else {
      setShowMyBookshelf(true)
    }

    if (location.pathname === "/") {
      setShowMyBag(false)
    } else {
      setShowMyBag(true)
    }
  }, [location.pathname])

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 ">
              Categorias
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-3 hover:bg-blue-900 hover:text-white"
                    >
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900  hover:text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {showFavorites && (
            <a className="text-sm font-semibold leading-6 text-gray-900">
              Favoritos
            </a>
          )}

          {showMyBookshelf && (
            <Link
              to="/updatepage/requests"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Minha estante
            </Link>
          )}
          {showMyBag && (
            <Link
              to="/updatepage"
              className="flex items-center text-sm font-semibold leading-6 text-gray-900"
            >
              <ShoppingBagIcon className="h-6 w-6 mr-1" /> Minha sacola
            </Link>
          )}
        </Popover.Group>
        {showLoginButton && (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="flex items-center text-sm font-semibold leading-6 text-gray-900"
            >
              <UserCircleIcon className="h-6 w-6 mr-1" />
              Login
            </Link>
          </div>
        )}
        {showLogoutButton && (
          <div className="hidden items-center lg:flex lg:flex-1 lg:justify-end gap-10">
            <Link
              to="/logged"
              className="text-sm flex items-center gap-1 font-semibold leading-6 text-gray-900"
            >
              <UserCircleIcon className="h-4 w-4" />
              Meu Perfil
            </Link>
            <button
              className="text-sm flex items-center gap-1 font-semibold leading-6 text-gray-900"
              onClick={handleLogout}
            >
              <ArrowLeftOnRectangleIcon className="h-4 w-4" />
              Deslogar
            </button>
          </div>
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-900 hover:text-white">
                        Categorias
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-blue-900 hover:text-white"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {showFavorites && (
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-blue-900 hover:text-white"
                  >
                    Favoritos
                  </a>
                )}
                {showMyBookshelf && (
                  <Link
                    to="/updatepage/requests"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-blue-900 hover:text-white"
                  >
                    Minha estante
                  </Link>
                )}
                {showMyBag && (
                  <Link
                    to="/updatepage"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-blue-900 hover:text-white"
                  >
                    Minha sacola
                  </Link>
                )}
              </div>
              {showLoginButton && (
                <div className="py-6">
                  <Link to="/login">
                    <a
                      href="#"
                      className="-mx-3 gap-1 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-blue-900 hover:text-white flex items-center"
                    >
                      <UserCircleIcon className="h-4 w-4" />
                      Login
                    </a>
                  </Link>
                </div>
              )}

              {showLogoutButton && (
                <>
                  <Link
                    to="/logged"
                    className="-mx-3 gap-1 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-blue-900 hover:text-white flex items-center"
                  >
                    <UserCircleIcon className="h-4 w-4" />
                    Meu Perfil
                  </Link>
                  <button
                    className="-mx-3 gap-1 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-blue-900 hover:text-white flex items-center w-full"
                    onClick={handleLogout}
                  >
                    Deslogar
                  </button>
                </>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
