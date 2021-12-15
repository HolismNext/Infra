//https://tailwindui.com/components/marketing/sections/heroes

const HeroTwo = ({ title, subtitle, description, btnOne, btnTwo }) => {
    return <>
        <main className="
                p-12 mx-auto
                text-center 
                max-w-screen-xl              
               ">
            <div className="text-center lg:mt-10 ">
                <h1 className="
                        text-2xl lg:text-5xl tracking-tight font-black 
                        text-gray-900  ">
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
                        mt-5 sm:mt-12 
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
                        {btnOne.title}
                    </a>
                    <a href="#"
                        className="
                            px-8 py-3 ml-3 md:py-5 md:px-10
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

                        {btnTwo.title}
                    </a>
                </div>
            </div>
        </main>
    </>
}

export default HeroTwo;