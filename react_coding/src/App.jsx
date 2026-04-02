import Counter from "./component/Counter"
import Debounce from "./component/Debounce"
import PracticeDebouce from "./component/PracticeDebounce"
import Todo from "./component/Todo"
import PracticeTodo from "./component/PracticeTodo"
import FetchApi from "./component/FetchApi"
import Controlled_un from "./component/Controlled_un"
function App() {

  return (
    <>
    <Counter />
    <Debounce />
    <PracticeTodo/>
    <PracticeDebouce/>
    <Todo/>

    <FetchApi/>

    <Controlled_un/>
    </>
  )
}

export default App
