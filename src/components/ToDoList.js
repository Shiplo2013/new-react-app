import { useState } from "react";

// ToDo List Component
const ToDo = props => {
    return(
        <tr>
            <td>
                <label>{ props.id }</label>
            </td>
            <td>
                <input type="text" placeholder={props.value} />
            </td>
            <td>
                <label>{ props.createdAt }</label>
            </td>
        </tr>
    )
}

const desserts = [
  {
    title: 'Chocolate Cake',
    description: 'Chocolate cake is a cake flavored with melted chocolate',
    calories: 500,
  }
];

const newDesserts = desserts.map((dessert) => {
  return {
    title: dessert.title.toUpperCase(),
    ...dessert,
    kCal: dessert.calories / 1000,
  };
});

console.log(newDesserts);
for(let i = 0; i < 8; i++) {
    const number = Math.round(Math.random() * 10);
    console.log(number);
}

function ToDoList() {
    const [todos, setTodos] = useState([{
        id: 'todo1',
        createdAt: '18:00',
        value: 'Hello',
    }, {
        id: 'todo2',
        createdAt: '20:30',
        value: 'There',
    }]);

    const reverseOrder = () => {
        setTodos([...todos].reverse());
    }

    return (
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((todo, index) => {
                        return (
                            <ToDo key={index} id={todo.id} createdAt={todo.createdAt} value={todo.value} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ToDoList;