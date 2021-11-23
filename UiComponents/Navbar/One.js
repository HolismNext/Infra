import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import T, { isRtl, hasLocales } from '../../Base/Globalization'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavbarOne = ({
    logo,
    logoStyles,
    brand,
    brandStyles,
    panelUrl,
    companyName,
    menuItems
}) => {

    const router = useRouter()
    const { locale } = router;

    const localeStyle = "cursor-pointer hover:text-white";
    const selectedLocaleStyle = localeStyle + " px-1 rounded bg-gray-200 text-gray-900 hover:text-gray-900 !cursor-default"

    const changeLocale = (locale) => {
        console.log(router);
        router.push({
            route: router.pathname,
            query: router.query
        }, router.asPath, { locale });
    }

    const locales = <div className="flex justify-between text-gray-400 w-12 ">
        <div onClick={() => changeLocale('en')} className={locale === 'en' ? selectedLocaleStyle : localeStyle}>En</div>
        <div onClick={() => changeLocale('fa')} className={locale === 'fa' ? selectedLocaleStyle : localeStyle}>فا</div>
    </div>

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className={"block lg:hidden h-8 w-auto "
                                            + logoStyles}
                                        src={logo}
                                        alt={companyName} />
                                    <span className="hidden lg:flex h-8 w-auto ">
                                        <img
                                            className={"h-8 w-auto" + logoStyles}
                                            src={logo}
                                            alt={companyName} />
                                        <img
                                            className={"h-8 w-auto " + (isRtl() ? ' mr-4 ' : ' ml-4 ') + brandStyles}
                                            src={brand}
                                        />
                                    </span>
                                </div>
                                <div className={"hidden sm:block " + (isRtl() ? ' sm:mr-6 ' : ' sm:ml-6')}>
                                    <div className={"flex space-x-4" + (isRtl() ? ' space-x-reverse' : '')}>
                                        {menuItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                            >
                                                <a
                                                    className={classNames(
                                                        item.href === router.pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium select-none'
                                                    )}
                                                    aria-current={item.href === router.pathname ? 'page' : undefined}
                                                >
                                                    <T>{item.name}</T>
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className={"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0" + (isRtl() ? ' sm:mr-6 ' : ' sm:ml-6')}>
                                {
                                    hasLocales()
                                        ?
                                        locales
                                        :
                                        null
                                }

                                {/* Profile dropdown */}
                                <Menu as="div" className={"relative hidden" + (isRtl() ? ' mr-3' : ' ml-3')}>
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src=""
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
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                {
                                    panelUrl
                                        ?
                                        <a
                                            className="block bg-white py-1 px-4 rounded-full text-gray-900 hover:bg-purple-800 hover:text-white transition-all"
                                            href={panelUrl}>Sign in</a>
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                >
                                    <a
                                        className={classNames(
                                            item.href === router.pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium select-none'
                                        )}
                                        aria-current={item.href === router.pathname ? 'page' : undefined}
                                    >
                                        <T>{item.name}</T>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}

export default NavbarOne;