import React, {useState} from 'react';
import { Button } from 'react-bootstrap'
const Add_post = () => {
    const [items, setItems] = useState('');
    
    const handleItems = (event) => {
        setItems(event.target.value)
    }
    
    const [posts_item, setPost_item] = useState(() =>{
            //initializing states with lists from localstorage
            const saveddata = localStorage.getItem('posts_item');
            return saveddata ? JSON.parse(saveddata) : [];
    });

    const hanldeSubmit = (event) => {
        event.preventDefualt(); 
        setPost_item(...posts_item, items);
        localStorage.setItem('posts_item', JSON.stringify([...posts_item, items]))
        setItems('');
    }
    return (
        <>
            <form action="" className="d-flex" onSubmit={hanldeSubmit} method="post">
                <input type="text" onChange={handleItems} value={items} className="form-control" name="" id="" />
                <Button  type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
                </svg>
                </Button>
            </form>
        </>
    );
}

export default Add_post;