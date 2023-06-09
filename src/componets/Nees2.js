import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles= [
        {
            "source": {
                "id": null,
                "name": "NBC Chicago"
            },
            "author": "Matt Stefanski, Natalie Martinez",
            "title": "1 Killed, 28 Injured When Roof Collapses at Belvidere Theatre During Storms - NBC Chicago",
            "description": "At least one person was killed and 28 others were injured when a roof collapse occurred during a concert at Belvidere's Apollo Theatre as severe storms ripped…",
            "url": "https://www.nbcchicago.com/news/local/apollo-theatre-belvidere-roof-collapse/3109466/",
            "urlToImage": "https://media.nbcchicago.com/2023/03/belivdere-collapse-storm-damage-friday.png?resize=1200%2C675&quality=85&strip=all",
            "publishedAt": "2023-04-01T05:29:52Z",
            "content": "At least one person was killed and 28 others were injured when a roof collapse occurred during a concert at Belvidere's Apollo Theatre as severe storms ripped through the community late Friday, accor… [+1427 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Tom Krisher, Fatima Hussein",
            "title": "Many electric vehicles to lose big tax credit with new rules - The Associated Press",
            "description": "WASHINGTON (AP) — Fewer new electric vehicles will qualify for a full $7,500 federal tax credit  later this year, and many will get only half that, under rules proposed Friday by the U.S.",
            "url": "https://apnews.com/article/electric-vehicles-tax-credit-7500-c562cb2d3509e93dc81d3b7d395725af",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/17e45e34c9144a1bbff72a729db36be1/3000.webp",
            "publishedAt": "2023-04-01T04:40:56Z",
            "content": "WASHINGTON (AP) Fewer new electric vehicles will qualify for a full $7,500 federal tax credit later this year, and many will get only half that, under rules proposed Friday by the U.S. Treasury Depar… [+6326 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MMA Mania"
            },
            "author": "Adam Guillen Jr.",
            "title": "Bellator 293 results: Live streaming play-by-play updates | Golm vs. James - MMA Mania",
            "description": "Complete Bellator 293 results, full fight card updates for “Golm vs. James ”-led event TONIGHT (Fri., March 31, 2023) in Temecula, California.",
            "url": "https://www.mmamania.com/2023/3/31/23659280/bellator-293-results-live-streaming-play-by-play-updates-golm-james-showtime-mma",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Tz9XJ5E1jsT41BUwmDxzHezY0n0=/0x0:950x497/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24549775/Screenshot_2023_03_31_at_05_08_09_How_to_watch_Bellator_293_Date_time_channel_live_streams_odds___card_for_Marcelo_Golm_vs._Daniel_James.png",
            "publishedAt": "2023-04-01T04:14:02Z",
            "content": null
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Online influencer Andrew Tate moved to house arrest in Romania - Al Jazeera English",
            "description": "Tate, his brother Tristan and two Romanian women were moved to house arrest while under investigation.",
            "url": "https://www.aljazeera.com/news/2023/4/1/online-influencer-andrew-tate-moved-to-house-arrest-in-romania",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/04/AP23090817655255.jpg?resize=1200%2C675",
            "publishedAt": "2023-04-01T04:09:37Z",
            "content": "Divisive online influencer and self-described misogynist Andrew Tate and his brother have been moved to house arrest while they are investigated for alleged human trafficking and rape after a Romania… [+3163 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Inside the Paltrow trial deliberations - CNN",
            "description": "Sam Imrie, a juror in the civil trial relating to a 2016 ski collision involving actress Gwyneth Paltrow, tells CNN's Alisyn Camerota about the unique experi...",
            "url": "https://www.youtube.com/watch?v=Eof9aw8YDHE",
            "urlToImage": "https://i.ytimg.com/vi/Eof9aw8YDHE/maxresdefault.jpg",
            "publishedAt": "2023-04-01T03:30:44Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "BREAKING: Judge puts last minute temporary hold on Tennessee drag ban - MSNBC",
            "description": "On International Transgender Day of Visibility, Rachel Maddow looks at efforts to protect the rights, safety and medical care of trans people around the Unit...",
            "url": "https://www.youtube.com/watch?v=z44YbKYB_W4",
            "urlToImage": "https://i.ytimg.com/vi/z44YbKYB_W4/maxresdefault.jpg",
            "publishedAt": "2023-04-01T03:05:16Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "What's up with Charles Schwab? Stock record worst month since 1987 - CNBC Television",
            "description": "Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money, culture and policy. Tune in Monday...",
            "url": "https://www.youtube.com/watch?v=4s1bOATXDJA",
            "urlToImage": "https://i.ytimg.com/vi/4s1bOATXDJA/maxresdefault.jpg",
            "publishedAt": "2023-04-01T02:37:05Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "US Vice President Kamala Harris Visits Indian Grandfather's Home In Zambia - NDTV",
            "description": "US Vice President Kamala Harris remembered her maternal grandfather PV Gopalan, an Indian foreign service official, during her tour to Zambia and paid a visit to the Gopalan family home in Lusaka.",
            "url": "https://www.ndtv.com/world-news/us-vice-president-kamala-harris-visits-indian-grandfathers-home-in-zambia-3911008",
            "urlToImage": "https://c.ndtvimg.com/2022-11/jhmacdl_kamala-harris-afp_625x300_19_November_22.jpg",
            "publishedAt": "2023-04-01T02:21:17Z",
            "content": "US Vice President Kamala Harris visited her grandfather PV Gopalan's home in Zambia (File)\r\nWashington: US Vice President Kamala Harris remembered her maternal grandfather PV Gopalan, an Indian forei… [+3275 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "LSU Tigers vs. Virginia Tech Hokies | Full Game Highlights - ESPN",
            "description": "Check out these highlights as the LSU Tigers defeat the Virginia Tech Hokies to lock in their spot in the NCAAW National Championship.✔️Subscribe to ESPN+ ht...",
            "url": "https://www.youtube.com/watch?v=CuMRNJzELlI",
            "urlToImage": "https://i.ytimg.com/vi/CuMRNJzELlI/maxresdefault.jpg",
            "publishedAt": "2023-04-01T01:20:41Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Patrick Reilly",
            "title": "Dozens injured after Little Rock tornado levels buildings, leaves 94K without power - New York Post ",
            "description": "At least three are dead after a powerful storm system ripped through the South and Midwest, spawning violent tornadoes and devastating the city of Little Rock, Arkansas.",
            "url": "https://nypost.com/2023/03/31/tornado-slams-little-rock-arkansas/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000009030660.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-04-01T00:37:00Z",
            "content": "At least three people are dead after a powerful storm system ripped through the South and Midwest, spawning violent tornadoes and devastating the city of Little Rock, Arkansas.\r\nThe first death was r… [+5704 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Dominion's defamation lawsuit against Fox News heads to trial - CNN",
            "description": "A judge presiding over Dominion’s defamation lawsuit against Fox News decided the case is going to trial. CNN media reporter Oliver Darcy and legal analyst N...",
            "url": "https://www.youtube.com/watch?v=rkthzJl_bTo",
            "urlToImage": "https://i.ytimg.com/vi/rkthzJl_bTo/maxresdefault.jpg",
            "publishedAt": "2023-04-01T00:05:15Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Parade"
            },
            "author": "Carly Silva",
            "title": "Britney Spears' Husband Gives Marriage Update After Ditching Wedding Rings - Yahoo Life",
            "description": "Britney Spears' husband Sam Asghari addresses rumors about their marriage after they were both spotted without their wedding rings this week.",
            "url": "https://parade.com/news/britney-spears-husband-sam-asghari-marriage-update-ditching-wedding-rings",
            "urlToImage": "https://parade.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MTk2OTI4NDg0MDE3MTg2NTY1/sony-pictures-once-upon-a-timein-hollywood-los-angeles-premiere---arrivals.jpg",
            "publishedAt": "2023-03-31T23:33:40Z",
            "content": "Sam Asghari, the husband of pop star Britney Spears, is speaking out with an update on the pair's marriage, which came into question earlier this week after both spouses were seen without their weddi… [+1396 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "US Senator John Fetterman discharged from hospital after depression treatment - Reuters",
            "description": "Democratic U.S. Senator John Fetterman has been discharged from hospital where he was treated for weeks for depression, his office said on Friday, adding he will return to the Senate mid-April.",
            "url": "https://www.reuters.com/world/us/democratic-us-senator-fetterman-discharged-hospital-2023-03-31/",
            "urlToImage": "https://www.reuters.com/resizer/Gze-fBnf9ToZW5s-lmhGJAzXsFA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2OOYWTFBIJNMNJVGGR6O7SNHRQ.jpg",
            "publishedAt": "2023-03-31T23:27:00Z",
            "content": "WASHINGTON, March 31 (Reuters) - Democratic U.S. Senator John Fetterman has been discharged from hospital where he was treated for weeks for depression, his office said on Friday, adding he will retu… [+2150 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Funerals for Nashville school shooting victims start with service for 9-year-old Evelyn Dieckhaus - CBS News",
            "description": "A funeral was held Friday for 9-year-old Evelyn Dieckhaus, one of three children and three adults killed in Monday's school shooting in Nashville.",
            "url": "https://www.cbsnews.com/news/nashville-school-shooting-victims-funerals-start-evelyn-dieckhaus/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/03/31/b7ee22b7-c645-460c-8434-aa2151492e93/thumbnail/1200x630/ea94abf044535bd6ce43dbed84703d12/ap23088724409432.jpg",
            "publishedAt": "2023-03-31T23:15:00Z",
            "content": "A funeral was held Friday for 9-year-old Evelyn Dieckhaus, one of three children and three adults killed in Monday's shooting at The Covenant School in Nashville, as the grieving city mourns the vict… [+4708 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Ukraine vows never to forget or forgive on Bucha anniversary - Reuters",
            "description": "President Volodymyr Zelenskiy said on Friday Ukraine would never forgive Russian troops responsible for atrocities in Bucha, as the town near Kyiv marked the anniversary of its recapture after 33 days of occupation.",
            "url": "https://www.reuters.com/world/europe/ukraine-marks-anniversary-liberation-bucha-symbol-atrocities-2023-03-31/",
            "urlToImage": "https://www.reuters.com/resizer/Dwe-da68VtCAjJ2bMfTvKCD2WKs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5WZAY7TOVVKWTJ5D3PBA3V45Y4.jpg",
            "publishedAt": "2023-03-31T23:06:00Z",
            "content": "BUCHA, Ukraine, March 31 (Reuters) - President Volodymyr Zelenskiy said on Friday Ukraine would never forgive Russian troops responsible for atrocities in Bucha, as the town near Kyiv marked the anni… [+4713 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Devan Cole",
            "title": "Donald Trump has been indicted following an investigation into a hush money payment scheme. Here's what we know - CNN",
            "description": "Former President Donald Trump's indictment by a New York grand jury has thrust the nation into uncharted political, legal and historical waters, and raised a slew of questions about how the criminal case will unfold.",
            "url": "https://www.cnn.com/2023/03/31/politics/trump-indictment-what-to-know/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230330164942-20220330-trump-indictment-illustration-generic.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-03-31T22:50:00Z",
            "content": "Former President Donald Trumps indictment by a New York grand jury has thrust the nation into uncharted political, legal and historical waters, and raised a slew of questions about how the criminal c… [+6232 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Palm Beach Post"
            },
            "author": "Hannah Leyva",
            "title": "Final Four: How to watch Florida Atlantic basketball vs. San Diego State on TV, streaming - Palm Beach Post",
            "description": "Both Dusty May's Florida Atlantic Owls and Brian Dutcher's San Diego State Aztecs are playing in their first Final Four. Here's how to watch the game.",
            "url": "https://www.palmbeachpost.com/story/sports/college/owls/2023/03/31/fau-basketball-final-four-how-to-watch-live-stream-tv-san-diego-state/70064908007/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/26/USAT/d5f76afb-3370-476e-b4fc-7c9105d580d1-USATSI_20319979.jpg?crop=4629,2604,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2023-03-31T22:02:09Z",
            "content": "FAU has made it to the final weekend of the NCAA men's basketball season.\r\nTheir remarkable run to the Final Four has caught the attention of people across the nation, and all eyes will be on the Owl… [+2466 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Miami Herald"
            },
            "author": "Irene Wright",
            "title": "Rock crystal sat in museum for nearly 2 centuries — then they found it wasn’t a rock - Yahoo News",
            "description": "Only 6 inches across and a rosy pink color, it held 60 million years of history.",
            "url": "https://www.miamiherald.com/news/nation-world/world/article273835070.html",
            "urlToImage": "https://media.zenfs.com/en/miami_herald_mcclatchy_975/f39bc2dc8a3b82ef6bf7c311989e90e2",
            "publishedAt": "2023-03-31T21:13:41Z",
            "content": "In 1883, what was believed to be a decorative crystal gemstone was cataloged and placed in the mineralogy collection at the Natural History Museum in London.\r\nFound in central India, the agate, as it… [+4440 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Adriana Diaz",
            "title": "Migraines, cluster headaches linked to how you sleep: study - New York Post ",
            "description": "A new report, published Wednesday, suggested that those headaches have strong correlations to the circadian system — the physical, mental and behavioral patterns that follow a 24-hour cycle.",
            "url": "https://nypost.com/2023/03/31/migraines-cluster-headaches-linked-to-how-you-sleep-study/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000009028773.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-03-31T20:54:00Z",
            "content": "Is it headache o’clock? \r\nMigraines and cluster headaches are closely linked to the body’s internal clock, a new study found.\r\nThe report, published in Neurology on Wednesday, suggested that both typ… [+3714 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Myles Udland",
            "title": "Stocks surge to cap first-quarter rally: Stock market news today - Yahoo Finance",
            "description": "Stocks closed higher on Friday after some cooler-than-expected inflation data, as investors also eye the end of an eventful first quarter that has seen the S...",
            "url": "https://finance.yahoo.com/news/stocks-surge-to-cap-first-quarter-rally-stock-market-news-today-200210736.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/tJaW.i0NJlylmt7APsX74Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/53a39d30-cfc2-11ed-9ffd-38513604359c",
            "publishedAt": "2023-03-31T20:02:10Z",
            "content": "Stocks surged on Friday to cap a first-quarter rally that saw the Nasdaq gain more than 16% while the S&amp;P 500 rose 7% as investors shook off a bank crisis and more interest rate hikes from the Fe… [+3708 chars]"
        }
    ]

    constructor(){
        super();
        console.log("This is construcot");
        this.state = {
            articles:  this.articles, 
            loading:false
        }
    }

    async componentDidMount(){
        console.log('cdm');
        let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=1e425d291d0341f29420f735ce775bd5";
        let data= await fetch(url);
        let parseData = await data.json()
        console.log(data);
        this.setState({articles: parseData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element) => {
            return    <div className="col-md-4" key={element.url}>
            <NewsItem   title={element.title.slice(0,45)} description={element.description.slice(0.88)} imageUrl={element.urlToImage} 
           newsUrl={element.url} />
        </div>
                
            })
        }

         

        </div>

      </div>
    )
  }
}

export default News
