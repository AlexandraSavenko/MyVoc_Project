import { useDispatch, useSelector } from "react-redux"
import { changeLang, selectLang } from "../../redux/localLang"


export default function Local () {
    const currentLang = useSelector(selectLang)
    const dispatch = useDispatch()
    const handleSelect = (e) => {
dispatch(changeLang(e.target.value))    }
    return <div>
        <select value={currentLang} onChange={handleSelect}>
            <option value="eng">eng</option>
            <option value="ukr">ukr</option>
            <option value="fr">fr</option>

        </select>
        <p>{`Your current language is ${currentLang}`}</p>
    </div>
}