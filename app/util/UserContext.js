import React, { useState, createContext } from 'react';
export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        userName: '',
        token: ''
    }
    )

    const [schedule, setSchedule] = useState(
        {
            timeToSet: null,
            dayToSet: null,
            currentDayAppointments: [{}, {}, {}]
        }
    )
    const [client, setClient] = useState(
        {
            customerName: '',
            customerAddress: ''
        }
    )



    return (
        <UserContext.Provider value={{
            user: [user, setUser],
            schedule: [schedule, setSchedule],
            client: [client, setClient]
        }}>
            {props.children}
        </UserContext.Provider>
    );

}