import styled from 'styled-components';
import '../styles/styles.css'

export const H1 = styled.h1`
    font-family:${props => 'primary' + (props.fontstyle ? ("-" + props.fontstyle) : "")};
`;

export const H2 = styled.h2`
    font-family:${props => 'primary' + (props.fontstyle ? ("-" + props.fontstyle) : "")};
`;

export const H3 = styled.h3`
    font-family:${props => 'primary' + (props.fontstyle ? ("-" + props.fontstyle) : "")};
`;

export const H4 = styled.h4`
    font-family:${props => 'primary' + (props.fontstyle ? ("-" + props.fontstyle) : "")};
`;

export const H5 = styled.h5`
    font-family:${props => 'primary' + (props.fontstyle ? ("-" + props.fontstyle) : "")};
`;

export const H6 = styled.h6`
    font-family:${props => 'primary' + (props.fontstyle ? ("-" + props.fontstyle) : "")};
`;
export const H7 = styled.h6`
    font-family:${props => 'primary' + (props.fontstyle ? ("-" + props.fontstyle) : "")};
    font-size:0.8rem !important;
`;

export const P = styled.p`
    font-family:${props => 'primary' + (props.fontstyle ? ("-" + props.fontstyle) : "")};
`;


export const Secondary = styled.h1`
    font-family:'secondary';
    font-weight:${props => props.fontweight};
`;

export const Secondary2 = styled.h2`
    font-family:'secondary';
    font-weight:${props => props.fontweight};
`;

export const Secondary3 = styled.h3`
    font-family:'secondary';
    font-weight:${props => props.fontweight};
`;

export const Secondary4 = styled.h4`
    font-family:'secondary';
    font-weight:${props => props.fontweight};
`;

export const Secondary5 = styled.h5`
    font-family:'secondary';
    font-weight:${props => props.fontweight};
`;


export const Secondary6 = styled.h6`
    font-family:'secondary';
    font-weight:${props => props.fontweight};
`;

export const Secondaryp = styled.p`
    font-family:'secondary';
    font-weight:${props => props.fontweight};
`;

export const BlockTitle = styled.h4`
    color: ${props=> props.color};
    font-family:'secondary-bold';

`;

export const BlockTitleslim = styled.h4`
    color: ${props=> props.color};
    font-family:'secondary-light';
`;

export const BlockTitleBig = styled.h1`
    color: ${props=> props.color};
    font-family:'secondary-bold';
`;

export const BlockTitlesmall = styled.h5`
    color: ${props=> props.color};
    font-family:'primary-bold';
`;