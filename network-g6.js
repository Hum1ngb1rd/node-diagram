// import { Graph } from '@antv/g6'
// import data from './path/to/data.json' assert { type: 'json' };
var data = {
    "nodes": [
        {
            "id": "stages1",
            "label": "Existing/Site",
            "combo": "stages"
        },
        {
            "id": "stages2",
            "label": "Research",
            "combo": "stages"
        },
        {
            "id": "stages3",
            "label": "Vision",
            "combo": "stages"
        },
        {
            "id": "stages4",
            "label": "Feasibility",
            "combo": "stages"
        },
        {
            "id": "stages5",
            "label": "Concept Planning",
            "combo": "stages"
        },
        {
            "id": "stages6",
            "label": "Project Review",
            "combo": "stages"
        },
        {
            "id": "stages7",
            "label": "Concept Development",
            "combo": "stages"
        },
        {
            "id": "stages8",
            "label": "Town Planning",
            "combo": "stages"
        },
        {
            "id": "stages9",
            "label": "Design Development",
            "combo": "stages"
        },
        {
            "id": "stages10",
            "label": "Technical Design",
            "combo": "stages"
        },
        {
            "id": "stages11",
            "label": "Construction",
            "combo": "stages"
        },
        {
            "id": "prototyping1",
            "label": "3D Printing",
            "combo": "prototyping"
        },
        {
            "id": "prototyping2",
            "label": "Virtual Reality",
            "combo": "prototyping"
        },
        {
            "id": "parametric1",
            "label": "Facade",
            "combo": "parametric"
        },
        {
            "id": "parametric2",
            "label": "Features",
            "combo": "parametric"
        },
        {
            "id": "data1",
            "label": "Weather",
            "combo": "data"
        },
        {
            "id": "data2",
            "label": "Site Context",
            "combo": "data"
        },
        {
            "id": "data3",
            "label": "Historical Data",
            "combo": "data"
        },
        {
            "id": "designAnalysis1",
            "label": "Generative Design",
            "combo": "designAnalysis"
        },
        {
            "id": "designAnalysis2",
            "label": "Compliance Checks",
            "combo": "designAnalysis"
        },
        {
            "id": "designAnalysis3",
            "label": "Pedestrian Movement",
            "combo": "designAnalysis"
        },
        {
            "id": "designAnalysis4",
            "label": "View Analysis",
            "combo": "designAnalysis"
        },
        {
            "id": "designAnalysis5",
            "label": "Signage Visibility",
            "combo": "designAnalysis"
        },
        {
            "id": "designAnalysis6",
            "label": "Facade Optimisation",
            "combo": "designAnalysis"
        },
        {
            "id": "sustainabilityAnalysis1",
            "label": "Shadow",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "sustainabilityAnalysis2",
            "label": "Sun Hour",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "sustainabilityAnalysis3",
            "label": "Solar Radiation",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "sustainabilityAnalysis4",
            "label": " Daylight Factor",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "sustainabilityAnalysis5",
            "label": "Daylight Autonomy",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "sustainabilityAnalysis6",
            "label": "Useful Daylight",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "sustainabilityAnalysis7",
            "label": "Glare",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "sustainabilityAnalysis8",
            "label": "Thermal Comfort",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "sustainabilityAnalysis9",
            "label": "Energy Use Intesity",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "sustainabilityAnalysis10",
            "label": "Embodied Carbon",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "sustainabilityAnalysis11",
            "label": "Wind Comfort",
            "combo": "sustainabilityAnalysis"
        },
        {
            "id": "automation1",
            "label": "Documentation",
            "combo": "automation"
        },
        {
            "id": "automation2",
            "label": "BIM processes",
            "combo": "automation"
        }
    ],
    "edges": [
        {
            "id": "edge-site-3dprinting",
            "source": "stages1",
            "target": "prototyping1"
        },
        {
            "id": "edge-site-virturalReality",
            "source": "stages1",
            "target": "prototyping2"
        },
        {
            "id": "edge-site-siteContext",
            "source": "stages1",
            "target": "data2"
        },
        {
            "id": "edge-site-documentation",
            "source": "stages1",
            "target": "automation1"
        },

        {
            "id": "edge-research-weather",
            "source": "stages2",
            "target": "data1"
        },
        {
            "id": "edge-research-siteContext",
            "source": "stages2",
            "target": "data2"
        },
        {
            "id": "edge-research-historicalData",
            "source": "stages2",
            "target": "data3"
        },
        {
            "id": "edge-vision-virtualReality",
            "source": "stages3",
            "target": "prototyping2"
        },
        {
            "id": "edge-vision-embodiedCarbon",
            "source": "stages3",
            "target": "sustainabilityAnalysis10"
        },

        {
            "id": "edge-feasibility-3dprinting",
            "source": "stages4",
            "target": "prototyping1"
        },
        {
            "id": "edge-feasibility-virtualReality",
            "source": "stages4",
            "target": "prototyping2"
        },
        {
            "id": "edge-feasibility-generativeDesign",
            "source": "stages4",
            "target": "designAnalysis1"
        },
        {
            "id": "edge-feasibility-documentation",
            "source": "stages4",
            "target": "automation1"
        },

        {
            "id": "edge-conceptPlanning-3dprinting",
            "source": "stages5",
            "target": "prototyping1"
        },
        {
            "id": "edge-conceptPlanning-virtualReality",
            "source": "stages5",
            "target": "prototyping2"
        },
        {
            "id": "edge-conceptPlanning-generativeDesign",
            "source": "stages5",
            "target": "designAnalysis1"
        },
        {
            "id": "edge-conceptPlanning-viewAnalysis",
            "source": "stages5",
            "target": "designAnalysis4"
        },
        {
            "id": "edge-conceptPlanning-shadow",
            "source": "stages5",
            "target": "sustainabilityAnalysis1"
        },
        {
            "id": "edge-conceptPlanning-sunHour",
            "source": "stages5",
            "target": "sustainabilityAnalysis2"
        },
        {
            "id": "edge-conceptPlanning-enerygUseIntensity",
            "source": "stages5",
            "target": "sustainabilityAnalysis9"
        },
        {
            "id": "edge-conceptPlanning-embodiedCarbon",
            "source": "stages5",
            "target": "sustainabilityAnalysis10"
        },
        {
            "id": "edge-conceptPlanning-documentation",
            "source": "stages5",
            "target": "automation1"
        },

        {
            "id": "edge-projectReview-virtualReality",
            "source": "stages6",
            "target": "prototyping2"
        },
        {
            "id": "edge-projectReview-complianceChecks",
            "source": "stages6",
            "target": "designAnalysis2"
        },

        {
            "id": "edge-conceptDevelopment-3dpriting",
            "source": "stages7",
            "target": "prototyping1"
        },
        {
            "id": "edge-conceptDevelopment-virtualReality",
            "source": "stages7",
            "target": "prototyping2"
        },
        {
            "id": "edge-conceptDevelopment-facade",
            "source": "stages7",
            "target": "parametric1"
        },
        {
            "id": "edge-conceptDevelopment-features",
            "source": "stages7",
            "target": "parametric2"
        },
        {
            "id": "edge-conceptDevelopment-generativeDesign",
            "source": "stages7",
            "target": "designAnalysis1"
        },
        {
            "id": "edge-conceptDevelopment-complianceChecks",
            "source": "stages7",
            "target": "designAnalysis2"
        },
        {
            "id": "edge-conceptDevelopment-pedestrianMovement",
            "source": "stages7",
            "target": "designAnalysis3"
        },
        {
            "id": "edge-conceptDevelopment-viewAnalysis",
            "source": "stages7",
            "target": "designAnalysis4"
        },
        {
            "id": "edge-conceptDevelopment-shadow",
            "source": "stages7",
            "target": "sustainabilityAnalysis1"
        },
        {
            "id": "edge-conceptDevelopment-sunHour",
            "source": "stages7",
            "target": "sustainabilityAnalysis2"
        },
        {
            "id": "edge-conceptDevelopment-solarRadiation",
            "source": "stages7",
            "target": "sustainabilityAnalysis3"
        },
        {
            "id": "edge-conceptDevelopment-daylightFactor",
            "source": "stages7",
            "target": "sustainabilityAnalysis4"
        },
        {
            "id": "edge-conceptDevelopment-energyUseIntensity",
            "source": "stages7",
            "target": "sustainabilityAnalysis9"
        },
        {
            "id": "edge-conceptDevelopment-embodiedCarbon",
            "source": "stages7",
            "target": "sustainabilityAnalysis10"
        },
        {
            "id": "edge-conceptDevelopment-windComfort",
            "source": "stages7",
            "target": "sustainabilityAnalysis11"
        },

        {
            "id": "edge-townPlanning-3dprinting",
            "source": "stages8",
            "target": "prototyping1"
        },
        {
            "id": "edge-townPlanning-virtualReality",
            "source": "stages8",
            "target": "prototyping2"
        },
        {
            "id": "edge-townPlanning-facade",
            "source": "stages8",
            "target": "parametric2"
        },
        {
            "id": "edge-townPlanning-features",
            "source": "stages8",
            "target": "parametric2"
        },
        {
            "id": "edge-townPlanning-generativeDesign",
            "source": "stages8",
            "target": "designAnalysis1"
        },
        {
            "id": "edge-townPlanning-complianceChecks",
            "source": "stages8",
            "target": "designAnalysis2"
        },
        {
            "id": "edge-townPlanning-pedestrianMovement",
            "source": "stages8",
            "target": "designAnalysis3"
        },
        {
            "id": "edge-townPlanning-viewAnalysis",
            "source": "stages8",
            "target": "designAnalysis4"
        },
        {
            "id": "edge-townPlanning-signageVisibility",
            "source": "stages8",
            "target": "designAnalysis5"
        },
        {
            "id": "edge-townPlanning-facadeOptimisation",
            "source": "stages8",
            "target": "designAnalysis6"
        },
        {
            "id": "edge-townPlanning-shadow",
            "source": "stages8",
            "target": "sustainabilityAnalysis1"
        },
        {
            "id": "edge-townPlanning-sunHour",
            "source": "stages8",
            "target": "sustainabilityAnalysis2"
        },
        {
            "id": "edge-townPlanning-solarRadiation",
            "source": "stages8",
            "target": "sustainabilityAnalysis3"
        },
        {
            "id": "edge-townPlanning-daylightFactor",
            "source": "stages8",
            "target": "sustainabilityAnalysis4"
        },
        {
            "id": "edge-townPlanning-daylightAutonomy",
            "source": "stages8",
            "target": "sustainabilityAnalysis5"
        },
        {
            "id": "edge-townPlanning-usefulDaylight",
            "source": "stages8",
            "target": "sustainabilityAnalysis6"
        },
        {
            "id": "edge-townPlanning-glare",
            "source": "stages8",
            "target": "sustainabilityAnalysis7"
        },
        {
            "id": "edge-townPlanning-thermalComfort",
            "source": "stages8",
            "target": "sustainabilityAnalysis8"
        },
        {
            "id": "edge-townPlanning-energyUseIntensity",
            "source": "stages8",
            "target": "sustainabilityAnalysis9"
        },
        {
            "id": "edge-townPlanning-embodiedCarbon",
            "source": "stages8",
            "target": "sustainabilityAnalysis10"
        },
        {
            "id": "edge-townPlanning-windComfort",
            "source": "stages8",
            "target": "sustainabilityAnalysis11"
        },

        {
            "id": "edge-townPlanning-documentation",
            "source": "stages9",
            "target": "automation1"
        },
        {
            "id": "edge-designdevelopment-3dprinting",
            "source": "stages9",
            "target": "prototyping1"
        },
        {
            "id": "edge-designdevelopment-virtualReality",
            "source": "stages9",
            "target": "prototyping2"
        },
        {
            "id": "edge-designdevelopment-facade",
            "source": "stages9",
            "target": "parametric2"
        },
        {
            "id": "edge-designdevelopment-features",
            "source": "stages9",
            "target": "parametric2"
        },
        {
            "id": "edge-designdevelopment-complianceChecks",
            "source": "stages9",
            "target": "designAnalysis2"
        },
        {
            "id": "edge-designdevelopment-viewAnalysis",
            "source": "stages9",
            "target": "designAnalysis4"
        },
        {
            "id": "edge-designdevelopment-signageVisibility",
            "source": "stages9",
            "target": "designAnalysis5"
        },
        {
            "id": "edge-designdevelopment-facadeOptimisation",
            "source": "stages9",
            "target": "designAnalysis6"
        },
        {
            "id": "edge-designdevelopment-solarRadiation",
            "source": "stages9",
            "target": "sustainabilityAnalysis3"
        },
        {
            "id": "edge-designdevelopment-daylightFactor",
            "source": "stages9",
            "target": "sustainabilityAnalysis4"
        },
        {
            "id": "edge-designdevelopment-daylightAutonomy",
            "source": "stages9",
            "target": "sustainabilityAnalysis5"
        },
        {
            "id": "edge-designdevelopment-usefulDaylight",
            "source": "stages9",
            "target": "sustainabilityAnalysis6"
        },
        {
            "id": "edge-designdevelopment-glare",
            "source": "stages9",
            "target": "sustainabilityAnalysis7"
        },
        {
            "id": "edge-designdevelopment-thermalComfort",
            "source": "stages9",
            "target": "sustainabilityAnalysis8"
        },
        {
            "id": "edge-designdevelopment-energyUseIntensity",
            "source": "stages9",
            "target": "sustainabilityAnalysis9"
        },
        {
            "id": "edge-designdevelopment-embodiedCarbon",
            "source": "stages9",
            "target": "sustainabilityAnalysis10"
        },
        {
            "id": "edge-designdevelopment-documentation",
            "source": "stages9",
            "target": "automation1"
        },
        {
            "id": "edge-designdevelopment-bimProcesses",
            "source": "stages9",
            "target": "automation2"
        },

        {
            "id": "edge-technicalDesign-3dprinting",
            "source": "stages10",
            "target": "prototyping1"
        },
        {
            "id": "edge-technicalDesign-facadeOptimisation",
            "source": "stages10",
            "target": "designAnalysis6"
        },
        {
            "id": "edge-technicalDesign-glare",
            "source": "stages10",
            "target": "sustainabilityAnalysis7"
        },
        {
            "id": "edge-technicalDesign-documentation",
            "source": "stages10",
            "target": "automation1"
        },
        {
            "id": "edge-technicalDesign-bimProcesses",
            "source": "stages10",
            "target": "automation2"
        },

        {
            "id": "edge-construction-virtualReality",
            "source": "stages11",
            "target": "automation2"
        },
        {
            "id": "edge-construction-bimProcesses",
            "source": "stages11",
            "target": "automation2"
        }
    ],
    "combos": [
        {
            "id": "stages",
            "data": {
                "label": "Stages"
            }
        },
        {
            "id": "prototyping",
            "style": {
                "type": "rect"
            },
            "data": {
                "label": "Prototyping"
            }
        },
        {
            "id": "parametric",
            "style": {
                "type": "rect"
            },
            "data": {
                "label": "Parametric Modelling"
            }
        },
        {
            "id": "data",
            "style": {
                "type": "rect"
            },
            "data": {
                "label": "Data"
            }
        },
        {
            "id": "designAnalysis",
            "style": {
                "type": "rect"
            },
            "data": {
                "label": "Design Analysis"
            }
        },
        {
            "id": "sustainabilityAnalysis",
            "style": {
                "type": "rect"
            },
            "data": {
                "label": "Sustainability Analysis"
            }
        },
        {
            "id": "automation",
            "style": {
                "type": "rect"
            },
            "data": {
                "label": "Automation"
            }
        }
    ]
}

// fetch('capability-nodes.json')
//     .then((res) => res.json())  
//     .then((data) => {
const { Graph } = G6;

const graph = new Graph({
    container: 'mydiagramcontainer',
    autoFit: 'view',
    data,
    node: {
        type: 'rect',
        style: {
            size: [100, 50],
            radius: 10,
            fillOpacity: 1,
            label: true,
            labelText: (d) => d.label,
            ports: [{ placement: 'top' }, { placement: 'bottom' }],
            labelBackground: true,
        },
        palette: {
            field: (d) => d.combo,
        },
        state: {
            inactive: {
              fillOpacity: 0.3,
              icon: false,
              label: false,
            },
        },
    },
    edge: {
        type: 'cubic-vertical',
        style: {
            endArrow: true,
        },
        state: {
            active: {
              label: true,
            },
            inactive: {
              strokeOpacity: 0,
            },
          },
    },
    combo: {
        type: 'rect',
        style: {
                radius: 8,
                labelText: (d) => d.data.label,
                // fillOpacity: this.id === 'stages' ? 0 : 1
            }
        },
        palette: {
            field: (d) => d.data.label
        },
    layout: {
        type: 'antv-dagre',
        ranker: 'network-simplex',
        ranksep: 500,
        nodesep: 5,
        sortByCombo: true,
    },
    // behaviors: ['drag-canvas', 'zoom-canvas'],
    behaviors: [
        'drag-canvas',
        'zoom-canvas',
        function () {
          return {
            // key: 'hover-activate',
            // type: 'hover-activate',
            key: 'click-select',
            type: 'click-select',
            enable: (e) => e.targetType === 'node',
            degree: 1,
            inactiveState: 'inactive',
            onHover: (e) => {
              this.frontElement(e.target.id);
              e.view.setCursor('pointer');
            },
            onHoverEnd: (e) => {
              e.view.setCursor('default');
            },
          };
        },
        // {
        //   type: 'fix-element-size',
        //   enable: true,
        // },
        // 'auto-adapt-label'
      ],
      animation: false,
});
graph.render();

// graph.data(jsonData);

// fetch('https://assets.antv.antgroup.com/g6/graph.json')
//     .then((res) => res.json())
//     .then((data) => {
//       const graph = new Graph({
//         container: 'mydiagramcontainer',
//         autoFit: 'view',
//         data,
//         node: {
//           style: {
//             size: 10,
//           },
//           palette: {
//             field: 'group',
//             color: 'tableau',
//           },
//         },
//         layout: {
//           type: 'd3-force',
//           manyBody: {},
//           x: {},
//           y: {},
//         },
//         behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],
//       });

//       graph.render();
//     });



