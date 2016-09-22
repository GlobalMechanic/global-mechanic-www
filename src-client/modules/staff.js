
export default [
  {
    name: 'Bruce Alcock',
    id: 'bruce',
    width: 240,
    height: 160,
    main: true,
    image: require('../assets/staff-bruce.jpg'),
    writeup: 'Bruce Alcock, founder and Creative Director, is an artist whose animated '+
    'shorts – Impromptu, Vive la Rose, At the Quinte Hotel, Wrong Number Phone Message '+
    'and 54 Hours - have won accolades at festivals worldwide. Bruce’s wide-ranging '+
    'background in music and art expresses itself in a varied and inventive approach '+
    'to every project. His design-based TV commercials have led to award-winning '+
    'campaigns for clients like Coca-Cola, Molson, Chrysler, Bell and Proctor & Gamble; '+
    'his art projects include an interactive film for Canada’s pavilion in the Venice '+
    'Biennale of Architecture, multi-screen typographical animation for the dance/ '+
    'theatre/poetry/music piece The Four Horsemen with Toronto’s Volcano Theatre, '+
    'set design and projection work for Art in Times’s I Send You This Cadmium Red '+
    'and ongoing gallery shows of his paintings and installations. \nBruce studied '+
    'tuba performance and comparative literature at the University of Toronto, then '+
    'moved to Barcelona, where he apprenticed with animator Dirk Van de Vondel. He '+
    'also designed the font Soupbone, distributed by FontShop International. Global '+
    'Mechanic is his third production company; he founded Cuppa Coffee Animation '+
    'in Toronto (1991) and Tricky Pictures in Chicago (1995).'
  },
  {
    name: 'Tina Oulette',
    id: 'tina',
    width: 240,
    height: 160,
    main: true,
    image: require('../assets/staff-tina.jpg'),
    writeup: 'Executive Producer Tina Ouellette oversees all Global Mechanic business'+
    ' and supervises all aspects of client services. Leveraging decades of experience'+
    ' in production, Tina specializes in putting together and inspiring both cross-media'+
    ' and cross-functional collaborations. Tina’s management experience ranges multi-platform'+
    ' digital projects to commercials, documentaries, network news, broadcast sports,'+
    ' films, series TV and extensive branding work. Tina is profoundly aware of '+
    'the importance of clear communication with clients, worldwide, ensuring that '+
    'projects fulfill the mandates of all stakeholders and reach the target audience'
  },
  {
    name: 'Ryan Kane',
    id: 'ryan',
    width: 240,
    height: 160,
    main: true,
    image: require('../assets/staff-ryan.jpg'),
    writeup: 'Art Director Ryan Kane relocated to Vancouver and joined Global Mechanic,'+
    ' after 6 years as an Art Director, Senior Motion graphics and VFX Supervisor '+
    'in Ireland’s largest design studio. Ryan’s experience includes AAA properties '+
    'and brands such as Halo, Dead Rising, McDonalds and Levi’s. He has won many '+
    'graphic design and VFX awards, and rounds out the studio with his seasoned '+
    'eye and talent for 3D and VFX.'
  },
  {
    name: 'Allison Barry',
    id: 'allison',
    image: require('../assets/staff-allison.jpg'),
    width: 160,
    height: 160,
    main: false,
    writeup: 'Bringing years of experience in project management, client relations,'+
    ' business development and contracts administration, Allison has a bold inventiveness '+
    'for everything she produces. When not wearing her many hats in the studio she '+
    'can be found searching for sunshine and beach breaks on foreign grounds. And '+
    'trying to make people smile.'
  },
  {
    name: 'Cesare Batista',
    id: 'chez',
    width: 160,
    height: 160,
    main: false,
    image: require('../assets/staff-chez.jpg'),
    writeup: '“Chez” has been an integral part of Global Mechanic for 12 years. '+
    'Lead Storyboard Artist for five seasons of PBS’s Emmy-nominated Fetch! with '+
    'Ruff Ruffman, he also designed and animated countless TV commercials, animated '+
    'and storyboarded on award-winning films At the Quinte Hotel, Long Tack Sam, '+
    'Vive la Rose, Impromptu and 54 Hours.  His abilities range from an unerring '+
    'sense of story, through expertise in any illustrative style, to inventive approaches '+
    'to pipeline, to beautiful animated movement. A consistently positive force '+
    'for great creative work, Chez ups the game of all he works with.'
  },
  {
    name: 'Chris Brode',
    id: 'chris',
    width: 160,
    height: 160,
    image: require('../assets/staff-brodie.jpg'),
    writeup: 'Donec vitae iaculis nunc, non posuere massa. Donec id maximus risus.'+
    ' Donec in lectus gravida diam malesuada blandit in ultrices nibh. Suspendisse'+
    ' ut viverra dolor. Integer tincidunt vel enim sed interdum. Proin vel varius'+
    ' nunc. Curabitur vel lorem bibendum, aliquet nisl ac, bibendum ipsum.'
  },
  {
    name: 'Ben Gaumond',
    id: 'ben',
    width: 160,
    height: 160,
    main: false,
    image: require('../assets/staff-ben.jpg'),
    writeup: 'Donec vitae iaculis nunc, non posuere massa. Donec id maximus risus.'+
    ' Donec in lectus gravida diam malesuada blandit in ultrices nibh. Suspendisse'+
    ' ut viverra dolor. Integer tincidunt vel enim sed interdum. Proin vel varius'+
    ' nunc. Curabitur vel lorem bibendum, aliquet nisl ac, bibendum ipsum.'
  },
  {
    name: 'Rachel Welsh',
    id: 'rachel',
    width: 160,
    height: 160,
    main: false,
    image: require('../assets/staff-rachel.jpg'),
    writeup: 'Donec vitae iaculis nunc, non posuere massa. Donec id maximus risus.'+
    ' Donec in lectus gravida diam malesuada blandit in ultrices nibh. Suspendisse'+
    ' ut viverra dolor. Integer tincidunt vel enim sed interdum. Proin vel varius'+
    ' nunc. Curabitur vel lorem bibendum, aliquet nisl ac, bibendum ipsum.'
  }
].filter(dir => dir.writeup !== null && dir.portfolio !== null)
