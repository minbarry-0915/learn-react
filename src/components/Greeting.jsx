const Greeting = ({ timeOfDay }) => {
	return (
		<div>
			{timeOfDay === 'morning' ? <p>Good Morning</p> : <p>Good Afternoon</p>}
		</div>
	);
};
export default Greeting;
