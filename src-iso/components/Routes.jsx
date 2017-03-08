import React from 'react'

import { Route } from 'react-router-dom'
import { Link, Row, Icons, Base, LinkDropdown } from 'global-mechanic-components'
import Background from './Background'

/******************************************************************************/
// Temp
/******************************************************************************/

const Dummy = props =>
  <h1>{props.match.path.replace('/','')}</h1>


const DropDummy = ({match}) =>
  <LinkDropdown title={match.path.replace('/','')} links={[]} />

/******************************************************************************/
// Helper
/******************************************************************************/

const TitleLink = ({children, to, icon, ...props}) =>
  <Link exact to={to || `/${children}`} {...props}>
    {icon}<h1>{children}</h1>
  </Link>

const Navigation = ({ private: priv, disabled }) =>
  <Row padded classes={{'navigation': true, 'navigation-disabled': disabled}}>

    <TitleLink to='/' icon={<Icons.Nut inline />}>
      {priv ? 'global mechanic' : null}
    </TitleLink>
    <TitleLink show={!priv} margin='left-auto'>about</TitleLink>
    <TitleLink show={!priv} margin='left'>work</TitleLink>
    <TitleLink show={!priv} margin='left'>directors</TitleLink>

  </Row>

const Pages = props =>
  <Base classes='navigation-pages' {...props}/>

const PageRoute = ({ exact, strict, path, ...other })=>
  <Route exact={exact} path={path} strict={strict}
    render={ ({match}) => <Page match={match} {...other}/> }
  />

class Page extends React.PureComponent {

  static contextTypes = {
    setBranding: React.PropTypes.func
  }

  componentDidMount() {

    const { dark, private: priv } = this.props
    const { setBranding } = this.context

    setBranding(!!dark, !!priv)

  }

  render() {
    const { page:Component, match } = this.props

    return <Component match={match} />
  }
}

/******************************************************************************/
// Exports
/******************************************************************************/

export default class Routes extends React.Component {

  static childContextTypes = {
    setBranding: React.PropTypes.func
  }

  state = {
    dark: false,
    private: false
  }

  getChildContext() {
    return {
      setBranding: this.setBranding
    }
  }

  setBranding = (dark, priv) => this.setState({ dark, private: priv })

  render() {

    const { dark, private: priv } = this.state

    const { disableNav } = this.props

    return <Base id='website' classes={{light: !dark, dark }} >

      <Navigation private={priv} disabled={disableNav} />

      <Pages>
        <PageRoute exact path='/' dark page={Dummy}/>
        <PageRoute path='/about' dark page={Dummy}/>
        <PageRoute path='/work' page={DropDummy}/>
        <PageRoute path='/directors' page={DropDummy}/>
      </Pages>

      <Background/>

    </Base>

  }

}
