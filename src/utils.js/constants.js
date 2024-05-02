import { AiFillHome } from "react-icons/ai";
import { BsBroadcast, BsFire, BsFlagFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa6";
import { GoTrophy } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoMdMusicalNote } from "react-icons/io";
import { IoHelpCircleOutline, IoSettings } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { PiFilmSlateBold, PiLightbulbFill } from "react-icons/pi";
import { RiFeedbackFill } from "react-icons/ri";
import { SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";

export const GOOGLE_API = "AIzaSyBwmyZFv5La8uI24DyJeY1cZvXXQ4fBOss";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API;
export const YT_HAMBURGER_ICON =
  "https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg";
export const  YT_HAMBURGER_ICON_DARK = "https://i.pinimg.com/736x/0a/3f/be/0a3fbe102456add75625da09c72af41e.jpg"
export const YT_LOGO =
  "https://www.gstatic.com/youtube/img/icons/mweb/youtube_fill/logo_with_text/v2/24px.svg";
export const YT_FAVI  = "https://m.youtube.com/static/favicon.ico"
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const sidebarItems = [
  { name: "Home", icon: <AiFillHome size="1em" />, type: "home" },
  { name: "Shorts", icon: <SiYoutubeshorts />, type: "shorts" },
  { name: "Trending", icon: <BsFire />, type: "trending" },
  { name: "Shopping", icon: <HiMiniShoppingBag />, type: "shopping" },
  { name: "Music", icon: <IoMdMusicalNote />, type: "music" },
  { name: "Film", icon: <PiFilmSlateBold />, type: "film" },
  { name: "Live", icon: <BsBroadcast />, type: "live" },
  { name: "Gaming", icon: <SiYoutubegaming />, type: "gaming" },
  { name: "News", icon: <FaNewspaper />, type: "news" },
  { name: "Sport", icon: <GoTrophy />, type: "sport" },
  { name: "Courses", icon: <PiLightbulbFill />, type: "courses" },
  { name: "Podcast", icon: <MdPodcasts />, type: "podcast" },
  { name: "Setting", icon: <IoSettings />, type: "setting" },
  { name: "Help", icon: <IoHelpCircleOutline />, type: "" },
  { name: "Report ", icon: <BsFlagFill />, type: "report history" },
  { name: "Feedback", icon: <RiFeedbackFill />, type: "send feedback" },
];
export const YOUTUBE_SEARCH_CHANNEL =
  "https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails%2Cstatistics&channelId=jabQZaVJteE&key=" +
  GOOGLE_API;

export const OFFSET_LIVE_CHAT = 25;
export const buttonTags = ["All"];

export const YOUTUBE_CHANNEL_DETAILS_API = (channelId) =>
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  channelId +
  "&key=" +
  GOOGLE_API;

export const YOUTUBE_COMMENTS_API = (videoId, nextToken) =>
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=" +
  videoId +
  "&pageToken=" +
  nextToken +
  "&prettyPrint=true&key=" +
  GOOGLE_API;

export const YOUTUBE_VIDEO_DETAILS_API = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  videoId +
  "&key=" +
  GOOGLE_API;
