import React, { useState, useEffect }from "react";
import TinderCard from "react-tinder-card";
import "./Tinder-Cards.css";
import database from "../../firebase";
const TinderCards = () => {
    useEffect(() =>{
         const unsub = database
              .collection('users')
              .onSnapshot((snapshot) =>
                  setUsers(snapshot.docs.map(doc => doc.data())
                  ));

        return () => {
             unsub();
        };
    }, [])

    const [ users, setUsers] = useState([]);

    const renderCards = () => (
        <div className="tinder-cards__wrapper">
            {
                users.map(user =>(
                    <TinderCard
                        className="tinder-cards__swipe"
                        key={user.id}
                        preventSwipe={[`up`, `down`]}
                    >

                        <div
                            className="tinder-cards__card"
                            style={{
                                backgroundImage: `url(${user.url})`
                            }}>
                            <h3 className="tinder-cards__card-title">{user.name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
        </div>

    )

    return(
        <div className="tinder-cards">
            {renderCards()}
        </div>
    )
};

export default TinderCards;
