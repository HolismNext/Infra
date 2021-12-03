import Script from 'next/script'

const GoogleTag = ({ identifier }) => {
    if (!identifier || !identifier.startsWith('G-')) {
        throw new Error('Google tag id is not correct;');
    }
    return <>
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${identifier}`}
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${identifier}');
        `}
        </Script>
    </>
}

export default GoogleTag;