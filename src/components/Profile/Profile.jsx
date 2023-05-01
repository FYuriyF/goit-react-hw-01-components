import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Text,
  Stats,
  Item,
  Label,
  Value,
} from './Profile.styled';
import { formatNumber } from '../../utils/fotmatNumber';
// import css from '../Profile/Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Text>{`@${tag}`}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          {/* <Value>{new Intl.NumberFormat('en-US').format(followers)}</Value> */}
          <Value>{formatNumber(followers)}</Value>
        </Item>
        <Item>
          <Label>Views</Label>
          <Value>{formatNumber(views)}</Value>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Value>{formatNumber(likes)}</Value>
        </Item>
      </Stats>
    </ProfileCard>
  );
  //   <div className="profile">
  //     <div className={css.description}>
  //       <img src={avatar} alt="User avatar" className={css.avatar} />
  //       <p className={css.name}>{username}</p>
  //       <p className={css.tag}>@{tag}</p>
  //       <p className={css.location}>{location}</p>
  //     </div>

  //     <ul className={css.stats}>
  //       <li className={css.statsItem}>
  //         <span className={css.label}>Followers</span>
  //         <span className={css.quantity}>{followers}</span>
  //       </li>
  //       <li className={css.statsItem}>
  //         <span className={css.label}>Views</span>
  //         <span className={css.quantity}>{views}</span>
  //       </li>
  //       <li className={css.statsItem}>
  //         <span className={css.label}>Likes</span>
  //         <span className={css.quantity}>{likes}</span>
  //       </li>
  //     </ul>
  //   </div>
  // );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
