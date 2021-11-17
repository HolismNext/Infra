import { BadgeCheckIcon } from '@heroicons/react/solid'
import { AtSymbolIcon } from '@heroicons/react/solid'
import { GlobeIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'
import T from '../../Base/Globalization'

const textColor = " text-gray-400 "
const titleStyle = "title text-sm uppercase tracking-wider select-none" + textColor
    + /* sm */ " text-center "
    + /* xl */ " xl:text-left "
const localeItemStyle = "p-3"
const borderStyle = " border-b border-gray-800 "
const controlStyle = "p-3 rounded-md bg-gray-700 text-gray-300"
const Icon = "w-6 h-6 text-gray-400 cursor-pointer ml-4";

const LinkList = ({ title, items }) => {
    return <div
        className={
            "linkList border-b border-gray-800 mb-6 pb-4"
            + /* sm */ ""
            + /* xl */ " xl:border-b-0 xl:mb-0 xl:pb-0 "
        }
    >
        <div
            className={titleStyle + " mb-6"}
        ><T>{title}</T></div>
        {items.map((item, index) => <Link
            href={item.href || "/"}
            key={index}
        ><div
            className={
                "text-gray-400 text-sm mb-4 cursor-pointer text-center"
                + /* sm */ ""
                + /* xl */ " xl:text-left "
            }
        ><T>{item.title}</T></div></Link>)}
    </div>
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
                    title={linkList.title}
                    items={linkList.links}
                />)
            }
            <div
                className="sm:col-span-2 lg:col-span-4"
            >
                <div className={titleStyle + " mb-6"}>Language</div>
                <select
                    className={controlStyle + " w-52 m-auto block"}
                >
                    {
                        locales.map((locale, index) => <option className={localeItemStyle} value={locale.key}>{locale.title}</option>)
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
                        <div className={titleStyle + " mb-3 "}>{newsletter.title}</div>
                        <p className={
                            textColor + " text-sm mb-6 "
                            + /* sm */ ""
                        }>{newsletter.description}</p>
                    </div>
                    <div>
                        <input className={
                            controlStyle + " w-72 mr-4 m-auto block mb-3"
                            + /* sm */ " sm:inline "
                        }
                            placeholder="Enter your email"
                        ></input>
                        <button className="p-3 bg-purple-900 text-sm tracking-wide rounded-lg text-gray-300">Subscribe</button>
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
            <div className={textColor + " text-sm tracking-widest text-center mb-6"}>@ {new Date().getFullYear()} {copyrightHolder}, Co.<div className="sm:hidden my-1 block"></div> All rights reserved.</div>
            <div
                className="socialIcons flex flex-row justify-center"
            >
                {
                    socialLinks.map((socialLink, index) => <a href={socialLink.link || ""} className={Icon}>{socialLinks.icon}</a>)
                }
            </div>
        </div>
    </div>
}

export default FooterOne;