import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";
export default function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
          options={{
            autoPlay: true,
            background: {
              color: {
                value: "#ffffffff",
              },
              image: "",
              position: "50% 50%",
              repeat: "repeat",
              size: "cover",
              opacity: 0.8,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: {
                  corner1: "#ff0000",
                  corner2: "#00ff00",
                  corner3: "#0000ff",
                  corner4: "#ffff00",
                },
                opacity: 1,
                repeat: "no-repeat",
              },
              enable: false,
              opacity: 1,
            },
            defaultThemes: {},
            delay: 0,
            fullScreen: {
              enable: true,
              zIndex: 0,
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
              detectOutside: false,
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: {
                  delay: 0.5,
                  enable: true,
                },
              },
              modes: {
                grab: {
                  distance: 400,
                  duration: 0.05,
                  opacity: 1,
                  scale: {
                    animation: {
                      count: 1,
                      enable: false,
                      speed: 1,
                      sync: false,
                      startValue: "50%",
                      destroy: "none",
                      startValue: "none",
                      count: 1,
                    },
                    mode: "recover",
                  },
                  speed: 1,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  duration: 2,
                  mix: false,
                  opacity: 0.8,
                  size: 40,
                  divs: {
                    distance: 200,
                    duration: 0.5,
                    mix: false,
                    selectors: [],
                  },
                  move: {
                    distance: 8,
                    size: 0,
                    direction: "none",
                    mode: "recover",
                  },
                  scale: {
                    animation: {
                      count: 1,
                      enable: false,
                      speed: 3,
                      sync: false,
                      startValue: "50%",
                      destroy: "none",
                      startValue: "none",
                      count: 1,
                    },
                    mode: "recover",
                  },
                  opacity: {
                    animation: {
                      count: 1,
                      enable: false,
                      speed: 3,
                      sync: false,
                      startValue: "50%",
                      destroy: "none",
                      startValue: "none",
                      count: 1,
                    },
                    mode: "recover",
                  },
                },
                connect: {
                  distance: 80,
                  duration: 0.3,
                  opacity: 0.5,
                  width: 1,
                  links: {
                    opacity: 0.5,
                    width: 1,
                  },
                  radius: 60,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 0.6,
                  },
                },
                push: {
                  default: true,
                  groups: [],
                  quantity: 4,
                  mode: "default",
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  ease: "ease-out-sine",
                  divs: {
                    distance: 200,
                    duration: 0.5,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    ease: "ease-out-sine",
                    selectors: [],
                  },
                },
                slow: {
                  factor: 3,
                  radius: 200,
                },
                trail: {
                  delay: 0,
                  pauseOnOutsideViewport: true,
                  quantity: 2,
                },
                attract: {
                  distance: 200,
                  duration: 0.4,
                  easing: "ease-out-quad",
                  factor: 1,
                  maxSpeed: 50,
                  speed: 1,
                },
              },
            },
            manualParticles: [],
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                absorb: {
                  speed: 2,
                },
                bounce: {
                  horizontal: {
                    value: 1,
                  },
                  vertical: {
                    value: 1,
                  },
                },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                value: ["#ff0", "#0f0", "#f00"],
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                },
              },
              effect: {
                close: true,
                fill: true,
                options: {},
                type: {},
              },
              groups: [],
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 3000,
                    y: 3000,
                  },
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: "percent",
                  radius: 0,
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50,
                },
                path: {
                  clamp: true,
                  delay: {
                    value: 0,
                  },
                  enable: false,
                  options: {},
                },
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
                random: false,
                size: false,
                speed: 2,
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fill: {},
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
                limit: {
                  mode: "delete",
                  value: 0,
                },
                value: 80,
              },
              opacity: {
                value: {
                  min: 0.5,
                  max: 1,
                },
                animation: {
                  count: 0,
                  enable: false,
                  speed: 2,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                  reduceDuplicates: false,
                },
                shadow: {
                  blur: 0,
                  color: {
                    value: "#000",
                  },
                  enable: false,
                  offset: {
                    x: 0,
                    y: 0,
                  },
                },
              },
              shape: {
                close: true,
                fill: true,
                options: {
                  polygon: {
                    0: {
                      sides: 3,
                      particles: {
                        opacity: {
                          value: {
                            min: 0.5,
                            max: 0.1,
                          },
                        },
                        size: {
                          value: {
                            min: 10,
                            max: 12,
                          },
                        },
                        color: {
                          value: "#ff0",
                        },
                      },
                    },
                    1: {
                      sides: 5,
                      particles: {
                        opacity: {
                          value: 0.5,
                        },
                        size: {
                          value: 8,
                        },
                        color: {
                          value: "#0f0",
                        },
                      },
                    },
                    2: {
                      sides: 8,
                      particles: {
                        opacity: {
                          value: 1,
                        },
                        size: {
                          value: {
                            min: 15,
                            max: 20,
                          },
                        },
                        color: {
                          value: "#f00",
                        },
                      },
                    },
                  },
                },
                type: "polygon",
              },
              size: {
                value: {
                  min: 8,
                  max: 20,
                },
                animation: {
                  count: 0,
                  enable: false,
                  speed: 5,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              stroke: {
                width: 0,
              },
              zIndex: {
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
              destroy: {
                bounds: {},
                mode: "none",
                split: {
                  count: 1,
                  factor: {
                    value: 3,
                  },
                  rate: {
                    value: {
                      min: 4,
                      max: 9,
                    },
                    sizeOffset: true,
                  },
                  particles: {},
                },
              },
              roll: {
                darken: {
                  enable: false,
                  value: 0,
                },
                enable: false,
                enlighten: {
                  enable: false,
                  value: 0,
                },
                mode: "vertical",
                speed: 25,
              },
              tilt: {
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: "clockwise",
                enable: false,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
              wobble: {
                distance: 5,
                enable: false,
                speed: {
                  angle: 50,
                  move: 10,
                },
              },
              life: {
                count: 0,
                delay: {
                  value: 0,
                  sync: false,
                },
                duration: {
                  value: 0,
                  sync: false,
                },
              },
              rotate: {
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false,
                },
                direction: "clockwise",
                path: false,
              },
              orbit: {
                animation: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: false,
                },
                enable: false,
                opacity: 1,
                rotation: {
                  value: 45,
                },
                width: 1,
              },
              links: {
                blink: false,
                color: {
                  value: "#ffffff",
                },
                consent: false,
                distance: 150,
                enable: true,
                frequency: 1,
                opacity: 0.4,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#000",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                  frequency: 1,
                },
                width: 1,
                warp: false,
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [],
            smooth: false,
            style: {},
            themes: [],
            zLayers: 100,
            emitters: [],
            motion: {
              disable: false,
              reduce: {
                factor: 4,
                value: true,
              },
            },
          }}
        />
      )}
    </>
  );
}
