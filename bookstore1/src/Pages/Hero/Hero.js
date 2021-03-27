import React from 'react'
import './Hero.css'
import ReadingLogo from '../../../src/tt.png';
import SearchIcon from '@material-ui/icons/Search';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__content">
                <div className="hero__left">
                    <h3 className="hero__text">
                    Once you learn to <br/>read, you'll forever be free
                    </h3>

                    <div className="hero__searchArea">
                        <div className="hero__input">
                            <SearchIcon/>
                            <input type="text" placeholder="Search a book an author or a genre"/>
                        </div>
                        <div className="hero__button">
                            Search
                        </div>
                    </div>

                </div>
                <div className="hero__right">
                    <img src={ReadingLogo}/>
                </div>
            </div>
            
            
           

        </div>
    )
}
