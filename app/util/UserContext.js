import React, { useState, createContext } from 'react';
export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState(
        {
            userName: 'Andrew Murray',
            email: 'atmurray@bellsur.net',
            address: '3982 Beansprout ct., Atlanta, GA 30092, USA',
            phone: '123-456-7890'
        }

    )

    const [schedule, setSchedule] = useState(
        {
            timeToSet: null,
            dayToSet: null,
            currentDayAppointments: [{}, {}, {}]
        }

    )



    return (
        <UserContext.Provider value={{
            user: [user, setUser],
            schedule: [schedule, setSchedule]
        }}>
            {props.children}
        </UserContext.Provider>
    );

}