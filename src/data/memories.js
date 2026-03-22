const feb3Anniversary = new URL("../../img/Feb_3_anniversary.JPG", import.meta.url).href;
const weekndJune7 = new URL("../../img/weeknd_june_07.PNG", import.meta.url).href;
const madridGameJuly9 = new URL("../../img/madrid_game_july_09.JPG", import.meta.url).href;
const lanternDayOctober4 = new URL("../../img/lantern_day_october_4.JPG", import.meta.url).href;


export const memories = [

  {
    id: 1,
    title: "The Weeknd Concert",
    date: "June 7, 2025",
    caption: "I'm glad we were able to go to this concert twice my love. I know how much you were looking forward to it.",
    image: weekndJune7,
    rotation: 1,
  },
  {
    id: 2,
    title: "Club World Cup",
    date: "July 9, 2025",
    caption: "Going to this game with you meant so much to me my love. It was such an amazing gesture by you my love and I truly appreciate it baby",
    image: madridGameJuly9,
    rotation: -1,
  },
  {
    id: 3,
    title: "Lantern Day",
    date: "October 4, 2025",
    caption: "This night felt like a dream baby. I already feel like I'm living a movie with you and this night felt like a movie scene.",
    image: lanternDayOctober4,
    rotation: 1.3,
  },
    {
    id: 4,
    title: "Anniversary",
    date: "February 3, 2026",
    caption: "The tacos were good af my love",
    image: feb3Anniversary,
    rotation: -1.5,
  },
];
