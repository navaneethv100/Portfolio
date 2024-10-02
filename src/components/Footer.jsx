import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from '../assets/edited.jpg';

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>V Navaneeth</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/navaneethv100/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://twitter.com/navaneethv100" target={"blank"}>
            <AiFillTwitterSquare />
          </a>
          <a href="https://github.com/navaneethv100" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;