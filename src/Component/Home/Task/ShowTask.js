import React from 'react';
import { Card } from 'react-bootstrap';

const ShowTask = ({ task}) => {
    const { name, Description } = task

    const handleDelete=(id)=>{
        const proceed = window.confirm("are you sure?")
        if(proceed){
            const url =`https://powerful-taiga-62322.herokuapp.com/tasks/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                window.location.reload();
            })
        }

    }

    return (
        <div className='col-md-6 col-lg-4 g-3'>
            <Card style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {Description}
                    </Card.Text>
                    <div className='text-center'>
                        <button onClick={()=>handleDelete(task._id)} className='btn btn-outline-success rounded-pill '>Delete</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowTask;