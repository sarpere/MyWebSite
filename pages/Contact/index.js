import React, { Component } from 'react'
import Head from "next/head";
import { withTranslation } from '../../i18n'
import { Container, Row} from 'react-bootstrap'
import ContactForm from '../../components/ContactForm'
class index extends Component {
    render() {
        const { t } = this.props
        return (
            <Container>
                <Head><title>{t("route-contact")}</title></Head>
                <Row>
                    <ContactForm />
                </Row>
            </Container>
        )
    }
}
export default withTranslation('Header')(index)
