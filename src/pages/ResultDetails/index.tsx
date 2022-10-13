import DefaultButton from "../../components/Button";
import { useRouter } from 'next/router'
import { ChannelInfo, ContentWrapper, InfoWrapper, Video, VideoHeader, Info, VideoDescription, VideoTitle } from "./styles";
import { ArrowBack, ThumbDown, ThumbUp } from '@material-ui/icons'
import { NormalizeSearchResult } from "../../interfaces";
import executeAxiosCall from "../../utils/executeAxiosCall";
import normalizeSearchResult from "../../utils/normalizeSearchResult";

export async function getServerSideProps(context: any) {
    const { videoId } = context.query

    const response = await executeAxiosCall(videoId, 'Details')

    const data: NormalizeSearchResult[] = response.data.items.map((item: any) => {
        return normalizeSearchResult(item)
    })

    return {
        props: {
            data: data[0]
        }
    }
}

export default function ResultDetails({data}: {data: NormalizeSearchResult}) {
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

                <VideoTitle>
                    {data.videoTitle}
                </VideoTitle>
            </VideoHeader>
            <InfoWrapper>
                <Video src={data.imageUrl} />
                <ChannelInfo>
                    <Info>{data.channelTitle}</Info>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUp />
                        <Info style={{ margin: '0 5px' }}>{data.likeCount}</Info>

                        <ThumbDown />
                        <Info style={{ margin: '0 5px' }}>{data.deslikeCount}</Info>
                    </div>
                </ChannelInfo>
                <VideoDescription style={{ fontSize: '13px' }}>{data.videoDescription}</VideoDescription>
                <Info style={{ fontWeight: 'bold' }}>{data.viewCount} views</Info>
            </InfoWrapper>
        </ContentWrapper>
    )
}