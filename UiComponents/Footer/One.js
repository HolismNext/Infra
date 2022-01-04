import Link from 'next/link'
import React from 'react'
import { T, t, isRtl } from '../../Base/Globalization'

const textColor = " text-gray-400 "
const titleStyle = (rtl) => {
    return "title text-sm uppercase tracking-wider select-none" + textColor
        + /* sm */ " text-center "
        + /* xl */ (rtl ? ' xl:text-right' : " xl:text-left ")
}
const localeItemStyle = "p-3"
const borderStyle = " border-b border-gray-800 "
const controlStyle = "p-3 rounded-md bg-gray-700 text-gray-300"
const Icon = "w-6 h-6 text-gray-400 cursor-pointer ml-4";

const LinkItem = ({ title, href }) => {
    return <a
        href={href || ""}
        className={
            "text-gray-400 text-sm mb-4 cursor-pointer text-center"
            + /* sm */ ""
            + /* xl */ (isRtl() ? ' xl:text-right' : " xl:text-left ")
        }
    ><T>{title}</T></a>
}

const LinkList = ({ title, items }) => {
    return <div
        className={
            "linkList border-b border-gray-800 mb-6 pb-4"
            + /* sm */ ""
            + /* xl */ " xl:border-b-0 xl:mb-0 xl:pb-0 "
        }
    >
        <div
            className={titleStyle(isRtl()) + " mb-6"}
        ><T>{title}</T></div>
        {items.map((item, index) => {
            return item.href ?
                <Link
                    href={item.href || "/"}
                    key={index}
                >
                    <LinkItem title={item.title} href={item.href} />
                </Link>
                :
                <LinkItem
                    title={item.title}
                    key={index}
                />
        })}
    </div >
}

const FooterOne = ({ linkLists, locales, newsletter, copyrightHolder, socialLinks }) => {

    // const clonedSocialLinks = React
    //     .Children
    //     .toArray(socialLinks.props.children)
    //     .map(socialLink => React.cloneElement(socialLink, {
    //         className: { Icon }
    //     }))

    return <div
        className="footer max-w-screen-xl m-auto py-12 px-8 "
    >
        <div
            className={
                "flex flex-col justify-center w-full pb-6" + borderStyle
                + /* sm */ " sm:grid sm:grid-cols-2	"
                + /* md */ "  "
                + /* lg */ " lg:grid-cols-4 "
                + /* xl */ " xl:flex xl:flex-row justify-between "
            }
        >
            {
                linkLists.map((linkList, index) => <LinkList
                    key={index}
                    title={linkList.title}
                    items={linkList.links}
                />)
            }
            <div
                className="sm:col-span-2 lg:col-span-4"
            >
                <div className={titleStyle(isRtl()) + " mb-6"}><T>Language</T></div>
                <select
                    className={controlStyle + " w-52 m-auto block"}
                >
                    {
                        locales.map((locale, index) => <option key={index} className={localeItemStyle} value={locale.key}>{locale.title}</option>)
                    }
                </select>
            </div>
        </div>
        {
            newsletter
                ?
                <div
                    className={
                        "newsletter py-10 flex flex-col w-full justify-between " + borderStyle
                        + /* sm */ " sm:justify-center sm:items-center "
                        + /* xl */ " xl:flex-row xl:justify-between "
                    }
                >
                    <div>
                        <div className={titleStyle(isRtl()) + " mb-3 "}><T>{newsletter.title}</T></div>
                        <p className={
                            textColor + " text-sm mb-6 "
                            + /* sm */ ""
                        }><T>{newsletter.description}</T></p>
                    </div>
                    <div>
                        <input className={
                            controlStyle + " w-72 m-auto block mb-3" + (isRtl() ? ' ml-4 ' : ' mr-4 ')
                            + /* sm */ " sm:inline "
                        }
                            placeholder={t('Enter your email')}
                        ></input>
                        <button className="p-3 bg-purple-900 text-sm tracking-wide rounded-lg text-gray-300"><T>Subscribe</T></button>
                    </div>
                </div>
                :
                null
        }
        <div
            className={
                "pt-10 flex flex-col w-full justify-between"
                + /* sm */ ""
                + /* xl */ " xl:flex-row "
            }
        >
            <div className={textColor + " text-sm tracking-widest text-center mb-6"}>@ {new Date().getFullYear()} {t(copyrightHolder)}, <T>Co.</T><div className="sm:hidden my-1 block"></div> <T>All rights reserved.</T></div>
            {
                socialLinks && socialLinks.map
                    ?
                    <div
                        className="socialIcons flex flex-row justify-center"
                    >
                        {
                            socialLinks.map((socialLink, index) => <a key={index} href={socialLink.link || ""} className={Icon}>{socialLinks.icon}</a>)
                        }
                    </div>
                    :
                    null
            }
        </div>
    </div>
}

export default FooterOne;