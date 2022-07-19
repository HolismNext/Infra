import { useContext } from 'react'
import SiteContext from './SiteContext'

const useSection = (key) => {

    if (!key) {
        throw new Error('Key is not provided to extract the section data from API')
    }

    const { sections } = useContext(SiteContext)
    if (sections == null) {
        throw new rror('No sections in the API')

    }
    if (!Array.isArray(sections)) {
        throw new Error('Sections is not an array')
    }
    const section = sections.find(i => i.key && i.key.toLowerCase() === key.toLowerCase())

    if (!section) {
        throw new Error(`${key} does not exist in the API`)
    }

    return section
}

export default useSection