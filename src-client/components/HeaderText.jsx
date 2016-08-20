import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function HeaderText(props) {
  return <Row className="header-line"><Col xs={12}><h2>{props.children}</h2></Col></Row>
}
