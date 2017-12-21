import React, {Component} from 'react';
import {connect} from 'react-redux';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Transition } from 'react-transition-group';
function mapStateToProps (state){
  return{
    guitarras: state.guitarras,
  }
}

class Guitarras extends Component {
  render() {
    return(
      <section id="guitarras" class="guitarras contenedor">
        <h2>Nuestra guitarras</h2>

        {
          this.props.guitarras.map((guitarra,index)=>{
            return(
              <article class="guitarra" key={index}>
              <TransitionGroup
              transition="flicker"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              >
              <img class="guitarra-image"
                key={guitarra.image}
                src={guitarra.image}
                alt={guitarra.alt}
                width="300px"
                />
              </TransitionGroup>
              <div class="contenedor-guitarra">
              <h3 class="guitarra-name">{guitarra.name}</h3>
              <ol>
              {
                guitarra.features.map((feature, index) =>{
                  return(
                    <li key={index}>{feature}</li>

                  )
                })
              }
              </ol>
              </div>
              </article>

            )
          })
        }
      </section>
    )

  }
}
export default connect(mapStateToProps)(Guitarras);
