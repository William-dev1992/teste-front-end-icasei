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