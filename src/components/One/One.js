import React, { Component } from 'react';
import './One.css';
import Pic01 from '../../static/media/images/pic01.jpg';

class One extends Component {
  render() {
    return (
      <section id="one" className="main style1">
				<div className="container">
					<div className="row 150%">
						<div className="6u 12u$(medium)">
							<header className="major">
								<h2>Supporter of Web Standards</h2>
							</header>
							<p>Consistently striving to be an innovator in the web design field. Endeavors to bring experience and knowledge to the field utilizing a wide range of skills including front-end development, web design, HTML5, CSS3, responsive web design, React, AngularJS, NodeJS, SCSS, jQuery, responsive frameworks.</p>
						</div>
						<div className="6u 12u$(medium) important(medium)">
							<span className="image fit"><img src={Pic01} alt="" /></span>
						</div>
					</div>
				</div>
			</section>
    );
  }
}

export default One;