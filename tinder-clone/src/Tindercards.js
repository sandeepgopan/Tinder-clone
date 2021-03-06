import React, { useEffect } from 'react'
import firebase from "firebase";
import TinderCard from "react-tinder-card";
import "./Tindercard.css";
import database from "./firebase";

function Tindercards() {
    const [people, setPeople] = React.useState ([
        // {
        //     name: "Jobs",
        //     url:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
        // },
        // {
        //     name: 'Mark',
        //     url:"https://static01.nyt.com/images/2015/03/23/business/jobsbook1/jobsbook1-superJumbo.jpg?quality=90&auto=webp"
        // }
    ]);
    useEffect(()=>{
        const unsusbscribe = database.collection('people').onSnapshot (snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        return()=>{
            unsusbscribe();
        }
    },[]);

    return (
        <div>
            <div className="tinderCards_cardContainer">
            {people.map((person)=>(
                <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up','down']}>
                    <div 
                    style={{backgroundImage:`url(${person.url})` }}
                    className ="card"
                    >
                        <h3>{person.name} </h3>
                    </div>
                </TinderCard>
            ))} 
            </div>
            
        </div>
    )
}

export default Tindercards
