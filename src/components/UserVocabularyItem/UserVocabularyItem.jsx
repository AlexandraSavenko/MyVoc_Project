import { useDispatch } from "react-redux"
import { deleteWord } from "../../redux/vocabulary"

export default function UserVocabularyItem ({newWord: {targetWord, translationWord, partOfSpeech, id}}) {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteWord(id))
    }
    return <div>
        <h2>{targetWord}</h2>
        <h3>{translationWord}</h3>
<p>{partOfSpeech}</p>
<button onClick={handleDelete}>Delete</button>
    </div>
}