import './GamingLibrary.css'
import {SectionHeader,SectionWrapper,GamingLibraryCard} from '../../components';
import GamingLibraryData from '../../Data/GamingLibraryData';


const GamingLibrary = () => {
    const cards = GamingLibraryData.map((card,idx )=> (
        <GamingLibraryCard key={idx} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.downloaded}/>
      ))
  return (
    <>
    <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-cards">
          {cards}
        </div>
    </SectionWrapper>
</>
  )
}

export default GamingLibrary