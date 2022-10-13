import { useRef, useState } from 'react'
import executeAxiosCall from '../../utils/executeAxiosCall'
import normalizeSearchResult from '../../utils/normalizeSearchResult';
import Header from '../Header'
import { MainWrapper, SearcherWrapper, SearchInput, SearchButton } from './styles'

export default function Layout({children}: any) {
    const searchInputRef = useRef(null);
    const [resultData, setResultData] = useState([]);

    async function Search() {
        if (searchInputRef == null) {
            return;
        }
        
        const queryValue = searchInputRef.current.value;

        const { data } = await executeAxiosCall(queryValue, 'Search')

        setResultData(
            data.items.map((item: any) => {
                return normalizeSearchResult(item)
            })
        )
    }

    return (
        <MainWrapper>
            <Header />

            <SearcherWrapper alignment='center'>
                <div style={{display: 'flex'}}>
                    <SearchInput id='searchInput' ref={searchInputRef} placeholder='Pesquise'/>
                    <SearchButton type='button' onClick={Search}>Buscar</SearchButton>
                </div>
                
                {
                    resultData.length
                    ? children
                    : <div />
                }
            </SearcherWrapper>
        </MainWrapper>
    )
}