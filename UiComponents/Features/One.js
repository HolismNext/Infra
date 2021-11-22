import { Section, SectionTitle, SectionWrapper } from "./Styles";
import { BadgeCheckIcon } from '@heroicons/react/solid'

const featureStyle = "bg-gray-100 rounded-lg p-6 relative";
const iconStyle = " w-12 h-12 bg-blue-700 text-white p-2 rounded-md absolute -top-6 right-0 left-0 m-auto";
const titleStyle = "text-center text-lg font-bold text-gray-800 mt-4 mb-2";
const descriptionStyle = "text-center text-md text-gray-600 ";

const FeaturesOne = () => {
    return <div className={Section}>
        <div className={SectionWrapper}>
            <div className="text-blue-500 uppercase tracking-wider text-center">Perform more</div>
            <div className="text-xl font-bold tracking-wide text-gray-900 text-center my-4">Use more tools, to get more done.</div>
            <div className="text-sm text-gray-700 text-center mb-12">We have a variety of services to offer. Let Sadra be a tool in your toolset. Trust the new wave of technology to help you perform your business better.</div>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className={featureStyle}>
                    <BadgeCheckIcon className={iconStyle} />
                    <div className={titleStyle}>Title one</div>
                    <div className={descriptionStyle}>This is a sample description for feature. This needs to be the same in length.</div>
                </div>
                <div className={featureStyle}>
                    <BadgeCheckIcon className={iconStyle} />
                    <div className={titleStyle}>Title one</div>
                    <div className={descriptionStyle}>This is a sample description for feature. This needs to be the same in length.</div>
                </div>
                <div className={featureStyle}>
                    <BadgeCheckIcon className={iconStyle} />
                    <div className={titleStyle}>Title one</div>
                    <div className={descriptionStyle}>This is a sample description for feature. This needs to be the same in length.</div>
                </div>
                <div className={featureStyle}>
                    <BadgeCheckIcon className={iconStyle} />
                    <div className={titleStyle}>Title one</div>
                    <div className={descriptionStyle}>This is a sample description for feature. This needs to be the same in length.</div>
                </div>
                <div className={featureStyle}>
                    <BadgeCheckIcon className={iconStyle} />
                    <div className={titleStyle}>Title one</div>
                    <div className={descriptionStyle}>This is a sample description for feature. This needs to be the same in length.</div>
                </div>
                <div className={featureStyle}>
                    <BadgeCheckIcon className={iconStyle} />
                    <div className={titleStyle}>Title one</div>
                    <div className={descriptionStyle}>This is a sample description for feature. This needs to be the same in length.</div>
                </div>
            </div>
        </div>
    </div>
}

export default FeaturesOne;