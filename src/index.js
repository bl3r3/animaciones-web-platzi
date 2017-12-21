import React from 'react';
import ReactDOM from 'react-dom';
import Invie from './Invie';
// import './index.css';
import './css/invie.css'
import './css/animations.css'
import cheet from 'cheet.js';

import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';
import easterA from './images/easter-a.jpg';
import easterB from './images/easter-b.png';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { Transition } from 'react-transition-group';

const initailState = {
  menu: [
    {
      href:'index.html' ,
      title: 'Home',
    },
    {
      href:'#guitarras' ,
      title: 'Guitarras',
    },
    {
      href:'Precios.html',
      title: 'Precios',
    },
  ],
  logoPortada: logoPortada,
  guitarras: [
    {
    image: acustica,
    alt: 'Guitarra Invie Acustica',
    name: 'Invie Acustica ',
    features: [
      'Estilo vintage',
      'Madera pura',
      'Incluye estuche invisible de aluminio',

    ],
  },
  {
  image: clasica,
  alt: 'Guitarra Invie Classic',
  name: 'Invie Classic ',
  features: [
    'Estilo vintage',
    'Liviana',
    'Incluye estuche invisible de aluminio',

  ],
},
  ]

}

function reducer(state, action ){
  switch(action.type) {
    case 'UPDATE_PROPS':{
      const newProps = action.payload.props;
      return{ ...state, ...newProps }
    }
      default:
      return state
  }
}

const store  = createStore(reducer, initailState);

const easter = {
  menu: [
    {
      href:'index.html',
      title: 'Home',
    },
  ],

  guitarras: [
     {
     image: easterA,
     alt: 'Marsmello',
     name: 'TrapBeats ',
     features: [
       'TrapBeats',
       'Cd playes',
       'Incluye estuche invisible de aluminio',

     ],
    },

    {
    image: easterB,
        alt: 'Alan Walker',
        name: 'Moving ',
        features: [
         'Were are you now',
         'Francia',
         'Incluye estuche invisible de aluminio',
          ],
        }
      ]
}

cheet('i n v i e', () =>{
  // alert('funciona')
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  })
});

cheet('g o b a c k', () =>{
  // alert('funciona')
  store.dispatch({
    type: 'UPDATE_PROPS',
      payload: {
      props: initailState,

      }
    }
  )
});


ReactDOM.render(
  <Provider store={store}>
  <Invie />
  </Provider>,
  document.getElementById('root')
);
