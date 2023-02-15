import Particles from "react-particles";
import { loadFull } from "tsparticles";
import React from 'react'
import './App.css'

import boostrapIcon from "./assets/media/bootstrap-icon.svg";
import cssIcon from "./assets/media/css-icon.svg";
import htmlIcon from "./assets/media/html-icon.svg";
import jsIcon from "./assets/media/js-icon.svg";
import mysqlIcon from "./assets/media/mysql-icon.svg";
import nodeIcon from "./assets/media/icons8-nodejs.svg";
import reactIcon from "./assets/media/react-icon.svg";
import AWSIcon from "./assets/media/icons8-amazon-web-services.svg";
import typescriptIcon from "./assets/media/icons8-typescript.svg";
import vscodeIcon from "./assets/media/vscode-icon.svg";
import MongoIcon from "./assets/media/icons8-mongodb.svg";
import PostgreqsIcon from "./assets/media/icons8-postgresql.svg";
import slackIcon from "./assets/media/icons8-slack.svg";
import reduxIcon from "./assets/media/icons8-redux.svg";
import gatsbyIcon from "./assets/media/icons8-gatsbyjs.svg";
import GCPIcon from "./assets/media/icons8-google-cloud.svg";
import { useCallback } from "react";
export default function ParticlesContainer() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);
const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);
  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": -1
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": false,
                "mode": "push"
              },
              "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 2,
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 2
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "lineLinked": {
              "blink": false,
              "color": "#000",
              "consent": false,
              "distance": 150,
              "enable": false,
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 2,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "limit": 20,
              "value": 15,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 1
            },
            "rotate": {
              "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
              },
              "direction": "random",
              "random": true,
              "value": 0
            },
            "shape": {
              "character": {
                "fill": false,
                "font": "Verdana",
                "style": "",
                "value": "*",
                "weight": "400"
              },
              "image": [
                {
                  "src": boostrapIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": cssIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": htmlIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": jsIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": mysqlIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": nodeIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": reactIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": AWSIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": PostgreqsIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": typescriptIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": vscodeIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": MongoIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": slackIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": reduxIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": gatsbyIcon,
                  "width": 20,
                  "height": 20
                },
                {
                  "src": GCPIcon,
                  "width": 20,
                  "height": 20
                },

              ],
              "polygon": {
                "sides": 5
              },
              "stroke": {
                "color": "#000000",
                "width": 0
              },
              "type": "image"
            },
            "size": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
              },
              "random": false,
              "value": 16
            }
          },
          "polygon": {
            "draw": {
              "enable": false,
              "lineColor": "#ffffff",
              "lineWidth": 0.5
            },
            "move": {
              "radius": 10
            },
            "scale": 1,
            "url": ""
          },
          "background": {
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
  )
}
