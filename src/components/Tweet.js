import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  console.log(props.tweet.user);
  return (
    <div className='tweet'>
      <ProfileImage
        image={props.tweet.user.image}
        className='profile'
        alt='profile'
      />

      <div className='body'>
        <div className='top'>
          <span className='user'>
            <User userData={props.tweet.user} />
            <Timestamp time={props.tweet.timestamp} />
            <span className='name'>{props.tweet.user.name}</span>
            <span className='handle'>{props.tweet.user.handle}</span>
          </span>

          <span className='timestamp'>{props.tweet.time}</span>
        </div>

        <p className='message'>{props.tweet.message}</p>

        <Actions />
      </div>

      <i class='fas fa-ellipsis-h'></i>
    </div>
  );
}

export default Tweet;
