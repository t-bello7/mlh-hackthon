import TeamCard from "./molecules/TeamCard";
import tomiPic from "../assets/imgs/tomi.jpg"

const TeamMembers = [
    {
        name: "Tomi Bello",
        img: tomiPic
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

