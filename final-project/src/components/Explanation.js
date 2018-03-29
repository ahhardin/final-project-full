import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchModules, setCurrentModule, setCurrentLesson } from '../actions';
import { bindActionCreators } from "redux";
import MathJax from '@matejmazur/react-mathjax'

class Explanation extends Component {
  constructor(props) {
    super(props)


}


render() {
  return (
    <div className="explanation">
      <h1>{this.props.currentLesson.name}</h1>
      <MathJax.Context input="ascii">
        <div>
          <p>To solve 2-D kinematic problems, you should consider each direction, x and y, independently of one another. The ONLY parameter that links the x- and y-components of an object&#39;s motion is time. Recall the four equations of motion used for 1-D problems:</p>
          <table>
            <tbody className="text-center">
              <tr>
                <td className="text-center py-2 pr-5"><MathJax.Node>x = x_(0) + (v-v_(0))/2 t</MathJax.Node></td>
                <td className="eqn-num">(1)</td>
              </tr>
              <tr>
                <td className="text-center py-2 pr-5"><MathJax.Node>x = x_0 + v_0 t + 1/2 a t^2</MathJax.Node></td><td className="eqn-num">(2)</td>
              </tr>
              <tr>
                <td className="text-center py-2 pr-5"><MathJax.Node>v_0 = v + at</MathJax.Node></td><td className="eqn-num">(3)</td>
              </tr>
              <tr>
                <td className="text-center py-2 pr-5"><MathJax.Node>v^2 = v_0^2 + 2ax</MathJax.Node></td><td className="eqn-num">(4)</td>
              </tr>
            </tbody>
          </table>
          <p>Each of these equations has one or two quantities missing, which helps you determine which equations you should be using to solve a given problem. For example, Equation (1) does not contain acceleration. So if you do not know acceleration and are not trying to solve for it, Equation (1) may be a good choice. Likewise, Equation (2) does not contain final velocity, Equation (3) does not contain displacement, and Equation (4) does not contain time.</p>


        </div>
      </MathJax.Context>


    </div>
  );
}
}


function mapStateToProps(state) {
  return { modules: state.modules, currentModule: state.currentModule, currentLesson: state.currentLesson };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchModules, setCurrentModule, setCurrentLesson }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Explanation);
