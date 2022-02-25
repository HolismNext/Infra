let observer = null

const Scroll = {
    toggle: (entry, filter, keep) => {
        const cssSelector = `[class*="${filter}"]`
        const children = entry.target.querySelectorAll(cssSelector)
        children.forEach(child => {
            const classes = Array.from(child.classList).filter(i => i.startsWith(`${filter}`)).map(i => i.replace(`${filter}`, ''))
            classes.forEach(cls => {
                if (keep) {
                    child.classList.add(cls)
                }
                else {
                    child.classList.remove(cls)
                }
            })
        })
    },
    watchScroll: () => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Scroll.toggle(entry, 'in:', true)
                    Scroll.toggle(entry, 'out:', false);
                }
                else {
                    Scroll.toggle(entry, 'in:', false);
                    Scroll.toggle(entry, 'out:', true)
                }
            });
        });
        const elements = document.querySelectorAll('.scroll');
        elements.forEach(element => {
            observer.observe(element)
        })
    }
}

export default Scroll 