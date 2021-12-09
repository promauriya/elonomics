import logo from './logo.svg';
import './App.css';

import './style/css/bootstrap.min.css';
import './style/css/fontawesome.min.css';
import './style/css/templatemo-edu-meeting.css';
import './style/css/owl.css';
import './style/css/lightbox.css';


function App() {
  return (
  <div>
    <div class="sub-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-sm-8">
              <div class="left-content">
                <p></p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4">
              <div class="right-icons">
                <ul>
                  <li><a href="#"><i class="fa fa-facebook" style={{color:'#fff'}}></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>


  <header class="header-area header-sticky">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <nav class="main-nav">

                      <a href="" class="logo">
                        Elonomics
                      </a>

                      <ul class="nav">
                          <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                          <li class="scroll-to-section"><a href="#contact">Contact</a></li> 
                      </ul>        
                      <a class='menu-trigger'>
                          <span>Menu</span>
                      </a>
                  </nav>
              </div>
          </div>
      </div>
  </header>

  <section class="section main-banner" id="top" data-section="section1">
      <video autoPlay muted loop id="bg-video" src="./background.mp4" />
          

      <div class="video-overlay header-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="caption">
              <h2>Saviour of Humanity</h2>
              <p>This is the Elon's fan website where we talk about Elon Musk and appriciate what he doing for humanity and making positive impact on our lives.</p>
              <div class="main-button-red">
                  <div class="scroll-to-section"><a href="https://t.me/elonomicsx" target="_blank">Join Telegram Now!</a></div>
              </div>
          </div>
              </div>
            </div>
          </div>
      </div>
  </section>

  <section class="upcoming-meetings" id="meetings">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Upcoming Development</h2>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="categories">
            <h4>Development</h4>
            <ul>
              <li><a href="">Main website development</a></li>
              <li><a href="">Creating social media group</a></li>
              <li><a href="">Social media lunchs</a></li>
              <li><a href="">Forum development</a></li>
            </ul>
            <div class="main-button-red">
              <a href="">Much more coming...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-us" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 align-self-center">
          <div class="row">
            <div class="col-lg-12">
              <form id="contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-12">
                    <h2>Let's get in touch</h2>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                      <input name="name" type="text" id="name" placeholder="YOURNAME...*" required=""/>
                    </fieldset>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." required=""/>
                  </fieldset>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                      <input name="subject" type="text" id="subject" placeholder="SUBJECT...*" required=""/>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" type="text" class="form-control" id="message" placeholder="YOUR MESSAGE..." required=""></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="button">SEND MESSAGE NOW</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="right-info">
            <ul>
              <li>
                <h6>Email Address</h6>
                <span>elonomicsx@gmail.com</span>
              </li>
              <li>
                <h6>Website URL</h6>
                <span>elonomics.x</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © 2021 Elonomics.x, Ltd. All Rights Reserved.</p>
    </div>
  </section>
</div>
  );
}

export default App;