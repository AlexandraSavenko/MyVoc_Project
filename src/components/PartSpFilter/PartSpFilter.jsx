import { useDispatch } from "react-redux"
import { filterPartSp } from "../../redux/filterVoc"

export default function PartSpFilter () {
const dispatch = useDispatch()
    const handleFilter = (e) => {
dispatch(filterPartSp(e.target.value))
    }
    return <div>
        <select onChange={handleFilter} name="partOfSpeech">
        <option value="all">all</option>

        <option value="verb">verb</option>
                    <option value="noun">noun</option>
                    <option value="adjective">adjective</option>
                    <option value="adverb">adverb</option>
                    <option value="pronoun">pronoun</option>
                    <option value="conjunction">conjunction</option>
                    <option value="preposition">preposition</option>
                    <option value="other">other</option>
        </select>
    </div>
}