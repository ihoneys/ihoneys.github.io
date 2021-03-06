// 引入 OhVueIcon 组件
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { defineClientConfig } from "@vuepress/client";
// 引入想要使用的图标
import {
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiRocket,
  RiLinkM,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  HiMail,
  FaPaw,
  AiCv,
  AiGoogleScholarSquare,
  CoHtml5,
  CoCsswizardry,
  FaCss3Alt,
  CoJavascript,
  MdHttpSharp,
  CoTypescript,
  CoLess,
  CoWebpack,
  CoAboutMe,
  CoGithub,
  CoSearch,
  FaTools,
  CoAngular,
  IoPartlySunnySharp,
  IoSunnySharp
} from "oh-vue-icons/icons";

addIcons(
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiRocket,
  RiLinkM,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  HiMail,
  FaPaw,
  AiCv,
  AiGoogleScholarSquare,
  CoHtml5,
  CoCsswizardry,
  FaCss3Alt,
  CoJavascript,
  MdHttpSharp,
  CoTypescript,
  CoWebpack,
  CoLess,
  CoAboutMe,
  CoGithub,
  CoSearch,
  FaTools,
  CoAngular,
  IoPartlySunnySharp,
  IoSunnySharp
);

addIcons({
  name: "juejin",
  width: 1199,
  height: 1155,
  d: "M729.64116345 165.27693991L634.32650881 90.125l-99.5625 78.52693991-5.17887981 4.16056009 104.74137981 83.50215546 105.09051682-83.50215546-9.77586218-7.53556009z m361.21228445 291.47198236l-456.78879245 360.19396555-456.49784537-359.99030128L110.125 511.12715547l523.93965546 413.11745671 524.23060335-413.35021555-67.44181091-54.14547436z m-456.78879245 29.21120673L385.4784479 290.00646554 318.06573237 344.12284454l315.96982771 249.16810336 316.28987101-249.40086136-67.41271555-54.14547436-248.84806008 196.21551682z"
});

export default defineClientConfig({});
