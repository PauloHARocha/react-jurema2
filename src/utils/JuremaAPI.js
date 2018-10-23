// const api = 'https://jurema2.herokuapp.com'
const api = 'http://127.0.0.1:5001'

export const getQuestions = () =>
    fetch(`${api}/questions`).then(res => res.json())

export const sendFile = (data) =>
    fetch(`${api}/question`, {
        method: 'POST',
        body: data
    }).then(res => res.json())



