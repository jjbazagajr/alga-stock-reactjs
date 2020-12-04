import React, {useState} from 'react'
import './TesteComponent.css'

const TestComponent = (props: {name: string}) => {

  const[age, setAge] = useState(28);

  return (
    <div className="TesteComponent">
      Teste component
      Olá {props.name}, {age}
      <button onClick={()=> {
        setAge(age + 1);
      }}>+</button>
    </div>
  );
} 



export default TestComponent