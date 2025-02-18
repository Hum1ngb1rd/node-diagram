function draw() {
    // create some nodes
    var nodes = [
        { id: 100, label : "Site", group : 10},
      { id: 101, label : "Research", group : 10},
      { id: 102, label : "Vision", group : 10},
      { id: 103, label : "Feasibility", group : 10},
      { id: 104, label : "Concept", group : 10},
      { id: 105, label : "Project Review", group : 10},
      { id: 106, label : "Concept Development", group : 10},
      { id: 107, label : "Town Planning", group : 10},
      { id: 108, label : "Design Development", group : 10},
      { id: 109, label : "Technical Design", group : 10},
      { id: 110, label : "Construction", group : 10},
      { id: 200, label : "Gen Design", group : 20},
      { id: 201, label : "Compliance", group : 20},
      { id: 202, label : "Pedestrian Movement", group : 20},
      { id: 203, label : "View Analysis", group : 20},
      { id: 204, label : "Signage Visibility", group : 20},
      { id: 205, label : "Facade Optimisation", group : 20},
    ];
    var tools = [
         { id: 200, label : "Gen Design", group : 20},
      { id: 201, label : "Compliance", group : 20},
      { id: 202, label : "Pedestrian Movement", group : 20},
      { id: 203, label : "View Analysis", group : 20},
      { id: 204, label : "Signage Visibility", group : 20},
      { id: 205, label : "Facade Optimisation", group : 20},
    ];
    
  
    // create some edges
    var edges = [
        { from: 201, to: 104},
      { from: 201, to: 105},
      { from: 201, to: 107},
      { from: 201, to: 108},
      { from: 202, to: 106},
      { from: 202, to: 107},
      { from: 202, to: 108},
      { from: 202, to: 109},
      { from: 203, to: 107},
      { from: 203, to: 108},
      { from: 204, to: 105},
      { from: 204, to: 107},
      { from: 204, to: 108},
      { from: 204, to: 109},
      { from: 205, to: 108},
      { from: 205, to: 109},
      { from: 206, to: 108},
      { from: 206, to: 109},
      { from: 206, to: 110},
      
    ];
  
    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
      nodes: nodes,
      //tool_nodes=nodes,
      edges: edges,
    };
    var options = {
      nodes: {
        shape: "dot",
        size: 16,
      },
      physics: {
        forceAtlas2Based: {
          gravitationalConstant: -26,
          centralGravity: 0.005,
          springLength: 230,
          springConstant: 0.18,
        },
        maxVelocity: 146,
        solver: "forceAtlas2Based",
        timestep: 0.35,
        stabilization: { iterations: 150 },
      },
    };
    var network = new vis.Network(container, data, options);
  }
  
  window.addEventListener("load", () => {
    draw();
  });
  
// // Define Nodes
// var nodes = new vis.DataSet([
//     { id: 100, label : "Site", group : 10},
//     { id: 101, label : "Research", group : 10},
//     { id: 102, label : "Vision", group : 10},
//     { id: 103, label : "Feasibility", group : 10},
//     { id: 104, label : "Concept", group : 10},
//     { id: 105, label : "Project Review", group : 10},
//     { id: 106, label : "Concept Development", group : 10},
//     { id: 107, label : "Town Planning", group : 10},
//     { id: 108, label : "Design Development", group : 10},
//     { id: 109, label : "Technical Design", group : 10},
//     { id: 110, label : "Construction", group : 10},
//     { id: 200, label : "Gen Design", group : 20},
//     { id: 201, label : "Compliance", group : 20},
//     { id: 202, label : "Pedestrian Movement", group : 20},
//     { id: 203, label : "View Analysis", group : 20},
//     { id: 204, label : "Signage Visibility", group : 20},
//     { id: 205, label : "Facade Optimisation", group : 20},
// ]);

// // Define Edges (Connections)
// var edges = new vis.DataSet([
//     { from: 201, to: 104},
//     { from: 201, to: 105},
//     { from: 201, to: 107},
//     { from: 201, to: 108},
//     { from: 202, to: 106},
//     { from: 202, to: 107},
//     { from: 202, to: 108},
//     { from: 202, to: 109},
//     { from: 203, to: 107},
//     { from: 203, to: 108},
//     { from: 204, to: 105},
//     { from: 204, to: 107},
//     { from: 204, to: 108},
//     { from: 204, to: 109},
//     { from: 205, to: 108},
//     { from: 205, to: 109},
//     { from: 206, to: 108},
//     { from: 206, to: 109},
//     { from: 206, to: 110},
// ]);

// // Create a Network Graph
// document.addEventListener("DOMContentLoaded", function() {
//     var container = document.getElementById("mynetwork");
//     var data = { 
//         nodes: nodes,
//         edges: edges 
//     };
//     var options = {
//         nodes: {
//             shape: "dot",
//             size: 16,
//           },
//           physics: {
//             forceAtlas2Based: {
//               gravitationalConstant: -26,
//               centralGravity: 0.005,
//               springLength: 230,
//               springConstant: 0.18,
//             },
//             maxVelocity: 146,
//             solver: "forceAtlas2Based",
//             timestep: 0.35,
//             stabilization: { iterations: 150 },
//           },
//     };

//     new vis.Network(container, data, options);
// });