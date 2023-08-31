
const TeamCard = ({imgUrl, name}) => {
    return (
        <div className=" w-[60%] h-[45vh] relative">
            <img src={imgUrl} className="w-[300px]" />

            <div className="bg-darkColor absolute left-[50%] translate-x-[-50%] bottom-[20%] p-4 rounded text-white">
                <span>
                {name}
                </span>
            </div>
        </div>
    )
}

export default TeamCard;