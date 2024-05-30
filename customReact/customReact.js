function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    document.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}

// khud se banaya hua ek react element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit on google"
}
// khud ka ek element lo uske andar ek root element ko query kr k utha liua ab hame chaihiye render method jo ki elements le or container k andar inject kar de
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)