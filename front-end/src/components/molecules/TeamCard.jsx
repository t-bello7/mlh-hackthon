
const TeamCard = ({imgUrl, name}) => {
    return (
        <div>
            <img src={imgUrl}/>
            {name}
        </div>
    )
}

export default TeamCard;