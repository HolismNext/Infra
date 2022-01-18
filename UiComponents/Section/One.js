import { T, t } from '../../Base/Globalization';

const SectionOne = ({ background, title, children, maxWidth }) => {
    return <div className={" section py-24 lg:py-36 px-8 " + background}>
        <div className={"sectionWrapper m-auto " + (maxWidth === 'xl' ? 'max-w-screen-xl' : 'max-w-screen-lg')}>
            {
                title && <div className=" text-2xl font-bold uppercase tracking-wider mb-4 "><T>{title}</T></div>
            }
            {children}
        </div>
    </div>
}

export default SectionOne;