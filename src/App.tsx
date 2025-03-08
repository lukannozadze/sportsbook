import ChampionshipsSidebar from "./components/ChampionshipsSidebar"
import MatchList from "./components/MatchList"
import OddsTable from "./components/OddsTable"
import SearchBar from "./components/SearchBar"
import SportsSidebar from "./components/SportsSidebar"

function App() {
  return (
    <div className="w-full h-screen flex gap-4 bg-[#26292F] pt-9 px-2"> 
    <div className="w-3xs max-w-3xs">
      <SearchBar/>
      <SportsSidebar/>
      <ChampionshipsSidebar/>
    </div>
    <div className="w-full">
      <MatchList/>
    </div>
    <div className="w-3xs max-w-3xs">
      <OddsTable/>
    </div>
    </div>
  )
}

export default App
