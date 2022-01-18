import SectionOne from '../Section/One'

const LogoCloudOne = ({
    title,
    subtitle,
    brands
}) => {
    return <SectionOne
        title={title}
        subtitle={subtitle}
    >
        {
            brands && brands.map && brands.length > 0 &&
            <div class="flex flex-wrap gap-3 mt-12 justify-center">
                {
                    brands.map(brand => <div key={brand.name} className="flex p-3 bg-white rounded-lg items-center gap-3">
                        <div className="w-12 h-12 relative flex items-center justify-center"><img className="object-cover" src={brand.logo} alt={brand.name + ' Logo'} /></div>
                        <div>{brand.name}</div>
                    </div>)
                }
            </div>
        }
    </SectionOne>
}

export default LogoCloudOne