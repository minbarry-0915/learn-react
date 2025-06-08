const UserStatus = ({ loggedIn, isAdmin }) => {
	return (
		<div>
			{loggedIn && (isAdmin ? <p>Welcome Admin</p> : <p>Welcome User</p>)}
		</div>
	);
};

export default UserStatus;
