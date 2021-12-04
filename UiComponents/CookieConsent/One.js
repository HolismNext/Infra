import Script from 'next/script'
import app from '../../Base/App'
import { useState, useEffect } from 'react';

const CookieConsentOne = ({
    policyUrl,
    style /* dark or bright */
}) => {

    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        setHasConsent(app.hasConsent());
    })

    const defaultContent =
        <p>
            <strong>Notice.</strong> This site, its blog and user panels use cookies to provide necessary website functionality, improve your experience and analyze our traffic. By using our website, you agree to
            {
                policyUrl
                    ?
                    <span><a href={policyUrl}>our Privacy Policy</a> and </span>
                    :
                    null
            }
            our cookies usage.
        </p>

    return hasConsent
        ?
        <div></div>
        :
        <div className="fixed right-0 left-0 bottom-0 p-8 bg-gray-900 text-gray-100 z-50 border-t-2 border-white ">
            {defaultContent}
            <button onClick={() => app.setConsent()} className="mt-8">OK!</button>
        </div>
}

export default CookieConsentOne;