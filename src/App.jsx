import { Link, Route, Routes } from "react-router-dom"
import List from "./List"
import Form from "./Projects/Prj_1_Submission_Form/Form"


function App() {
  
  return (
    <div>
   <Routes>
    <Route path="/" element={<List />} />
    <Route path="/prj_1" element={<Form />} />
   </Routes>
    </div>
  )
}

export default App
