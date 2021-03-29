import React from 'react'
import Body from '../../Components/Body/Body'
import CategoryList from '../../Components/CategoryList/CategoryList'
import Hero from '../../Components/Hero/Hero';


export default function Home() {
    return (
        <div className="home">
            <Hero/>
            <CategoryList/>
            <Body/>
        </div>
    )
}
