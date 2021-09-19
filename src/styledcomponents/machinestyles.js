import styled from "styled-components";

export const MachineStyles = styled.div`
.machinedesc{
    border:none;
}
    /*@media(max-width:600px){
        .machinecard{
            width:100%;
        }
    }
    @media(max-width:800px) and (min-width: 600px)  {
        .machinecard{
            width:90%;
        }
    }
    @media(max-width:1000px) and (min-width: 800px)  {
        .machinecard{
            width:90%;
        }
    }
    @media(max-width:1200px) and (min-width: 1000px)  {
        .machinecard{
            width:90%;
        }
    }
    @media(min-width:1200px){
        .machinecard{
            width:90%;
        }
    }*/
    .card-img-posture{
        max-width:100%;
        max-height:100%;
        object-fit: contain;
    }
    .card-img-posture-small{
        height:313px;
        object-fit:contain;
    }
    @media(min-width:500px){
    .carousel-image{
        height:450px;
        background-color:white;
    }
    
    }
    
    @media(max-width:500px){
    .carousel-image{
        height:300px;
        background-color:white;
    }
    @media (max-width:620px){
        .carousel-image{
            border-radius: 15px 15px 0px 0px;
        }
        .card-img-posture{
            border-radius: 15px 15px 0px 0px;
        }
        .carousel-inner{
            border-radius: 15px 15px 0px 0px;
        }
        .carousel{
            border-radius: 15px 15px 0px 0px;
        }
    }
    }
`;

export const BoxatSmall = styled.div`
    @media(max-width:620px){
            border-radius: 15px;
            /* backdrop-filter: blur(3px); */
            /* background-color: rgba(0, 0, 0, 0.384); */
            /* background: black; */
            box-shadow: 0 3px 10px rgb(0 0 0 /20%);
            background-color: rgba(0, 0, 0, 0.12);
            margin: 20px 0px;
    }
}
`;