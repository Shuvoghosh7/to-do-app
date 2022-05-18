import React from 'react';
import { Card } from 'react-bootstrap';

const ShowTask = ({ task }) => {
    const { name, Description } = task
    return (
        <div className='col-md-6 col-lg-4 g-3'>
            <Card style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {Description}
                    </Card.Text>
                    <div className='text-center'>
                        <button className='btn btn-outline-success rounded-pill '>Delete</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowTask;