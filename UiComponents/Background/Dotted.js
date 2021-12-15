import { isRtl } from "../../Base/Globalization"

const DottedBackground = ({ className, color }) => {
    return <div
        className={
            "background absolute z-0 "
            + (isRtl() ? ' left-0' : ' right-0 ')
            + className
        }
        style={{
            backgroundImage: `radial-gradient(${color || '#555'} 2px, transparent 0)`,
            backgroundSize: '20px 20px'
        }}>

    </div>
}

export default DottedBackground