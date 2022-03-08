const { query } = require("express");

const getData = (req, res) => {
    console.log("Request Query", req.query);
    onsole.log("Request Params", req.params);


    const data = [
        { 
            id: "1000", 
            image: "/images/mainvalleypik.jpg", 
            title: "Joshua Tree Overnight Adventure", 
            description: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces", 
            category: "Travel", 
            date: "/ August 21 2017"
        },
        { 
            id: "1001", 
            image: "/images/sidevalleypik.jpg", 
            title: "Joshua Tree Overnight Adventure", 
            description: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces", 
            category: "Travel", 
            date: "/ August 21 2017"
        },
        { 
            id: "1", 
            image: "/images/image1.jpg", 
            title: "Joshua Tree Overnight Adventure", 
            description: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces", 
            category: "Travel", 
            date: "/ August 21 2017"
        },
        { 
            id: "2", 
            image: "/images/home1.webp", 
            title: "CashOverflow.in, Pardeep Goyal", 
            description: "If you’re seeking financial freedom and looking for the best Indian blogs to read that teach you about finance, online marketing and carefully crafted articles, CashOverflow is a must read blog for you which is run by Pardeep Goyal. ", 
            category: "Finance", 
            date: "/ August 21 2017"
        },
        { 
            id: "3", 
            image: "/images/home2.webp", 
            title: "Trak.in, Prabhudesai", 
            description: "Trak.in is a pure Indian blog which covers all the stuff strictly related to India. Trak was started back in 2007 by an American return Arun Prabhudesai. In an interview Arun said, India has more capability to do more than other countries but lacks proper guidance and awareness. ", 
            category: "Technology", 
            date: "/ August 21 2017"
        },
        { 
            id: "4", 
            image: "/images/food9.jpg  ", 
            title: "Momos", 
            description: "Momo are a type of Tibetan dumpling dish popular in these regions. Momo is found in the cuisines of India, Nepal and Tibet. It is similar to baozi, jiaozi and mantou in Chinese cuisine, buuz in Mongolian cuisine, gyoza in Japanese cuisine, mandu in Korean cuisine and manti in Afghan cuisines. ", 
            category: "FOOD", 
            date: "/ FEBRUARY 21 2018"
        },     
        { 
            id: "5",
            image: "/images/home4.webp", 
            title: "YourStory.com, Shardha Sharma", 
            description: "Whenever I am feeling low, worrying about the future, YourStory is what I refer to reading. Yourstory is the perfect place on the web to learn how the great leaders were born. This is one of the popular blogs in India that mainly covers startup related stuff to inspire people around online.", 
            category: "Entrepreneurship", 
            date: "/ August 21 2017"
        },
        { 
            id: "6",
            image: "/images/home5.webp", 
            title: "ShoutMeLoud.com, Harsh Agrawal", 
            description: "Shout Me Loud is India’s fastest and one of the famous blogs which is run by Harsh Agrawal. Being a blogger, I love to read blogs which teaches me the real and impressive fundamentals of blogging. Harsh Agrawal is the person responsible for all the activities on ShoutMeLoud.", 
            category: "Blogging", 
            date: "/ August 21 2017"
        },
        { 
            id: "7",
            image: "/images/home6.webp", 
            title: "Techpp.com, Raju PP", 
            description: "Techpp is India’s favorite online tech magazine. The person behind Techpp is Raju PP. Raju holds an Engineering degree in Electronics and telecommunication. Raju lives in Bangalore. As the name describes “Technology Personalized” techpp shares tips to bring technology closer to you. Along with current technology updates, techpp also shares tips and guides to make technology more friendly.", 
            category: "Technology", 
            date: "/ August 21 2017"
        },
        { 
            id: "8", 
            image: "/images/home7.webp", 
            title: "AllTechBuzz.net, Imran Uddin", 
            description: "This is one of my favorite Indian blogs that mainly covers all the news related to technology. This is the perfect place where you come to know about the phones, accessories, technology, new launches in India etc. This Indian blog is run by Imran Uddin and was launched in 2011.", 
            category: "TECH", 
            date: "/ TODAY AT 11:54"
        },
        { 
            id: "9",
            image: "/images/home3.webp", 
            title: "Labnol.org, Amit Agarwal", 
            description: "There’s a reason why I put Labnol #1 in this top blogs in India list. The reason is the guy behind it: Amit Agarwal.This famous blog was started by Amit Agarwal with a vision to spread the culture of blogging in India. Amit quit his job to become the first professional blogger from India.Amit holds a degree from IIT which is considered as the highest B.Tech degree in India. ", 
            category: "Travel", 
            date: "/ August 21 2017"
        },
        { 
            id: "10", 
            image: " /images/bolly2.jpg ", 
            title: "Back in Mumbai for a ‘happy interval’", 
            description: "Sonali Bendre returned to Mumbai a few weeks ago after undergoing treatment for cancer in New York City for five months. The actress had shared on Instagram that she has been diagnosed with a high grade cancer that has metastised in July.", 
            category: "BOLLYWOOD", 
            date: "/ June 23 2018"
        },
        { 
            id: "11", 
            image: "/images/home8.webp", 
            title: "Kitchen.com, Archana Doshi", 
            description: "It is a leading recipe and food discovery blog where you can discover meal plans, diabetic meal ideas, dinner ideas, lunch box ideas, and more.", 
            category: "Cooking", 
            date: "/ TODAY AT 11:54"
        },
        { 
            id: "12", 
            image: "/images/bolly6.jpg  ", 
            title: "Virat Kohli watched Anushka's film Zero", 
            description: "Anushka Sharma, Shah Rukh Khan and Katrina Kaif starrer Zero hit the theatres today and fans are going gaga over the lead actors' performances in the film. Shah Rukh Khan plays a happy go lucky, vertically challenged man. Bauua Singh. Anushka Sharma essays the role of a scientist suffering from cerebral palsy whereas Katrina Kaif plays the role of an actress who is battling alcoholism. All the lead characters have been brilliantly etched and the actors have nailed the parts.", 
            category: "BOLLYWOOD", 
            date: "/ MAY 21 2018"
        },
        { 
            id: "13", 
            image: "/images/techno7.jpg  ", 
            title: "Recode", 
            description: "Recode by Vox is the preeminent tech, media, and business brand uncovering and explaining how our digital world is changing", 
            category: "TECHNOLOGY", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "14", 
            image: "/images/image2.jpeg ", 
            title: "Catch waves with an adventure guide", 
            description: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces", 
            category: "TECH", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "15", 
            image: " ", 
            title: "Catch waves with an adventure guide", 
            description: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces", 
            category: "TECH", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "31", 
            image: "/images/bolly1.jpg ", 
            title: "Alia Bhatt reveals how she will react if a girl tries to hit on her boyfriend Ranbir Kapoor", 
            description: "Alia Bhatt and Ranveer Singh were at their candid best at the trailer launch of their upcoming film, Gully Boy. The trailer of the film is captivating and celebs and fans can’t stop going gaga over Ranveer and Alia.", 
            category: "BOLLYWOOD", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "32", 
            image: " /images/bolly2.jpg ", 
            title: "Back in Mumbai for a ‘happy interval’ post cancer treatment", 
            description: "Sonali Bendre returned to Mumbai a few weeks ago after undergoing treatment for cancer in New York City for five months. The actress had shared on Instagram that she has been diagnosed with a high grade cancer that has metastised in July.", 
            category: "BOLLYWOOD", 
            date: "/ June 23 2018"
        },
        { 
            id: "33", 
            image: " /images/bolly3.jpg ", 
            title: "Anupam Kher reacts to Naseeruddin Shah’s comments: How much more freedom do you need in the country?", 
            description: "Veteran actor Naseeruddin Shah shared his views on mob violence in the country earlier this week and shared that he fears for his children on imagining a situation where they might be surrounded by a mob and will be asked whether they are a Hindu or a Muslim.", 
            category: "BOLLYWOOD", 
            date: "/ September 1 2020"
        },
        { 
            id: "34", 
            image: " /images/bolly4.jpg ", 
            title: "Ranveer Singh on working with Arjun Kapoor again: I miss him a lot; Baba’s become too busy for me", 
            description: "Ranveer Singh has been on a promotional spree for his next release, Simmba. Simmba, directed by Rohit Shetty will see Ranveer play the role of a badass cop, Sangram Bhalerao.", 
            category: "BOLLYWOOD", 
            date: "/ MAY 08 2019"
        },
        { 
            id: "35", 
            image: "/images/bolly5.jpg  ", 
            title: "Koffee with Karan sneak peek: Rhea Kapoor mimics Kareena Kapoor,‘What now to rehearse, it's not Mughal e Azam'", 
            description: "Koffee with Karan season 6 will see the Kapoor siblings make an appearance. Sonam K Ahuja, Rhea Kapoor and Harshvardhan Kapoor recently shot for a fun episode of the show.", 
            category: "BOLLYWOOD", 
            date: "/ MARCH 20 2020"
        },
        { 
            id: "36", 
            image: "/images/bolly6.jpg  ", 
            title: "Snapped: Virat Kohli watched Anushka Sharma’s latest film Zero in Melbourne", 
            description: "Anushka Sharma, Shah Rukh Khan and Katrina Kaif starrer Zero hit the theatres today and fans are going gaga over the lead actors' performances in the film. Shah Rukh Khan plays a happy go lucky, vertically challenged man. ", 
            category: "BOLLYWOOD", 
            date: "/ MAY 21 2018"
        },
        { 
            id: "37", 
            image: "/images/bolly7.jpg  ", 
            title: "Aishwarya Rai and Abhishek Bachchan cheer for daughter Aaradhya as she performs at school's annual day", 
            description: "Aishwarya Rai Bachchan and Abhishek Bachchan attended daughter Aaradhya Bachchan’s school annual day event yesterday and today. Aaradhya Bachchan performed with her classmates and looked cute as a button as she danced on stage.", 
            category: "BOLLYWOOD", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "38", 
            image: " /images/bolly8.jpg ", 
            title: "Sonakshi Sinha also wants to know why Varun Dhawan called her ‘BHABI’ on Instagram", 
            description: "Sonakshi Sinha and Varun Dhawan are working together in Abhishek Varman’s Kalank. Sonakshi and Varun are also close friends and today, Varun Dhawan left an interesting comment on Sonakshi Sinha’s latest Instagram photo.", 
            category: "BOLLYWOOD", 
            date: "/ September 27 2019"
        },
        { 
            id: "39", 
            image: "/images/bolly9.jpg  ", 
            title: "Alia Bhatt reveals the REAL reason why she looked SAD in leaked photos with Ranbir Kapoor from Brahmastra sets", 
            description: "Alia Bhatt and Ranbir Kapoor have been dating for almost a year now and are in a steady relationship. The couple’s families also approve of their relationship and they have bonded with each other’s parents.", 
            category: "BOLLYWOOD", 
            date: "/ FEBRUARY 21 2018"
        },
        { 
            id: "40", 
            image: "/images/bolly10.jpg  ", 
            title: "Top Instagrammers of 2018: From Priyanka Chopra and Nick Jonas’ wedding pictures to Kapoor’s family photo", 
            description: "Year 2021 has been full of ups and downs for the film industry; films with path-breaking content have done phenomenal numbers at the box office, top stars have got hitched and we have lost legends of Indian cinema.", 
            category: "BOLLYWOOD", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "51", 
            image: "/images/bolly11.jpg  ", 
            title: "Isha Ambani Anand Piramal wedding: Hrithik Roshan, Sonam K Ahuja and Shahid Kapoor look stunning", 
            description: "Stars attended Isha Ambani and Anand Piramal’s wedding ceremony held at the former’s residence in Mumbai today. Many celebs had also attended the pre-wedding festivities held at Udaipur over the weekend", 
            category: "BOLLYWOOD", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "52", //repeat of 51
            image: "/images/bolly11.jpg  ", 
            title: "Isha Ambani Anand Piramal wedding: Hrithik Roshan, Sonam K Ahuja and Shahid Kapoor look stunning", 
            description: "Stars attended Isha Ambani and Anand Piramal’s wedding ceremony held at the former’s residence in Mumbai today. Many celebs had also attended the pre-wedding festivities held at Udaipur over the weekend. Isha and Anand will take the wedding vows today and their wedding reception will be held on December 14, 2018. Alia Bhatt, Priyanka Chopra and Nick Jonas, Aamir Khan and Kiran Rao, Sachin Tendulkar and other celebs attended Isha Ambani and Anand Piramal’s wedding ceremony today.", 
            category: "BOLLYWOOD", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "53", 
            image: "/images/bolly12.jpg  ", 
            title: "Mahira Khan gives a savage reply to a troll who commented about her viral photos with Ranbir Kapoor", 
            description: "Mahira Khan and Ranbir Kapoor’s photos from New York had gone viral in September last year. The actors were clicked outside a hotel and were engaged in a conversation while smoking.", 
            category: "BOLLYWOOD", 
            date: "/ APRIL 21 2018"
        },
        { 
            id: "54", 
            image: "/images/bolly13.jpg  ", 
            title: "Deepika Padukone Ranveer Singh Bollywood bash: Shah Rukh Khan looks dapper as he arrives to wish the newlyweds", 
            description: "Deepika Padukone and Ranveer Singh hosted a grand bash today in Mumbai. The couple invited all their friends and colleagues from the industry.", 
            category: "BOLLYWOOD", 
            date: "/ JANUARY 21 2019"
        },
        { 
            id: "55", 
            image: "/images/bolly14.jpg  ", 
            title: "AbRam Khan tells paparazzi at Aaradhya Bachchan’s birthday bash, ‘NO PICTURES’", 
            description: "Aishwarya Rai Bachchan and Abhishek Bachchan hosted a birthday bash for their daughter Aaradhya on Saturday, a day after she turned 7..", 
            category: "BOLLYWOOD", 
            date: "/ FEBRUARY 11 2018"
        },
        { 
            id: "62", 
            image: "/images/techno1.jpg ", 
            title: "TechCrunch | Startup and Technology News", 
            description: "Reporting on the business of technology, startups, venture capital funding, and Silicon Valley.", 
            category: "TECHNOLOGY", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "61", 
            image: " /images/techno2.jpg ", 
            title: "Techmeme", 
            description: "A foremost source for tracking technology changes. Spotlighting the writings of reporters.", 
            category: "TECHNOLOGY", 
            date: "/ June 23 2018"
        },
        { 
            id: "63", 
            image: " /images/techno3.jpg ", 
            title: "MIT Technology Review", 
            description: "MIT Technology Review covers articles on Artificial intelligence, Biotechnology, Climate Change, Humans & Technology, Computing, and Space.", 
            category: "TECHNOLOGY", 
            date: "/ September 1 2020"
        },
        { 
            id: "64", 
            image: " /images/techno4.jpg ", 
            title: "Ars Technica", 
            description: "Ars Technica is a source for technology news, tech policy analysis, breakdowns of the latest scientific advancements.", 
            category: "TECHNOLOGY", 
            date: "/ MAY 08 2019"
        },
        { 
            id: "65", 
            image: "/images/techno5.jpg  ", 
            title: "ReadWrite", 
            description: "ReadWrite aggregates professional communities dedicated to specific subjects of interest such as connected devices, smart homes.", 
            category: "TECHNOLOGY", 
            date: "/ MARCH 20 2020"
        },
        { 
            id: "66", 
            image: "/images/techno6.jpg  ", 
            title: "VentureBeat", 
            description: "A leading source for transformative tech news and events that provide the deep context to help business leaders make smart decisions. ", 
            category: "TECHNOLOGY", 
            date: "/ MAY 21 2018"
        },
        { 
            id: "67", 
            image: "/images/techno7.jpg  ", 
            title: "Recode", 
            description: "Recode by Vox is the preeminent tech, media, and business brand uncovering and explaining how our digital world is changing", 
            category: "TECHNOLOGY", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "68", 
            image: " /images/techno8.jpg ", 
            title: "WIRED Magazine", 
            description: "WIRED is where tomorrow is realized. You'll get the latest in tech news, science, business, gear, security, and geek culture.", 
            category: "TECHNOLOGY", 
            date: "/ September 27 2019"
        },
        { 
            id: "69", 
            image: "/images/techno9.jpg  ", 
            title: "IEEE Spectrum", 
            description: "The latest technology news and analysis from the world's leading engineering magazine. Key topics covered are Aerospace.", 
            category: "TECHNOLOGY", 
            date: "/ FEBRUARY 21 2018"
        },
        { 
            id: "70", 
            image: "/images/techno10.jpg  ", 
            title: "O'Reilly", 
            description: "Gain technology and business knowledge and hone your skills with learning resources created & curated by O'Reilly's experts.", 
            category: "TECHNOLOGY", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "72", 
            image: "/images/techno1.jpg ", 
            title: "Reporting on the business of technology, startups, venture capital funding, and Silicon Valley.", 
            description: "Reporting on the business of technology, startups, venture capital funding, and Silicon Valley. Technology news and analysis with a focus on founders and startup teams.", 
            category: "TECHNOLOGY", 
            date: "/ AUGUST 21 2019"
        },
        { 
            id: "81", 
            image: "/images/techno11.jpg  ", 
            title: "The New York Times » Technology", 
            description: "Technology industry news, commentary, and analysis, with reporting on big tech, startups, and internet culture.", 
            category: "TECHNOLOGY", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "82", //repeat of 51
            image: "/images/techno11.jpg  ", 
            title: "The New York Times » Technology", 
            description: "Technology industry news, commentary, and analysis, with reporting on big tech, startups, and internet culture. The New York Times is a hub for conversation about news and ideas.", 
            category: "TECHNOLOGY", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "83", 
            image: "/images/techno12.jpg  ", 
            title: "BBC News » Technology", 
            description: "Get the latest BBC Technology News: breaking news and analysis on computing, the web, blogs", 
            category: "TECHNOLOGY", 
            date: "/ APRIL 21 2018"
        },
        { 
            id: "84", 
            image: "/images/techno13.jpg  ", 
            title: "CNET Technology News", 
            description: "A leader in tech product reviews, news, prices, videos, forums, how-tos, and more. CNET news editor", 
            category: "TECHNOLOGY", 
            date: "/ JANUARY 21 2019"
        },
        { 
            id: "85", 
            image: "/images/techno14.jpg  ", 
            title: "The Washington Post » Technology", 
            description: "Technology News from The Washington Post includes topics such as social media, tech gadgets, tech news,", 
            category: "TECHNOLOGY", 
            date: "/ FEBRUARY 11 2018"
        },
        
        { 
            id: "91", 
            image: "/images/holly1.jpg ", 
            title: "Sharon Stone Boards Season 2 of The Flight Attendant", 
            description: "The mother-daughter duo we didn't know we needed! On Jan. 11, Kaley Cuoco announced on Instagram that Sharon Stone will be joining the cast of The Flight Attendant for season two", 
            category: "HOLLYWOOD", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "92", 
            image: " /images/holly2.jpg ", 
            title: "See Julia Fox and Kanye Ye West Stepping Out for a Stylish L.A. Date Night", 
            description: "a flashing lights were on Kanye Ye West and Julia Fox during their date night on Jan. 10. The actress, 31, and the Grammy winner, 44, started their evening at the star-studded...", 
            category: "HOLLYWOOD", 
            date: "/ June 23 2018"
        },
        { 
            id: "93", 
            image: " /images/holly3.jpg ", 
            title: "How Fez's Fate Was Originally Supposed to Play Out on Euphoria", 
            description: "That iconic scene in Euphoria where Fez breaks a bottle over Nate's head almost didn't happen. In an interview with GQ, published Monday, Jan. 10, Angus Cloud shared that Euphoria....", 
            category: "HOLLYWOOD", 
            date: "/ September 1 2020"
        },
        { 
            id: "94", 
            image: " /images/holly4.jpg ", 
            title: "Janet Jackson Reveals What Really Pulled Her Through the Storm of Super Bowl Backlash", 
            description: "After receiving widespread scrutiny in the aftermath of her 2004 Super Bowl performance, Janet Jackson recalled leaning into her family and faith. In a new interview with...", 
            category: "HOLLYWOOD", 
            date: "/ MAY 08 2019"
        },
        { 
            id: "95", 
            image: "/images/holly5.jpg  ", 
            title: "The Relatively Famous: Ranch Rules Cast Reveals What It's Really Like to Grow Up in the Public Eye", 
            description: "Growing up with famous parents isn't all fun and games. Sure, the lifestyle comes with plenty of perks but as the Relatively Famous: Ranch Rules cast discusses in this sneak peek...", 
            category: "HOLLYWOOD", 
            date: "/ MARCH 20 2020"
        },
        { 
            id: "96", 
            image: "/images/holly6.jpg  ", 
            title: "10 Can't-Miss Under $30 Deals From Aerie", 
            description: "We independently selected these deals and products because we love them, and we think you might like them at these prices. E! has affiliate relationships, so we may get a commission if you...", 
            category: "HOLLYWOOD", 
            date: "/ MAY 21 2018"
        },
        { 
            id: "97", 
            image: "/images/holly7.jpg  ", 
            title: "How Brad Pitt Reacted to Those Alia Shawkat Romance Rumors", 
            description: "Once upon a time in Hollywood, Brad Pitt and Alia Shawkat sparked romance rumors. While their outings turned out to be nothing more than friendly, the 32-year-old actress still hasn't...",
            category: "HOLLYWOOD", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "98", 
            image: " /images/holly8.jpg ", 
            title: "No One Is Innocent in the New Trailer For Uma Thurman's Apple TV+ Series Suspicion", 
            description: "The Apple TV+ series Suspicion is looking like our next big obsession. Uma Thurman stars as Catherine Newman, a prominent American businesswoman, whose son Leo is kidnapped in New York...",
            category: "HOLLYWOOD", 
            date: "/ September 27 2019"
        },
        { 
            id: "99", 
            image: "/images/holly9.jpg  ", 
            title: "Charlie Puth Gives Heartwarming Advice to Aspiring Actor Rejected From Julliard", 
            description: "As Charlie Puth once sang, I'll be there to save the day. The 30-year-old proved that much to be true when he recently dished out the most heartwarming advice in response to...", 
            category: "HOLLYWOOD", 
            date: "/ FEBRUARY 21 2018"
        },
        { 
            id: "100", 
            image: "/images/holly10.jpg  ", 
            title: "Jimmy Kimmel Breaks Down in Tears During Moving Tribute to Bob Saget", 
            description: "Jimmy Kimmel honored Bob Saget's legacy with a touching trip down memory lane. Before allowing audiences into the studio for Jimmy Kimmel Live! on Jan. 10, the late-night host spoke...",
            category: "HOLLYWOOD", 
            date: "/ JANUARY 1 2022"
        },
        
        { 
            id: "111", 
            image: "/images/holly11.jpg", 
            title: "Naya Rivera's Sister Shares Her Journey to Get Out of Dark Place After Her Death", 
            description: "Following her tragic death in July 2020, Naya Rivera's sister is opening up about trying to cope with her loss. On Jan. 10, Nickayla Rivera posted a video to her YouTube...", 
            category: "HOLLYWOOD", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "112", //repeat of 111
            image: "/images/holly11.jpg", 
            title: "Naya Rivera's Sister Shares Her Journey to Get Out of Dark Place After Her Death", 
            description: "Following her tragic death in July 2020, Naya Rivera's sister is opening up about trying to cope with her loss. On Jan. 10, Nickayla Rivera posted a video to her YouTube...Following her tragic death in July 2020, Naya Rivera's sister is opening up about trying to cope with her loss. On Jan. 10, Nickayla Rivera posted a video to her YouTube...Following her tragic death in July 2020, Naya Rivera's sister is opening up about trying to cope with her loss. On Jan. 10, Nickayla Rivera posted a video to her YouTube...Following her tragic death in July 2020, Naya Rivera's sister is opening up about trying to cope with her loss. On Jan. 10, Nickayla Rivera posted a video to her YouTube...", 
            category: "HOLLYWOOD", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "113", 
            image: "/images/holly12.jpg  ", 
            title: "Rachel Zoe Shares the Trends Set to Take Over in 2022", 
            description: "We interviewed Rachel Zoe because we think you'll like her picks. Rachel is an Express partner. E! has affiliate relationships, so we may get a commission if you purchase something through our...", 
            category: "HOLLYWOOD", 
            date: "/ APRIL 21 2018"
        },
        { 
            id: "114", 
            image: "/images/holly13.jpg  ", 
            title: "Meet the Relatively Famous: Ranch Rules Cast (& Their Famous Parents)", 
            description: "Saddle up! Soon, eight celebrity offspring will venture from Hollywood to a working ranch in Steamboat Springs, Colo. Why? To prove they're more than just their famous last...", 
            category: "HOLLYWOOD", 
            date: "/ JANUARY 21 2019"
        },
        { 
            id: "115", 
            image: "/images/holly14.jpg  ", 
            title: "Rihanna & A$AP Rocky Bundle Up For A Romantic Date Night In West Hollywood — Photo", 
            description: "The A-list lovebirds headed to their winter date night at Nobu in three layers of clothing. They still looked super fashionable while staying warm.", 
            category: "HOLLYWOOD", 
            date: "/ FEBRUARY 11 2018"
        },
        
        { 
            id: "121", 
            image: " /images/fit1.jpg ", 
            title: "Nerd Fitness", 
            description: "A self-described community of “underdogs, misfits, and mutants” ready and willing to help people with every step of their fitness journey,", 
            category: "FITNESS", 
            date: "/ June 23 2018"
        },
        { 
            id: "122", 
            image: " /images/fit2.jpg ", 
            title: "RossTraining.com", 
            description: "Ross Enamait’s website is dedicated to high performance conditioning, strength, and athletic development. The longtime trainer and boxing coach understands that a successful fitness regimen boils down to finding what works for you.", 
            category: "FITNESS", 
            date: "/ June 23 2018"
        },
        { 
            id: "123", 
            image: " /images/fit3.jpg ", 
            title: "Love Sweat Fitness", 
            description: "Katie Dunlop’s Love Sweat Fitness community inspires women everywhere to find their own healthy, happy bodies. ", 
            category: "FITNESS", 
            date: "/ September 1 2020"
        },
        { 
            id: "124", 
            image: " /images/fit4.jpg ", 
            title: "Breaking Muscle", 
            description: "Designed for fitness consumers and professionals, Breaking Muscle is a leading publisher of timely, quality information about all things fitness and nutrition.", 
            category: "FITNESS", 
            date: "/ MAY 08 2019"
        },
        { 
            id: "125", 
            image: "/images/fit5.jpg  ", 
            title: "Advanced Human Performance", 
            description: "Anyone feeling frustrated by a fitness plateau will find help from Advanced Human Performance creator Joel Seedman, PhD. He started this site to help people break through their nutritional and training barriers.", 
            category: "FITNESS", 
            date: "/ MARCH 20 2020"
        },
        { 
            id: "126", 
            image: "/images/fit6.jpg  ", 
            title: "Tony Gentilcore", 
            description: "Tony Gentilcore is a trainer and co-founder of Cressey Sports Performance, a fitness training facility “by athletes for athletes.” His focus is largely on weightlifting. He jokes that he’s a pro at “picking things up ", 
            category: "FITNESS", 
            date: "/ MAY 21 2018"
        },
        { 
            id: "127", 
            image: "/images/fit7.jpg  ", 
            title: "Dr. John Rusin", 
            description: "Dr. John Rusin is known for his pain-free strength training routines that have been used by exercise scientists, fitness trainers, and physical therapists alike. ", 
            category: "FITNESS", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "128", 
            image: " /images/fit8.jpg ", 
            title: "The Balanced Life", 
            description: "Like many working women, you may struggle with finding time to exercise and seeing results that will make you want to stick with your workout program. ", 
            category: "FITNESS", 
            date: "/ September 27 2019"
        },
        { 
            id: "129", 
            image: "/images/fit9.jpg  ", 
            title: "Knocked Up Fitness", 
            description: "The Centers for Disease Control and Prevention (CDC)Trusted Source recommends that pregnant women do at least 150 minutes of moderate-intensity exercises per week. Still, it can be difficult to know where to start since some exercises may be off-limits.", 
            category: "FITNESS", 
            date: "/ FEBRUARY 21 2018"
        },
        { 
            id: "130", 
            image: "/images/fit10.jpg  ", 
            title: "Ben Greenfield Fitness", 
            description: "As a former bodybuilder and triathlete, Ben Greenfield is also an exercise physiologist and coach with over 20 years of experience helping others achieve their athletic goals. He uses this experience and more in his blog.", 
            category: "FITNESS", 
            date: "/ JANUARY 1 2022"
        },
        
        { 
            id: "141", 
            image: "/images/fit11.jpg  ", 
            title: "Get Healthy U", 
            description: "If you’re looking to mix up your current exercise routine, you can check out Get Healthy U’s fitness section for new workout tips. Not only can you find a workout by type, such as cardio, HIIT, or strength training, ", 
            category: "FITNESS", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "142", //repeat of 51
            image: "/images/fit11.jpg  ", 
            title: "Get Healthy U", 
            description: "If you’re looking to mix up your current exercise routine, you can check out Get Healthy U’s fitness section for new workout tips. Not only can you find a workout by type, such as cardio, HIIT, or strength training, but you can also filter your selections by length. There’s even a whole guide dedicated to beginners if you’re new to exercising and not quite sure where to start. In between your workout perusal, make sure you check out the multiple posts about form, training, and recovery.", 
            category: "FITNESS", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "143", 
            image: "/images/fit12.jpg  ", 
            title: "Pumps & Iron", 
            description: "Pumps & Iron is the official blog of Nicole, a certified personal trainer and group instructor from Boston. While readers will undoubtedly find fitness tips, Nicole also shares workout videos you can use in the comfort of your own home to help guide you through both equipment and body weight-based strength training.", 
            category: "FITNESS", 
            date: "/ APRIL 21 2018"
        },
        { 
            id: "144", 
            image: "/images/fit13.jpg  ", 
            title: "PumpUp", 
            description: "PumpUp is a community of fitness enthusiasts, including beginners, athletes, and everyone in between who want to look their best via a healthy lifestyle. The PumpUp blog is full of fitness, recipes, and lifestyle tips that can help you achieve such goals.", 
            category: "FITNESS", 
            date: "/ JANUARY 21 2019"
        },
        { 
            id: "145", 
            image: "/images/fit14.jpg  ", 
            title: "Keep It SimpElle", 
            description: "Elle is a professional trainer and London-based entrepreneur who shares her passion for fitness and a healthy lifestyle via her blog, Keep It SimpElle. She’s got a fun tone throughout her posts, which include helpful workouts, running and cycling tips, ", 
            category: "FITNESS", 
            date: "/ FEBRUARY 11 2018"
        },
        
        { 
            id: "151", 
            image: "/images/food1.jpg ", 
            title: "Penne Pasta", 
            description: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes.", 
            category: "FOOD", 
            date: "/ June 23 2018"
        },
        { 
            id: "152", 
            image: " /images/food2.jpg ", 
            title: "Hot Dog", 
            description: "A hot dog is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. The term hot dog can also refer to the sausage itself. The sausage used is a wiener or a frankfurter.", 
            category: "FOOD", 
            date: "/ June 23 2018"
        },
        { 
            id: "153", 
            image: " /images/food3.jpg ", 
            title: "Burger", 
            description: "A hamburger is a food, typically considered a sandwich, consisting of one or more cooked patties, typically aaloo tikki—placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.", 
            category: "FOOD", 
            date: "/ September 1 2020"
        },
        { 
            id: "154", 
            image: " /images/food4.jpg ", 
            title: "Pastries", 
            description: "Pastry is “loved😍” by most people which is made of dough of flour, water and shortening that may be savoury or sweetened. Sweetened pastries are often described as bakers' confectionery. The word pastries suggests many kinds of baked products made from ingredients such as flour, sugar, milk, butter, shortening, baking powder, and eggs.", 
            category: "FOOD", 
            date: "/ MAY 08 2019"
        },
        { 
            id: "155", 
            image: "/images/food5.jpg  ", 
            title: "Wraps", 
            description: "A wrap is a food dish made with a soft flatbread rolled around a filling. The usual flatbreads are wheat tortillas, lavash, or pita; the filling may include cold sliced meat, poultry, or fish, shredded lettuce, diced tomato or pico de gallo, guacamole, sauteed mushrooms, bacon, grilled onions, cheese, and a sauce, such as ranch or honey mustard..", 
            category: "FOOD", 
            date: "/ MARCH 20 2020"
        },
        { 
            id: "156", 
            image: "/images/food6.jpg  ", 
            title: "Noodles", 
            description: "Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. Noodles can be refrigerated for short-term storage or dried and stored for future use.", 
            category: "FOOD", 
            date: "/ MAY 21 2018"
        },
        { 
            id: "157", 
            image: "/images/food7.jpg  ", 
            title: "Perfect North Indian Main Course", 
            description: "Whenever we talk about Punjabi food, the first dish that comes to our mind is Chola Kulcha. Chola is a spicy curry made of Kabuli Chana or Kala Chana, where Kulcha is a bread which is made of Maida or Whole Wheat Flour. Different parts of North Indian make these Chola Curries differently, while the Kulchas can be plain or can be stuffed with Potatoes, Paneer, Cauliflower, Green Peas etc.", 
            category: "FOOD", 
            date: "/ AUGUST 21 2017"
        },
        { 
            id: "158", 
            image: " /images/food8.jpg ", 
            title: "Paneer Tikka", 
            description: "Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora. ", 
            category: "FOOD", 
            date: "/ September 27 2019"
        },
        { 
            id: "159", 
            image: "/images/food9.jpg  ", 
            title: "Momos", 
            description: "Momo are a type of Tibetan dumpling dish popular in these regions. Momo is found in the cuisines of India, Nepal and Tibet. It is similar to baozi, jiaozi and mantou in Chinese cuisine, buuz in Mongolian cuisine, gyoza in Japanese cuisine, mandu in Korean cuisine and manti in Afghan cuisines. ", 
            category: "FOOD", 
            date: "/ FEBRUARY 21 2018"
        },
        { 
            id: "160", 
            image: "/images/food10.jpg  ", 
            title: "Lasagne", 
            description: "Lasagne are a type of pasta, possibly one of the oldest types, made of very wide, flat sheets. Either term can also refer to an Italian dish made of stacked layers of lasagne alternating with fillings such as ragù (ground meats and tomato sauce), vegetables, cheeses (which may include ricotta, mozzarella, and parmesan), and seasonings and spices, like Italian seasoning, such as garlic, oregano and basil.", 
            category: "FOOD", 
            date: "/ JANUARY 1 2022"
        },
        
        { 
            id: "171", 
            image: "/images/food11.jpg  ", 
            title: "Pizza", 
            description: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.", 
            category: "FOOD", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "172", //repeat of 51
            image: "/images/food11.jpg  ", 
            title: "Pizza", 
            description: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo. In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced, and is eaten with the use of a knife and fork. In casual settings, however, it is cut into wedges to be eaten while held in the hand.", 
            category: "FOOD", 
            date: "/ JANUARY 1 2022"
        },
        { 
            id: "173", 
            image: "/images/food12.jpg  ", 
            title: "Double Burger", 
            description: "Double Stack: two 2-ounce patties, one slice American cheese, plain bun. Dave's Single: one 4-ounce patty, two slices American cheese, lettuce and tomato, wider bun. In other words, it's $2 more for an extra slice of cheese, lettuce and tomato, and bigger bread. ", 
            category: "FOOD", 
            date: "/ APRIL 21 2018"
        },
        { 
            id: "174", 
            image: "/images/food13.jpg  ", 
            title: "Doughnut", 
            description: "A doughnut or donut is a type of food made from leavened fried dough. It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.", 
            category: "FOOD", 
            date: "/ JANUARY 21 2019"
        },
        { 
            id: "175", 
            image: "/images/food14.jpg  ", 
            title: "Spaghetti", 
            description: "Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals. Italian spaghetti is typically made from durum wheat semolina. ", 
            category: "FOOD", 
            date: "/ FEBRUARY 11 2018"
        },
        { 
            id: "176", 
            image: "/images/food15.jpg  ", 
            title: "Pancakes", 
            description: "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread.", 
            category: "FOOD", 
            date: "/ FEBRUARY 11 2018"
        }
    ]

    
    if(req.query.category){
        const userData=user.filter((val)=>val.category.toLowerCase()===req.query.category.toLowerCase())
        console.log("hello")
        res.send(userData)

    }if(req.params.id){
        console.log(req.params.id)
        const userData=user.filter((val)=>val.id===Number(req.params.id))
      
        res.send(userData)

    }

    else{
        res.send(data)
    }
}

module.exports = getData;