import DefaultButton from "../../components/Button";
import { useRouter } from 'next/router'
import { ChannelInfo, ContentWrapper, InfoWrapper, Video, VideoHeader, Info } from "./styles";
import { ArrowBack, ThumbDown, ThumbUp } from '@material-ui/icons'

export default function ResultDetails() {
    const router = useRouter()

    function goBack() {
        router.push('/SearchVideos')
    }

    return (
        <ContentWrapper>
            <VideoHeader>
                <DefaultButton 
                    buttonType='button'
                    onClick={goBack}
                >
                    <ArrowBack />
                </DefaultButton>

                <p style={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    marginLeft: '20px'
                }}>
                    Titulo
                </p>
            </VideoHeader>
            <InfoWrapper>
                <Video src='/YouTube-Logo.png'/>
                <ChannelInfo>
                    <Info>Channel</Info>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUp />
                        <Info style={{ margin: '0 5px' }}>999</Info>

                        <ThumbDown /> 
                        <Info style={{ margin: '0 5px' }}>999</Info>
                    </div>
                </ChannelInfo>
                <Info style={{ fontSize: '13px' }}>Channel Channel Channel Channel Channel Channel Channel Channel Channel Channel Channel Channel Channel Channel</Info>
                <Info style={{ fontWeight: 'bold' }}>Channel</Info>
            </InfoWrapper>
        </ContentWrapper>
    )
}