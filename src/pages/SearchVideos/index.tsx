import Header from "../../components/Header";
import { MainWrapper, SearcherWrapper, SearchInput, SearchButton } from "./styles";

export default function SearchVideos() {    
    return (
        <MainWrapper>
            <Header />

            <SearcherWrapper alignment='center'>
                <SearchInput placeholder='Pesquise'/>
                <SearchButton type='button'>Buscar</SearchButton>
            </SearcherWrapper>
        </MainWrapper>
    )
}