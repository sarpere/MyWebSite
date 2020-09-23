
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";
import { Container } from 'react-bootstrap'

const Layout = props => (
  <div className="Layout">
    <Header />
    <Container className="Content" fluid>
      {props.children}
    </Container>
    <Footer />
  </div>
);

export default Layout;