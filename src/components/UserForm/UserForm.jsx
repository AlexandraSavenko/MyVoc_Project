import { useDispatch } from "react-redux";
import css from "./UserForm.module.css"
import { Formik, Form, Field } from "formik";
import { addWord } from "../../redux/vocabulary";
// import * as Yup from 'yup';

// const userSchema = Yup.object().shape({
//     targetWord: Yup.string().required('Requred'),
//     translationWord: Yup.string().required('Requred'),
//     partOfSpeech: "other",
// })

export default function UserForm (){
    const dispatch = useDispatch()
    return <Formik initialValues={{
        targetWord: "",
        translationWord: "",
        partOfSpeech: "other",
    }}
    onSubmit={(values, actions)=>{
        const newEntry = {...values, id: crypto.randomUUID()}
        dispatch(addWord(newEntry))
        actions.resetForm()
    }}>
        <Form className={css.form}>
            <div>
                <label>Enter your word:</label>
                <Field type="text" name="targetWord" />
                </div>
                <div>
                <label>Enter translations:</label>
                <Field type="text" name="translationWord" />
                </div>
                <div>
                <label>Choose its part of speech</label>
                <Field as="select" name="partOfSpeech">
                    <option value="verb">verb</option>
                    <option value="noun">noun</option>
                    <option value="adjective">adjective</option>
                    <option value="adverb">adverb</option>
                    <option value="pronoun">pronoun</option>
                    <option value="conjunction">conjunction</option>
                    <option value="preposition">preposition</option>
                    <option value="other">other</option>
                </Field>
                </div>
                <button  type="submit">Save</button>
        </Form>
    </Formik>
}