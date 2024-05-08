import "./about.scss";
import img from "../../assets/aboutImg/img1.png";
import img2 from "../../assets/aboutImg/img2.png";
import img3 from "../../assets/aboutImg/img3.png";
import img4 from "../../assets/aboutImg/img4.png";

const About = () => {
  return (
    <div className="wlcPage">
      <div className="container">
        <div className="wlcItrols">
          <div className="wlcHedins">
              <span>Welcome</span>
              <h2>Amazing hotel in front of the sea</h2>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ducimus necessitatibus fugit repellat nulla quae enim architecto modi deleniti autem corporis, hic pariatur excepturi. Corrupti similique quisquam voluptates vel ex!
          Eum blanditiis perferendis corrupti temporibus voluptatem mollitia similique eaque cupiditate, tenetur error quam illo a. Alias voluptates autem amet iure cupiditate delectus molestiae.</p>
          <div className="btn">continue reading</div>
        </div>
        <div className="imgSecs">
          <div className="imgWrapper">
            <div className="imgCon">
                <img src={img} alt="aboutImg" />
            </div>
            <div className="imgCon">
                <img src={img4} alt="aboutImg" />
            </div>
            <div className="imgCon">
                <img src={img2} alt="aboutImg" />
            </div>
            <div className="imgCon">
                <img src={img3} alt="aboutImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
