//https://tailwindcomponents.com/component/wip-hamburger-menu-animation
import { useState, useEffect } from 'react'

const Hamburger = ({
    containerStyle,
    stickStyle,
    onToggle
}) => {

    const [isOpen, setIsOpen] = useState(false)

    const stickClass = `block absolute transform transition duration-300 ease-in-out ${stickStyle || ''} `

    useEffect(() => {
        if (onToggle && typeof onToggle === 'function') {
            onToggle({ isOpen })
        }
    }, [isOpen])

    return <div className={containerStyle || 'w-full h-full'}>
        <button className="w-full h-full relative focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open main menu</span>
            <div className="block w-full h-full flex flex-col bg-yellow-400">
                <span aria-hidden="true" className={stickClass + (isOpen ? "rotate-45" : "-translate-y-1.5")}></span>
                <span aria-hidden="true" className={stickClass + (isOpen && "opacity-0")}></span>
                <span aria-hidden="true" className={stickClass + (isOpen ? "-rotate-45" : "translate-y-1.5")}></span>
            </div>
        </button>
    </div>
}
export default Hamburger