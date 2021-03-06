import React, { useEffect, useState } from 'react';
import ShowTask from './ShowTask';

const Task = () => {
    const [tasks, setTask] = useState([])
    useEffect(() => {
        fetch("https://powerful-taiga-62322.herokuapp.com/tasks")
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])
    return (
        <div className='container'>
            <h1>Shwo all task</h1>
            <div className='row '>
                {
                    tasks.map(task => <ShowTask
                       key={task._id}
                        task={task}
                        setTask={setTask}
                    />)
                }
            </div>
        </div>
    );
};

export default Task;