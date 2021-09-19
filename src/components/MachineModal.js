import { items } from "../mocks/partners";
import { H4, H5, P, Secondary4 } from "../styledcomponents/text";

export const MachineModal = (props) => {

    var classnamescard;
    var classnamesside;    
    /*if(!!props.description.length){
      classnamesside = 'd-md-flex d-none ';
      classnamescard = 'd-md-none ';
    }
    else{
      classnamesside = 'd-none ';
      classnamescard = ' ';

    }*/
    return(
      <div className="carousel-image d-flex align-items-center">
      {//<div style={{background:'white',borderRadius:'7px'}} className={classnamesside + "machinecard mx-auto align-items-center"}>
      }<img src={props.src} className="card-img-top card-img-posture"/>
       {/*<div className="card machinedesc mx-auto">
          <div className="card-body" >
            <Secondary4 fontweight="bold" className="card-title text-black text-center" style={{color:'black'}}>{props.name}</Secondary4>
            <P className="card-text mt-3" style={{color:'black'}}>{props.description}</P>
            <ul className="unstyled" style={{color:'black'}}>
              {!!props.list && props?.list.map((item) => {
                return <li>{item}</li>
              })}
            </ul>
          </div>
        </div>
        
      </div>*/}

       {/*<div className={classnamescard +  "card machinecard mx-auto"}>
          <img src={props.src} className="p-2 card-img-top card-img-posture-small"/>
          <div className="card-body" >
            <Secondary4 fontweight="bold" className="card-title text-black text-center" style={{color:'black'}}>{props.name}</Secondary4>
            <P className="card-text mt-3" style={{color:'black'}}>{props.description}</P>
            <ul className="unstyled" style={{color:'black'}}>
              {!!props.list && props?.list.map((item) => {
                return <li>{item}</li>
              })}
            </ul>
          </div>
        </div>*/}
        </div>
    );
}

export default MachineModal;