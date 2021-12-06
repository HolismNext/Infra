import Script from 'next/script'
import app from '../../Base/App'
import { useState, useEffect } from 'react';

const CookieConsentOne = ({
    policyUrl,
    style /* dark or bright */
}) => {

    const [hasConsent, setHasConsent] = useState(false);

    const setConsent = () => {
        app.setConsent();
        setHasConsent(app.hasConsent());
    }

    useEffect(() => {
        setHasConsent(app.hasConsent());
    })

    const defaultContent =
        <p className="md:mr-8">
            <strong>Notice.</strong> This site, its blog and user panels use cookies to provide necessary website functionality, improve your experience and analyze our traffic. By using our website, you agree to{' '}
            {
                policyUrl
                    ?
                    <span><a href={policyUrl}>our Privacy Policy</a> and </span>
                    :
                    null
            }
            our cookie usage.
        </p>

    return hasConsent
        ?
        <div></div>
        :
        <div className="fixed right-8 left-8 bottom-8 bg-gray-900 text-gray-100 z-50 border-2 rounded-xl border-white ">
            <div className="md:flex justify-between items-center m-8">
                {defaultContent}
                <button onClick={() => setConsent()} className="mt-8 md:mt-0 bg-yellow-400 text-gray-900  py-4 px-8 rounded-md text-xl font-medium hover:bg-yellow-500 transition-all">OK!</button>
            </div>
        </div>
}

export default CookieConsentOne;