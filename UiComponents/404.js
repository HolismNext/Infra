import { ArrowSmRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import SectionOne from './Section/One';
import { T } from '../Base/Globalization';

const NotFound = ({
    logo
}) => {
    return <SectionOne
        title=""
    >
        <div className="m-auto text-center">
            <div className="mb-12">{logo}</div>
            <div className="text-purple-800 text-lg tracking-wide uppercase"><T>404 error</T></div>
            <div className="text-6xl font-bold text-gray-900 my-2"><T>Page not found.</T></div>
            <div className="text-xl text-gray-500 "><T>Sorry, we couldn't find the page you're looking for.</T></div>
            <Link href="/">
                <a className="text-purple-800 text-lg cursor-pointer mt-12 block"><T>Go back home</T> <ArrowSmRightIcon className="w-6 h-6 inline-block" /></a>
            </Link>
        </div>
    </SectionOne>
}

export default NotFound;