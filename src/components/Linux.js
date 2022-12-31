//This is a generic page to view. Source: https://uk.wikipedia.org/wiki/Linux
import React, { useState, useEffect } from "react"
import useProtectedRoute from "../hooks/useProtectedRoute"
import "../styles.css"

export default function Linux(props) {
    useProtectedRoute()
    const url = "http://localhost:5000/linux"
    const [counter, setCounter] = useState(1)

    //Increment user counter when the page is loaded:
    useEffect(() => {
        console.log("It's the use effect!")
        fetch(url, {method: "GET"})
            .then(response => { return response.text() })
            .then(response => setCounter(response))
            .catch(error => console.log(error))
         //Decrement user counter when the user leaves the page:
         window.addEventListener("unload", () => {
            navigator.sendBeacon(url, {method: "POST"})
                .then(response => { return response.text() })
                .then(response => console.log(response))
                .catch(error => console.log(error))
            window.removeEventListener("unload")
         }
        )
    }, [])

    return (<div className="main"> 
        <h1 className="center">Linux</h1>
        <h2 className="center">Currently active users: {counter}</h2>
        <p>Лі́нукс (англ. Linux, повна назва — GNU/Linux) — загальна назва UNIX-подібних
            операційних систем на основі однойменного ядра. Це один із найвидатніших
            прикладів розробки вільного (free) та відкритого (з відкритим кодом, open
            source) програмного забезпечення (software). На відміну від власницьких
            операційних систем (на кшталт Microsoft Windows та macOS), їхні вихідні коди
            доступні всім для використання, зміни та поширення абсолютно вільно (в тому
            числі безкоштовно).</p>
        <p>Linux, спершу розроблений для використання окремими ентузіастами на своїх 
            персональних комп'ютерах, пізніше, завдяки підтримці таких компаній, як IBM,
            Sun Microsystems, HP, Novell та інших, набув неабиякої популярності як
            серверна операційна система (так, 8 із 10 найбільших компаній, що надають
            послуги вебхостингу, використовують Лінукс на своїх вебсерверах).</p>
        <p>Лінукс портовано на велику кількість апаратних платформ. Тепер ця ОС досить
            успішно використовується як на мейнфреймах і суперкомп'ютерах, так і 
            будована в багато інших пристроїв (смартфони, планшетні ПК, маршрутизатори
            комп'ютерних мереж (роутери), пристрої автоматики, системи керування
            телевізорами та ігровими консолями тощо). Від середини 1990-х Linux все
            частіше встановлюється і на настільні комп'ютери. Так, станом на березень
            2015 його частка складала 1,21 % світового ринку операційних систем на
            персональних комп'ютерах (без урахування використання на серверах та
            спеціалізованих пристроях)</p>.
        <p>Значна кількість спеціалізованих дистрибутивів Linux, які розробляють та
            підтримують різні спільноти, надає широкі можливості вибору програмного
            забезпечення.</p>
    </div>)
}