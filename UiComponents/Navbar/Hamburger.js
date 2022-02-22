//https://tailwindcomponents.com/component/wip-hamburger-menu-animation
import { useState, useEffect } from 'react'

const Hamburger = ({
    containerStyle,
    stickStyle,
    onToggle
}) => {

    const [isOpen, setIsOpen] = useState(false)

    const stickClass = `block absolute transition duration-300 ease-in-out ${stickStyle || ''} `

    useEffect(() => {
        if (onToggle && typeof onToggle === 'function') {
            onToggle({ isOpen })
        }
    }, [isOpen])

    return <div className={containerStyle || 'w-full h-full'}>
        <button className="w-full h-full focus:outline-none flex" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open main menu</span>
            <span className="flex flex-col justify-center items-center w-full h-full relative">
                <span aria-hidden="true" className={stickClass + (isOpen && "opacity-0") + " top-1/3"}></span>
                <span aria-hidden="true" className={stickClass + (isOpen && "opacity-1 rotate-45")}></span>
                <span aria-hidden="true" className={stickClass + (isOpen && "opacity-0")}></span>
                <span aria-hidden="true" className={stickClass + (isOpen && "opacity-1 -rotate-45")}></span>
                <span aria-hidden="true" className={stickClass + (isOpen && "opacity-0") + " top-2/3"}></span>
            </span>
        </button>
    </div>
}
export default Hamburger