import { useRouter } from 'next/router';
// import { app } from './App';

let localesCache = [{
    key: 'en',
    translations: []
}];

const Register = (locales) => {
    for (let i = 0; i < locales.length; i++) {
        let locale = locales[i];
        if (!locale.key) {
            throw new Error('Locale has no key');
        }
        // if (app.isNothing(locale.key)) {
        //     throw new Error('Locale key is empty');
        // }
        if (locale.key !== locale.key.toLowerCase()) {
            throw new Error('Locale key should be all lowercase');
        }
        if (!locale.translations) {
            throw new Error('Locale has no translations array');
        }
    }
    localesCache = locales;
}

export { Register }

const T = ({ children }) => {
    const router = useRouter();
    const { locale } = router;

    let cache = localesCache.filter(localeCache => localeCache.key === locale);
    if (cache.length === 0) {
        cache = localeCache[0];
    }
    else {
        cache = cache[0];
    }
    return <>{cache.translations[children] || children}</>
}

export default T;

const t = (text) => {
    const router = useRouter();
    const { locale } = router;

    let cache = localesCache.filter(localeCache => localeCache.key === locale);
    if (cache.length === 0) {
        cache = localeCache[0];
    }
    else {
        cache = cache[0];
    }
    return cache.translations[text] || children;
}

export { t };