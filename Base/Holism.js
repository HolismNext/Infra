const Holism = {
    isSomething: value => {
        return !Holism.isNothing(value);
    },
    isNothing: value => {
        return value === undefined || value === null || (/^\s*$/g.test(value));
    },
    randomId: () => {
        return Math.random().toString(36).replace(/[^a-z]+/g, '');
    },
    ensure: (items) => {
        for (let i = 0; i < items.length; i++) {
            if (!items[i]) {
                throw new Error(`Required parameter is not specified`);
            }
        }
    },
    goTo: (url) => {
        //history.push(url);
    },
    trim: (text, character) => {
        var start = 0,
            end = text.length;

        while (start < end && text[start] === character)
            ++start;

        while (end > start && text[end - 1] === character)
            --end;

        return (start > 0 || end < text.length) ? text.substring(start, end) : text;
    },
    env: (key) => {
        return Holism.trim(process.env[`NEXT_PUBLIC_${key}`] || '', '/')
    }
};

export default Holism;
export { Holism };