import Fade from 'react-reveal/Fade';
import React, { useContext, useState } from 'react';
import { Row,Col, Container } from "reactstrap";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,UncontrolledCarousel
} from 'reactstrap';
import { Verticalline } from '../styledcomponents/lines';
import { BlockTitle, H1, Secondary } from '../styledcomponents/text';
import { Fadetransition } from '../utils/animations';
import { Offsetcontext } from '../context';

const BootstrapCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [fullscreen, setfullscreen] = useState(false);
  const [pause, setpause] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = props.items.map((item) => {
    const caption = fullscreen?
    (<div className="carousel-overlay-full" target="_parent" onClick={() => {setfullscreen(!fullscreen);setpause(!pause)}}>
        <CarouselCaption captionText={item.caption} captionHeader="" className="d-flex flex-column align-items-center justify-content-end text-overflows carousel-caption-full"/>
        </div>)
    :
    (<div className="carousel-overlay" target="_parent" onClick={() => {setfullscreen(!fullscreen);setpause(!pause)}}>
    <CarouselCaption captionText={item.caption} captionHeader="" className="d-flex flex-column align-items-center justify-content-end text-overflows carousel-caption-half"/>
    </div>)
    ;

    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img100" />
        {caption} 
        
      </CarouselItem>
    );
  });

  return (
    <>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
      enableTouch={true}

    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <CarouselIndicators items={props.items} activeIndex={activeIndex} onClickHandler={goToIndex} />
    </>

  );
}

export const Projectsblock = (props) => {
    const items = [
        {
          src: 'assets/images/Products/Slide6.JPG',
          altText: '',
          caption: 'A global full service company founded in 1972, Freund-Vector Corporation designs, manufactures and markets processing equipment and services for the processing of powders, particles, beads, pellets, tablets and other solid materials/forms to the pharmaceutical, nutritional, food, confectionery, chemical, powdered metals, automotive and pyrotechnics industries. Equipment applications include coating, drying, agglomerating, granulating, layering, densification and tablet forming. Highly specialized in roll compactors along with Coater and wet Granulation for material densification and granulation along with automated process control systems for all of the equipment/systems. A unique in-house laboratory facility that specializes in product feasibility, process development and process technology provides processing expertise to support the marketing of all of the product lines.'
        },
        {
          src: 'assets/images/Products/Slide7.JPG',
          altText: '',
          caption: "Kikusui 's products and reputation are expanded into various fields from pharmaceuticals and health care products to the latest chemical & electronic industries. Kikusui range of products include tablet presses for all tableting technologies , standards products, multi layer , tablet in tablet , high potency formulation , and new control system dedicated to in line control for continuous manufacturing process. A number of 50 expert designer are working in our mechanical and electrical dept, on a total of 260 employee, located between Japan , US and Europe (Italy). In continuing to move its expertise and technology into new, more challenging fields, and to answer to the needs of its every customer, Kikusui has taken the position of leader in this new mechanical, electronic and digital age. This can only be done through employing an innovative staff whose focus is on the future, and vowing to a policy to maintain the highest standard of quality possible."
        },
        {
          src: 'assets/images/Products/Slide8.JPG',
          altText: "",
          caption: "FamarTec is Located in Bologna(Italy),  the well-known “Packaging Valley” , Famar Tec aahas developed a wide know-how in the design and manufacture of automatic machines for blisters , trays ,cartons and cases for pharmaceutical , nutraceutical and cosmetic applications.In 2015 the company joined the Curti Industries Group , leader in mechanical manufacturing and already active in the packaging industry.FamarTec is Located in Bologna(Italy),  the well-known “Packaging Valley” , Famar Tec aahas developed a wide know-how in the design and manufacture of automatic machines for blisters , trays ,cartons and cases for pharmaceutical , nutraceutical and cosmetic applications.In 2015 the company joined the Curti Industries Group , leader in mechanical manufacturing and already active in the packaging industry."
        },
        {
          src: 'assets/images/Products/Slide9.JPG',
          altText: "",
          caption: "Steriline is a sound Italian manufacturer founded in the Lake Como area in 1989. Highly specialized in the production of complete lines for the aseptic processing of injectable products, supplies pharmaceutical companies worldwide. Steriline approach is based on close partnership with customers and local representative. Dialogues are frequent, open and ongoing at all stages of product lifecycle to provide the most effective responses to clients’ needs and the highest reliability in the long term."
        },
        {
          src: 'assets/images/Products/Slide10.JPG',
          altText: "",
          caption: "With over 30 years of experience, one of the world’s leading manufacturers of individually designed autoclaves, sterilizers and freeze-drying systems. For more than 30 years we have been producing our equipment manually ourselves – and have developed a know-how that enables us to design solutions that are unique worldwide."
        },
        {
          src: 'assets/images/Products/Slide11.JPG',
          altText: "",
          caption: "It is an Italian Leading Company Certified in the Design & Manufacturing of : Dosing Pumps, Semi-automatic and Automatic Machines as well as Complete Turn Key Solutions for : *Cosmetic, *Biotech, * Pharmaceutical, and *Food Industry. It is located in Milano - Italy. Specialized in Filling : Liquid, Semi-dense, Creamy,Powder Products"
        },
        {
          src: 'assets/images/Products/Slide12.JPG',
          altText: "",
          caption: "Solaris Biotechnology Srl is an Italian company specializing in fermenters and bioreactors for R&D and production purposes. Our products are used in universities, schools and research centers, as well as in pharma, nutraceutical, cosmeceutical, chemical, agricultural, and food and beverage industries, not to mention bioplastics and biofuels applications. Though initially more industrially focused, today Solaris divides its activities in two branches:​ Solaris Lab, dedicated to laboratory scale equipment from 120ml up to 20 L, and​ Solaris Industrial, committed to totally customizable cGMP pilot-industrial equipment up to 30.000 L, and to the design and manufacturing of full turnkey solutions."
        },
        {
          src: 'assets/images/Products/Slide13.JPG',
          altText: '',
          caption: "The Barrier Isolation Technology Business Unit at Tema Sinergie is an international landmark for the pharmaceutical and chemical branch: drug manufacturers, hospitals and pharmaceutical machinery industries. The Barrier Isolation Technology Business Unit expertise lays in designing, manufacturing and marketing a full range of state-of-the-art isolation and containment technologies for aseptic processes, HPAPI handling, sterility testing, classified environment material transfers, cell culture manipulation, glove integrity testing on isolators and RABs. The team is constantly growing and evolving, steadily researching new approaches to fulfil the current request of the international market, and read its future needs."
        },
        {
          src: 'assets/images/Products/Slide14.JPG',
          altText: '',
          caption: "FASTER S.r.l., born in 1984 and based in Italy, is one of the leading European manufacturers of wide range of Laboratory equipment."
        },
        {
          src: 'assets/images/Products/Slide15.JPG',
          altText: '',
          caption: "Italian manufacturer of equipment and plants for pharma sinc  1980."       
        },
        {
          src: 'assets/images/Products/Slide16.JPG',
          altText: '',
          caption: "Elettracqua was established in 1966. Its business is mainly focused on the industrial segment, with design and construction of systems for primary water treatment."
        },
        {
          src: 'assets/images/Products/Slide17.JPG',
          altText: '',
          caption: "Mill Farma srl specializes in the design, manufacture, and installation of ultra-high purity piping systems that  distribute liquids and gases. Our mission is to provide the highest quality products  and services at competitive prices.  Throughout the years, we have expedited complex stainless steel pipe fabrication and constantly evolved with high-tech requirements, in particular bio-pharmaceutical industries."
        },
        {
          src: 'assets/images/Products/Slide18.JPG',
          altText: '',
          caption: "Metapack is an Italian company which supplies solutions and machines for identification and control of industrial products and processes. With more than 25 years of experience, Metapack is focused on digital printing and coding, machine vision and traceability software systems among our specific competences, integrated into specific solutions conceived for the most advanced requirements. Metapack provides for each phase of the solution deployment, from Customer URS analysis, through Detailed Design and machine manufacturing, up to the FAT/SAT processes and final installation, training and take-over support. Focused on pharmaceutical field, Metapack supplies in-line and off-line machines and systems for: Serialization and Aggeregation processes, Late Stage Customization of labels and cartons, BFS print and inspect, Blister and Alu-Foil printing."
        },
        {
          src: 'assets/images/Products/Slide19.JPG',
          altText: '',
          caption: "PRISMA INDUSTRIALE S.r.l. is the Italian leader in dynamic weighing and the only European manufacturer able to support its customers with a complete product line of instruments for product control and inspection: checkweighers, metal detectors and X-ray inspection systems."
        },
        {
          src: 'assets/images/Products/Slide20.JPG',
          altText: '',
          caption: "We are a company specialized in the realization of systems, processes and services for the pharmaceutical industry and cosmetics, presents itself on the international market as a reality able to provide technological and innovative solutions for the conversion of the tube of glass in ampoules, vials and cartridges."
        },
        {
          src: 'assets/images/Products/Slide21.JPG',
          altText: '',
          caption: "When processing includes the use of corrosive substances, solvents, acids, bases, colouring agents… it’s better to install our resin coatings. Born after many years of experience and collaboration with companies operating in the sector, these systems are resistant to chemicalphysical attacks; they offer the maximum hygiene, easy cleaning and sanitization, quick maintenance."
        },
        {
          src: 'assets/images/Products/Slide22.JPG',
          altText: '',
          caption: "CDZ Srl has been building Air Handling Units and derivatives since 1974, covering flow rates from 500 to 270,000 mc / h. What distinguishes the production is the solid craftsmanship dedicated to each construction. "
        },
        {
          src: 'assets/images/Products/Slide23.JPG',
          altText: '',
          caption: "We create air purification and filtration systems to protect the environment, we interact with the customer to provide an attentive, punctual and tailored service with respect to his needs. A commitment that is realized not only in the design phase, but also in the after-sales, creating a real stable relationship over time."
        }
      ];
      const offsetY = useContext(Offsetcontext);
    return(
        <Container style={{minHeight:'100vh'}} fluid={true} className="pb-4 py-xl-4 flex-xl-row flex-column background-image-multiple d-flex justify-content-stretch align-items-stretch px-md-5 styled-block" id="products">
            {/*<img src="assets/images/Earth.png" className="background-image" style={{transform:`translateY(-${offsetY * 0.8}px)`}}/>
            <img src="assets/images/Earth.png" className="background-image1" style={{transform:`translateY(-${offsetY * 0.8}px)`}}/>
            */}
            <Row className="text-center align-self-start mx-auto d-xl-none" style={{width:'100%'}}>
                <Col xs="6" className="text-center offset-6 px-0">
                    <Verticalline/>
                </Col>
                <Col xs="12" className="mt-3">
                    <BlockTitle>
                        Our Projects
                    </BlockTitle>
                </Col>
            </Row>
            <Container className="px-lg-5 px-0 d-flex align-items-xl-center align-items-stretch mx-0 mw-800" style={{maxWidth:'2000px !important'}}>
                <Row className='text-center m-0 pt-3 pt-xl-0 px-lg-5 resp-height'>
                  
                    <Col xs="12" xl='2'>
                    <Row>
                    <Col xs="12" className="d-none d-xl-block">
                      <div className="verticallineprojects">
                      </div>
                    </Col>
                    <Col xs="12" className="mt-3 text-left d-none d-xl-block">
                      <h6 style={{color:'#cdb068', fontFamily:'primary'}}>
                          Our Projects
                      </h6>
                    </Col>
                    <Col xs="12" className="text-left mt-2">
                      <Secondary className="text-white">Products</Secondary>
                    </Col>
                    </Row>
                      
                    </Col>
                    <Col xs="12" xl='8'  className="d-flex flex-column justify-content-center">
                        <BootstrapCarousel items={items} />
                    </Col>
                    <Col xs="12" xl='2' className="d-flex flex-column justify-content-end">
                    <Row className="align-items-end">
                    <Col xs="12 mt-3 text-xl-left text-right">
                      <h6 style={{color:'#cdb068', fontFamily:'primary'}}>
                          PROJECT DETAILS
                      </h6>
                    </Col>
                    <Col xs="12" className="mt-3 text-xl-left text-right">
                      <h6 style={{color:'#cdb068', fontFamily:'primary'}}>
                          VIEW slides
                      </h6>
                    </Col>
                    <Col xs="12" className="d-none d-xl-block">
                      <div className="verticallineprojects">
                      </div>
                    </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}