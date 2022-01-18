import Link from 'next/link'
import { T, t, isRtl } from '../../Base/Globalization'

const FooterTwo = ({
    links,
    socialLinks,
    copyrightHolder
}) => {
    return <div className="flex flex-col items-center py-12 text-gray-500 border-t">
        {
            links && links.length > 0 &&
            <div className="text-sm font-medium flex gap-6 mb-6">
                {
                    links.map(link => <Link href={link.url} key={link.title}>
                        <a>{link.title}</a>
                    </Link>)
                }
            </div>
        }
        {
            socialLinks && socialLinks.length > 0 &&
            <div className="my-6">
                {
                    socialLinks.map(link => <Link href={link.url}>
                        <a>{link.icon}</a>
                    </Link>)
                }
            </div>
        }
        <div className=" text-sm tracking-widest text-center">@ {new Date().getFullYear()} {t(copyrightHolder)} <div className="sm:hidden my-1 block"></div> <T>All rights reserved.</T></div>
    </div>
}

export default FooterTwo;