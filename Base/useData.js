import { useContext } from 'react'
import SiteContext from './SiteContext'

const useSection = (property) => {

    if (!property) {
        throw new Error('Property is not provided to extract the section data from API')
    }

    const data = useContext(SiteContext)

    if (data == null) {
        throw new Error('No data in the API')
    }

    if (data.hasOwnProperty(property)) {
        return data[property]
    }
    else {
        throw new Error(`${property} does not exist in the API`)
        // return []
    }
}

export default useSection