import './App.css';
import {students} from './data/StudentsDb'
import studenttable from './components/studenttable'

function App() {
  return (
    <div className="App">
      <h1>Student information portal</h1>
      <hr/>
      <table>
        <tbody>
          <tr>
            <td>
              <studenttable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
