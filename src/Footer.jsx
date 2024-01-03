import React from 'react'

function Footer() {
  return (
    <>
    <footer id="footer">
        <div class="footer-top">
            <div class="left25">
                <h2><span></span>samsung</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellat, dolore illo ullam a
                    sequi nostrum quae nemo qui saepe.
                </p>
            </div>
            <div class="right75">
                <div class="center">
                    <div class="wrap">
                        <div class="gallary">
                            <a href="#">
                                <div class="iframe-img">
                                    <img src="img/iframe1.png" alt=""/>
                                </div>
                            </a>
                            <p>Circle of Hands</p>
                            <h2>24 DEC 2014</h2>
                        </div>
                        <div class="gallary">
                            <a href="#">
                                <div class="iframe-img">
                                    <img src="img/iframe2.png" alt=""/>
                                </div>
                            </a>
                            <p>Circle of Hands</p>
                            <h2>24 DEC 2014</h2>
                        </div>
                        <div class="gallary">
                            <a href="#">
                                <div class="iframe-img">
                                    <img src="img/iframe3.png" alt=""/>
                                </div>
                            </a>
                            <p>Circle of Hands</p>
                            <h2>24 DEC 2014</h2>
                        </div>
                        <div class="gallary">
                            <a href="#">
                                <div class="iframe-img">
                                    <img src="img/iframe4.png" alt=""/>
                                </div>
                            </a>
                            <p>Circle of Hands</p>
                            <h2>24 DEC 2014</h2>
                        </div>
                        <div class="side">
                            <div class="map">
                                <img src="img/map.png" alt=""/>
                                <p>505 S Atlantic Ave Virginia Beach,<br/>VA(Virginia)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-mid">
            <div class="wrap">
                <div class="left">
                    <div class="one">
                        <h2>service</h2>
                        <ul>
                            <li><a href="#">online help</a></li>
                            <li><a href="#">contact us</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">change location</a></li>
                            <li><a href="#">FAQ's</a></li>
                        </ul>
                    </div>
                    <div class="one">
                        <h2>quock shop</h2>
                        <ul>
                            <li><a href="#">smart phones</a></li>
                            <li><a href="#">smart watches</a></li>
                            <li><a href="#">smart bands</a></li>
                            <li><a href="#">headphones</a></li>
                            <li><a href="#">tabs</a></li>
                        </ul>
                    </div>
                    <div class="one">
                        <h2>policies</h2>
                        <ul>
                            <li><a href="#">terms of use</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">refund policy</a></li>
                            <li><a href="#">biling system</a></li>
                            <li><a href="#">ticket system</a></li>
                        </ul>
                    </div>
                    <div class="one">
                        <h2>about shopper</h2>
                        <ul>
                            <li><a href="#">company information</a></li>
                            <li><a href="#">careers</a></li>
                            <li><a href="#">store location</a></li>
                            <li><a href="#">affiliate program</a></li>
                            <li><a href="#">copyright</a></li>
                        </ul>
                    </div>
                </div>
                <div class="right">
                    <h2>about shopper</h2>
                    <form class="searchform" action="#">
                        <input type="text" placeholder="Your email address"/>
                        <button class="btn btn-default" type="submit">
                            <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                        </button>
                        <p>Get the most recent updates from <br/>our site and be updated your self...</p>
                    </form>
                </div>
            </div>
        </div>
        <div class="footer-end">
            <div class="container6">
                <div class="pull-left"><p>Copyright © 2013 samsung Inc. All rights reserved.</p></div>
                <div class="pull-right"><p>Designed by : <span><a target="_blank" href="#">Deepanshu gupta </a>In reference to Matrix Computers</span></p></div>
            </div>
        </div>
    </footer>
    </>

  )
}

export default Footer