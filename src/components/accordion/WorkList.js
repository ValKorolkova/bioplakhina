import patent from "./Patent.jpg"

export const WorkList =[
    {
        id: 1,
        title: '2015-2022 года',
        content: '2015 - 2022 - ГБОУ школа 171 - педагог доб. образования (зоология позвоночных, общая биология, проектная деятельность).'
    },
    {
        id: 2,
        title: '2021-2023 года',
        content: '2021 - 2023 - частная школа “Европейская гимназия” - учитель биологии и естествознания, подготовка к ЕГЭ.'
    },
    {
        id: 3,
        title: '2023-2025',
        content: '2022 - 2025 - частная школа “Adriatic Open” - учитель биологии, координатор старшей школы, классный руководитель.'
    },
    {
        id: 4,
        title: 'Научные статьи и патент',
        content: (<div>
                      <div>
                      После университета я продолжила работать в науке - мои статьи на английском можно посмотреть вот здесь 
                       <a className="research-link" href="https://www.researchgate.net/profile/Daria-Plakhina/research" target="_blank" rel="noopener noreferrer"> ResearchGate</a>
                       </div>
                
                    <div className="patent"><img className="img_patent"  src={patent} alt="Patent"/></div>
                 </div>)
    },
]