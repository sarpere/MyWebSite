import React, { Component } from 'react'
import Head from "next/head";
import { withTranslation } from '../../i18n'
import { Row, Col, Jumbotron, Card } from 'react-bootstrap'

class index extends Component {
    render() {
        const { t } = this.props
        return (
            <React.Fragment>
                <Head><title>{t("route-experiences")}</title></Head>
                <Row>
                    <ExperineceSection >
                        <ExperianceCard Header={"Udentify"}>
                            <p>Ağırlıklı olarak Ön yüz geliştirici olarak görev aldım. </p>
                            {/* <p>Ağırlıklı olarak Ön yüz geliştirici olarak görev aldım. </p> */}
                        </ExperianceCard>
                    </ExperineceSection>
                </Row>
            </React.Fragment>
        )
    }
}

function ExperianceCard({ children, Header }) {
    return (
        <Card>
            <Card.Header as="h5">{Header}</Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>

    )
}
function ExperineceSection({ children }) {
    return (
        <Col>
            <Jumbotron>
                {children}
            </Jumbotron>
        </Col>
    )
}

export default withTranslation('Header')(index)
