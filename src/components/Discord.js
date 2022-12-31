//This is a generic page to view. Source: https://uk.wikipedia.org/wiki/Discord
import React, {useState, useEffect} from "react"
import useProtectedRoute from "../hooks/useProtectedRoute"

export default function Discord(props) {
    useProtectedRoute()
    const url = "http://localhost:5000/discord"
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
        <h1 className="center">Discord</h1>
        <h2 className="center">Currently active users: {counter}</h2>
        <p>Discord — це платформа обміну миттєвими повідомленнями та цифрового
            розповсюдження інформації з функціями VoIP. Користувачі спілкуються за
            допомогою голосових дзвінків, відеочатів, текстових повідомлень, медіа
            та файлів у приватних чатах або в рамках спільнот, які називаються
            «серверами». Сервер — це набір постійних чатів та каналів голосового чату,
            доступ до яких можна отримати через запрошення. Discord працює на Windows,
            macOS, Android, iOS, iPadOS, Linux та у веббраузерах. Станом на 2021 рік у
            сервісі зареєстровано понад 350 мільйонів користувачів та понад 150
            мільйонів щомісячних активних користувачів. </p>
        <p>Додаток здатний організовувати голосові конференції з налаштуванням каналу
            зв'язку і працювати за принципом push-to-talk, створювати публічні й
            приватні чати для обміну текстовими повідомленнями. Програма має браузерну
            версію[11], відмінністю від настільної версії є те, що режим push-to-talk
            працює тільки якщо в браузері активна вкладка з додатком.</p>
        <p>Наявний режим «стримера», при ввімкненні якого ховається вся особиста
            інформація, відключаються звуки й повідомлення на робочий стіл. Вмикається
            режим автоматично (при запуску програм для трансляцій, наприклад, OBS чи
            XSplit), також режим можна включити або відключити вручну.</p>
        <p>Для аудіо використовується кодек Opus, який має можливості продавлення шуму
            й автоматичним регулюванням посилення. Для відео використовується кодек VP8.</p>
        <p>Функція «оверлей» забезпечує можливість перемикатися між каналами на сервері,
            серверами та груповими чатами, збільшувати або зменшувати звук учасників каналу
            або особистих повідомлень окремо, вмикати та вимикати мікрофон і звук. Працює в
            більшості ігор на DirectX і OpenGL. Опублікований «білий список» ігор, в яких
            оверлей працює без нарікань.</p>
        <p>Підтримується призначення «гарячих клавіш».</p>
        <p>Реалізована функція відключення повідомлень, можливо відключити повідомлення на
            мобільний пристрій при бездіяльності на комп'ютері. Є можливість включити
            озвучення повідомлень. Можна заглушити окремі сервери. Підтримується пошук по
            чату особистих повідомлень або каналам сервера.</p>
        <p>У текстовому чаті підтримується приєднання файлів, картинок, вставка посилань
            (для деяких сайтів працює попередній перегляд), форматування тексту й емодзі,
            розмір вкладень обмежений об'ємом 8 МБ.</p>
        <p>Сервери розміщуються в різних точках світу, для платних підписників надаються
            виділені потужні сервери. </p>
    </div>)
}