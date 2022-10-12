import styled from 'styled-components'

export const ResultWrapper = styled.div`
    display: flex;
    width: 100%;
    position: relative;

    justify-content: flex-start;
    flex-direction: column;
    margin: 10px 0;
`;

export const ContentImage = styled.img`
    width: 100%;
    border-radius: 5px;
`;

export const ContentInfo = styled.p`
    margin: 5px 0;
    
    display: block; /* Fallback for non-webkit */
    display: -webkit-box;
    -webkit-line-clamp: 4; /* if you change this, make sure to change the fallback line-height and height */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
