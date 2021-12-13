import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import T, { isRtl, hasLocales } from '../../Base/Globalization'
import { useState } from "react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const NavbarTwo = ({
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

    const locales = <div className="flex justify-between text-gray-400 w-12 select-none">
        <div onClick={() => changeLocale('en')} className={locale === 'en' ? selectedLocaleStyle : localeStyle}>En</div>
        <div onClick={() => changeLocale('fa')} className={locale === 'fa' ? selectedLocaleStyle : localeStyle}>فا</div>
    </div>
    const [open, setOpen] = useState(true);
    return <>
        {open ?
            <>
             <div className="sm:hidden">
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
                    </div>
             </>
            :
            <>
                <div className="flex mx-4 mt-2 font-sans">
                    <div className="flex-none text-purple-900">
                        <img
                            className="h-8 w-auto"
                            src={logo}
                            alt={companyName} />
                    </div>
                    <div className="flex-1 text-gray-500 text-sm  md:text-lg">
                        <div className="flex justify-center	">
                            {
                                menuItems.map((item) => {
                                    return <div className="px-2">
                                        <Link key={item.name} href={item.href}>
                                            <a className="px-2" >
                                                <T>{item.name}</T>
                                            </a>
                                        </Link>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                    <div className="flex-none text-right">
                        <a

                            className="
                            shadow                     
                            bg-white
                            hover:bg-purple-500 hover:text-purple-100 
                            text-base text-center text-purple-700  
                            py-2 px-4 border-rounded ">
                            Log in </a>
                    </div>
                </div>
            </>
        }

    </>
}
export default NavbarTwo;