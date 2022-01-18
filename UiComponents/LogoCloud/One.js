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
            <div>
                {
                    brands.map(brand => <div key={brand.name}>
                        <div>{brand.logo}</div>
                        <div>{brand.name}</div>
                    </div>)
                }
            </div>
        }
    </SectionOne>
}

export default LogoCloudOne