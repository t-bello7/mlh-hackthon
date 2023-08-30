import charityImg from "../../assets/imgs/charity.jpg"
const JumbotronImage = () => {
    return (
        <div className="hidden md:block">
            
            <img src={charityImg} alt="charity-img" />
        </div>
    )
}

export default JumbotronImage;