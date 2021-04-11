import React from 'react'
import { useParams } from 'react-router'
import './BookView.css'
import Five from '../../Books/5.jpg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Rating } from '@material-ui/lab';
import Body from '../../Components/Body/Body';



export default function BookView() {

    let {bookid} = useParams();

    return (
        <div className="bookView">
            <div className="bookView__container">
            <div className="bookView__left">
                <KeyboardBackspaceIcon/>
                <span className="bookView__back">Back</span>
                
            </div>
            <div className="bookView__right">
                <img src={Five} className="bookView__image"/>

                <div className="bookView__details">
                    <p className="bookView__author">Ama Atta Aidoo</p>

                    <p className="bookView__title">The Case Of The Posinous Socks: Tales From Chemistry</p>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

                    <p className="bookView__description">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <p className="bookView__price">{`GHC ${70.34}`}</p>

                    <button className="bookView__continue">Continue</button><span className="bookView__toPayment">To payment method</span>
                </div>

                <div className="bookView__options">
                    <FavoriteBorderIcon/>
                    <ShareIcon/>
                    <FavoriteBorderIcon/>
                </div>

                
            </div>
            </div>
           <Body description={`Other Books by same Author`} show={`.`}/>
        </div>
        
    )
}
