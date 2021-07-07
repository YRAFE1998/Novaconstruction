import Zoom from 'react-reveal/Zoom';
import React, { useState } from 'react';
import { Row,Col, Container } from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import { BlockTitle, H6} from '../styledcomponents/text';


export const BootstrapCarousel = (props) => {

  const indicators = props.items.map((item, index) =>{
    const classnames = index == 0 ?"active":"";
    const ariaCurrent = index == 0 ?"true":"";
    return (
      <button type="button" className={classnames} aria-current={ariaCurrent} data-bs-target="#productscarousel" data-bs-slide-to={`${index}`}  aria-label={`Slide ${index+1}`}></button>
    );
  });
  const carouselInner = props.items.map((item,index)=>{
    const classnames = index == 0?"carousel-item active":"carousel-item";
    return(
      <div className={classnames} style={{maxHeight:'50vh'}}>
          <img src={item} className="d-block carouselimg-products mx-auto my-auto" />
      </div>
    )
  })

return(
    <div id="productscarousel" className="carousel slide px-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {indicators}
      </div>
      <div className="carousel-inner px-lg-5">
        {carouselInner}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#productscarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#productscarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
);
}


const BootstrapBigCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = props.items;
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        {item.src}
        
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
    </Carousel>
    <CarouselControl className="w-5 justify-content-start" direction="prev" directionText="Previous" onClickHandler={previous} />
    <CarouselControl className="w-5 justify-content-end" direction="next" directionText="Next" onClickHandler={next} />

    </>

  );
}


export const Projectsblock = (props) => {
  const params = new URLSearchParams(window.location.search);
  const company_Id = params.get('id');
  console.log(company_Id);
  
  const items = [
        {
          name:'COSMEC',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ig1',
          src: 'assets/images/Products/Slide6.JPG',
          altText: '',
          caption: 'For 30 years Cos.Mec has been providing design and construction solutions to pharmaceutical, chemical and food companies in Italy and abroad in compliance with the relevant guidelines and procedures such as cGMP and FDA. Thanks to a close co-operation with our customers, our company is able to offer comprehensive and customized solutions for the handling and processing of powders and granules for the different production needs',
          logo: 'assets/images/clientslogos/7.png',
          machines: ['assets/images/Machines/cosmec/1.png','assets/images/Machines/cosmec/2.png','assets/images/Machines/cosmec/3.png','assets/images/Machines/cosmec/4.png','assets/images/Machines/cosmec/5.png']
        },
        {
          name:'FREUND VECTOR',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ig2',
          src: 'assets/images/Products/Slide6.JPG',
          altText: '',
          caption: 'A global full service company founded in 1972, Freund-Vector Corporation designs, manufactures and markets processing equipment and services for the processing of powders, particles, beads, pellets, tablets and other solid materials/forms to the pharmaceutical, nutritional, food, confectionery, chemical, powdered metals, automotive and pyrotechnics industries. Equipment applications include coating, drying, agglomerating, granulating, layering, densification and tablet forming. Highly specialized in roll compactors along with Coater and wet Granulation for material densification and granulation along with automated process control systems for all of the equipment/systems. A unique in-house laboratory facility that specializes in product feasibility, process development and process technology provides processing expertise to support the marketing of all of the product lines.',
          logo: 'assets/images/clientslogos/8.png',
          machines: ['assets/images/Machines/Freundvector/1.png','assets/images/Machines/Freundvector/2.png','assets/images/Machines/Freundvector/3.png']
        },
        {
          name:'KIKUSUI',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ig3',
          src: 'assets/images/Products/Slide7.JPG',
          altText: '',
          caption: "Kikusui 's products and reputation are expanded into various fields from pharmaceuticals and health care products to the latest chemical & electronic industries. Kikusui range of products include tablet presses for all tableting technologies , standards products, multi layer , tablet in tablet , high potency formulation , and new control system dedicated to in line control for continuous manufacturing process. A number of 50 expert designer are working in our mechanical and electrical dept, on a total of 260 employee, located between Japan , US and Europe (Italy). In continuing to move its expertise and technology into new, more challenging fields, and to answer to the needs of its every customer, Kikusui has taken the position of leader in this new mechanical, electronic and digital age. This can only be done through employing an innovative staff whose focus is on the future, and vowing to a policy to maintain the highest standard of quality possible.",
          logo: 'assets/images/clientslogos/6.png',
          machines: ['assets/images/Machines/Kikisui/1.png','assets/images/Machines/Kikisui/2.png','assets/images/Machines/Kikisui/3.png','assets/images/Machines/Kikisui/4.png','assets/images/Machines/Kikisui/5.png']
        },
        {
          name: 'FAMAR TEC ',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ig4',
          src: 'assets/images/Products/Slide8.JPG',
          altText: "",
          caption: "FamarTec is Located in Bologna(Italy),  the well-known “Packaging Valley” , Famar Tec aahas developed a wide know-how in the design and manufacture of automatic machines for blisters , trays ,cartons and cases for pharmaceutical , nutraceutical and cosmetic applications.In 2015 the company joined the Curti Industries Group , leader in mechanical manufacturing and already active in the packaging industry.FamarTec is Located in Bologna(Italy),  the well-known “Packaging Valley” , Famar Tec aahas developed a wide know-how in the design and manufacture of automatic machines for blisters , trays ,cartons and cases for pharmaceutical , nutraceutical and cosmetic applications.In 2015 the company joined the Curti Industries Group , leader in mechanical manufacturing and already active in the packaging industry.",
          logo: 'assets/images/clientslogos/9.png',
          machines: ['assets/images/Machines/famar tec/1.png','assets/images/Machines/famar tec/2.png','assets/images/Machines/famar tec/3.png']        
        },
        {
          name:'Steriline',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ig5',
          src: 'assets/images/Products/Slide9.JPG',
          altText: "",
          caption: "Steriline is a sound Italian manufacturer founded in the Lake Como area in 1989. Highly specialized in the production of complete lines for the aseptic processing of injectable products, supplies pharmaceutical companies worldwide. Steriline approach is based on close partnership with customers and local representative. Dialogues are frequent, open and ongoing at all stages of product lifecycle to provide the most effective responses to clients’ needs and the highest reliability in the long term.",
          logo: 'assets/images/clientslogos/1.png',
          machines: ['assets/images/Machines/steriline/1.png','assets/images/Machines/steriline/2.png','assets/images/Machines/steriline/3.png','assets/images/Machines/steriline/4.png']
        },
        {
          name:'ZIRBUS ',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ig6',
          src: 'assets/images/Products/Slide10.JPG',
          altText: "",
          caption: "With over 30 years of experience, one of the world’s leading manufacturers of individually designed autoclaves, sterilizers and freeze-drying systems. For more than 30 years we have been producing our equipment manually ourselves – and have developed a know-how that enables us to design solutions that are unique worldwide.",
          logo: 'assets/images/clientslogos/2.png',
          machines: ['assets/images/Machines/zirbus/1.png','assets/images/Machines/zirbus/2.png','assets/images/Machines/zirbus/3.png']
        
        },
        {
          name:'Omas techno systems',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ig7',
          src: 'assets/images/Products/Slide11.JPG',
          altText: "",
          caption: "It is an Italian Leading Company Certified in the Design & Manufacturing of : Dosing Pumps, Semi-automatic and Automatic Machines as well as Complete Turn Key Solutions for : *Cosmetic, *Biotech, * Pharmaceutical, and *Food Industry. It is located in Milano - Italy. Specialized in Filling : Liquid, Semi-dense, Creamy,Powder Products",
          logo: 'assets/images/clientslogos/5.png',
          machines: ['assets/images/Machines/Omas/1.png','assets/images/Machines/Omas/2.png','assets/images/Machines/Omas/3.png']

        },
        {
          name:'SOLARIS',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ig8',
          src: 'assets/images/Products/Slide12.JPG',
          altText: "",
          caption: "Solaris Biotechnology Srl is an Italian company specializing in fermenters and bioreactors for R&D and production purposes. Our products are used in universities, schools and research centers, as well as in pharma, nutraceutical, cosmeceutical, chemical, agricultural, and food and beverage industries, not to mention bioplastics and biofuels applications. Though initially more industrially focused, today Solaris divides its activities in two branches:​ Solaris Lab, dedicated to laboratory scale equipment from 120ml up to 20 L, and​ Solaris Industrial, committed to totally customizable cGMP pilot-industrial equipment up to 30.000 L, and to the design and manufacturing of full turnkey solutions.",
          logo: 'assets/images/clientslogos/12.png',
          machines: ['assets/images/Machines/Solaris/1.png','assets/images/Machines/Solaris/2.png','assets/images/Machines/Solaris/3.png','assets/images/Machines/Solaris/4.png','assets/images/Machines/Solaris/5.png']
        },
        {
          name:'TEMA SINERGIE',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ig9',
          src: 'assets/images/Products/Slide13.JPG',
          altText: '',
          caption: "The Barrier Isolation Technology Business Unit at Tema Sinergie is an international landmark for the pharmaceutical and chemical branch: drug manufacturers, hospitals and pharmaceutical machinery industries. The Barrier Isolation Technology Business Unit expertise lays in designing, manufacturing and marketing a full range of state-of-the-art isolation and containment technologies for aseptic processes, HPAPI handling, sterility testing, classified environment material transfers, cell culture manipulation, glove integrity testing on isolators and RABs. The team is constantly growing and evolving, steadily researching new approaches to fulfil the current request of the international market, and read its future needs.",
          logo: 'assets/images/clientslogos/11.png',
          machines: ['assets/images/Machines/tema sinergie/1.png','assets/images/Machines/tema sinergie/2.png','assets/images/Machines/tema sinergie/3.png','assets/images/Machines/tema sinergie/4.png']        
        },
        {
          name:'DASIT GROUP',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ih1',
          src: 'assets/images/Products/Slide14.JPG',
          altText: '',
          caption: "FASTER S.r.l., born in 1984 and based in Italy, is one of the leading European manufacturers of wide range of Laboratory equipment.",
          logo: 'assets/images/clientslogos/17.png',
          machines: ['assets/images/Machines/dasit/1.png','assets/images/Machines/dasit/2.png','assets/images/Machines/dasit/3.png','assets/images/Machines/dasit/4.png','assets/images/Machines/dasit/5.png']        
        },
        {
          name:'Sa.l.me',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ih2',
          src: 'assets/images/Products/Slide15.JPG',
          altText: '',
          caption: "Italian manufacturer of equipment and plants for pharma sinc  1980.",       
          logo: 'assets/images/clientslogos/4.png',
          machines: ['assets/images/Machines/salme/1.png','assets/images/Machines/salme/2.png','assets/images/Machines/salme/3.png','assets/images/Machines/salme/4.png','assets/images/Machines/salme/5.png','assets/images/Machines/salme/6.png']

        },
        {
          name:'ELETTRACQUA',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ih3',
          src: 'assets/images/Products/Slide16.JPG',
          altText: '',
          caption: "Elettracqua was established in 1966. Its business is mainly focused on the industrial segment, with design and construction of systems for primary water treatment.",
          logo: 'assets/images/clientslogos/16.png',
          machines: ['assets/images/Machines/elettracqua/1.png','assets/images/Machines/elettracqua/2.png','assets/images/Machines/elettracqua/3.png']
        },
        {
          name:'MILL FARMA',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ih4',
          src: 'assets/images/Products/Slide17.JPG',
          altText: '',
          caption: "Mill Farma srl specializes in the design, manufacture, and installation of ultra-high purity piping systems that  distribute liquids and gases. Our mission is to provide the highest quality products  and services at competitive prices.  Throughout the years, we have expedited complex stainless steel pipe fabrication and constantly evolved with high-tech requirements, in particular bio-pharmaceutical industries.",
          logo: 'assets/images/clientslogos/13.png',
          machines: ['assets/images/Machines/mill farma/1.png','assets/images/Machines/mill farma/2.png','assets/images/Machines/mill farma/3.png']
        },
        {
          name:'METAPACK',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ih5',
          src: 'assets/images/Products/Slide18.JPG',
          altText: '',
          caption: "Metapack is an Italian company which supplies solutions and machines for identification and control of industrial products and processes. With more than 25 years of experience, Metapack is focused on digital printing and coding, machine vision and traceability software systems among our specific competences, integrated into specific solutions conceived for the most advanced requirements. Metapack provides for each phase of the solution deployment, from Customer URS analysis, through Detailed Design and machine manufacturing, up to the FAT/SAT processes and final installation, training and take-over support. Focused on pharmaceutical field, Metapack supplies in-line and off-line machines and systems for: Serialization and Aggeregation processes, Late Stage Customization of labels and cartons, BFS print and inspect, Blister and Alu-Foil printing.",
          logo: 'assets/images/clientslogos/3.png',
          machines: ['assets/images/Machines/metapack/1.png','assets/images/Machines/metapack/2.png','assets/images/Machines/metapack/3.png','assets/images/Machines/metapack/4.png']
        },
        {
          name:'PRISMA INDUSTRIES',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ih6',
          src: 'assets/images/Products/Slide19.JPG',
          altText: '',
          caption: "PRISMA INDUSTRIALE S.r.l. is the Italian leader in dynamic weighing and the only European manufacturer able to support its customers with a complete product line of instruments for product control and inspection: checkweighers, metal detectors and X-ray inspection systems.",
          logo: 'assets/images/clientslogos/10.png',
          machines: ['assets/images/Machines/Prisma/1.png','assets/images/Machines/Prisma/2.png']        
        },
        {
          name:'Servimatic',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ih7',
          src: 'assets/images/Products/Slide20.JPG',
          altText: '',
          caption: "We are a company specialized in the realization of systems, processes and services for the pharmaceutical industry and cosmetics, presents itself on the international market as a reality able to provide technological and innovative solutions for the conversion of the tube of glass in ampoules, vials and cartridges.",
          logo: 'assets/images/clientslogos/14.png',
          machines: ['assets/images/Machines/servimatic/1.png','assets/images/Machines/servimatic/2.png','assets/images/Machines/servimatic/3.png','assets/images/Machines/servimatic/4.png']                
        },
        {
          name:'IPM italia',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ih8',
          src: 'assets/images/Products/Slide21.JPG',
          altText: '',
          caption: "When processing includes the use of corrosive substances, solvents, acids, bases, colouring agents… it’s better to install our resin coatings. Born after many years of experience and collaboration with companies operating in the sector, these systems are resistant to chemicalphysical attacks; they offer the maximum hygiene, easy cleaning and sanitization, quick maintenance.",
          logo: 'assets/images/clientslogos/19.png',
          machines: ['assets/images/Machines/IPM Italia/1.png','assets/images/Machines/IPM Italia/2.png','assets/images/Machines/IPM Italia/3.png','assets/images/Machines/IPM Italia/4.png']        
        },
        {
          name:'CDZ',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ih9',
          src: 'assets/images/Products/Slide22.JPG',
          altText: '',
          caption: "CDZ Srl has been building Air Handling Units and derivatives since 1974, covering flow rates from 500 to 270,000 mc / h. What distinguishes the production is the solid craftsmanship dedicated to each construction. ",
          logo: 'assets/images/clientslogos/18.png',
          machines: ['assets/images/Machines/CDZ/1.png','assets/images/Machines/CDZ/2.png','assets/images/Machines/CDZ/3.png','assets/images/Machines/CDZ/4.png','assets/images/Machines/CDZ/5.png','assets/images/Machines/CDZ/6.png']        

        },
        {
          name:'H Filtration',
          id:'k7q238y784c7687cn7yc47h746c6g7ch83ii1',
          src: 'assets/images/Products/Slide23.JPG',
          altText: '',
          caption: "We create air purification and filtration systems to protect the environment, we interact with the customer to provide an attentive, punctual and tailored service with respect to his needs. A commitment that is realized not only in the design phase, but also in the after-sales, creating a real stable relationship over time.",
          logo: 'assets/images/clientslogos/15.png',
          machines: ['assets/images/Machines/hfiltration/1.png','assets/images/Machines/hfiltration/2.png','assets/images/Machines/hfiltration/3.png','assets/images/Machines/hfiltration/4.png','assets/images/Machines/hfiltration/5.png','assets/images/Machines/hfiltration/6.png']        
        }
      ];
  
  const currentpartner = function(){ 
      for(let i=0;i<items.length;i++){
        if(items[i].id == company_Id)
          return items[i];
      } 
      return{};
    }();
  const singleitem = (item)=>{
    console.log(item);
    var classnames = 'text-start m-0 pt-3 pt-xl-0 px-lg-5 text-white align-items-xl-center align-items-stretch';
    return (
    <Row className={classnames} >
      <Col xs='12' className='text-center mb-5'>
        <img className='imgfit' src={item.logo}/>
      </Col>
      <Col xs="12" className="align-self-center mt-5 mt-lg-0">
        <Row>
          <Col xs="12">
            <BlockTitle color="white">
              {item.name}
            </BlockTitle>
          </Col>
          <Col xs="12" className="text-start mt-2">
            <H6 className="text-white">{item.caption}</H6>
          </Col>
        </Row>
      </Col>
      <Col xs='12'  className="px-lg-5 my-5 px-0">
        <BootstrapCarousel items={item.machines} />
      </Col>
    </Row>
    )
  };

  const blockclasses = props.paddingtop ? "text-center align-self-start mx-auto pt-5 my-5": "text-center align-self-start mx-auto my-5";
  var showbg = true;
  const content = 
  <Container style={{minHeight:'100vh', position:'relative'}} fluid={true} className={"py-xl-5 px-md-5 d-flex flex-column justify-content-around " + (showbg ? "my-bg-dark":"force-text-dark")} id="products">
    {showbg &&<img src="/assets/images/ba6.jpg" style={{position: 'absolute', top:0, width: '100%',height: '100%',left: 0,objectFit: 'cover', filter:'blur(5px)',opacity:'0.7', zIndex:'1'}} />
    }
    <Row className={blockclasses} style={{width:'100%', zIndex:'2', backdropFilter: 'blur(3px)',backgroundColor: 'rgba(0,0,0,0.384)'}}>
      <Col xs='12' style={{height:''}} className="text-black">
        {singleitem(currentpartner)}
      </Col>
    </Row>
  </Container>
  return(
      <>
      {content}
      </>
  );
}