import React, {useState, useEffect} from 'react'
import './TesteComponent.css'

const TestComponent = (props: {name: string}) => {

  const[age, setAge] = useState(28);

  useEffect(() => {
    console.log('Criado');
  }, [])

  useEffect(() => {
    console.log('Alteração de idade: ' + age)
  }, [age])

  console.log('Atualização');

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