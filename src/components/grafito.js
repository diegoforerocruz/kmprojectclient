import { Graph } from 'react-d3-graph';
import React from 'react'

const Grafito = (props) => {

  console.log(props.data)
  // graph payload (with minimalist structure)


// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  
    automaticRearrangeAfterDropNode: true,
    collapsible: true,
    directed: false,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    freezeAllDragEvents: false,
    height: 600,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: false,
    staticGraphWithDragAndDrop: false,
    width: 1500,
    d3: {
      alphaTarget: 0.05,
      gravity: -250,
      linkLength: 120,
      linkStrength: 2,
      disableLinkForce: false
    },
    node: {
      color: "#d3d3d3",
      fontSize: 10,
      highlightColor: "#ff0000",
      highlightFontSize: 14,
      highlightStrokeColor: "#ff0000",
      highlightStrokeWidth: 1.5,
      opacity: 0.9,
      renderLabel: true,
      size: 200,
      strokeWidth: 1.5,
    },
    link: {
      color: "#00ff00",
      fontSize: 8,
      highlightColor:"#ff0000",
      highlightFontSize: 8,
      opacity: 1,
      renderLabel: false,
      semanticStrokeWidth: true,
      strokeWidth: 3,
      markerHeight: 6,
      markerWidth: 6,
      strokeDasharray: 0,
      strokeDashoffset: 0,
    }
  }


// Callback to handle click on the graph.
// @param {Object} event click dom event

  return (
    <div>
      <Graph
     id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
     data={props.data}
     config={myConfig}
     
     />
    </div>
  )
}

export default Grafito
