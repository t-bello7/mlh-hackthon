import TeamCard from "./molecules/TeamCard"
import tomiPic from "../assets/imgs/tomi.jpg"
import alexPic from "../assets/imgs/dev-alex.jpg"
import etornamPic from "../assets/imgs/dev-etornam.jpg"
import ahmedPic from "../assets/imgs/dev-ahmed.jpg"
const TeamMembers = [
    {
        name: "Tomi Bello",
        img: tomiPic
    },
    {
        name: "Alex",
        img: alexPic
    },
    {
        name: "Etornam",
        img: etornamPic
    }, 
    {
        name: "Ahmed",
        img: ahmedPic
    }
]
const TeamSection = () => {
    return (
        <div>
            {
                TeamMembers.map((item) => {
                    const {img, name} = item
                    return (
                        <TeamCard imgUrl={img} name={name} />
                    )
                })
            }
        </div>
    )
}

export default TeamSection;

