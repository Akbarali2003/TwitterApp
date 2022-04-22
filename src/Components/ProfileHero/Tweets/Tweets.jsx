import React from 'react';
import './Tweets.scss';
import PinImg from '../../../Assets/Images/pinimg.svg';
import UserLittleImg1 from '../../../Assets/Images/userlittleimg1.png';
import ThreePoint from '../../../Assets/Images/three-point.svg';
import CommentImg from '../../../Assets/Images/comment.svg';
import RetweetImg from '../../../Assets/Images/retweet.svg';
import LikeImg from '../../../Assets/Images/like.svg';
import ShareImg from '../../../Assets/Images/share.svg';
import StatisticsImg from '../../../Assets/Images/statistics.svg';
import UserPhoto from '../../../Assets/Images/userphoto.jpg';
function Tweets() {
	return (
		<section className="tweets">
			<span className="tweets__pin">
				<img src={PinImg} alt="PinImg" />
				<p className="tweets__pin--text">Pinned Tweet</p>
			</span>
			<ul className="tweets__list">
				<li className="tweets__item">
					<img src={UserLittleImg1} alt="UserLittleImg1" />
					<span className="tweets__alltext">
						<span className="tweets__user">
							<p className="tweets__user--name">Bobur</p>
							<p className="tweets__user--username">
								@bobur_mavlonov · Apr 1
							</p>
						</span>
						<p className="tweets__comment">
							4-kursni tugatgunimcha kamida bitta biznesim
							bo'lishini, uylanish uchun moddiy jihatdan
							to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy
							holatni normallashtirishni reja qildim
						</p>
						<ul className="tweets__icon--list">
							<li className="tweets__icon--item">
								<img src={CommentImg} alt="CommentImg" />
								<p className="tweets__icon--count">10</p>
							</li>
							<li className="tweets__icon--item">
								<img src={RetweetImg} alt="RetweetImg" />
								<p className="tweets__icon--count">1</p>
							</li>
							<li className="tweets__icon--item">
								<img src={LikeImg} alt="LikeImg" />
								<p className="tweets__icon--count">8</p>
							</li>
							<li className="tweets__icon--item">
								<img src={ShareImg} alt="ShareImg" />
							</li>
							<li className="tweets__icon--item">
								<img src={StatisticsImg} alt="StatisticsImg" />
							</li>
						</ul>
					</span>
					<img src={ThreePoint} alt="ThreePoint" />
				</li>
				<hr className="tweets__line" />
				<li className="tweets__item">
					<img src={UserLittleImg1} alt="UserLittleImg1" />
					<span className="tweets__alltext">
						<span className="tweets__user">
							<p className="tweets__user--name">Bobur</p>
							<p className="tweets__user--username">
								@bobur_mavlonov · Apr 1
							</p>
						</span>
						<p
							className="tweets__comment"
							style={{ height: '144px' }}>
							Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
							deyayotganimizga qarab ham o'tirmaymiz. <br /> Bitta
							biznes trener nito gapirib qo'ysa, hamma biznes
							trenerlar yomonga chiqadi slishkom aqlli odamlar
							nazdida. <br /> Gap faqat biznes trenerlar haqida
							emas.
						</p>
						<ul className="tweets__icon--list">
							<li className="tweets__icon--item">
								<img src={CommentImg} alt="CommentImg" />
								<p className="tweets__icon--count"></p>
							</li>
							<li className="tweets__icon--item">
								<img src={RetweetImg} alt="RetweetImg" />
								<p className="tweets__icon--count">5</p>
							</li>
							<li className="tweets__icon--item">
								<img src={LikeImg} alt="LikeImg" />
								<p className="tweets__icon--count">9</p>
							</li>
							<li className="tweets__icon--item">
								<img src={ShareImg} alt="ShareImg" />
							</li>
							<li className="tweets__icon--item">
								<img src={StatisticsImg} alt="StatisticsImg" />
							</li>
						</ul>
					</span>
					<img src={ThreePoint} alt="ThreePoint" />
				</li>
				<hr className="tweets__line" />
				<li className="tweets__item">
					<img src={UserLittleImg1} alt="UserLittleImg1" />
					<span className="tweets__alltext">
						<span className="tweets__user">
							<p className="tweets__user--name">Bobur</p>
							<p className="tweets__user--username">
								@bobur_mavlonov · Apr 1
							</p>
						</span>
						<span>
							<p className="tweets__comment">
								A bo'pti maskamasman
							</p>
							<img src={UserPhoto} alt="UserPhoto" />
						</span>

						<ul className="tweets__icon--list">
							<li className="tweets__icon--item">
								<img src={CommentImg} alt="CommentImg" />
								<p className="tweets__icon--count">10</p>
							</li>
							<li className="tweets__icon--item">
								<img src={RetweetImg} alt="RetweetImg" />
								<p className="tweets__icon--count">1</p>
							</li>
							<li className="tweets__icon--item">
								<img src={LikeImg} alt="LikeImg" />
								<p className="tweets__icon--count">8</p>
							</li>
							<li className="tweets__icon--item">
								<img src={ShareImg} alt="ShareImg" />
							</li>
							<li className="tweets__icon--item">
								<img src={StatisticsImg} alt="StatisticsImg" />
							</li>
						</ul>
					</span>
					<img src={ThreePoint} alt="ThreePoint" />
				</li>
				<hr className="tweets__line" />
			</ul>
		</section>
	);
}
export default Tweets;
