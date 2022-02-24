let observer = null

const Scroll = {
    toggle: (entry, filter) => {
        const children = entry.querySelectorAll(`[class*=${filter}]`)
        children.forEach(child => {
            const classes = Array.from(child.classList).filter(i => i.startsWith(`${filter}`).map(i => i.replace(`${filter}`, '')))
            classes.forEach(cls => {
                if (child.classList.contains(cls)) {
                    child.classList.remove(cls)
                }
                else {
                    child.classList.add(cls)
                }
            })
        })
    },
    watchScroll: () => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // if (entry.isIntersecting) {
                //     Scroll.toggle(entry.target, 'in:')
                //     Scroll.toggle(entry.target, 'out:');
                // }
                // else {
                //     Scroll.toggle(entry.target, 'out:')
                //     Scroll.toggle(entry.target, 'in:');
                // }
            });
        });
        const elements = document.querySelectorAll('.scroll');
        elements.forEach(element => {
            observer.observe(element)
        })
    }
}

export default Scroll 