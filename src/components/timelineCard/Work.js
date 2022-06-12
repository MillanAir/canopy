import "./Work.scss";
import { Helmet } from "react-helmet";

export const Work = () => {
  return (
    <div className="work">
      <h3>
        <i className="fa fa-briefcase"></i>Experience
      </h3>
      <ul>
        <li>
          <span>
            Technical Consultant -<br />
            Web Design
          </span>
          <small>Fiserv</small>
          <small>Apr 2018 - Now</small>
        </li>
        <li>
          <span>Web Designer</span>
          <small>Lynden</small>
          <small>Jan 2018 - Apr 2018</small>
        </li>
        <li>
          <span>Intern - Web Design</span>
          <small>Lynden</small>
          <small>Aug 2017 - Dec 2017</small>
        </li>
      </ul>
      <Helmet>
        <script src="./script.js" type="text/javascript" />
      </Helmet>
    </div>
  );
};
