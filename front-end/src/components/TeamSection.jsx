import TeamCard from "./molecules/TeamCard";
import tomiPic from "../assets/imgs/tomi.jpg"

const TeamMembers = [
    {
        name: "Tomi Bello",
        img: tomiPic
    },
    {
        name: "Tomi Bello",
        img: tomiPic
    }, 
    {
        name: "Tomi Bello",
        img: tomiPic
    },
    {
        name: "Tomi Bello",
        img: tomiPic
    },
]
const TeamSection = ({innerRef}) => {
    return (
        <div ref={innerRef} className="container mx-auto mb-[10vh] flex flex-col items-center md:flex-row gap-12 md:overflow-scroll">
            {
                TeamMembers.map((item, index) => {
                    const {img, name} = item
                    return (
                        <TeamCard key={index} imgUrl={img} name={name} />
                    )
                })
            }
        </div>
    )
}

export default TeamSection;

