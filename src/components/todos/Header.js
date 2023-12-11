import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
    const numOfItems = useSelector((state)=>state.todosReducer.todos).length;
    return (
        <header>
            <h1>قائمة المهام ({numOfItems})</h1>
        </header>
    )
}

export default Header
