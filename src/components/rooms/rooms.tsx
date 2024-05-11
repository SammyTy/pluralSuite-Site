import "./rooms.scss"
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import img1 from "../../assets/rooms/image 1.png";
import img2 from "../../assets/rooms/image2.png";

const roomsDetails1 = {
    name: "Luxury Double Suite",
    description: `Maecenas sollicitudin tincidunt 
    maximus. Morbi tempus malesuada erat sed pellentesque.
     Donec pharetra mattis nulla, id laoreet neque scelerisque at. 
     Quisque eget sem non ligula consectetur ultrices in quis augue. 
     Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. 
     Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus.
     Morbi tempus malesuada erat sed pellentesque.`,
     price: 149,
     details: ["Morbi erat sed pellentesque.", "imperd iet dictum, eget varius", "Maecenas sollicitudin tincidunt"]
}
const roomsDetails2 = {
    name: "Luxury Single Room",
    description: `Maecenas sollicitudin tincidunt 
    maximus. Morbi tempus malesuada erat sed pellentesque.
     Donec pharetra mattis nulla, id laoreet neque scelerisque at. 
     Quisque eget sem non ligula consectetur ultrices in quis augue. 
     Donec imperd iet leo eget tortor dictum, eget varius eros sagittis. 
     Curabitur tempor dignissim massa ut faucibus sollicitudin tinci dunt maximus.
     Morbi tempus malesuada erat sed pellentesque.`,
     price: 90,
    //  backColor: 
     details: ["malesuada erat sed pellentesque.", "eget tortor dictum, eget varius", "Maecenas sollicitudin tincidunt"]
}

interface RoomSuiteProps {
    roomDetail :{
        name: string,
        description?: string,
        price: number,
        details: string[]
    }
}

function RoomSuite({roomDetail} : RoomSuiteProps) {
    return(
        <div className="rooms">
             <div className="wlcHedin">
                <span>Rooms</span>
                <h2>{roomDetail.name}</h2>
            </div>
            <p>{roomDetail.description}</p>
            <div className="details">
                {/* Iterate over the array of objects and create a div for each one */}
                 {roomDetail.details.map((detail, index)=>( 
                    <div className="detailsList" key={index}>
                        <span> <MdOutlineBookmarkAdded /></span>
                        <p>{detail}</p>
                    </div>
                 ))}  
            </div>
            <div className="bookins">
                 <div className="price">
                    <span><BiDollar />{roomDetail.price}</span>/Night
                 </div>
                 <div className="btn">Book Now</div>
            </div>
        </div>
    )
}
const Rooms = () => {
  return (
    <div className="roomsCon">
      <div className="roomImg">
        <img src={img1} alt="roomImage1" />
      </div>
      <div className="room1">
        <RoomSuite roomDetail ={roomsDetails1} />
      </div>
      <div className="room2">
        <RoomSuite roomDetail ={roomsDetails2} />
      </div>
      <div className="roomImg">
        <img src={img2} alt="roomImage2" />
      </div>
    </div>
  ) 
}

export default Rooms
