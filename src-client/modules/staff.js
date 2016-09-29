
export default [
  {
    name: 'Bruce Alcock',
    id: 'bruce',
    width: 240,
    height: 160,
    image: require('../assets/staff-bruce.jpg'),
    writeup: 'Founder and Creative Director, Bruce Alcock, has produced countless'+
    ' award-winning projects throughout his expansive career. As Creative Director,'+
    ' Bruce supervises all work made by the studio, including TV series for broadcasters'+
    ' like PBS and the Cartoon Network. Global Mechanic is Bruce’s third production'+
    ' company, where multiple modes of production inform one another, mixing the'+
    ' professional rigour of commercial work with the creative spirit and critical'+
    ' aesthetic of art projects. In addition to ongoing film, commercial and art'+
    ' projects, Bruce thoroughly enjoys speaking about Global Mechanic’s approach'+
    ' to animation and production, one which is oriented around hybridisation and'+
    ' experimental techniques. In June 2016, Bruce was asked to present his life’s'+
    ' animation work in advertising at the Annecy International Film Festival. He’s'+
    ' also given workshops and masterclasses at home and abroad, from St. John’s,'+
    ' Newfoundland to Edinburgh, Scotland. Bruce has sat on juries at the Ottawa'+
    ' International Animation Festival and the Canadian Screen Awards, while also'+
    ' moderating panels at KidScreen, Boards Advertising Conference and OIAF. Sharing'+
    ' his passion with like-minded individuals, he regularly mentors filmmakers and'+
    ' consults on projects for organizations like the NFB, ECIAD and Vancouver Film School.'
  },
  {
    name: 'Tina Oulette',
    id: 'tina',
    width: 240,
    height: 160,
    image: require('../assets/staff-tina.jpg'),
    writeup: 'Executive Producer and CEO, Tina Ouellette oversees all Global Mechanic'+
    ' business and supervises all aspects of client services. Leveraging decades'+
    ' of experience in production, Tina specializes in putting together and inspiring'+
    ' both cross-media and cross-functional collaborations. Tina’s management experience'+
    ' ranges multi-platform digital projects to commercials, documentaries, network'+
    ' news, broadcast sports, films, series TV and extensive branding work. Tina'+
    ' is profoundly aware of the importance of clear communication with clients,'+
    ' worldwide, ensuring that projects fulfill the mandates of all stakeholders'+
    ' and reach the target audience.'
  },
  {
    name: 'Ryan Kane',
    id: 'ryan',
    width: 240,
    height: 160,
    image: require('../assets/staff-ryan.jpg'),
    writeup: 'Art Director Ryan Kane relocated to Vancouver and joined Global Mechanic,'+
    ' after 6 years as an Art Director, Senior Motion graphics and VFX Supervisor'+
    ' in Ireland’s largest design studio. Ryan’s experience includes AAA properties'+
    ' and brands such as Halo, Dead Rising, McDonalds and Levi’s. He has won many'+
    ' graphic design and VFX awards, and rounds out the studio with his seasoned'+
    ' eye and talent for 3D and VFX.'
  },
  {
    name: 'Allison Barry',
    id: 'allison',
    image: require('../assets/staff-allison.jpg'),
    width: 160,
    height: 160,
    writeup: 'Business Affairs Allison Barry offers years of experience in project'+
    ' management, client relations, business development and contracts administration.'+
    ' Joining Global Mechanic in 2010, Allison embodies a variety of roles within'+
    ' the studio and is an invaluable asset to the company. Her portfolio ranges'+
    ' from supervising Global Mechanic’s recruitment plan and marketing strategy,'+
    ' to building networking relationships with new business partners and collaborators.'
  },
  {
    name: 'Cesare Batista',
    id: 'chez',
    width: 160,
    height: 160,
    image: require('../assets/staff-chez.jpg'),
    writeup: 'Animation Director Cesare Battista, “Chez”, has been an integral part'+
    ' of Global Mechanic for 12 years. Lead Storyboard Artist for five seasons of'+
    ' PBS’s Emmy-nominated Fetch! with Ruff Ruffman, he also designed and animated'+
    ' countless TV commercials, animated and storyboarded on award-winning films'+
    ' At the Quinte Hotel, Long Tack Sam, Vive la Rose, Impromptu and 54 Hours. '+
    ' His abilities range from an unerring sense of story, through expertise in '+
    'any illustrative style, to inventive approaches to pipeline, to beautiful animated'+
    ' movement. '
  },
  {
    name: 'Chris Brode',
    id: 'chris',
    width: 160,
    height: 160,
    image: require('../assets/staff-brodie.jpg'),
    writeup: 'Producer Chris Brodie has worked in the Vancouver production industry'+
    ' since graduating with an MA from Screen Academy Scotland in 2009. His experience'+
    ' in live-action commercial and children’s television production led him to Global'+
    ' Mechanic in 2012, where he now produces animated series and commercials. He'+
    ' enjoys running logistics in the creative field, solving problems and communicating'+
    ' with clients to ensure his productions deliver at the highest quality, on-time'+
    ' and on-budget.'
  },
  {
    name: 'Ben Gaumond',
    id: 'ben',
    width: 160,
    height: 160,
    image: require('../assets/staff-ben.jpg'),
    writeup: 'Technical Director Ben Gaumond specializes in technology services,'+
    ' video editing and management of data services. Ben is continually adapting'+
    ' and refining Global Mechanic’s technical infrastructure, relying on his multi-dimensional'+
    ' knowledge of app development and coding languages to provide sophisticated'+
    ' and resourceful solutions. When he\'s not overseeing all of Global Mechanic\'s'+
    ' technical aspects, he\'s filming and pursuing creative efforts. '
  },
  {
    name: 'Rachel Welsh',
    id: 'rachel',
    width: 160,
    height: 160,
    image: require('../assets/staff-rachel.jpg'),
    writeup: 'Associate Producer Rachel Welsh graduated from the University of British'+
    ' Columbia in 2012 with an interdisciplinary degree in English Literature and'+
    ' Women’s Studies. Her enthusiasm, commitment and broad range of interests have'+
    ' made her an indispensable part of Global Mechanic, as her position has expanded'+
    ' from research and development to include commercial production.'
  }
].filter(dir => dir.writeup !== null && dir.portfolio !== null)
