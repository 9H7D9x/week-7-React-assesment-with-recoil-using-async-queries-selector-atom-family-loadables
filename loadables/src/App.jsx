
import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

   //content
   //state
   if (todo.state === "loading") {
      return <div>loading</div>
   }
   //loading
   //hasValue
   //hasError

   else if (todo.state === "hasValue"){
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
   }

   else if (todo.state === "hasError"){
    return <div>Backend throw an error</div>
   }
   
}

export default App
