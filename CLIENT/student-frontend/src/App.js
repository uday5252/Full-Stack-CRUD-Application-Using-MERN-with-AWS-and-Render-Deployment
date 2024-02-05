import AddStudentForm from './COMPONENTS/AddStudentForm';

import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import ReadStudentData from './COMPONENTS/ReadStudentData';
import ReadParticularData from './COMPONENTS/ReadParticularData';

function App() 
{
  return (
   <div>
      {/* <BrowserRouter> */}
          <Link to="/add">Add Student</Link>

          <Routes>
              <Route path="/add" element={<AddStudentForm/>}></Route>
              <Route path="/students" element={<ReadStudentData/>}>
                {/* <Route path=":id" element={<ReadParticularData/>}></Route> */}
              </Route>
          </Routes>
      {/* </BrowserRouter> */}
   </div>
  );
}

export default App;
