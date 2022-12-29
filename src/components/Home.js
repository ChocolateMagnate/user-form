import React from 'react'
/**
 * Finds out the amount of days remaining until the user's birthday.
 * @param {*} birthday The birthday of the user in the format "YYYY-MM-DD"
 * @returns The amount of days remaining until the user's birthday.
 */
function countDaysUntilBirthday(birthday) {
    const today = new Date()
    const birthDate = new Date(birthday)
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(),
        birthDate.getDate())
    const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24))
    return daysUntilBirthday
}

export default function Home(props) {
    
    return (<>
        <p>Hello there, {props.name}!</p>
        <p>
            Your next birthday is in {countDaysUntilBirthday(props.user.birthday)} days!
        </p>
    </>)
}