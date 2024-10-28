
import express, {Request,Response} from 'express'
import {renderToString} from 'react-dom/server'
import path from 'path'
import App from './App'
import template  from './template'
import fetch from 'isomorphic-fetch'

const app = express()
app.use(express.static(path.resolve(__dirname,'./dist/public')))
app.get("/",(req:Request,res:Response)=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response=>response.json())
    .then((todos:any)=>{
        console.log(todos)
        const body= renderToString(<App todos={todos} />)
        const html = template(body,todos)
        res.send(html)
    })

})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})