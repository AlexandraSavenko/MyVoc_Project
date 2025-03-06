import { useSelector } from "react-redux"
import UserVocabularyItem from "../UserVocabularyItem/UserVocabularyItem"
import PartSpFilter from "../PartSpFilter/PartSpFilter"

const getOnePartSp = (allWords, partSp) => {
    switch (partSp) {
        case 'verb':
            return allWords.filter(el => el.partOfSpeech === partSp)
            case 'noun':
            return allWords.filter(el => el.partOfSpeech === partSp)
    
        default:
return allWords;
    }
}

export default function UserVocabularyList () {
    const words = useSelector(state => state.vocabulary.words)
    
    const partSpValue = useSelector(state => state.vocFilter.partSp)
    const visibleWords = getOnePartSp(words, partSpValue)
    return <div>
        <PartSpFilter/>
        <ul style={{display: "flex", gap: "10px"}}>{
            visibleWords.map(el => <li style={{border: "1px solid", padding: "10px"}} key={el.id}><UserVocabularyItem newWord={el}/></li>)
}</ul>
    </div>
}