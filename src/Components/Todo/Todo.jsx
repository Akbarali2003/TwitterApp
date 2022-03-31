import React from 'react';
import './Todo.scss';
import UserLittleImg1 from '../../Assets/Images/userlittleimg1.jpg';
import UserLittleImg2 from '../../Assets/Images/userlittleimg2.jpg';
import UserLittleImg3 from '../../Assets/Images/userlittleimg3.jpg';
import UserLittleImg4 from '../../Assets/Images/userlittleimg4.jpg';
import ThreePoint from '../../Assets/Images/three-point.svg';

import CommentImg from '../../Assets/Images/comment.svg';
import RetweetImg from '../../Assets/Images/retweet.svg';
import LikeImg from '../../Assets/Images/like.svg';
import ShareImg from '../../Assets/Images/share.svg';
import StatisticsImg from '../../Assets/Images/statistics.svg';
import KabobImg from '../../Assets/Images/kabob.jpg';
function HomeTodo() {
	const [todos, setTodos] = React.useState([
		{
			id: 0,
			img: { UserLittleImg1 },
			title: 'Code yozdim',
			isCompleted: false,
		},
		{ id: 1, title: 'Code yozmadim', isCompleted: true },
	]);
	const LikeRef = React.useRef();
	const [count, setCount] = React.useState(10);
	return (
		<>
			<section className="todo">
				<form>
					<img src={todos.img} alt="UserLittleImg1" />
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
				</form>
				<ul className="todo__list">
					{todos.map((row) => (
						<li key={row.id}>{row.title}</li>
					))}
					<hr className="todo__line" />
					<li className="todo__item">
						<div className="todo__user">
							<img
								src={UserLittleImg2}
								alt="UserLittleImg2"
								width="60"
								height="60"
							/>
							<span className="todo__user--lname">
								<span className="todo__user--surename">
									<span className="todo__user--sname">
										<p className="todo__user--name">
											Designsta
										</p>
										<p className="todo__user--username">
											@inner · 25m
										</p>
									</span>
									<img src={ThreePoint} alt="ThreePoint" />
								</span>
								<p className="todo__user--commit">
									Twitterdagi ayol-erkak
									qarama-qarshiliginglardan o'zinglar
									zerikmadinglarmi?
								</p>
								<ul className="todo__icon--list">
									<li className="todo__icon--item">
										<img
											onClick={() => {
												setCount(count + 1);
											}}
											src={CommentImg}
											alt="CommentImg"
											ref={LikeRef}
										/>
										<p className="todo__icon--count">
											{count}
										</p>
									</li>
									<li className="todo__icon--item">
										<img
											src={RetweetImg}
											alt="RetweetImg"
										/>
										<p className="todo__icon--count">1</p>
									</li>
									<li className="todo__icon--item">
										<img src={LikeImg} alt="LikeImg" />
										<p className="todo__icon--count">8</p>
									</li>
									<li className="todo__icon--item">
										<img src={ShareImg} alt="ShareImg" />
									</li>
									<li className="todo__icon--item">
										<img
											src={StatisticsImg}
											alt="StatisticsImg"
										/>
									</li>
								</ul>
							</span>
						</div>
					</li>
					<hr className="todo__line" />
					<li className="todo__item">
						<div className="todo__user">
							<img
								src={UserLittleImg3}
								alt="UserLittleImg3"
								width="60"
								height="60"
							/>
							<span className="todo__user--lname">
								<span className="todo__user--surename">
									<span className="todo__user--sname">
										<p className="todo__user--name">
											cloutexhibition
										</p>
										<p className="todo__user--username">
											@RajLahoti · 22m
										</p>
									</span>
									<img src={ThreePoint} alt="ThreePoint" />
								</span>
								<p className="todo__user--commit">
									YPIP dasturining bu yilgi sezoni ham o’z
									nihoyasiga yetmoqda. Mentorlik davomida
									talaba va yangi bitiruvchilarni
									o’sayotganini ko’rib hursand bo’ladi odam.
								</p>
								<ul className="todo__icon--list">
									<li className="todo__icon--item">
										<img
											src={CommentImg}
											alt="CommentImg"
										/>
										<p className="todo__icon--count"></p>
									</li>
									<li className="todo__icon--item">
										<img
											src={RetweetImg}
											alt="RetweetImg"
										/>
										<p className="todo__icon--count">5</p>
									</li>
									<li className="todo__icon--item">
										<img src={LikeImg} alt="LikeImg" />
										<p className="todo__icon--count">9</p>
									</li>
									<li className="todo__icon--item">
										<img src={ShareImg} alt="ShareImg" />
									</li>
									<li className="todo__icon--item">
										<img
											src={StatisticsImg}
											alt="StatisticsImg"
										/>
									</li>
								</ul>
							</span>
						</div>
					</li>
					<hr className="todo__line" />
					<li className="todo__item">
						<div className="todo__user">
							<img
								src={UserLittleImg4}
								alt="UserLittleImg4"
								width="60"
								height="60"
							/>
							<span className="todo__user--lname">
								<span className="todo__user--surename">
									<span className="todo__user--sname">
										<p className="todo__user--name">
											CreativePhoto
										</p>
										<p className="todo__user--username">
											@cloutexhibition · 1h
										</p>
									</span>
									<img src={ThreePoint} alt="ThreePoint" />
								</span>
								<p className="todo__user--commit">
									Обетда..... <br /> Кечиринглар
								</p>
								<img
									src={KabobImg}
									alt="KabobImg"
									width="679"
									height="453"
								/>
								<ul className="todo__icon--list">
									<li className="todo__icon--item">
										<img
											src={CommentImg}
											alt="CommentImg"
										/>
										<p className="todo__icon--count">10</p>
									</li>
									<li className="todo__icon--item">
										<img
											src={RetweetImg}
											alt="RetweetImg"
										/>
										<p className="todo__icon--count">1</p>
									</li>
									<li className="todo__icon--item">
										<img src={LikeImg} alt="LikeImg" />
										<p className="todo__icon--count">8</p>
									</li>
									<li className="todo__icon--item">
										<img src={ShareImg} alt="ShareImg" />
									</li>
									<li className="todo__icon--item">
										<img
											src={StatisticsImg}
											alt="StatisticsImg"
										/>
									</li>
								</ul>
							</span>
						</div>
					</li>
					<hr className="todo__line" />
				</ul>
			</section>
		</>
	);
}

export default HomeTodo;
