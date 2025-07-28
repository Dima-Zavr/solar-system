const PLANET_DATA = {
  Mercury: {
    name: "Mercury",
    semiMajorAxis: 5.8,
    size: 0.5,
    axialTilt: 2,
    dayDuration: 58.65,
    yearDuration: 88,
    eccentricity: 0.2056,
    inclination: 7,
    url: "/src/assets/textures/mercury.jpg"
  },
  Venus: {
    name: "Venus",
    semiMajorAxis: 10.8,
    size: 1.2,
    axialTilt: 177,
    dayDuration: 243.02,
    yearDuration: 225,
    eccentricity: 0.0068, 
    inclination: 3.4,
    url: "/src/assets/textures/venus.jpg"
  },
  Earth: {
    name: "Earth",
    semiMajorAxis: 15.0,
    size: 1.2,
    axialTilt: 23,
    dayDuration: 1,
    yearDuration: 365,
    eccentricity: 0.0167,
    inclination: 0,
    url: "/src/assets/textures/earth.jpg"
  },
  Mars: {
    name: "Mars",
    semiMajorAxis: 22.8,
    size: 0.7,
    axialTilt: 25,
    dayDuration: 1.03,
    yearDuration: 687,
    eccentricity: 0.0934, 
    inclination: 1.9,
    url: "/src/assets/textures/mars.jpg"
  },
  Jupiter: {
    name: "Jupiter",
    semiMajorAxis: 77.8,
    size: 15,
    axialTilt: 3,
    dayDuration: 9.93,
    yearDuration: 4331,
    eccentricity: 0.0483, 
    inclination: 1.3,
    url: "/src/assets/textures/jupiter.jpg"
  },
  Saturn: {
    name: "Saturn",
    semiMajorAxis: 140,
    size: 12,
    axialTilt: 27,
    dayDuration: 10.57,
    yearDuration: 10747,
    eccentricity: 0.0560, 
    inclination: 2.5,
    url: "/src/assets/textures/saturn.jpg",
    ringUrl: "/src/assets/textures/saturn_rings.png"
  },
  Uranus: {
    name: "Uranus",
    semiMajorAxis: 290,
    size: 5,
    axialTilt: 98,
    dayDuration: 0.72,
    yearDuration: 30589,
    eccentricity: 0.0461, 
    inclination: 0.8,
    url: "/src/assets/textures/uranus.jpg"
  },
  Neptune: {
    name: "Neptune",
    semiMajorAxis: 450,
    size: 5,
    axialTilt: 30,
    dayDuration: 0.67,
    yearDuration: 59800,
    eccentricity: 0.0097, 
    inclination: 1.8,
    url: "/src/assets/textures/neptune.jpg"
  }
};

export default PLANET_DATA;