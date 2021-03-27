import React from 'react';
import './Book.css';
import ObOne from '../../Books/1.jpg';


export default function Book({image,title,author,price}) {
    return (
        <div className="book">
            <img src={image}/>
            <div className="book__labels">
                <span className="book__title">{title}</span>
                <span className="book__author">{author}</span>
                <span className="book__price">{price}</span>
            </div>
        </div>
    )
}
