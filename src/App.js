import { useState } from 'react'
import './App.css'
import { isYandex } from 'react-device-detect'

const checkContactApiSupport = () => {
    return navigator.contacts && window.ContactsManager && !isYandex
}

async function pickContacts() {
    try {
        const propertiesAvailable = await navigator.contacts.getProperties()

        const contacts = await navigator.contacts.select(propertiesAvailable, {
            multiple: true,
        })
        return contacts
    } catch (e) {
        console.log(e)
        alert('Не удалось получить контакты')
        return []
    }
}
function App() {
    const [supportContactApi, setSupportContactApi] = useState()
    const [contacts, setContacts] = useState([])
    return (
        <div className="App">
            <div className="block">
                <h3>Проверить поддержку api в браузере</h3>
                <span>Результат: {`${supportContactApi}`}</span>
                <button
                    onClick={() =>
                        setSupportContactApi(checkContactApiSupport())
                    }
                >
                    Проверить
                </button>
            </div>
            <div className="block">
                <h3>Получить контакты</h3>
                <span>Импортировано контактов: {contacts.length}</span>
                <button onClick={async () => setContacts(await pickContacts())}>
                    Получить
                </button>
                {!!contacts.length &&
                    contacts.map((contact) => JSON.stringify(contact))}
            </div>
        </div>
    )
}

export default App
