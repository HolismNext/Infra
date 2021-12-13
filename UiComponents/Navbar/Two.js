import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import T, { isRtl, hasLocales } from '../../Base/Globalization'
import { useState } from "react";


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

    const [open, setOpen] = useState(false);
    return <>
        {open ?
            <> </>
            :
            <>
                <div className="flex mx-4 mt-2 font-sans">
                    <div className="flex-none text-purple-900">
                        <img
                            src={logo}
                            alt={companyName} />
                    </div>
                    <div className="flex-1 text-gray-500 text-sm  md:text-lg">
                        <div className="flex justify-center	">
                            <div className="px-2">Product</div>
                            <div className="px-2">Features</div>
                            <div className="px-2">Marketplace</div>
                            <div className="px-2">Company</div>
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