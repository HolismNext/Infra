import Link from 'next/link'
import Section from '../Section/One'
import { T, t, isRtl } from '../../Base/Globalization'

const SinglePricing = ({
    title,
    price,
    ctaText,
    ctaLink
}) => {
    return <Section
    >
        <div className="flex flex-col gap-4 items-center text-2xl font-black">
            <span><T>{title}</T></span>
            <span className="text-purple-700"><T>{price}</T></span>
        </div>
        <div>
            <Link href={ctaLink}>
                <a><T>{ctaText}</T></a>
            </Link>
        </div>
    </Section>
}

export default SinglePricing