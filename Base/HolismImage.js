import Image from 'next/image'

const HolismImage = (props) => {

    if (!props) {
        throw new Error('Props should be provided')
    }

    const {
        className,
        container,
        lg,
        md,
        sm,
        xl,
        xs,
        xxl,
    } = props

    if (!props.src) {
        console.warn('Src is not provided', props)
        // throw new Error('Src is not provided')
        const { src, ...rest } = props
        return <Image
            src='/images/NoSrc.jpg'
            {...rest}
        />
    }

    const isPositioned = container?.indexOf('relative') > -1 || container?.indexOf('absolute') > -1

    return <div
        className={(isPositioned ? '' : 'relative ') + (container || '')}
    >
        <Image
            layout='fill'
            {...props}
            className={'object-cover saeed ' + className}
        />
    </div>
}

export default HolismImage