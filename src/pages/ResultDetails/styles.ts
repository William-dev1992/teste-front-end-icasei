import styled from 'styled-components'

export const ContentWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 15px;
`;

export const VideoHeader = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
`;

export const InfoWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Video = styled.img`
    width: 100%;
`;

export const ChannelInfo = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
`;

export const Info = styled.p`
    margin: 5px 0;
    display: 'flex';
    align-items: center;
`;

export const VideoDescription = styled.p`
    margin: 5px 0;
    display: 'flex';
    align-items: center;

    display: block; /* Fallback for non-webkit */
    display: -webkit-box;
    -webkit-line-clamp: 5; /* if you change this, make sure to change the fallback line-height and height */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const VideoTitle = styled.p`
    font-weight: bold;

    display: block; /* Fallback for non-webkit */
    display: -webkit-box;
    -webkit-line-clamp: 1; /* if you change this, make sure to change the fallback line-height and height */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;