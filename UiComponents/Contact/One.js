import SectionOne from '../Section/One';
import { T, t, isRtl } from '../../Base/Globalization';

const ContactOne = ({
    title,
    description,
    contactItems,
    location
}) => {
    return <>
        <SectionOne
            background="bg-gray-100"
        >
            <div
                className="max-w-screen-lg m-auto flex flex-col lg:grid lg:grid-cols-2"
            >
                <div className="">
                    <div className=" text-2xl font-bold uppercase tracking-wider mb-4  text-gray-800">
                        <T>{title}</T>
                    </div>
                    <div className="text-sm text-gray-600 lg:w-3/4">
                        <T>{description}</T>
                    </div>
                </div>
                <div className="mt-12 lg:mt-0">
                    <div>
                        {/* <input className={Input + " sm:w-full "} placeholder={t('Your name')} />
                        <div className="flex-col sm:w-full sm:flex-row flex justify-between">
                            <input className={Input + " lg:flex-shrink lg:w-56"} placeholder={t('Your phone')} />
                            <input className={Input + " lg:flex-shrink lg:w-56"} placeholder={T('Your email')} />
                        </div>
                        <textarea className={Input + "w-full"} placeholder={T('Please write your message here.')}>

                        </textarea>
                        <button className={Button + " w-1/2"}>
                            <T>Send</T>
                        </button> */}
                    </div>
                </div>
            </div>
        </SectionOne>
        {
            contactItems
                ?
                <SectionOne
                    title={t('Contact Information')}
                    background="bg-purple-200"
                >
                    <div className="sm:grid sm:grid-cols-2 sm:gap-4 text-gray-900 xl:grid-cols-4">
                        {
                            contactItems.map((item, index) =>
                                <div>
                                    <PhoneIcon className={Icon} />
                                    <a href="tel:02634325834">02634325834</a>
                                </div>)
                        }
                    </div>
                </SectionOne>
                :
                null
        }
        <iframe
            src={location}
            className="w-full h-screen"
            allowfullscreen=""
            loading="lazy"></iframe>
    </>
}

export default ContactOne;