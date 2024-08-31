import s from './Profile.module.css'

const Profile = ({name, tag, location, image, stats}) => {
return (
<div className={s.profile}>
<div className= {s.card}>
<img className= {s.image}
src={image}
alt={name}
/>
<p className={s.userName}>{name}</p>
<p className={s.text}>@{tag}</p>
<p className={s.text}>{location}</p>
</div>

<ul className={s.socList}>
<li className={s.socItem}>
<span className={s.spanText}>Followers</span>
<span className={s.sum}>{stats.followers}</span>
</li>
<li className={s.socItem}>
<span className={s.spanText}>Views</span>
<span className={s.sum}>{stats.views}</span>
</li>
<li className={s.socItem}>
<span className={s.spanText}>Likes</span>
<span className={s.sum}>{stats.likes}</span>
</li>
</ul>
</div>

)
}

export default Profile;