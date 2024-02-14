import AddStudentForm from './COMPONENTS/AddStudentForm';

import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import ReadStudentData from './COMPONENTS/ReadStudentData';
import ReadParticularData from './COMPONENTS/ReadParticularData';
import DeleteParticularData from './COMPONENTS/DeleteParticularData';
import EditStudentData from './COMPONENTS/EditStudentData';
import Hello from './COMPONENTS/Hello';

function App() 
{
  return (
   <div>
      {/* <BrowserRouter> */}
          <Link to="/add">Add Student</Link>
          <Link to="/students">View Students</Link>

          <Routes>
              <Route path="/add" element={<AddStudentForm/>}></Route>
              <Route path="/students" element={<ReadStudentData/>}>
                <Route path=":id" element={<ReadParticularData/>}></Route>
                <Route path="delete/:id" element={<DeleteParticularData/>}></Route>
                <Route path="edit/:id" element={<EditStudentData/>}></Route>
              </Route>
          </Routes>
      {/* </BrowserRouter> */}
   </div>
  );
}

export default App;
