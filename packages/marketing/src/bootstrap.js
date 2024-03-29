import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

{/* <h1>Hi there!!</h1> */}
const mount = (el)=>{
    ReactDOM.render(
        <App></App>,
        el
    );
};

if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot){
        mount(devRoot);
    }
}

export { mount };