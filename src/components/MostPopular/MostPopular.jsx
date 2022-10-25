import './MostPopular.css'
import {SectionHeader,SectionWrapper,Card} from '../../components';
import mostPopularData from '../../Data/MostPopulardata';
const MostPopular = () => {

  const cards = mostPopularData.map((card,idx )=> (
    <Card key={idx} image={card.image} title={card.title} category={card.category} rate={card.rate} dowmload={card.dowmload}/>
  ))
  return (
    <>
        <SectionWrapper>
            <SectionHeader>Most Popular</SectionHeader>
            <div className="most-popular-items">
              {cards}
            </div>
        </SectionWrapper>
    </>
  )
}

export default MostPopular;