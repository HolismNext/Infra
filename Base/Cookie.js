const Cookie = {
    getCookie: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key];
    },
    setCookie: (key, value) => {
        document.cookie = `${key}=${value}`;
    },
    consentKey: 'hasConsent',
    setConsent: () => {
        Cookie.setCookie(Cookie.consentKey, true);
    },
    hasConsent: () => {
        return Cookie.getCookie(Cookie.consentKey) === 'true';
    }
}

export default Cookie;