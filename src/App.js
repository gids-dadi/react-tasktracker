import Header from './component/Header';
import { Tasks } from './component/Tasks';
import AddTask from './component/AddTask';

import { useState } from 'react';
import './App.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },

    {
      id: 2,
      text: 'School meeting',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },

    {
      id: 3,
      text: 'Food shoping',
      day: 'Feb 7th at 12:30pm',
      reminder: false,
    },

    {
      id: 4,
      text: 'Lundary and home chores',
      day: 'Feb 8th at 08:00am',
      reminder: false,
    },
  ]);

  // Add  Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //  Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className='container'>
      <Header
        title='Task Tracker App'
        onAdd={() => setShowAddTask(!showAddTask)}
        onShowAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
