import React from 'react'
import Book from '../Book/Book'
import './Body.css'

import One from '../../Books/1.jpg';
import Two from '../../Books/2.jpg';
import Three from '../../Books/3.jpg';
import Four from '../../Books/4.jpg';
import Five from '../../Books/5.jpg';

import Six from '../../Books/6.jpg';
import Seven from '../../Books/7.jpg';
import Eight from '../../Books/8.jpg';
import { useHistory } from 'react-router';


export default function Body({description, show}) {

    let {history} = useHistory();

    const goToBookView=()=>{
        history.push("/BookView/3")
        console.log("clicked");
    }

    return (
        <div className="body">
            <div className="body__container">
                <div className="body__heading">
                    <h3 className="body__head">{description}</h3>
                    <h3 className="body__head">{show}</h3>
                </div>

                <div className="bookList">
                    <Book image={One} title={'Of Thee I Sing'} author={'Barak Obama'} price={`GHC${20.0}`} onClick={goToBookView}/>
                    <Book image={Four} title={'Ant Hills Of The Savanah'} author={'Barak Obama'} price={`GHC${20.0}`}/>
                    <Book image={Three} title={'Audacity Of Hope'} author={'Barak Obama'} price={`GHC${20.0}`}/>
                    <Book image={Two} title={'The World As It Is'} author={'Barak Obama'} price={`GHC${20.0}`}/>
                    <Book image={Five} title={'No Longer At Ease'} author={'Chenua Achebe'} price={`GHC${20.0}`}/>

                    
                    <Book image={Six} title={'Becoming Me'} author={'Michelle Obama'} price={`GHC${20.0}`}/>
                    <Book image={Seven} title={'A Love Story'} author={'Ama Atta Aidoo'} price={`GHC${20.0}`}/>
                    <Book image={Eight} title={'Changes'} author={'Ama Atta Aidoo'} price={`GHC${20.0}`}/>
                </div>
            </div>
        </div>
    )
}
