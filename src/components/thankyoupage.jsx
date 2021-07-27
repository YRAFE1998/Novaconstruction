import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { BlueButton } from "../styledcomponents/buttons";
import { BlockTitleBig, Secondary } from "../styledcomponents/text";
import Styledblock from "./styledblock";

const ThankYouMessage = (props) => {
    return(
        <Styledblock title ='Thank you' backimage="/assets/images/ba4.jpg">
            <Row className='mt-5'>
                <Col xs='12' className='text-center'>
                    <BlockTitleBig fontweight='bold'> Your request has been submitted successfully, Thank you for reaching out to us. We will get back to you as soon as possible</BlockTitleBig>
                </Col>
                <Col xs='12' className='text-center mt-5'>
                    <BlueButton><Link className='unstyled' to="/">Go back to Nova</Link> </BlueButton>
                </Col>
            </Row>
        </Styledblock>
    );
}

export default ThankYouMessage;