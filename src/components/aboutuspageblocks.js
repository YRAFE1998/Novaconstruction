import { H5,H3 } from "../styledcomponents/text";
import Styledblock from "./styledblock";

export const PageHeading = (props) => {
    return(
        <Styledblock bg="black" title="" subtitle="About us">
            <H3 className="text-gold">
                Who We Are
            </H3>
            <H5 style={{color:'white', lineHeight:'1.8'}} className="mt-4">
                NOVA Engineering provides a comprehensive portfolio of industrial solutions to our
                customers in the field of Pharma, Chemical, Cosmetics, Food and Beverages to create the
                future of industrial automation through precision, innovation and customer insight. We
                provide our expertise to various industries and Technologies from single machines to
                complete production lines and turnkey solutions. This is coupled with pioneering technology
                leaders in the Market. Our Sales and technical services Team are always tailored to your
                specific needs as well as the operating scenarios. We continue to be driven and defined by
                passion, perseverance and pursuit of perfection to be problem solvers and true partners.
            </H5>
        </Styledblock>
    );
}