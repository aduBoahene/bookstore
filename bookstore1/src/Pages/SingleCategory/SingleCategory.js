import { Card, CardContent, ListItem } from '@material-ui/core'
import React from 'react'
import './SingleCategory.css'
import History from '../../catIcons/history.png';


export default function SingleCategory({image,label}) {
    return (
            <div className="singleCategory">
                <Card className="singleCategory__cardContent">
                <ListItem className="singleCategory__list">
                       <img src={image}/>
                       <h3 className="singleCategory__label">{label}</h3>
                </ListItem>
                </Card>
            </div>
            
    )
}
