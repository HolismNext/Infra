import Image from 'next/image'

const HolismImage = (props) => {

    if (!props) {
        throw new Error('Props should be provided')
    }

    if (!props.src) {
        console.warn('Src is not provided', props)
        // throw new Error('Src is not provided')
        const { src, ...rest } = props
        return <Image src='/images/NoSrc.jpg' {...rest} />
    }

    return <Image {...props} />
}

export default HolismImage