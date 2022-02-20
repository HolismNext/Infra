const Cookie = {
    getCookie: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key];
    },
    setCookie: (key, value, days) => {
        let expires = '';
        if (days) {
            expires = new Date();
            expires.setDate(expires.getDate() + days);
            expires = `; expires=${expires.toUTCString()}`;
        }
        document.cookie = `${key}=${value}${expires}; domain=${location.hostname}`;
    },
    consentKey: 'hasCookieConsent',
    setConsent: () => {
        Cookie.setCookie(Cookie.consentKey, true, 100);
    },
    hasConsent: () => {
        return Cookie.getCookie(Cookie.consentKey) === 'true';
    }
}

export default Cookie;