import { CheckIcon, XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react';
import { app } from '../../Base/App';
import { T, t, isRtl } from '../../Base/Globalization'



const Section = " py-24 lg:py-36 px-8 ";
const SectionWrapper = " max-w-screen-lg m-auto "
const Input = " p-4 my-2 border border-gray-400 rounded-md ";
const Button = Input + " text-center cursor-pointer bg-purple-800 hover:bg-gray-900 transition-all text-gray-100 ";
const SectionTitle = " text-2xl font-bold uppercase tracking-wider mb-4 ";
const Label = " text-md text-gray-700 font-medium mb-1 ";
const activePricing = "bg-gray-200 text-blue-900 w-full h-full px-4 py-2 flex justify-center items-center rounded-md select-none"

const pricingItemStyle = "rounded-lg p-6 "
const pricingTitle = "text-lg font-bold tracking-wide uppercase "
const price = "text-3xl font-bold my-3 inline-block"
const priceUnit = "text-md "
const button = Button + " w-full my-6 h-10 !p-2"
const feature = "flex flex-row border-b border-blue-800 py-4 text-gray-300 "
const lastFeature = "flex flex-row py-4 text-gray-300"
const Icon = " w-6 h-6 "
const icon = Icon + " mr-4";

const SmallX = () => {
    return <XIcon className="w-4 h-4 m-auto text-gray-400 absolute top-0 right-0 bottom-0 left-0" />
}

const SmallCheck = () => {
    return <CheckIcon className="w-6 h-6 m-auto text-blue-900" />
}

const Title = ({ header, description, className }) => {
    return <div className={className}>
        <div className="text-lg font-bold tracking-wider uppercase text-gray-900 pt-4">{header}</div>
        {
            description
                ?
                <div className="text-sm text-gray-600 mt-4 mb-8">{description}</div>
                :
                null
        }
    </div>
}

const FeatureTitle = ({ children }) => {
    return <div className="self-center text-lg tracking-wide text-gray-700 ">
        {children}
    </div>
}

const White = ({ children, className }) => {
    return <div className={"bg-white py-4 place-items-center border-r-2 border-l-2 place-self-center w-full h-full relative " + className}>
        {children}
    </div>
}

const Selected = ({ children, className }) => {
    return <White className={"border-blue-900 " + className}>
        {children}
    </White>
}

const TopRounded = ({ children, className }) => {
    return <White className={"rounded-t-xl border-t-2 " + className}>
        {children}
    </White>
}

const BottomRounded = ({ children, className }) => {
    return <White className={"rounded-b-xl border-b-2 " + className}>
        {children}
    </White>
}

const Line = ({ className }) => {
    return <div className={"col-span-4 border-b " + className}>

    </div>
}

// https://tailwindui.com/components/marketing/sections/pricing

const PricingOne = ({
    title,
    subtitle
}) => {
    const [pricingPeriod, setPricingPeriod] = useState('monthly');
    return <>
        <div className={Section + " bg-blue-600 md:!pb-0 "}>
            <div className={SectionWrapper}>
                <div className="text-gray-100 text-center text-2xl font-bold tracking-wide"><T>{title}</T></div>
                <div className="text-gray-100 text-center text-sm mt-4 "><T>{subtitle}</T></div>
                <div className="m-auto w-72 bg-blue-900 rounded-md mt-16 p-1 text-gray-200 grid grid-cols-2 place-items-center ">
                    <div className={pricingPeriod === 'monthly' ? activePricing : "cursor-pointer select-none"} onClick={() => setPricingPeriod('monthly')}>Monthly</div>
                    <div className={pricingPeriod === 'yearly' ? activePricing : "cursor-pointer select-none"} onClick={() => setPricingPeriod('yearly')}>Yearly</div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-6 md:mt-16 md:grid-cols-3 md:gap-0">
                    <div className={pricingItemStyle + " bg-blue-900 text-gray-200 md:rounded-bl-none md:pr-8 lg:pr-10 xl:pr-12 xl:pl-8"}>
                        <div className={pricingTitle}>Starter</div>
                        <div><span className={price}>$5</span><span className={priceUnit}> USD/Mo.</span></div>
                        <button className={button}>Buy</button>
                        <div className={feature}>
                            <CheckIcon className={icon} />
                            <div>Feature description</div>
                        </div>
                        <div className={feature}>
                            <CheckIcon className={icon} />
                            <div>Feature description</div>
                        </div>
                        <div className={lastFeature}>
                            <CheckIcon className={icon} />
                            <div>Feature description</div>
                        </div>
                    </div>
                    <div className={pricingItemStyle + " md:scale-110 bg-white border-blue-900 border"}>
                        <div className={pricingTitle}>Serious</div>
                        <div><span className={price}>$5</span><span className={priceUnit}> USD/Mo.</span></div>
                        <button className={button}>Buy</button>
                        <div className={feature + " text-gray-900"}>
                            <CheckIcon className={icon} />
                            <div>Feature description</div>
                        </div>
                        <div className={feature + " text-gray-900"}>
                            <CheckIcon className={icon} />
                            <div>Feature description</div>
                        </div>
                        <div className={lastFeature + " text-gray-900"}>
                            <CheckIcon className={icon} />
                            <div>Feature description</div>
                        </div>
                    </div>
                    <div className={pricingItemStyle + " bg-blue-900 text-gray-200 rounded-br-none md:pl-8 lg:pl-10 xl:pl-12 xl:pr-8"}>
                        <div className={pricingTitle}>Wealthy</div>
                        <div><span className={price}>$5</span><span className={priceUnit}> USD/Mo.</span></div>
                        <button className={button}>Buy</button>
                        <div className={feature}>
                            <CheckIcon className={icon} />
                            <div>Feature description</div>
                        </div>
                        <div className={feature}>
                            <CheckIcon className={icon} />
                            <div>Feature description</div>
                        </div>
                        <div className={lastFeature}>
                            <CheckIcon className={icon} />
                            <div>Feature description</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={Section + " bg-gray-100 !pt-20"}>
            <div className={SectionWrapper + " overflow-x-auto"}>
                <div className="grid grid-cols-4 gap-x-6 px-8 " style={{ minWidth: app.breakpoints.md + "px" }}>
                    <Line className="" />
                    <Title
                        header="For business"
                        className="place-self-start self-end mb-8"
                    />
                    <Title
                        header="Starter"
                        description="For you to start your business and test our services"
                    />
                    <Title
                        header="Serious"
                        description="For you to start your business and test our services"
                        className="border-t-2 border-blue-900"
                    />
                    <Title
                        header="Wealthy"
                        description="For you to start your business and test our services"
                    />
                    <FeatureTitle>Feature one</FeatureTitle>
                    <TopRounded><SmallX /></TopRounded>
                    <TopRounded className="border-t-2 border-r-2 border-l-2 border-blue-900"><SmallCheck /></TopRounded>
                    <TopRounded><SmallCheck /></TopRounded>
                    <Line />
                    <FeatureTitle>Feature one</FeatureTitle>
                    <White><SmallX /></White>
                    <Selected><SmallCheck /></Selected>
                    <White><SmallCheck /></White>
                    <Line />
                    <FeatureTitle>Feature one</FeatureTitle>
                    <White><SmallX /></White>
                    <Selected><SmallCheck /></Selected>
                    <White><SmallCheck /></White>
                    <Line />
                    <FeatureTitle>Feature one</FeatureTitle>
                    <White><SmallX /></White>
                    <Selected><SmallCheck /></Selected>
                    <White><SmallCheck /></White>
                    <Line />
                    <FeatureTitle>Feature one</FeatureTitle>
                    <White><SmallX /></White>
                    <Selected><SmallCheck /></Selected>
                    <White><SmallCheck /></White>
                    <Line />
                    <FeatureTitle>Feature one</FeatureTitle>
                    <BottomRounded><SmallX /></BottomRounded>
                    <BottomRounded className="border-blue-900"><SmallCheck /></BottomRounded>
                    <BottomRounded><SmallCheck /></BottomRounded>


                    <Title
                        header="Other benefits"
                        className="place-self-start self-end mb-8 col-span-4 mt-12"
                    />
                    <FeatureTitle>Feature one</FeatureTitle>
                    <TopRounded><SmallX /></TopRounded>
                    <TopRounded className="border-t-2 border-r-2 border-l-2 border-blue-900"><SmallCheck /></TopRounded>
                    <TopRounded><SmallCheck /></TopRounded>
                    <Line />
                    <FeatureTitle>Feature one</FeatureTitle>
                    <White><SmallX /></White>
                    <Selected><SmallCheck /></Selected>
                    <White><SmallCheck /></White>
                    <Line />
                    <FeatureTitle>Feature one</FeatureTitle>
                    <White><SmallX /></White>
                    <Selected><SmallCheck /></Selected>
                    <White><SmallCheck /></White>
                    <Line />
                    <FeatureTitle>Feature one</FeatureTitle>
                    <BottomRounded><SmallX /></BottomRounded>
                    <BottomRounded className="border-blue-900"><SmallCheck /></BottomRounded>
                    <BottomRounded><SmallCheck /></BottomRounded>
                </div>
            </div>
        </div>
    </>
}

export default PricingOne;