import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Card } from './components/Card'
import './app.scss'

const App = () => {
    return (
        <>
            <h1>Lets gooo!!!</h1>
            <Card />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
