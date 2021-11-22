import SectionOne from '../Section/One';
import { T, t, isRtl } from '../../Base/Globalization';
import React from 'react';

const FeaturesOne = ({
    title,
    subtitle,
    description,
    features
}) => {
    return <SectionOne>
        <div className="text-blue-500 uppercase tracking-wider text-center"><T>{title}</T></div>
        <div className="text-xl font-bold tracking-wide text-gray-900 text-center my-4"><T>{subtitle}</T></div>
        <div className="text-sm text-gray-700 text-center mb-12"><T>{description}</T></div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">

            {
                features.map((feature, index) => {
                    const clonedIcon = React.cloneElement(feature.icon, {
                        className: " w-12 h-12 bg-blue-700 text-white p-2 rounded-md absolute -top-6 right-0 left-0 m-auto"
                    });
                    return <div index={index} className="bg-gray-100 rounded-lg p-6 relative">
                        {clonedIcon}
                        <div className="text-center text-lg font-bold text-gray-800 mt-4 mb-2"><T>{feature.title}</T></div>
                        <div className="text-center text-md text-gray-600 "><T>{feature.description}</T></div>
                    </div>
                }
                )
            }
        </div>
    </SectionOne>
}

export default FeaturesOne;