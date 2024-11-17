import './App.css';
import {students} from './data/StudentsDb'
import studentTable from './components/studenttable'

function App() {
  return (
    <div className="App">
      <h1>Student information portal</h1>
      <hr/>
      <table width="100%">
        <tbody>
          <tr>
            <td>
              <studentTable students={students}></studentTable>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
