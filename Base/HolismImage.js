import Image from 'next/future/image'
import * as Base from 'Base'

const HolismImage = (props) => {

    if (!props) {
        throw new Error('Props should be provided')
    }

    const { xs, sm, md, lg, xl, xxl } = props
    const temp = []

    if (!props.src) {
        console.warn('Src is not provided', props)
        // throw new Error('Src is not provided')
        const { src, ...rest } = props
        return <Image
            src='/images/NoSrc.jpg'
            {...rest}
        />
    }

    return <div>
        {
            xs &&
            <div className="sm:hidden">
                <Image
                    {...props}
                    width={xs ? xs[0] : Base.sm}
                    height={xs ? xs[1] : 100}
                />
            </div>
        }
        {
            sm &&
            <div className="hidden sm:visible md:hidden">
                <Image
                    {...props}
                    width={sm ? sm[0] : Base.md}
                    height={sm ? sm[1] : 100}
                />
            </div>
        }
        {
            md &&
            <div className="hidden md:visible lg:hidden">
                <Image
                    {...props}
                    width={xs ? xs[0] : Base.lg}
                    height={xs ? xs[1] : 100}
                />
            </div>
        }
        {
            lg &&
            <div className="hidden lg:visible xl:hidden">
                <Image
                    {...props}
                    width={xs ? xs[0] : Base.xl}
                    height={xs ? xs[1] : 100}
                />
            </div>
        }
        {
            xl &&
            <div className="hidden xl:visible xxl:hidden">
                <Image
                    {...props}
                    width={xs ? xs[0] : Base.xxl}
                    height={xs ? xs[1] : 100}
                />
            </div>
        }
        {
            xxl &&
            <div className="hidden xxl:visible">
                <Image
                    {...props}
                    width={xs ? xs[0] : Base.xxl}
                    height={xs ? xs[1] : 100}
                />
            </div>
        }
    </div>
}

export default HolismImage