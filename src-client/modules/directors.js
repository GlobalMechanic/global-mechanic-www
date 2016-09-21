
export default [
  {
    name: 'Daniel Sousa',
    id: 'daniel',
    width: 240,
    height: 240,
    portfolio: 400062,
    image: require('../assets/staff-dan.jpg'),
    writeup: 'Aliquam et pharetra magna. Quisque lobortis elit sit amet ultrices'+
    ' pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum'+
    ' eget finibus dolor, nec tincidunt nunc. Phasellus sit amet turpis neque. '+
    'Aliquam feugiat lectus id elit faucibus, et tincidunt nunc tristique. Etiam '+
    'pretium dolor ac metus auctor porttitor. Suspendisse consectetur eleifend purus'+
    ' eu tempor.'
  },
  {
    name: 'Dirk Van De Vondel',
    id: 'dirk',
    width: 200,
    height: 200,
    portfolio: 400039,
    image: require('../assets/staff-dirk.jpg'),
    writeup: 'Author of different shorts and a large amount of adverts for firms'+
    ' such as SEAT, Coca-Cola, Tate Gallery or Nokia, the work of Van de Vondel '+
    '(Zaire, 1960) is characterised by a skilful and furious stroke leading one '+
    'to think this author animates as if he were kicking the enemy. Based in Barcelona '+
    'since 1990, he combines his role as an independent advertising producer and '+
    'creator with collaborations with other creators in the visual and scenic ambit.'
  },
  {
    name: 'Jerald Schoenroth',
    id: 'jerald',
    width: 400,
    height: 400,
    portfolio: 631626,
    image: require('../assets/staff-jerald.jpg'),
    writeup: 'Praesent faucibus consequat nisl varius ullamcorper. Nulla sit amet'+
    ' metus lacus. Quisque elit massa, tempor at leo ut, cursus suscipit metus. '+
    'Proin consectetur facilisis lacus a elementum. Sed non dignissim lorem. Class '+
    'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos '+
    'himenaeos. Duis id felis volutpat, feugiat risus sed, posuere justo. Phasellus '+
    'dictum massa in nunc pellentesque, id sodales dolor dignissim. Aenean sit amet posuere nisi.'
  },
  {
    name: 'Marv Newland',
    id: 'marv',
    width: 240,
    height: 160,
    portfolio: 631613,
    image: require('../assets/staff-marv.jpg'),
    writeup: 'Marv Newland began a career making animated films in Los Angeles with'+
    ' the creation of the short Bambi Meets Godzilla. In 1970 he moved to Toronto, '+
    'Canada where he designed, directed and animated television commercials, ID’s for '+
    'Sesame Street, and segments for longer films. In late 1972 Newland moved to '+
    'Vancouver, Canada where he free-lanced for local and American production companies.'+
    ' In 1975 Newland founded the animated film production company INTERNATIONAL '+
    'ROCKETSHIP LIMITED in Vancouver, where he produced and directed numerous animated '+
    'short films. Newland is currently animating his short film, SCRATCHY.'
  },
  {
    name: 'Morten Vinther',
    id: 'morten',
    width: 240,
    height: 240,
    portfolio: 631712,
    image: require('../assets/staff-morten.jpg'),
    writeup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo '+
    'sit amet magna iaculis posuere. Donec sed purus metus. Quisque gravida purus '+
    'at ante interdum, nec finibus risus sollicitudin. Aenean vulputate massa enim. '+
    'Nullam eget hendrerit erat, bibendum fringilla nulla. Pellentesque a mi a felis '+
    'posuere iaculis non non ipsum.'
  },
  {
    name: 'Nathaniel Akin',
    id: 'nathaniel',
    width: 280,
    height: 280,
    portfolio: 631636,
    image: require('../assets/staff-nathaniel.jpg'),
    writeup: 'Nathaniel Akin has a rich background in commercial and independent '+
    'production accompanied by a deep respect for beautiful silly images. After '+
    'art school, he made set sculpture for feature lms and commercials, was cinematographer '+
    'on several independent lms and created design packages for television, lm and '+
    'the web. He’s enjoyed directing commercials and childrens television shows '+
    'for PBS, Nickelodeon, Three Chicks and a number of international advertising '+
    'agencies. '
  },
  {
    name: 'Rich Ferguson-Hull',
    id: 'rich',
    width: 320,
    height: 240,
    portfolio: 631619,
    image: require('../assets/staff-rich.jpg'),
    writeup: 'Donec vitae iaculis nunc, non posuere massa. Donec id maximus risus.'+
    ' Donec in lectus gravida diam malesuada blandit in ultrices nibh. Suspendisse'+
    ' ut viverra dolor. Integer tincidunt vel enim sed interdum. Proin vel varius'+
    ' nunc. Curabitur vel lorem bibendum, aliquet nisl ac, bibendum ipsum.'
  },
  {
    name: 'Tom Shroeder',
    id: 'tom',
    width: 320,
    height: 320,
    portfolio: 400084,
    image: require('../assets/staff-tom.jpg'),
    writeup: 'Tom has been making hand-drawn animated films and commercials since'+
    ' 1990, and is a valuable addition to the Global Mechanic roster. Tom’s distinct, '+
    'original style of animation is showcased in both films and commercials. Companies '+
    'are elated with his commercial work - he has directed pieces for Kashi, Samsung '+
    'and Hertz Car Rental. Tom enjoys continued success on the international festival '+
    'circuit – with screenings in Annecy, Rotterdam, Sundance, South by Southwest, '+
    'Ottawa and Edinburgh – and has won over thirty festival awards. Tom received '+
    'Minnesota State Arts Board Grants in 1991, 1999 and 2006, Jerome Film and Video '+
    'Grants in 2000 and 2004, McKnight Fellowships in 2006 and 2011, and Bush Fellowships '+
    'in 1997 and 2008. His films have also been broadcast on Independent Lens, Sundance '+
    'Channel, Canal + France, SBS in Australia, CBC in Canada, and screened at the '+
    'American Cinematique in Los Angeles and Anthology Film Archives in New York. '
  },
  {
    name: 'Julian Frost',
    id: 'julian',
    width: 360,
    height: 360,
    portfolio: null,
    image: require('../assets/staff-julian.jpg'),
    writeup: 'Julian specialises in design-driven comedic animation. His work has'+
    ' won Cannes Lion Grand Prixs, Webbys, an Annecy Cristal, and been honoured by'+
    ' the London Design Museum. He lives in Melbourne, Australia, and quite likes'+
    ' ducks.'
  }
].filter(dir => dir.writeup !== null && dir.portfolio !== null)
