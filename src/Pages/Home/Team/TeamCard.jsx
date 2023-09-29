import person1 from '../../../assets/images/team/1.jpg';
import person2 from '../../../assets/images/team/2.jpg';
import person3 from '../../../assets/images/team/3.jpg';
const TeamCard = () => {
    return (
        <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={person1} alt="Jack" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Jack!</h2>
                    <p>Engine Expert</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={person2} alt="Daniel" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Daniel!</h2>
                    <p>Engine Expert</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={person3} alt="Charles" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Charles!</h2>
                    <p>Engine Expert</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;