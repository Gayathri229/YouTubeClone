Machine coding Interview:  

REQUIREMENT CLARIFICATION (5 MINS)

[Discuss with interiewer the below points]
- Features that are going to be developed
- Tech stack (Eg: Tailwind css/ normal css, Redux/ Context API, Typescript/Javascript etc). Have a proper justification for every tech stack. 
    - Redux (Since its a large application like youtube)
    - Tailwind CSS
    - React Router DOM (for routing)
    - Bundler
    - Testing library (Jest, React Testing Library)


PLANNING: (5-7 MINS)

Eventhough yourself and the interviewer knows how the app looks, plan it so that you and they will be on the same page. 

Draw a simple sketch of what all will the app contain.
We can also go a level deeper and mark components as well.


We use a "create react app" as we don't have much time to configure our bundler/framework/tools and other things separately.
When we build a huge project and need customization we can configure it from scratch. 

So, we use the command "npx create-react-app". create-react-app is a JS package and we are executing it. 



DON'T TAKE MUCH TIME FOR CSS. FOCUS ON THE FUNCTIONALITY.



  {/*
      Header
      Body
        SideBar
          MenuItems
        MainContainer
          ButtonsList
          VideoContainer
            VideoCard  
      
      */}






Debouncing:

typing slow - time difference between each key stroke : 300ms
typing fast - time difference between each key stroke : 50ms

Performace:
[Eg taken from flipkart]
if api call is done for each key stroke, and a popular website will be used by 1000s or lakhs of users at a time, so
 - iphone pro max - 14 characters - 14 * 1000 (api calls per second for each character) = 14000 api calls
 - iphone pro max - 3 calls (with debouncing) * 1000 = 3000 api calls 





 Time complexity to search in an array : O(n) [i, ip, iph, iphone]
 Time complexity to search in an Object: O(1) 
 {
    i:
    ip:
    iph:
    iphone:
 }

 new Map() -> a class which even more optimized than searching inside an Object






 Live Chat >>>>> Infinite scroll >>>> Pagination

 Challenges in Live Chat: 
 Get Live Data [Data layer]
 Update UI EFFICIENTLY [UI layer]


 How to handle Live Data?
 1. Web sockets - 
 - 2 way connection established. A Handshake between Server and UI. After handshake is established we can quickly send data from either sides (Bidirectional). 
 - No Regular interval. Data can come in anytime (1st set of data came in at 1ms, 2nd set at 20ms later, 3rd set of data can come in after 10mins).
 - Initial connection takes little time. Once handshake is established data flows bidirectionally and at any-time.
 - As soon as the app is opened the connection is established.

 2. API Polling/Long Polling:
 - UI requests Server. 
 - Data flows from Server to UI (One direction) after an interval

Examples:
1. Gmail - Falls under API Polling [Reason: There is no need for the user to receive an email as soon as its sent. It's fine if it takes ~10secs]
2. Kite by Zerodha - Falls under Web Socket [Reason: Stock prices need to be updated then and there for the users to know within ms]
3. WhatsApp - Web Socket [Since its a live chat application, order of messages change when there is a delay for messages to reach which is not good]
4. Cric Buzz - API Polling [Scores get updated every 25s and there is no urgency to update in every second/ms. Also, why 25s is used because there is no need to poll every 5/10s as there will be no score change every 5/10s and each ball/bowling takes upto 25s, so its a sweet spot]