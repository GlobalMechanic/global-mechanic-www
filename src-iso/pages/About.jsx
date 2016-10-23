import React from 'react'
import Page from './Page'
import { TitleText, BodyText, Inverted, Content, FreeWall } from 'components'
import staff from 'modules/staff'
import { browserHistory, Link } from 'react-router'

const $window = $(window)

function StaffBlock({ id, image, width, height }) {

  const click = () => {
    browserHistory.push(`/about/${id}`)
  }

  return <div
    onClick={click}
    key={name} className='staff-block bulge'
    style={{
      width,
      height
    }}>
    <div className="staff-picture" style={{backgroundImage: `url(${image})`}}/>
  </div>

}

export default class About extends React.Component {

  constructor(props) {
    super(props)
    this.state = { stick: false }
  }

  componentDidMount() {
    this.resize = this.resize.bind(this)

    $window.on('resize', this.resize)

    this.$section = $('#our-team-section')
    this.$content = $('#about-page-content')

    this.resize()
  }

  componentWillUnmount() {
    $window.off('resize', this.resize)
  }

  resize() {

    const contentY = this.$content.offset().top + this.$content.outerHeight(true)
    const sectionH = this.$section.height()

    const stick = contentY + sectionH < innerHeight

    this.setState({stick})
  }

  render() {
    const props = this.props
    const onStaffMember = props.params.staff

    return <Page id='about-page' {...props}>
      <br/>
      <Content id='about-page-content'>
        <TitleText className="padded large" >Global Mechanic is a design studio.</TitleText>
        <TitleText className="padded large" >We experiment, we create, we make beautiful things.</TitleText>
        <BodyText className="padded">Founded in 2000 by Bruce Alcock, Global Mechanic has produced hundred of hours of award winning content for films,
          commercials, television series, digital media and art projects. Oscar and Emmy nominated, we're well decorated in festival and
        ad circuits worldwide.</BodyText>
        <BodyText className="padded">With a core staff of seasoned creatives and producers, we hub and spoke to handle projects small and large. That makes us
          nimble, adaptive, and it saves us from getting set in our ways. It's a studio culture of invention and collaboration, where change is
        expected. Welcome, even.</BodyText>
        <BodyText className="padded">It shows in our work. We love what we do, for big ad agencies and clients like Leo Burnett, Grey, Ogilvy, BBDO, Coca-Cola,
          BMW, P&G, Nestle and Bell. For broadcasters like PBS, the Cartoon Network, Nickelodeon and CBC, the films we produce independently and in
        co-production with the National Film Board of Canada (NFB), our theatre and installation work and, of course, constant experimentation for the fun of it.</BodyText>
      </Content>

      <Inverted id='our-team-section' fill className={'padded-bottom' + (this.state.stick ? ' about-stick' : '')}>
        <div id='about-gear-background'/>
        <br/>
        { onStaffMember
          ? <Link to='/about'><TitleText className='clickable padded'>KEY STAFF</TitleText></Link>
            : <TitleText className='padded'>KEY STAFF</TitleText>
        }
        <br/>
        { props.params.staff ?
          props.children
            : <FreeWall id="chief-free-wall" selector=".staff-block">
              { staff
                .map(dir => <StaffBlock key={dir.id} {...dir}/>) }
            </FreeWall> }
        <br/>
        <div id='bottom-info'>
          <TitleText className='padded small'>USA | Liz Laine Reps +1 312 329 1111</TitleText>
          <TitleText className='padded small'>Canada | Hestyreps +1 416 482 0411</TitleText>
          <br/>
          <TitleText className='padded' mini>Suite 208 - 1525 West 8th Avenue</TitleText>
          <TitleText className='padded' mini>Vancouver BC</TitleText>
          <TitleText className='padded' mini>Canada V6J 1T5</TitleText>
          <TitleText className='padded' mini>+1 604 733 7475</TitleText>
          <TitleText className='padded' mini>studio@globalmechanic.com</TitleText>
        </div>
      </Inverted>
    </Page>
  }
}
