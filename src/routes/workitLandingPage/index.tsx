import LogoLight from "../../assets/workitLandingPage/images/logo-light.svg";
import LogoDark from "../../assets/workitLandingPage/images/logo-dark.svg";
import FacebookLogo from "../../assets/workitLandingPage/images/icon-facebook.svg";
import TwitterLogo from "../../assets/workitLandingPage/images/icon-twitter.svg";
import InstagramLogo from "../../assets/workitLandingPage/images/icon-instagram.svg";
import Iphone from "../../assets/workitLandingPage/images/image-hero.webp";
import Founder from "../../assets/workitLandingPage/images/image-founder.webp";
import BgPattern1 from "../../assets/workitLandingPage/images/bg-pattern-1.svg";
import BgPattern2 from "../../assets/workitLandingPage/images/bg-pattern-2.svg";
import BgPattern3 from "../../assets/workitLandingPage/images/bg-pattern-3.svg";
import { SocialProof } from "./components/socialProof";
import "./styles.css";

const socialProofData = [
  {
    number: 1,
    title: "Actionable insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    number: 2,
    title: "Data-driven decisions",
    description:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    number: 3,
    title: "Always affordable",
    description:
      "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
];

export const WorkitLandingPage = () => {
  return (
    <div>
      <div className="purpleBackground"></div>
      <div className="ghostWhiteBackground"></div>
      <img src={BgPattern1} alt="BgPattern1" className="bgPattern1" />
      <img src={BgPattern2} alt="BgPattern2" className="bgPattern2" />
      <div className="wrapper">
        <div className="headerWrapper">
          <img src={LogoLight} alt="Logo" className="header1" />
          <div className="header2Wrapper">
            <h1 className="header2">Apply for access</h1>
            <div className="header2Underline"></div>
          </div>
        </div>
        <h1
          className="title"
          style={{
            fontVariationSettings: "'opsz' 144, 'wght' 600, 'SOFT' 0",
          }}
        >
          Data <span>tailored</span> to your needs.
        </h1>
        <button className="learnMoreButton">Learn more</button>
        <div className="iphoneWrapper">
          <img src={Iphone} alt="Iphone" className="iphone" />
        </div>
        <div className="socialProofList">
          {socialProofData.map((item, index) => (
            <SocialProof key={index} {...item} />
          ))}
        </div>
        <div className="founderWrapper">
          <img src={Founder} alt="Founder" className="founder" />
          <div className="founderSpeech">
            <h2
              style={{
                fontVariationSettings: "'opsz' 144, 'wght' 600, 'SOFT' 0",
              }}
            >
              Be the first to test
            </h2>
            <span>
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call.
            </span>
            <button className="applyButton">Apply for access</button>
            <img src={BgPattern3} alt="BgPattern3" className="bgPattern3" />
          </div>
        </div>
        <div className="footer">
          <img src={LogoDark} alt="Logo" className="footerLogo" />
          <div className="footerSocialNetworks">
            <img src={FacebookLogo} alt="Facebook" />
            <img src={TwitterLogo} alt="Twitter" />
            <img src={InstagramLogo} alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};
