import { useContext } from 'react'
import SiteContext from './SiteContext'

const useSection = (key) => {

    const temp = { items: [] }

    if (!key) {
        // throw new Error('Key is not provided to extract the section data from API')
    }

    const { sections } = useContext(SiteContext)

    if (sections == null) {
        // throw new Error('No sections in the API')
        return temp
    }

    if (!Array.isArray(sections)) {
        // throw new Error('Sections is not an array')
        return temp
    }

    const section = sections.find(i => i.key && i.key.toLowerCase() === key.toLowerCase())
    if (!section) {
        // throw new Error(`${key} does not exist in the API`)
        return temp
    }

    return section
}

export default useSection