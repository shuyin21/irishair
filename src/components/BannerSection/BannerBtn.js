import React from 'react';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

const BannerBtn = () => {
    return (
        <>
            <ButtonWrapper>
                <Button to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80
                    }>
                    <span>
                        EXPLORE
                    </span>
                </Button>
            </ButtonWrapper>
        </>
    )
}

export default BannerBtn
const ButtonWrapper = styled.div`
width: 100vw;
height:100px;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
top:70vh;


@media screen and (max-width:768px){
    top:50vh;
    
}
`;

const Button = styled(LinkS)`
width:100px;
height:100px;
border-radius: 50px;
background-color: #d0a37c;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;




&:hover{
    transition: all 0.2 ease-in-out;
    background-color: #8F7056;
    
    
}

span{
    color: #fff;
font-weight: bold;
 
}


`;
