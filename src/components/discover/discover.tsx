import "./discover.scss"
import dicoverImg1 from "../../assets/dicover/discover_1.png";
import dicoverImg2 from "../../assets/dicover/discover_2.png";
import dicoverImg3 from "../../assets/dicover/discover_3.png";
const Discover = () => {
  return (
    <div className='discover'>
        <div className="container">
            <div className="mainD">
                <div className="hotel">
                    <div className="wlcHedin">
                        <span>Hotel</span>
                        <h2>discover PluralSuite</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempore,
                        vel nobis ipsum at quaerat velit, molestiae magnam impedit recusandae corporis
                        magni accusantium voluptates.
                    </p>
                    <span className="btn">Discovers</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod corporis doloribus expedita ipsa iusto dolor dignissimos architecto. Quo quidem facilis quis, nobis labore qui repellat consectetur quod eius ipsum!
                Hic, explicabo illo quam cupiditate esse vel impedit laboriosam, obcaecati repellat, sapiente architecto recusandae praesentium modi! Placeat cupiditate cumque, dolorem ad perferendis quos autem rerum voluptate quidem culpa expedita magni?</p>
            </div>
        </div>
        <div className="subDiscover">
            <div className="dicoverImg">
                <img src={dicoverImg1} alt="discoverdImage" />
                <p>Weddinnngs</p>
            </div>
            <div className="dicoverImg">
                <img src={dicoverImg2} alt="discoverdImage" />
                <p>Parties</p>
            </div>
            <div className="dicoverImg">
                <img src={dicoverImg3} alt="discoverdImage" />
                <p>Relax</p>
            </div>
        </div>
    </div>
  )
}

export default Discover
