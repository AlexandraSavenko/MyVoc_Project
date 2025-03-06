import { useSelector } from "react-redux"
import UserVocabularyItem from "../UserVocabularyItem/UserVocabularyItem"

export default function UserVocabularyList () {
    const words = useSelector(state => state.vocabulary.words)
    return <div>
        <ul style={{display: "flex", gap: "10px"}}>{
            words.map(el => <li style={{border: "1px solid", padding: "10px"}} key={el.id}><UserVocabularyItem newWord={el}/></li>)
}</ul>
    </div>
}