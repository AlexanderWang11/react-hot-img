import React from 'react'
import ReactDOM from 'react-dom'
import MultiCrops from '../src/components/MultiCrops'
import img from './imgs/kumamon.jpg'


class App extends React.Component {
  state = {
    coordinates: [
      {
        height: 166,
        id: "Hyp_dBIiD",
        inputVal: "44444",
        width: 215,
        x: 615,
        y: 78.5625
      }
    ]
  }

  changeCoordinate = (coordinate, index, coordinates) => {
    this.setState({
      coordinates,
    })
  }
  deleteCoordinate = (coordinate, index, coordinates) => {
    this.setState({
      coordinates,
    })
  }
  onSave = (coordinate, index, coordinates) => {
    console.log(coordinate, index, coordinates)
    this.setState({
      coordinates,
    })
  }
  render() {
    return (
      <div>
        <h1>Dragging, Drawing, Resizing rectangles on the img</h1>
        <MultiCrops
          src={img}
          width={1000}
          coordinates={this.state.coordinates}
          // onDrag={this.changeCoordinate}
          // onResize={this.changeCoordinate}
          // onDraw={this.changeCoordinate}
          onChange={this.changeCoordinate}
          onDelete={this.deleteCoordinate}
          onSave={this.onSave}
        // onLoad={e => console.log(e.target.height, e.target.width)}
        />
        <button onClick={() => {
          console.warn(this.state.coordinates)
        }}>ok</button>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root'),
)
