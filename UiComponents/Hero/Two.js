//https://tailwindui.com/components/marketing/sections/heroes

const HeroTwo = ({ title, subtitle, description, btnOne ,btnTwo }) => {
    return <>
            <main className="
                p-12 mx-auto
                text-center                
                md:h-screen
               ">
            <div className="text-center lg:mt-10 ">
                <h1 className="
                        text-2xl lg:text-4xl tracking-tight font-extrabold 
                        text-gray-900 ">
                    <span className="block md:inline">{title}</span>
                    <span className="text-purple-700 pl-2 block md:inline ">{subtitle}</span>
                </h1>
                <p className="
                        text-base text-gray-500 sm:text-lg md:text-xlmt-3 
                        mx-auto 
                        mt-5
                        px-2    
                        w-4/5 ">
                    {description}
                </p>
                <div className="
                        w-auto 
                        mt-5 sm:mt-8 
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
                                hover:bg-purple-700
                                md:py-4
                                md:text-lg md:px-10">
                        {btnOne.title}
                    </a>
                    <a href="#"
                        className="
                            px-8 py-3 ml-3 md:py-4 md:px-10
                            border border-transparent
                            text-base
                            font-medium
                            rounded-md
                            text-purple-700
                            bg-purple-100
                            hover:bg-purple-200
                            md:text-lg">

                        {btnTwo.title}
                    </a>
                </div>
            </div>
        </main>
    </>
}

export default HeroTwo;