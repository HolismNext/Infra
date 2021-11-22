import SectionOne from '../Section/One';
import { T, t, isRtl } from '../../Base/Globalization';

const FaqOne = ({
    title,
    faqItems
}) => {

    return <SectionOne
        background=" bg-gray-100 "
    >
        <div className="m-auto">
            <div className=" text-center text-2xl font-bold tracking-wider uppercase text-gray-900 mb-12"><T>{title || "Frequently Asked Questions"}</T></div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {
                    faqItems.map((faq, index) => <div key={index}>
                        <div className="text-gray-900 text-lg font-bold tracking-wide mb-3"><T>{faq.question}</T></div>
                        <div className="text-gray-700 text-sm "><T>{faq.answer}</T></div>
                    </div>)
                }
            </div>
        </div>
    </SectionOne>
}

export default FaqOne;