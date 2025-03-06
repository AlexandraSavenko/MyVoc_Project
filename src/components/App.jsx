// import { useState,useEffect } from "react";
// import clsx from 'clsx';
import Header from "./Header/Header"
import "../components/App.module.css"
import Form from "./UserForm/UserForm"
import UserVocabularyList from "./UserVocabularyList/UserVocabularyList"

function App() {
  

  return (
    <div className="wrapper">
      <Header/>
      <Form/>
      <UserVocabularyList/>
      </div>
  )
}

export default App
