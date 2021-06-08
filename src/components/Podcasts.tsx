import React, { Component } from "react";

import "../styles/App.css";
import "../styles/Podcasts.css";
import "../styles/Typography.css";
import youtube from "../assets/youtube.png"
import spotify from "../assets/spotify.png"
import podcast from "../assets/mic.png"
import podcast_colored from "../assets/podcast_mac.png"
import pods from "../assets/pods.jpeg"
import dots from "../assets/dots.jpeg"

export default class Podcasts extends Component {
  render() {
    return (
      <div className="Podcasts">
        <img src={podcast_colored} />
        <h2>Podcasts on Product Development</h2>
        <br/>
        <div className="podcasts-content">
          <div className="podcasts-episode">
            <div className="podcasts-cover">
              <img src={dots} />
            </div>
            <h3>
              <a href="https://theconnectingdotspodcast.simplecast.com/episodes/44-sami-hamed-1QX0UNTZ" target="_blank">The Connecting Dots</a>
            </h3>
            <p>
              <strong>#44: Sami Hamed - vom Kulturanthropologen zum Software Ingenieur & Vice President bei homefully</strong>
            </p>
            <div className="podcasts-links">
              <a
                className="linkout"
                href="https://open.spotify.com/episode/7mFTQuXNgCmj4AyuoJc6qE"
                target="blank"
                >
                <img src={spotify} />
              </a>
              <a
                className="linkout"
                href="https://theconnectingdotspodcast.simplecast.com/episodes/44-sami-hamed-1QX0UNTZ"
                target="blank"
                >
                <img src={podcast} />
              </a>
              <a
                className="linkout"
                href="https://www.youtube.com/watch?v=Dumyq1dTcIc"
                target="blank"
                >
                <img src={youtube} />
              </a>
            </div>
            <p>Christian Gleitze, host of The Connecting Dots, and I discuss product development, entrepreneurial spirits and our experience with early-stage startups. Christian has interviewed dozens of founders and leaders in the german startup ecosystem. In this conversation I share details about what sparked my love for digital products and what role product leadership takes in my professional life.</p>
          </div>
          <div className="podcasts-episode">
            <div className="podcasts-cover">
              <img src={pods} />
            </div>
            <h3>
              <a href="https://open.spotify.com/episode/7ioAbUBHY8HAr1ebA3mpmE?si=d8rUO0oHSWOwqCXigrtgJg&dl_branch=1" target="_blank">The Humans Inside The Pods</a>
            </h3>
            <p>
              <strong>26 - Sami - We create spaces for people to create Communities.</strong>
            </p>
            <div className="podcasts-links">
              <a
                className="linkout"
                href="https://open.spotify.com/episode/7ioAbUBHY8HAr1ebA3mpmE?si=d8rUO0oHSWOwqCXigrtgJg&dl_branch=1"
                target="blank"
                >
                <img src={spotify} />
              </a>
            </div>
            <p>How does using the product you develop on a day-to-day basis affect your work and private life. Morgane Oléron and I discuss what it's like living and working with homefully - a german coliving operator based in Frankfurt a. M.</p>
          </div>
        </div>
      </div>
    );
  }
}
