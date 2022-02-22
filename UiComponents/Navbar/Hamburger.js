//https://tailwindcomponents.com/component/wip-hamburger-menu-animation
import { useState, useEffect, useRef } from 'react'

const Hamburger = ({
    containerStyle,
    stickStyle,
    gap,
    speed,
    onToggle
}) => {

    const ref = useRef()
    const [isOpen, setIsOpen] = useState(false)
    const [space, setSpace] = useState(gap)

    const stickClass = `block absolute transform transition ease-in-out left-0 right-0 mx-auto ${stickStyle || ' bg-gray-600 h-0.5 w-4/5 '} ${speed || ' duration-500 '} `

    useEffect(() => {
        if (onToggle && typeof onToggle === 'function') {
            onToggle({ isOpen })
        }
    }, [isOpen])

    useEffect(() => {
        if (ref.current && !gap) {
            setSpace(ref.current.offsetHeight / 5)
        }
    }, [containerStyle, gap])

    return <div ref={ref} className={containerStyle || 'w-10 h-10 bg-gray-300'} >
        <button className="w-full h-full relative focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open main menu</span>
            <div className="block w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" className={stickClass + (isOpen && 'rotate-45')} style={isOpen ? {} : { transform: `translateY(-${space}px)` }}></span>
                <span aria-hidden="true" className={stickClass + (isOpen && 'opacity-0')}></span>
                <span aria-hidden="true" className={stickClass + (isOpen && '-rotate-45')} style={isOpen ? {} : { transform: `translateY(${space}px)` }}></span>
            </div>
        </button>
    </div>
}
export default Hamburger