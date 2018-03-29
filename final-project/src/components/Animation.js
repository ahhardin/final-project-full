import React, { Component } from 'react';
import Matter from 'matter-js'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { restartAnimation } from '../actions';
import { bindActionCreators } from "redux";

class Animation extends Component {
  constructor() {
    super()

    this.state = {
      speed_x: 0,
      speed_y: 0
    }

    this.colors = ["#59414D","#B2AC82","#A5567F","#276A72","#9FE8F2"]
    this.Engine = Matter.Engine
    this.Render = Matter.Render
    this.World = Matter.World
    this.Bodies = Matter.Bodies
    this.engine = this.Engine.create()
    this.runner = Matter.Runner.create()

  }

  componentDidMount = () => {

    this.renderVariable = this.setUp(false)

  }

  setUp = (reset) => {

    const canvasWidth = this.divElement.clientWidth
    const canvasHeight = 300
    let render = this.renderVariable

    if (!reset) {
      render = this.Render.create({
        element: this.props.restart ? ReactDOM.findDOMNode(this) : null,
        engine: this.engine,
        options: {
          width: canvasWidth,
          height: canvasHeight,
          pixelRatio: 1,
          background: '#B2AC82',
          wireframes: false
        }
      });
    }

    //animation parameters
    const buildingHeight = canvasHeight * .75
    const buildingWidth = canvasWidth * .15
    const ballRadius = canvasHeight * .05
    const groundHeight = canvasHeight * .1

    // create a building, the ground, and an object to project off the building
    this.circleA = this.Bodies.circle(buildingWidth - ballRadius / 4, canvasHeight - buildingHeight - ballRadius, ballRadius, {
      friction: 0,
      frictionStatic: 0,
      frictionAir: 0,
      render: {
        fillStyle: this.colors[3]
      }
    })
    this.ground = this.Bodies.rectangle(canvasWidth / 2, canvasHeight - groundHeight / 2, canvasWidth, groundHeight, { isStatic: true });
    this.building = this.Bodies.rectangle(buildingWidth / 2, canvasHeight - (buildingHeight / 2), buildingWidth, buildingHeight, {
      isStatic: true,
      friction: 1,
      frictionStatic: 1,
      frictionAir: 0,
      render: {
        fillStyle: this.colors[0]
      }
    })

    // add all of the bodies to the world
    this.World.add(this.engine.world, [this.building, this.circleA, this.ground]);
    this.engine.world.gravity.y = .98

    // run the renderer
    if (!reset) {
    this.Render.run(render);
  }

    return (render)

  }

  onInputChange = (event) => {
    if (event.target.getAttribute("id") === "xSpeed") {
      this.setState({ speed_x: event.target.value }, () => {
        Matter.Body.setVelocity(this.circleA, { x: this.state.speed_x, y: -this.state.speed_y })
      })
    } else if (event.target.getAttribute("id") === "ySpeed") {
      this.setState({ speed_y: event.target.value }, () => {
        Matter.Body.setVelocity(this.circleA, { x: this.state.speed_x, y: -this.state.speed_y })
      })
    }
  }

  onStart = (event) => {
    Matter.Body.setVelocity(this.circleA, { x: this.state.speed_x, y: -this.state.speed_y })
    // run the engine
    Matter.Runner.start(this.runner, this.engine)
  }

  onReset = (event) => {
    this.props.restartAnimation(this.props.restart)
    // remove bodies
    this.World.remove(this.engine.world, [this.building, this.circleA, this.ground])

    // clear world and engine
    this.World.clear(this.engine.world);

    Matter.Runner.stop(this.runner)

    // remove events
    this.Engine.events = {};
    this.Engine.clear(this.engine);

    // const timeScale = this.engine.timing.timeScale
    // this.engine.timing.timeScale = .75

    this.setUp(true);
  }

  render() {
    return (
      <div className="animation-container"
          ref={ (divElement) => this.divElement = divElement}>
          <div>initial horizontal speed:<input size="3" id="xSpeed"
            value={this.state.speed_x} onChange={this.onInputChange}></input> m/s</div>
          <div>initial vertical speed:<input size="3" id="ySpeed" value={this.state.speed_y} onChange={this.onInputChange}></input> m/s</div>

          <button className="btn btn-outline-secondary" onClick={this.onStart}>START</button>

          <button className="btn btn-outline-secondary" onClick={this.onReset}>RESET</button>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return { restart: state.restart };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ restartAnimation }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Animation);
