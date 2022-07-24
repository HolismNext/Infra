import Link from 'next/link'

const HolismLink = ({ href, children }) => {

    console.log(href)
    return <div>{href}</div>

    if (!href) {
        console.error(JSON.stringify(children))
    }

    let safeLink = href | '';

    if (typeof href === 'number') {
        console.error('Number as href:', href, JSON.stringify(children))
        safeLink = safeLink + '?href-was-number'
    }

    console.log(href)

    return <Link href={safeLink}>
        {children}
    </Link>
}

export default HolismLink