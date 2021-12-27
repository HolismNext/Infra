import { T, t } from "../../../Base/Globalization";

const FilterBox = ({ title, children }) => {
    return <div
        className="filterBox bg-white rounded-md mb-3"
    >
        <div className="uppercase tracking-wide py-2 px-3 text-gray-600 font-medium text-sm border-b border-gray-100"><T>{title}</T></div>
        <div className="py-2 px-3 ">
            {children}
        </div>
    </div>
}

export default FilterBox;