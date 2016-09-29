const images = [
  { width: 400,
    height: 80,
    url: 'julian-frost_bibimbap.gif'
  },
  { width: 320,
    height: 320,
    url: 'julian-frost_bored.png'
  },
  { width: 320,
    height: 160,
    url: 'julian-frost_cow.gif'
  },
  { width: 400,
    height: 400,
    url: 'julian-frost_diving.jpg'
  },
  { width: 240,
    height: 320,
    url: 'julian-frost_dwtd_bear.jpg'
  },
  { width: 240,
    height: 320,
    url: 'julian-frost_dwtd_hairfire.jpg'
  },
  { width: 240,
    height: 320,
    url: 'julian-frost_dwtd_kidneys.jpg'
  },
  { width: 240,
    height: 320,
    url: 'julian-frost_dwtd_moose.jpg'
  },
  { width: 240,
    height: 320,
    url: 'julian-frost_dwtd_piranha.jpg'
  },
  { width: 240,
    height: 320,
    url: 'julian-frost_dwtd_snake.jpg'
  },
  { width: 240,
    height: 320,
    url: 'julian-frost_dwtd_spaceman.jpg'
  },
  { width: 240,
    height: 320,
    url: 'julian-frost_dwtd_toast.jpg'
  },
  { width: 240,
    height: 320,
    url: 'julian-frost_dwtd_xmas.jpg'
  },
  { width: 240,
    height: 240,
    url: 'julian-frost_island.gif'
  },
  { width: 320,
    height: 240,
    url: 'julian-frost_no_pants.jpg'
  },
  { width: 240,
    height: 240,
    url: 'julian-frost_no_smoking_in_the_bathroom.gif'
  },
  { width: 200,
    height: 200,
    url: 'julian-frost_simplification.gif'
  },
  { width: 320,
    height: 320,
    url: 'julian-frost_sinus_problem.png'
  },
  { width: 240,
    height: 320,
    url: 'julian-frost_sousaphone.jpg'
  },
  { width: 320,
    height: 240,
    url: 'julian-frost_squid.png'
  },
  { width: 320,
    height: 240,
    url: 'julian-frost_storm.png'
  },
  { width: 320,
    height: 320,
    url: 'julian-frost_suplex.png'
  } ]
module.exports = images.map(image => Object({
  ...image,
  url: require('../assets/julian-frost-image-portfolio/' + image.url)
}))
