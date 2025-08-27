import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  static propTypes = {};
  // 029c82a6864640fa85c3e517520ee25e
  articles = [
    {
      source: { id: "nrk", name: "NRK" },
      author: "NRK",
      title: "De siste sportsnyhetene fra NRK",
      description: "Her får du de siste sportsnyhetene fra NRK.",
      url: "https://www.nrk.no/sport/sportsnyheter-1.14660227#1.17541898.1.17541898",
      urlToImage:
        "https://gfx.nrk.no/7kT5zGoE2E-GnUKLojH1PQ0I1Nze4Ypu8lxM-oBjubQw.jpg",
      publishedAt: "2025-08-26T07:24:17Z",
      content:
        "Halvor Egner Granerud er tilbake i hoppbakken etter den alvorlige kneskaden han pådro seg forrige sesong.\r\nDet deler han selv på Instagram.\r\n Det er så deilig. Det føles veldig, veldig godt, og det h… [+1265 chars]",
    },
    {
      source: { id: "espn", name: "ESPN" },
      author: "Alexa Philippou",
      title: "Caitlin Clark becomes Nike's newest signature athlete - ESPN",
      description:
        "Indiana Fever star Caitlin Clark, the 2024 No. 1 WNBA draft pick, was introduced Monday as Nike's newest signature athlete, which entails the launch of a new signature logo, collection of sportswear and apparel -- and eventually a signature sneaker.",
      url: "https://www.espn.com/wnba/story/_/id/46075454/caitlin-clark-becomes-nike-newest-signature-athlete",
      urlToImage:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/640px-Flag_of_India.svg.png",
      publishedAt: "2025-08-26T00:48:56Z",
      content:
        "Caitlin Clark has added a new distinction to her resume: Nike signature athlete.\r\nThe 2024 No. 1 WNBA draft pick was introduced Monday as the iconic brand's newest signature athlete, which entails th… [+2349 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Richard Lawler",
      title: "YouTube TV could lose Fox channels this week",
      description:
        "YouTube TV and Fox say that their broadcast agreement could expire on August 27th, dropping Fox News, Fox Sports, and local networks.",
      url: "https://www.theverge.com/news/765663/fox-news-sports-youtube-tv-fox-one-carriage-dispute",
      urlToImage:
        "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/acastro_STK092_02.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      publishedAt: "2025-08-26T00:26:22+00:00",
      content:
        "\u003Cul\u003E\u003Cli\u003E\u003C/li\u003E\u003Cli\u003E\u003C/li\u003E\u003Cli\u003E\u003C/li\u003E\u003C/ul\u003E\r\nYouTube and Fox are in a standoff that could cut off subscribers access to upcoming NFL and college football games.\r\nYouTube and Fox are in a standoff that could… [+3429 chars]",
    },
    {
      source: { id: "les-echos", name: "Les Echos" },
      author: "Julia Lemarchand",
      title: "Régis Schultz, le patron sportif qui fait courir JD Sports",
      description:
        "CES PATRONS MADE IN FRANCE (2/5) - Sous la direction du Français Régis Schultz, le groupe britannique JD Sports Fashion, qui a récemment racheté Courir en France, s'impose comme un acteur clé du marché mondial du sportswear. L'ancien patron de Monoprix, sport…",
      url: "https://www.lesechos.fr/industrie-services/conso-distribution/regis-schultz-le-patron-sportif-qui-fait-courir-jd-sports-2182683",
      urlToImage:
        "https://media.lesechos.com/api/v1/images/view/68ac7f2d96e432e2670e04e3/1280x720/01501379825540-web-tete.jpg",
      publishedAt: "2025-08-25T15:20:08Z",
      content:
        "« Le retail, c'est comme une drogue. Chaque jour, vous recommencez à zéro. C'est très excitant ! ». A 57 ans, le patron de JD Sports, le géant britannique du sportswear, est toujours aussi accro à l'… [+483 chars]",
    },
    {
      source: { id: "talksport", name: "TalkSport" },
      author: "Liam Hoofe",
      title:
        "Best betting sites UK | Top betting site offers for October 2024...",
      description:
        "Sports bettors in the UK are spoiled for choice among the best betting sites: If you want in-depth football betting markets, there is a bookmaker for you; if you want to bet on esports or TV events…",
      url: "https://talksport.com/betting/1760032/best-betting-sites-uk/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2024/08/talksport-best-betting-sites-uk-op.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
      publishedAt: "2024-10-04T08:45:00Z",
      content:
        "Sports bettors in the UK are spoiled for choice among the best betting sites: If you want in-depth football betting markets, there is a bookmaker for you; if you want to bet on esports or TV events, … [+17381 chars]",
    },
    {
      source: { id: "bleacher-report", name: "Bleacher Report" },
      author: null,
      title: "New Micah Parsons Show ",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
      urlToImage: null,
      publishedAt: "2023-11-27T20:37:24.6381564Z",
      content: null,
    },
    {
      source: { id: "bleacher-report", name: "Bleacher Report" },
      author: null,
      title: " Mikal Bridges Interview ",
      description:
        "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      url: "https://bleacherreport.com/videos/491103-taylor-rooks-x-mikal-bridges-vod",
      urlToImage: null,
      publishedAt: "2023-11-27T20:37:24.3882176Z",
      content: "Nets star sits down with Taylor Rooks for exclusive convo.",
    },
  ];

  constructor() {
    super();
    console.log("Contructor in NewsComponent!");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsApp - Top Headlines</h1>

        <div className="row my-2">
          {this.state.articles.map((element) => {
            return (<div className="col-md-4" key={element.url}>
              <NewsItem
                url={element.url}
                title={element.title.slice(0,40)}
                description={element.description.slice(0,80) + "..."}
                urlToImage={element.urlToImage}
              />
            </div>);
          })}
        </div>
      </div>
    );
  }
}

export default News;
