import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function BodyText(props) {
  return <Row className="body-line"><Col xs={12}>{props.children}</Col></Row>
}
