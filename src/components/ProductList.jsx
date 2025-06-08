const ProductList = () => {
	const products = [
		{
			id: 1,
			name: 'phone',
			price: '$699',
		},
		{
			id: 2,
			name: 'laptop',
			price: '$699',
		},
		{
			id: 3,
			name: 'headphones',
			price: '$699',
		},
	];
	return (
		<div>
			{products.map(({ id, name, price }) => (
				<div key={id}>
					<h1>Name: {name}</h1>
					<h1>Price: {price}</h1>
				</div>
			))}
		</div>
	);
};

export default ProductList;
