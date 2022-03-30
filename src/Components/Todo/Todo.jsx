import React from 'react';
import UserLittleImg2 from '../../Assets/Images/userlittleimg2.jpg';
import ThreePoint from '../../Assets/Images/three-point.svg';
function HomeTodo() {
	const [todos, setTodos] = React.useState([
		{ id: 0, title: 'Code yozdim', isCompleted: false },
		{ id: 1, title: 'Code yozmadim', isCompleted: true },
	]);
	return (
		<>
			<input
				onKeyUp={(evt) => {
					const newTodo = {
						id: todos[todos.length - 1]?.id + 1 || 0,
						title: evt.target.value,
						isCompleted: false,
					};
					setTodos([newTodo, ...todos]);
				}}
				type="text"
				placeholder="What’s happening"
			/>
			<button type="submit">Submit</button>

			<ul>
				{todos.map((row) => (
					<li key={row.id}>{row.title}</li>
				))}
				<li>
					<span className="main__user">
						<img src={UserLittleImg2} alt="UserLittleImg2" width='60'height='60' />
						<span className="main__user--lname">
							<span>
								<p className="main__user--name">Designsta</p>
								<p className="main__user--username">
									@inner · 25m
								</p>
								<img src={ThreePoint} alt="ThreePoint" />
							</span>
							<p>
								Twitterdagi ayol-erkak qarama-qarshiliginglardan
								o'zinglar zerikmadinglarmi?
							</p>
						</span>
					</span>
				</li>
			</ul>
		</>
	);
}

export default HomeTodo;
