import { useState, useEffect } from 'react'

const Hamburger = ({
    className,
    stickStyle,
    onToggle
}) => {

    const [isOpen, setIsOpen] = useState(false)

    const stickClass = "w-5 h-[3px] transition duration-500 ease-in-out " + (stickStyle || '')

    useEffect(() => {
        if (onToggle && typeof onToggle === 'function') {
            onToggle({ isOpen })
        }
    }, [isOpen])

    return <div className={className || 'w-10 h-10'}>
        <button className="text-gray-500 w-full h-full relative focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {/* <span className="sr-only">Open main menu</span> */}
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" className={isOpen ? 'rotate-45' : ' -translate-y-1.5'}></span>
                <span aria-hidden="true" className="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" className={isOpen ? 'opacity-0' : ''}></span>
                <span aria-hidden="true" className="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" className={isOpen ? '-rotate-45' : ' translate-y-1.5'}></span>
            </div>
        </button>
    </div>
}
export default Hamburger