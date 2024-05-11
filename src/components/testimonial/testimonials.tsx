import { useEffect, useState } from "react";
import "./testimonials.scss";

interface Testimonial{
    id: number,
    name: string,
    designation: string,
    description: string;
    image?:string,
   } 

const testimonials : Testimonial[] = [
    {
        id: 0,
        name: "John Doe",
        designation: "Clients",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta non illum, voluptas cumque dolorum tenetur eligendi in architecto quam, quibusdam ad quas. In facilis iusto nulla ut quibusdam laudantium necessitatibus.",
        image: "/public/testimonialsImg/img1.png"
    },
    {
        id: 1,
        name: "Jane Smith",
        designation: "Clients",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta non illum, voluptas cumque dolorum tenetur eligendi in architecto quam, quibusdam ad quas. In facilis iusto nulla ut quibusdam laudantium necessitatibus.",
        image: "/public/testimonialsImg/Avatar.png"
    },
    {
        id: 2,
        name: "Maria Smith",
        designation: "Clients",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta non illum, voluptas cumque dolorum tenetur eligendi in architecto quam, quibusdam ad quas. In facilis iusto nulla ut quibusdam laudantium necessitatibus.",
        image: "/public/testimonialsImg/img1.png"

    },
];

interface TestimonialProps {
    testimonial: Testimonial;
}

function Testimonial({testimonial} : TestimonialProps) { 
    return (
        <div className="mainTestimonial">
            <div className="imgs">
                <img src={testimonial.image} alt="testimonialsImage"/>
            </div>
            <h2>{testimonial.name}</h2>
            <p>{testimonial.designation}</p>
            <p>{testimonial.description}</p>
        </div>

    )
}

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    // clicked()
  return (
    <div className="testimonials">
        <div className="container">
            <div className="wlcHedin">
                <span>Clients</span>
                <h2>Testimonials</h2>
            </div>
            <div className="testimonialwrapper">
                <div className="subTestimonials">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial key={testimonial.id} testimonial ={testimonials[(activeIndex + index) % testimonials.length]} />)
                    )}
                </div>
            </div>
            <div className="radio">
                <div className="radio">
                    {testimonials.map((_, index) => (
                        <span key={index} className={`t ${index === activeIndex % testimonials.length ? 'active' : ''}`}></span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
