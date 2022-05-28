import React, { createContext, useState } from "react";
export const cric = createContext();
const ApiCric = (props) => {
  const [dataCric, setDataCric] = useState([
    
    {
    "source": {
    "id": null,
    "name": "International Cricket Council"
    },
    "author": "ICC",
    "title": "Two new teams in next edition of ICC Women's Championship - International Cricket Council",
    "description": "The next edition of the ICC Women's Championship was announced by the ICC on Wednesday, 25 May, with two new teams added to the mix, making it a 10-team league.",
    "url": "https://www.icc-cricket.com/news/2596324",
    "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2022/05/25/347582e3-5860-49b2-8461-e7aaf0a14956/ICC-Womens-22-25-16x9.png",
    "publishedAt": "2022-05-25T10:00:17Z",
    "content": "The next edition of the ICC Women's Championship was announced by the ICC on Wednesday, 25 May, with two new teams added to the mix, making it a 10-team league.After the success of the ICC Womens Cha… [+4946 chars]"
    },
    
    {
    "source": {
    "id": null,
    "name": "Cricbuzz"
    },
    "author": null,
    "title": "Behind the scenes, Deepak Hooda undergoes batting transformation | Cricbuzz.com - Cricbuzz - Cricbuzz",
    "description": "Batting at 3/4 this season, Deepak Hooda has been amongst the best performers for Lucknow Super Giants in their maiden season",
    "url": "https://www.cricbuzz.com/cricket-news/122376/behind-the-scenes-deepak-hooda-undergoes-batting-transformation-cricbuzzcom",
    "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c234833/hooda-has-scored-over-400-runs-this-season-for-lsg.jpg",
    "publishedAt": "2022-05-25T09:16:04Z",
    "content": "The year 2021 was not the best of years for Deepak Hooda. Early in January, Hooda got into a verbal altercation with Baroda captain Krunal Pandya, which led to his suspension from domestic cricket fo… [+10565 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Cricketaddictor.com"
    },
    "author": null,
    "title": "LSG vs RCB: 'Who Will Say He Had A Bad Season, If He Scores A Century Against LSG'- Virender Sehwag On RCB's Virat Kohli - Cricket Addictor",
    "description": "Virender Sehwag Bets on RCB’s Virat Kohli coming good against LSG in Eliminator match of IPL 2022.",
    "url": "https://cricketaddictor.com/indian-premier-league-ipl-2022/lsg-vs-rcb-who-will-say-he-had-a-bad-season-if-he-scores-a-century-against-lsg-virender-sehwag-on-rcbs-virat-kohli/",
    "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2021/08/Virender-Sehwag-2.jpg",
    "publishedAt": "2022-05-25T08:59:48Z",
    "content": "Former India opener Virender Sehwag has said that if Royal Challengers Bangalores (RCB) Virat Kohli scores a century in the upcoming Eliminator match of IPL 2022 against Lucknow Super Giants (LSG), p… [+2454 chars]"
    },
    
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Sports Desk",
    "title": "'Dhoni's reflex is like F1 driver, mind like a 5-star General. One in a billion' - Hindustan Times",
    "description": "There is none like the great MS Dhoni. Even two years after retiring from international cricket, Dhoni is one of the fittest cricketers you would come across. Dhoni still possesses the sharpest brains, which was visible when Jadeja was leading CSK.",
    "url": "https://www.hindustantimes.com/trending/ms-dhoni-s-reflexes-are-like-an-f1-driver-and-mind-is-like-5-star-general-like-sachin-tendulkar-he-is-one-in-a-billion-101653465648109.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/05/25/1600x900/dhoni-instructing-csk-ipl_1653465950478_1653465955784.jpg",
    "publishedAt": "2022-05-25T08:15:49Z",
    "content": "There is none like the great MS Dhoni. Even two years after retiring from international cricket, Dhoni is one of the fittest cricketers you would come across. He can still beat the best youngsters cr… [+2157 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Sports Desk",
    "title": "'Score a 50 in this game and get picked for next Test': Kumble to Sehwag - Hindustan Times",
    "description": "Former India opener Virender Sehwag has credited Anil Kumble for reviving his Test career. Sehwag, who was dropped from the India Test team in early 2007 went almost a year without playing another Test match, before finally earning a call back during Kumble's…",
    "url": "https://www.hindustantimes.com/cricket/score-a-50-in-this-game-and-you-will-be-picked-for-the-match-in-perth-sehwag-on-how-kumble-saved-his-test-career-101653409803606.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/05/24/1600x900/sehwag-kumble_1653410108554_1653410117948.jpg",
    "publishedAt": "2022-05-25T06:47:22Z",
    "content": "Former India opener Virender Sehwag has credited Anil Kumble for reviving his Test career. Sehwag, who was dropped from the India Test team in early 2007 went almost a year without playing another Te… [+2025 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Sports Desk",
    "title": "'What I feel not important, season is over': Sachin on son Arjun's non-selection - Hindustan Times",
    "description": "When asked about his son's impending IPL debut, the legendary Sachin Tendulkar said his opinion doesn't matter as selection is up to the MI team management. \"This is a different question. What I am thinking or what I feel is not important. The season is alrea…",
    "url": "https://www.hindustantimes.com/cricket/what-i-feel-not-imporant-season-is-over-sachin-tendulkar-on-son-arjun-s-non-selection-in-mumbai-indians-in-ipl-2022-101653458920623.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/05/25/1600x900/sachin_arjun_1653459341596_1653459352369.PNG",
    "publishedAt": "2022-05-25T06:23:25Z",
    "content": "Sachin Tendulkar's son Arjun has been a part of the Mumbai Indians squad since the last IPL. He was bought back by MI in the mega auction for 30 lakh ahead of IPL 2022. But the all-rounder has not go… [+1718 chars]"
    },
    
    {
    "source": {
    "id": null,
    "name": "Cricketaddictor.com"
    },
    "author": "More by Vicky Singh",
    "title": "ROY vs TIT Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- BYJU's Pondicherry T10 - Cricket Addictor",
    "description": "ROY vs TIT Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- BYJU’s Pondicherry T10",
    "url": "https://cricketaddictor.com/fantasy-cricket/roy-vs-tit-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-pondicherry-t10/",
    "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/05/Pondicherry-T10-Dream11-Prediction-Fantasy-Cricket-Tips-Dream11-Team.jpeg",
    "publishedAt": "2022-05-25T05:17:51Z",
    "content": "ROY vs TIT Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of BYJUs Pondicherry T10 match between Royals and Titans.\r\nROY vs TIT BYJUs Pondicherry T10 … [+4075 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Sportsrush"
    },
    "author": "Somin Bhattacharjee",
    "title": "\"It's time for Daniel Ricciardo to enter his villain era\"- Fans of the McLaren driver lash out at Zak Brown... - The Sportsrush",
    "description": "McLaren boss Zak Brown admitted that Daniel Ricciardo isn't living up to the team's expectations, and is struggling in Lando Norris' shadow. Ricciardo's move to McLaren has not been a success for either party so far. Other than his win in Monza last year, the…",
    "url": "https://thesportsrush.com/f1-news-its-time-for-daniel-ricciardo-to-enter-his-villain-era-fans-of-the-mclaren-driver-lash-out-at-zak-brown-for-publicly-criticizing-him-in-an-interview/",
    "urlToImage": "https://cdn-wp.thesportsrush.com/2022/05/86ff9639-untitled-design.jpg",
    "publishedAt": "2022-05-25T05:02:40Z",
    "content": "McLaren boss Zak Brown admitted that Daniel Ricciardo isn’t living up to the team’s expectations, and is struggling in Lando Norris’ shadow. \r\nRicciardo’s move to McLaren has not been a success for e… [+2758 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Insidesport.in"
    },
    "author": null,
    "title": "Indian Team for SA T20: BCCI passes DIKTAT, 'entire Indian squad has to pass post IPL Fitness test' - InsideSport",
    "description": "Indian Team for SA T20: BCCI passes DIKTAT, ‘entire Indian squad has to pass post IPL Fitness test’ to play INDIA vs South Africa T20 Series: IND vs SA Live",
    "url": "https://www.insidesport.in/indian-team-for-sa-t20-bcci-passes-diktat-entire-indian-squad-will-have-to-pass-post-ipl-fitness-test-to-play-india-vs-south-africa-t20-series/",
    "urlToImage": "https://www.insidesport.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-25-at-9.10.53-AM.jpeg?w=696",
    "publishedAt": "2022-05-25T04:32:40Z",
    "content": "Indian Team for SA T20 – IND vs SA Live Updates: India’s IPL 2022 stars may be fit and going all guns blazing at the IPL 2022 but BCCI wants them to prove fitness. The Indian board has asked the KL R… [+3961 chars]"
    },
    
]);
return (
  <div>
    <cric.Provider value={[dataCric, setDataCric]}>
      {props.children}
    </cric.Provider>
  </div>
);
};
export default ApiCric;