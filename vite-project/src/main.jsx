import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
    // is pure syntax ki parsing hoti hai 
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: "Click me to visit on google"
// }
const anotherElement  = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)
const anotherUser = "Chai or React" 

// meri bnayi hui keysproperties to react me nahi chalengi to fr hamne ek method use kiya react.createElement--- jo by default hamesa inject ho jata hai , kon karta hai babel
const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'Click me to visit google', //childern
  anotherElement // evaluated expression 
)
// har react ek bundler use karta hai bundler ka kaam hai bts magic karna synax to sudharna ....
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
