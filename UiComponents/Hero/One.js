//https://tailwindui.com/components/marketing/sections/heroes

import T from '../../Base/Globalization'

const HeroOne = ({ title, subtitle, description, cta }) => {
    return <div id='hero'
        className={
            "px-8 max-w-screen-xl m-auto"
            + /* sm */ "  "
            + /* lg */ " lg:grid lg:grid-cols-2"
            + /* xl */ " xl:h-full "
        }
    >
        <div
            className={
                "flex flex-col justify-center"
                + /* */ " h-screen "
            }
        >
            <span
                className="text-gray-100 font-black text-6xl"
            ><T>{title}</T></span>
            <div></div>
            <span
                className="text-purple-400 font-bold text-4xl pt-16 lg:pt-4 block"
            ><T>{subtitle}</T></span>
            <div></div>
            <span
                className={
                    /* xs */ "hidden text-gray-400 text-lg pt-4"
                    + /* sm */ " xl:block "
                }
            >
                <T>{description}</T>
            </span>
            <div></div>
            {/* <span
                className="text-gray-400 pt-6 font-bold pt-16 lg:pt-4 uppercase hidden sm:block"
            >Trusted by</span>
            <div></div>
            <div
                className="w-full flex hidden sm:block text-gray-400 "
            >
                <span className="">Alborz</span>
                <span className="ml-16">Ezmir</span>
                <span className="ml-16">Frankfort</span>
                <span className="ml-16">Dubi</span>
            </div> */}
        </div>
        <div
            className="flex flex-col justify-center items-center"
        >
            {cta}
        </div>
    </div>
}

export default HeroOne;