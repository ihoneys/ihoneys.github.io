import React from "react";

import { useTrail, animated } from "react-spring";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

import Button from "../Button";

import HeroMain from "./img/main.svg";
import JuejinIcon from "@site/static/icons/juejin.svg";
import CSDNIcon from "@site/static/icons/csdn.svg";
import TwitterIcon from "@site/static/icons/twitter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";
import useBaseUrl from "@docusaurus/useBaseUrl";

import useFollowers from "./useFollowers";

import styles from "./styles.module.css";

function Hero() {
  const {
    // 当前语言
    i18n: { currentLocale },
  } = useDocusaurusContext();

  // Get followers
  const followers = useFollowers();

  // animation
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
  });

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={animatedTexts[0]} className={styles.hero_text}>
          <Translate description="hero greet">
            Hello! 欢迎来到我的个人博客👏
          </Translate>
        </animated.div>
        <animated.p style={animatedTexts[1]}>
          <Translate id="homepage.hero.text" description="hero text">
            黄色的森林分出两条路，我选择人迹更少的那一条，从此决定我一生的道路。
          </Translate>
        </animated.p>
        {/* <animated.p style={animatedTexts[3]}>
          <Translate id="intro" description="intro">
            自我介绍
          </Translate>
        </animated.p> */}
        <SocialLinks animatedProps={animatedTexts[4]} />
        <animated.div style={animatedTexts[2]}>
          <Button isLink>
            <Translate description="personal intro">自我介绍</Translate>
          </Button>
        </animated.div>
      </div>

      <HeroMainImage />
      {/* <animated.div
      className="bloghome__scroll-down"
      style={animatedBackground}
    >
      <button>
        <ArrowDown />
      </button>
    </animated.div> */}
    </animated.div>
  );
}

function SocialLinks({ animatedProps, ...props }) {
  // const { isDarkTheme } = useThemeContext();
  return (
    <animated.div className={styles.social__links} style={animatedProps}>
      <a href="https://juejin.cn/user/1433418895458343">
        <JuejinIcon />
      </a>
      <a href="https://blog.csdn.net/weixin_42164539">
        <CSDNIcon />
      </a>
      <a href="https://github.com/ihoneys">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://twitter.com/Leslie_moogg">
        <TwitterIcon />
      </a>
    </animated.div>
  );
}

function HeroMainImage() {
  return (
    <div className={styles.bloghome__image}>
      <HeroMain />
    </div>
  );
}

export default Hero;
