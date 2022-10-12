import { useRef, useState } from "react";
import Header from "../Header";
import { MainWrapper, SearcherWrapper, SearchInput, SearchButton } from "./styles";

export default function Layout({children}: any) {
    const searchInputRef = useRef(null);
    const [resultData, setResultData] = useState([]);


    function Search() {
        if (searchInputRef == null) {
            return;
        }
        
        const queryValue = searchInputRef.current.value;

        setResultData(() => {
            return [{
                videoId: '123131',
                imageUrl: '/YouTube-Logo.png',
                videoTitle: 'Video',
                channelTitle: 'titulo',
                videoDescription: 'teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição teste de descrição '
            }]
        })
    }

    return (
        <MainWrapper>
            <Header />

            <SearcherWrapper alignment='center'>
                <div style={{display: 'flex'}}>
                    <SearchInput id='searchInput' ref={searchInputRef} placeholder='Pesquise'/>
                    <SearchButton type='button' onClick={Search}>Buscar</SearchButton>
                </div>
                
                {children}
            </SearcherWrapper>
        </MainWrapper>
    )
}