import { useRouter } from 'next/router';
// import { app } from './App';

let localesCache = [{
    key: 'en',
    isRtl: false,
    translations: []
}];

const getLocaleCache = (locale) => {
    let cache = localesCache.filter(localeCache => localeCache.key === locale);
    if (cache.length === 0) {
        cache = localesCache[0];
    }
    else {
        cache = cache[0];
    }
    return cache;
}

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
    const cache = getLocaleCache(locale);

    return <>{cache.translations[children] || children}</>
}

export default T;

export { T }

const t = (text) => {
    const router = useRouter();
    const { locale } = router;
    const cache = getLocaleCache(locale);

    return cache.translations[text] || text;
}

export { t };

const useT = (text) => {
    const router = useRouter();
    const { locale } = router;
    const cache = getLocaleCache(locale);

    return cache.translations[text] || text;
}

export { useT };

const isRtl = () => {
    const router = useRouter();
    const { locale } = router;
    const cache = getLocaleCache(locale);

    return cache.isRtl;
}

export { isRtl }