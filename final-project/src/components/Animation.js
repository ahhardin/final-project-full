import React, { Component } from 'react';
import Matter from 'matter-js'
// import { Engine, Render, Bodies, World } from 'matter-js'
import ReactDOM from 'react-dom';

class Animation extends Component {
  constructor() {
    super()

    this.state = {
      initialSpeed: 0
    }

    this.Engine = Matter.Engine,
    this.Render = Matter.Render,
    this.World = Matter.World,
    this.Bodies = Matter.Bodies;
    this.engine = this.Engine.create();
    this.circleA
  }

  componentDidMount() {

    const canvasWidth = this.divElement.clientWidth*.85
    const canvasHeight = 600

    // create a renderer
    const render = this.Render.create({
      element: ReactDOM.findDOMNode(this),
      engine: this.engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        pixelRatio: 1,
        background: '#CD644D',
        wireframes: false
      }
    });

    //animation parameters
    const buildingHeight = canvasHeight*.80
    const buildingWidth = 80
    const ballRadius = 15
    const groundHeight = 40

    // create two boxes and a ground
    this.circleA = this.Bodies.circle(buildingWidth-ballRadius/10, canvasHeight-buildingHeight-ballRadius, ballRadius, {friction: 0, frictionStatic: 0, frictionAir: 0, render: {
         fillStyle: '#6C9873',
    }})
    const ground = this.Bodies.rectangle(canvasWidth/2, canvasHeight-groundHeight/2, canvasWidth, groundHeight, { isStatic: true });
    const building = this.Bodies.rectangle(buildingWidth/2,canvasHeight-(canvasHeight*.80/2), buildingWidth, buildingHeight, { isStatic: true, friction: 1, frictionStatic: 1, frictionAir: 1 } )


    // add all of the bodies to the world
    this.World.add(this.engine.world, [building, this.circleA, ground]);

    // run the renderer
    this.Render.run(render);

  }

  onInputChange = (event) => {

    this.setState({initialSpeed: event.target.value}, () => {
        Matter.Body.setVelocity(this.circleA, {x: this.state.initialSpeed, y: -2 })
    })
  }

  onStart = (event) => {
    // run the engine
    this.Engine.run(this.engine);
  }

  onReset = (event) => {
    Matter.Render.stop(this.render); // this only stop renderer but not destroy canvas
    Matter.Composite.remove(this.engine.world, this.circleA)

  }

  render() {
    return (
      <div className="animation-container"
        ref={ (divElement) => this.divElement = divElement}>
        inital speed:<input value={this.state.initialSpeed} onChange={this.onInputChange}></input><button className="btn" onClick={this.onStart}>START</button><button className="btn" onClick={this.onReset}>RESET</button>
      </div>
    )
  }
}

export default Animation;
