import { H5, P } from "../styledcomponents/text";

export const Machinecard = (props) => {
    return(
        <>
        <div className={"card " + props.classNames}>
          <img src={props.src} className="px-2 card-img-top card-img-posture"/>
          <div className="card-body text-flow" style={{maxHeight:'200px'}}>
            <H5 className="card-title text-black" style={{color:'black'}}>{props.name}</H5>
            <P className="card-text" style={{color:'black'}}>{props.description}</P>
          </div>
          <div className="card-body">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${props.name}${props.id}`}>
              Read More...
            </button>
          </div>
        </div>
        </>
    );
}

export default Machinecard;