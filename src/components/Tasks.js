import React, { useState } from 'react';
import Task from './Task';
import { v4 as uuidv4 } from 'uuid';


function Tasks() {
    const [taskInput, setTaskInput] = useState('');
    console.log(taskInput);
    const [taskList, setTask]= useState( [
      {id: 1, text: "Atsikelti", status: false},
      {id: 2, text: "Pasimokinti", status: false},
      {id: 3, text: "Naujo ismokti", status: false},
      {id: 4, text: "Sportas", status: false},
      {id: 5, text: "Laikas seimai", status: false},
      {id: 6, text: "Uzmigti", status: false}]);

function statusChange(id){
    const updateTasks= [...taskList];
    updateTasks.forEach((task) => {
        if (task.id === id){
            task.status = true;
        }
    });
    setTask(updateTasks);
}

function deleteTask(id){
    setTask(taskList.filter((item) => item.id !== id));
}

    const tasks = taskList.map( (task) => {
        return (
            <Task
            key={task.id}
            id={task.id}
            text={task.text}
            status={task.status}
            statusChange={statusChange}
            deleteTask={deleteTask}
            />
        )
    })

    function submit(e){
        e.preventDefault();
        if (taskInput) {
          const new_task = { id: uuidv4(), text: taskInput, status: false };
          setTask((previous) => [...previous, new_task]);
          setTaskInput('');
        } else {
          console.log('empty');
        }
      };



    return (
        <div>
            <h1>TO DO LIST</h1>
            <form onSubmit={submit}>
                <input
                type="text"
                id="taskInput"
                name="taskInput"
                value={taskInput}
                placeholder = "Add task..."
                onChange={(e) => setTaskInput(e.target.value)}
                />
                
            </form>
            {tasks}</div>
    )
};

export default Tasks;