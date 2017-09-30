import React, { Component } from 'react';
import './App.css';
import One from './components/One/One';
import Two from './components/Two/Two';
import Three from './components/Three/Three';


class App extends Component {
  render() {
    return (
      <div className="App">

      <section id="header">
        <div class="inner">
          <img alt="Shoaib Ud-Din" src="http://shoaibuddin.com/wp-content/uploads/2013/08/logo1.png"></img>
          <h1>Hi, I'm <strong>Shoaib Ud-Din</strong>, Frontend Developer<br />
          </h1>
          <div className="container">
            <div className="row 150%">
              <p>An experienced web designer and front end developer focused on building beautifully crafted websites that are both usable and scalable. A creative problem solver that is passionate about the industry and is constantly evolving; gaining knowledge wherever and however possible. Focused on pushing the limits in the design and development field to create innovative solutions and experiences for web users. Known for the ability to turn ideas into working concepts that are both visually pleasing and structurally sound all while using the latest techniques in web. </p>
            </div>
          </div>
          <ul class="actions">
            <li><a href="#one" class="button scrolly">Discover</a></li>
          </ul>
        </div>
      </section>

      <One />

      <Two />

      <Three />

      <section id="footer">
        <ul class="icons">
          <li><a href="#" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
          <li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
          <li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
          <li><a href="#" class="icon alt fa-github"><span class="label">GitHub</span></a></li>
          <li><a href="#" class="icon alt fa-envelope"><span class="label">Email</span></a></li>
        </ul>
        <ul class="copyright">
          <li>&copy; Shoaib Ud-Din</li><li>Code: <a href="http://shoaibuddin.com">Shoaib Ud-Din</a></li>
        </ul>
      </section>
      </div>
    );
  }
}

export default App;