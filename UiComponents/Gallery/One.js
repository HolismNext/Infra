const GalleryOne = ({
    items
}) => {
    return <div className="grid gap-2 sm:gap-4 lg:gap-6 m-auto sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 max-w-screen-lg">
        {
            items.map((item, index) => <div key={index} className="w-full relative group cursor-pointer overflow-hidden">
                <div className="absolute invisible top-0 right-0 bottom-0 left-0 bg-slate-400 group-hover:visible z-2 opacity-30"></div>
                <div className="absolute hidden group-hover:block z-5">
                    <div>{item.title}</div>
                    <div>{item.subtitle}</div>
                </div>
                <img className="w-full h-full object-cover group-hover:scale-125 transition-all z-1" src={item.imageUrl} alt={`${item.title} - ${item.subtitle}`} />
            </div>)
        }
    </div>
}

export default GalleryOne