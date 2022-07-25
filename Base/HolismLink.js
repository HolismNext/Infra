import Link from 'next/link'

const HolismLink = ({ href, children }) => {

    let safeLink = '/'

    if (typeof href !== 'string' && typeof href !== 'object') {
        console.log(children)
        console.log(href)
    }
    else {
        safeLink = href
    }

    return <Link href={safeLink}>
        {children}
    </Link>
}

export default HolismLink