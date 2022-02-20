import { T, t } from '../../Base/Globalization'
import Link from 'next/link'

const SectionTwo = ({
    background,
    title,
    subtitle,
    imageUrl,
    explanations,
    ctaText,
    ctaLink,
    children,
    isEven
}) => {
    return <div className={"section " + background}>
        <div className={"flex " + (isEven && 'flex-row-reverse	')}>
            <img src={imageUrl} alt={`${title} - ${subtitle}`} />
            <div>
                <div>{title}</div>
                <div>{subtitle}</div>
                <div>{explanations}</div>
                {
                    ctaText && ctaLink &&
                    <Link href={ctaLink}>
                        <a>{ctaText}</a>
                    </Link>
                }
            </div>
        </div>
    </div>
}

export default SectionTwo