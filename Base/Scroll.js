let observer = null

const Scroll = {
    toggle: (entry, filter, keep) => {
        const cssSelector = `[${filter}]`
        const elements = Array.from(entry.target.querySelectorAll(cssSelector))
        if (entry.target.getAttribute('filter')) {
            elements.push(entry.target);
        }
        elements.forEach(element => {
            const classes = element.getAttribute(filter).split(' ');
            classes.forEach(cls => {
                if (keep) {
                    element.classList.add(cls)
                }
                else {
                    element.classList.remove(cls)
                }
            })
        })
    },
    watchScroll: () => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // console.log(true, entry.target);
                    Scroll.toggle(entry, 'in', true)
                    Scroll.toggle(entry, 'out', false);
                }
                else {
                    // console.log(false, entry.target);
                    Scroll.toggle(entry, 'in', false);
                    Scroll.toggle(entry, 'out', true)
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });
        const elements = document.querySelectorAll('.scroll');
        elements.forEach(element => {
            observer.observe(element)
        })
    }
}

export default Scroll 