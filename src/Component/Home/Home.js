import React from 'react';
import './Home.css'
const Home = () => {
    const addNewTask =(event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const Description = event.target.Description.value;
        console.log(name,Description)
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
                    
            </div>
        </div>
    );
};

export default Home;