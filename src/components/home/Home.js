import About from "../about/About";
import Diploma from "../diploma/Diploma";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import FirstPage from "../firstPage/FirstPage";
import Gallery from "../gallery/Gallery";
import Review from "../review/Review";

function Home () {
    return(
        <div className="home-container">
            <FirstPage />
            <About />
            <Diploma />
            <Experience />
            <Education />
            <Review />
            <Gallery />
        </div>
    )
}
export default Home;