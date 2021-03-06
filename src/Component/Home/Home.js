import React from 'react';
import { toast } from 'react-toastify';
import './Home.css'
import Task from './Task/Task';

const Home = () => {
    const addNewTask =(event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const Description = event.target.Description.value;
        const url = `https://powerful-taiga-62322.herokuapp.com/addTask`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({name,Description})
        })
            .then(res => res.json())
            .then(result => {
                event.target.reset();
                window.location.reload();
                toast.success("Sucessfully add new task")
            })
    }
    return (
        <div>
            <div className='login-container'>
            <h4 className='text-center text-success'>ADD NEW Task</h4>
                <form onSubmit={addNewTask} className="login-form">
                    <input  type="text" name="name" placeholder="Name" />
                    <textarea  type="text" name="Description" placeholder="description" />
                    
                    <button className='btn btn-outline-success rounded-pill'>Add Take</button>
                </form>

            </div>
            <div>
                   <Task/>
            </div>
        </div>
    );
};

export default Home;