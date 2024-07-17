import React, { useState, useEffect } from 'react';
import './App.css';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [alltasks, setAllTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleClick = () => {
    if (isEditing) {
      let updatedTasks = [...alltasks];
      updatedTasks[currentTaskIndex] = {
        ...updatedTasks[currentTaskIndex],
        title: newTitle,
        description: newDescription
      };
      setAllTasks(updatedTasks);
      localStorage.setItem('TaskList', JSON.stringify(updatedTasks));
      setIsEditing(false);
      setCurrentTaskIndex(null);
    } else {
      let newTaskItem = {
        title: newTitle,
        description: newDescription,
        isComplete: false
      };
      let updatedTaskArr = [...alltasks, newTaskItem];
      setAllTasks(updatedTaskArr);
      localStorage.setItem('TaskList', JSON.stringify(updatedTaskArr));
    }
    setNewTitle("");
    setNewDescription("");
  };

  useEffect(() => {
    let savedTasks = JSON.parse(localStorage.getItem('TaskList'));
    let savedCompletedTasks = JSON.parse(localStorage.getItem('CompletedTaskList'));
    if (savedTasks) {
      setAllTasks(savedTasks);
    }
    if (savedCompletedTasks) {
      setCompletedTasks(savedCompletedTasks);
    }
  }, []);

  const handleDelete = (index, isComplete) => {
    if (isComplete) {
      let reducedCompletedTasks = [...completedTasks];
      reducedCompletedTasks.splice(index, 1);
      setCompletedTasks(reducedCompletedTasks);
      localStorage.setItem('CompletedTaskList', JSON.stringify(reducedCompletedTasks));
    } else {
      let reducedTasks = [...alltasks];
      reducedTasks.splice(index, 1);
      setAllTasks(reducedTasks);
      localStorage.setItem('TaskList', JSON.stringify(reducedTasks));
    }
  };

  const handleComplete = (index) => {
    let updatedTasks = [...alltasks];
    let completedTask = updatedTasks.splice(index, 1)[0];
    completedTask.isComplete = true;
    setAllTasks(updatedTasks);
    setCompletedTasks([...completedTasks, completedTask]);
    localStorage.setItem('TaskList', JSON.stringify(updatedTasks));
    localStorage.setItem('CompletedTaskList', JSON.stringify(completedTasks));
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setNewTitle(alltasks[index].title);
    setNewDescription(alltasks[index].description);
  };

  return (
    <>
      <h1 data-aos="fade-up" data-aos-duration="1000">Task Tracker</h1>
      <div className="taskWrapper" data-aos="fade-up" data-aos-duration="1000">
        <div className="taskInput">
          <div className='taskInputItem'>
            <label>Title</label>
            <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} type="text" placeholder="What's the task's title?" />
          </div>
          <div className="taskInputItem">
            <label>Description</label>
            <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} type="text" placeholder="What's the task's description?" className='taskInputItem' />
          </div>
          <div className="taskInputItem">
            <button className='primaryBtn' onClick={handleClick}>{isEditing ? "Update" : "Add"}</button>
          </div>
        </div>
        <div className='btnArea'>
          <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} onClick={() => setIsCompleteScreen(false)}>Tasks</button>
          <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className='taskList'>
          {
            isCompleteScreen ? (
              completedTasks.map((item, index) => (
                <div className="taskListItem" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <AiOutlineDelete className='icon' onClick={() => handleDelete(index, true)} />
                  </div>
                </div>
              ))
            ) : (
              alltasks.map((item, index) => (
                <div className="taskListItem" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <AiOutlineDelete className='icon' onClick={() => handleDelete(index, false)} />
                    <AiOutlineEdit className='icon' onClick={() => handleEdit(index)} />
                    <BsCheckLg className='checkIcon' onClick={() => handleComplete(index)} />
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </>
  );
}

export default App;
