import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';

const Add_todo = () => {
    const [todo, setTodo] = useState('');

    //do this without local storage.
    // const [lists, setLists] = useState([]);

    //with localstorage.
    const [lists, setLists] = useState(() => {
        //initializing states with lists from localstorage
        const savedItems = localStorage.getItem('lists');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    const HandleAddTodo = (event) => {
        setTodo(event.target.value);
    }

    const SubmitData = (event) => {
        event.preventDefault();
        alert('Your data is added to the list');
        setLists([...lists, todo]);
        localStorage.setItem('lists', JSON.stringify([...lists, todo]))
        setTodo('');
    }

    //delete a todo
    const handleDelete = (index) =>{
        const newItems = lists.filter((item, i) => i !== index);
        setLists(newItems);
        localStorage.setItem('lists', JSON.stringify(newItems));
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    },[lists]);

    const inputs = {
        backgroundColor: 'bg-primary',
        height: '2rem',
        width: '13rem',
        color: 'white',
        borderRadius: '12px'
    }
    
    const forms = {
        height: '3.5rem',
        padding: '0.5rem',
        width: '18rem',
        border: '1px solid black',
        display: 'inline-flex',
        gap: '0.5rem',
        backgroundColor: 'skyblue'
    }

    const btns = {
        height: '33px',
        width: '75px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: '12px',
        color: 'green',
    }
    
    const todos = {
        overflow: 'scroll',
        maxHeight: '300px',
        borderRadus: '12px',
        boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px'
    } 

    return (
        <>
            <form action="" onSubmit={SubmitData} style={forms} method="post">
                <input style={inputs} type="text" value={todo} onChange={HandleAddTodo} name="" id="" />
                <Button type="submit"
                    className="btn btn-success"
                    style={btns}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
                    </svg>
                </Button>
            </form>
            <div className="todo" style={todos}>
                {lists.map((list, index) => (
                    <div key={index} className="alert alert-success bg-primary d-flex justify-content-between" >
                        {list}
                        <Button onClick={() => handleDelete(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            height="24px" viewBox="0 -960 960 960" 
                            width="24px" fill="#e8eaed">
                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                        </svg>
                        </Button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Add_todo;
