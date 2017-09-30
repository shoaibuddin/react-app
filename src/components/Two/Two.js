import React, { Component } from 'react';
import './Two.css';
import Pic02 from '../../static/media/images/pic02.jpg';
import Pic03 from '../../static/media/images/pic03.jpg';
import Pic04 from '../../static/media/images/pic04.jpg';


class Two extends Component {
  render() {
    return (
      <section id="two" className="main style1 special">
				<div className="container">
					<header className="major">
						<h2>Specialties</h2>
					</header>
					<p>User Experience, Visual design, branding, web design, UI design, Interaction design, human-computer interaction design principles, search engine optimization, CSS3, XHTML, HTML5, JavaScript, JQuery, jQuery UI, CanJS, RequireJS, Grunt, GIT, SVN, Jasmine, JSP, XML, JSON, RESTful WebServices and WordPress Theme development.</p>
					

					<div className="row 150%">
						<div className="4u 12u$(medium)">
							<span className="image fit"><img src={Pic02} alt="" /></span>
							<h3>Code Snob</h3>
							<p>I'm often called a code snob, because I feel that code should be as beautiful and elegant as design. I have 14 years of experience in User Experience and Visual design and 3 years in UI and FrontEnd development.</p>
							<ul className="actions">
								<li><a href="#" className="button">More</a></li>
							</ul>
						</div>
						<div className="4u 12u$(medium)">
							<span className="image fit"><img src={Pic03} alt="" /></span>
							<h3>Supporter of Web Standards</h3>
							<p>I'm a 100% supporter of Web Standards, semantic HTML, and progressive enhancements. To me pages are content. Content which may need to be used by search engines, databases, visually impaired users and mobile users, etc. Standards help ensure that the content will be flexible enough to reach everyone it can.</p>
							<ul className="actions">
								<li><a href="#" className="button">More</a></li>
							</ul>
						</div>
						<div className="4u 12u$(medium)">
							<span className="image fit"><img src={Pic04} alt="" /></span>
							<h3>Process I Follow</h3>
							<p>Web site architecture and design is the most important thing to me. Design is about problem solving to present data and content to users in a engaging and usable matter. When designing I like to break down a project from the "big picture" into goals, actions, paths, and lastly down to the little design details that make a site or page unique.</p>
							<ul className="actions">
								<li><a href="#" className="button">More</a></li>
							</ul>
						</div>
					</div>

				</div>
			</section>
    );
  }
}

export default Two;