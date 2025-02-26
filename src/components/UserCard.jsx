import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({ user, hideButtons }) => {
  const disptach = useDispatch();
  const { _id, firstName, lastName, age, gender, about, photoUrl } = user;

  const handleSendRequest = async (status, userId) => {
    axios.post(BASE_URL + '/request/send/' + status + '/' + userId, {}, { withCredentials: true });
    disptach(removeUserFromFeed(userId));
  };
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + ' ' + lastName}</h2>
        {age && gender && <p>{age + ', ' + gender}</p>}
        <p>{about}</p>
        {!hideButtons && (
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => handleSendRequest('ignored', _id)}>
              Ignore
            </button>
            <button className="btn btn-secondary" onClick={() => handleSendRequest('interested', _id)}>
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
