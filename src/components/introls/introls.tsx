// import React from 'react'
import "./introls.scss";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";



const Introls = () => {
  return (
    <div className="introls">
        <div className="subItrols">
            <h2>Book your stay</h2>
            <p>Lorem ipsum dolor sit amet  ottot eyyye frien miesdfhi  consectetur adipisicing elit. Delectus illum corrupti molestias, dignissimos hic expedita voluptatum quisquam.</p>
        </div>
      <div className="prev"><GrPrevious /></div>
      <div className="next"><GrNext /></div>
      <div className="bookNow">
        <form >
            <select name="check-in" id="check-in">
                <option value="check-in 1">check-in 1</option>
                <option value="check-in 2">check-in 2</option>
                <option value="check-in 3">check-in 3</option>
            </select>
            <select name="chexk-out" id="cheeck-out">
                <option value="check-out 1">check-out 1</option>
                <option value="check-out 2">check-out 2</option>
                <option value="check-out 3">check-out 3</option>
            </select>
            <select name="Aduilts" id="adults">
                <option value="aduilts 1">aduilts 1</option>
                <option value="aduilts 2">"aduilts 1</option>
                <option value="aduilts 3">"aduilts 1</option>
            </select>
            <select name="Children" id="children">
                <option value="child 1">child 1</option>
                <option value="child 2">child 2</option>
                <option value="child 3">child 3</option>
            </select>
            <button className="btn">Book Now</button>
        </form>
      </div>
    </div>
  )
}

export default Introls
