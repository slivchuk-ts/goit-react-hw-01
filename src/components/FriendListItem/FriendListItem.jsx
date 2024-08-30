import s from './FriendListItem.module.css'
import clsx from 'clsx'


const FriendListItem = ({ avatar, name, isOnline }) => {
return (
<div>
<img className={s.friedsImage} src={avatar} alt={name} width="100" />
<p className={s.friendsText}> {name}</p>
<p className={clsx(s.friendsStatus, isOnline ? s.green : s.red)}>{isOnline ? 'Online' : 'Offline'}</p>
</div>
);
};

export default FriendListItem;