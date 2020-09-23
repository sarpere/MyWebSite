import React from 'react'
import Head from "next/head";
import { withTranslation } from '../i18n'
import ProfileImage from '../components/ProfileImage'
import { Row, Col, Container } from 'react-bootstrap'
import Introduce from '../components/Introduce'
import Languages from '../components/Languages'
import './index.scss';
function Home({ t }) {
    return (
        <Container>
            <Head><title>{t("route-whoami")}</title></Head>
            <Row className="whoAmI mt-3">
                <Col lg>
                    <ProfileImage />
                </Col>
                <Col lg className="mt-3">
                    <Introduce />
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Languages />
                </Col>
            </Row>
        </Container>
    )
}
export default withTranslation('Header')(Home)
