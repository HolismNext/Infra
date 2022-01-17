import { useRouter } from 'next/router'
import Link from 'next/link'
import T, { isRtl, hasLocales } from '../../Base/Globalization'
import { useState } from "react";
import { Transition } from '@headlessui/react'

const NavbarTwo = ({
    logo,
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
        <div className="MobileMenu flex justify-between md:hidden  pt-6 pb-4 px-4 font-sans ">
            <div className={isRtl() ? " float-right " : " float-left"}>
                <a className={open ? "" : "hidden"} onClick={() => { setOpen(false) }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        className="h-8 w-8 text-purple-700"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </a>
                <a className={open ? "hidden" : ""} onClick={() => { setOpen(true) }}>  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="h-8 w-8 text-purple-700"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
                </a>
            </div>

            <div className={"text-purple-900 "}>
                <img
                    className="h-8 w-auto"
                    src={logo}
                    alt={companyName} />
            </div>

            <div className="invisible w-8 h-8 OnlyForLayoutPurposes"></div>
            <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >

                <div className={
                    "inline-block clear-both py-4 leading-8"
                    + (isRtl() ? " text-left " : " text-right")
                    + (open ? "block " : "hidden ")}>
                    {
                        menuItems.map((item, index) => {
                            return <div className="px-2" key={index}>
                                <Link key={item.name} href={item.href}>
                                    <a className="px-2" >
                                        <T>{item.name}</T>
                                    </a>
                                </Link>
                            </div>
                        })
                    }
                </div>

            </Transition>
        </div>
        <div className="DesktopMenu hidden md:flex py-4 px-8 font-sans items-center">
            <div className="flex-none text-purple-900">
                <Link href='/'>
                    <a>
                        <img
                            className="h-8 w-auto cursor-pointer"
                            src={logo}
                            alt={companyName} />
                    </a>
                </Link>
            </div>
            <div className="flex-1 text-gray-500 text-sm md:text-lg">
                <div className="flex justify-center	">
                    {
                        menuItems.map((item, index) => {
                            return <div className="hover:rounded hover:text-white hover:bg-purple-700 transition-all px-2 py-2" key={index}>
                                <Link href={item.href}>
                                    <a className="px-2" >
                                        <T>{item.name}</T>
                                    </a>
                                </Link>
                            </div>
                        })
                    }

                </div>
            </div>
            <div className="flex-none text-right z-50 cursor-pointer ">
                <a

                    className="
                            shadow   
                            bg-white
                            rounded-md
                            hover:bg-purple-500 hover:text-purple-100 transition-colors
                            text-base text-center text-purple-700  
                            py-2 px-4 border-rounded ">
                    Log in </a>
            </div>
        </div>
    </>
}
export default NavbarTwo;