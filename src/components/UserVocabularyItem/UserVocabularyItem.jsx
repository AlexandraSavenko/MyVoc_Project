export default function UserVocabularyItem ({newWord: {targetWord, translationWord, partOfSpeech}}) {
    return <div>
        <p>{targetWord}</p>
        <p>{translationWord}</p>
<p>{partOfSpeech}</p>
    </div>
}