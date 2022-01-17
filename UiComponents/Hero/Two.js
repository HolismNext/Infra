//https://tailwindui.com/components/marketing/sections/heroes
import DottedBackground from "../Background/Dotted";

const HeroTwo = ({ title, subtitle, description, ctaOne, ctaTwo }) => {
    return <>
        <main className="
                pt-12 mx-auto
                text-center 
                max-w-screen-xl  
                pb-24
               ">
            <DottedBackground
                color='#ddd'
                className="hidden lg:block md:w-1/6 md:h-2/3 -top-16 lg:top-0"
            />
            <div className="text-center lg:mt-10 z-10 relative ">
                <h1 className="
                        flex flex-col gap-6 lg:flex-row lg:gap-3 justify-center mx-auto
                        text-3xl lg:text-5xl tracking-tight font-black 
                        text-gray-900  ">
                    <span className="block md:inline z-10 relative">{title.trim()}</span>
                    <span className="text-purple-700 md:pl-2 block md:inline ">{' ' + subtitle.trim()}</span>
                </h1>
                <p className="
                        hidden
                        sm:block
                        text-base text-gray-500 sm:text-lg md:text-xlmt-3 
                        mx-auto 
                        mt-12
                        px-2    
                        w-4/5 ">
                    {description}
                </p>
                <div className="
                        mt-20 lg:mt-20
                        flex
                        flex-col
                        gap-6
                        lg:flex-row
                        justify-center
                        w-1/2
                        mx-auto
                        ">
                    <a href="#"
                        className="
                                rounded-md 
                                shadow
                                px-8 py-3
                                border
                                border-transparent
                                text-base
                                font-medium
                                rounded-md
                                text-white
                                bg-purple-700
                                hover:bg-gray-900
                                hover:text-white
                                md:py-5
                                md:text-lg md:px-10">
                        {ctaOne.title}
                    </a>
                    <a href="#"
                        className="
                            px-8 py-3 md:py-5 md:px-10
                            border border-transparent
                            text-base
                            font-medium
                            rounded-md
                            text-purple-700
                            bg-white
                            shadow
                            shadow-slate-200
                            hover:bg-gray-900
                            hover:text-white
                            transition-all
                            md:text-lg">

                        {ctaTwo.title}
                    </a>
                </div>
            </div>
            <DottedBackground
                color="#ddd"
                className="hidden lg:block left-0 bottom-0 md:h-2/3 md:w-1/6"
            />
        </main>
    </>
}

export default HeroTwo;