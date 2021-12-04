import Script from 'next/script'

const CookieConsentOne = () => {
    return <>
        <div>Do you agree to our cookies?</div>
        <Script id='cookieConsentScript' strategy='beforeInteractive'>

        </Script>
    </>
}

export default CookieConsentOne;