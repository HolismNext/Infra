import { T, t } from "../../../Base/Globalization";
import FilterBox from "./FilterBox";
import Item from "./Item";

const ListOne = ({ filters, response, card }) => {
    return <div className="list w-full grid grid-cols-4 gap-6">
        {
            filters
                ?
                <div className="filters col-span-1">
                    {filters}
                </div>
                :
                null
        }
        <div className={"items " + (filters ? ' col-span-3' : ' col-span-4')}>
            {
                response && response.data
                    ?
                    response.data.length > 0
                        ?
                        response.data.map(item =>
                            <Item key={item.id}>
                                {card(item)}
                            </Item>
                        )
                        :
                        <div>No item is found</div>
                    :
                    <div>Something went wrong. Please refresh the page!</div>
            }
        </div>
    </div>
}

export default ListOne;