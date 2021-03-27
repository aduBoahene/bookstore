import React from 'react'
import SingleCategory from '../SingleCategory/SingleCategory'
import './CategoryList.css';

import History from '../../catIcons/history.png';
import Art from '../../catIcons/paint-brush.png';
import Children from '../../catIcons/rocking-horse.png';
import Trumpet from '../../catIcons/trumpet.png';
import Wand from '../../catIcons/wand.png';
import Romance from '../../catIcons/wedding-ring.png';
import Mystery from '../../catIcons/carnival-mask.png';




export default function CategoryList() {
    return (
        <div className="categoryList">
            <div className="categoryList__container">
                <h3 className="categoryList__head">Select from Category</h3>
                <div className="categoryList__list">
                    <SingleCategory image={Art} label={'Art'}/>
                    <SingleCategory image={Children} label={'Children'}/>
                    <SingleCategory image={Trumpet} label={'Music'}/>
                    <SingleCategory image={Wand} label={'Fantasy'}/>
                    <SingleCategory image={History} label={'History'}/>
                    <SingleCategory image={Romance} label={'Romance'}/>
                    <SingleCategory image={Mystery} label={'Mystery'}/>
                </div>
            </div>
        </div>
    ) 
}
