import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", deadline: "Today" },
      { id: 4, title: "Check email", description: "Check emails", deadline: "12am Today" },
      { id: 5, title: "Do lab", description: "Do WAD2 lab", deadline: "Friday" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
        />
      ))}
    </div>
  );

  // return (
  //   <div className="container">
  //     <h1>Tasky</h1>
  //     <Task title="Dishes" deadline="Today" description="Empty dishwasher" />
  //     <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away" />
  //     <Task title="Tidy" deadline="Today" />
  //   </div>
  // );
}

export default App;
