import LOADING_IMG from "../images/loadingImage.jpg";

export const formatCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(0) + "M";
  } else if (count >= 1000 && count < 100000) {
    return (count / 1000).toFixed(1) + "K";
  } else if (count >= 100000) {
    return (count / 1000).toFixed(0) + "K";
  } else {
    return count;
  }
};

export const handleImageError = (event) => {
  event.target.src = LOADING_IMG;
};

var nameList = [
  "Ratan",
  "Gautam",
  "Roshan",
  "Dev",
  "Anil",
  "Afjal",
  "Krish kartik",
  "Lily",
  "Renu",
  "Anand",
  "Jade",
  "Smith",
  "Janani",
  "Sneha",
  "krishna",
  "Kishen",
  "Bobby",
  "Garry",
  "Renu",
  "Nivin",
  "Demon",
  "Vish",
  "Kalki",
  "Sid",
  "Kitty",
  "Pinky",
  "Zero",
  "Mac",
  "Trooper",
  "Beast",
  "Bandit",
  "Monkey",
  "Flash",
  "Penny",
  "Girk",
  "Deepa",
  "Kuldeep",
  "Deepam",
  "Shubham",
  "Kia",
  "Kiara",
  "Kamya",
  "Nita",
  "Nithya",
  "Darshan",
  "Rashi",
  "Dan",
  "Mule",
  "Karan",
  "Cult Classic",
  "Cultist",
  "Hari",
  "Meghna",
  "Afnan",
  "Ricky",
  "Shifty",
  "Trapper",
  "Ray",
  "God",
  "Lenin",
  "Writer",
  "Nash",
  "George",
  "Willy",
  "Loki",
  "Berty",
  "Mark",
  "Jerome",
  "Varun",
  "Adi",
  "Aditya",
  "Abi",
  "Techie",
  "UserX",
  "Harsh",
  "Rohit",
  "Dimple",
  "Nimmi",
  "Leo",
  "Maeve",
  "Cicily",
  "Robert",
  "Duke",
  "Alex",
  "Kenny",
  "Ken",
  "Kanan",
  "Jai",
  "Breaker",
  "Sean",
  "Martin",
  "Tobby",
  "Gru",
  "Lucky",
  "Shru",
  "Arjun",
  "Raj",
  "Sam",
  "Hash",
  "Akhil",
  "Nikhil",
  "Curdle",
  "Racer",
  "Buggy",
  "Surya",
  "Shaurya",
  "Randy",
  "Ben",
  "Vidhya",
  "Visakh",
  "Vyshakh",
  "Pragya",
  "Kushi",
  "Sunny",
  "Minion",
  "Tulip",
  "Joy",
  "Jenny",
  "Leonard",
  "Sheldon",
  "Howard",
  "Bec",
  "Preet",
  "Preeti",
  "Kumar",
  "Flubber",
  "BayMax",
  "Buddy",
  "Hawker",
  "Vicky",
  "Tej",
  "Sarge",
  "Max",
  "Captain",
  "Raihan",
  "Anonymous",
  "Biker",
  "UnoReverse",
  "Harini",
  "Keerthi",
  "Sandy",
  "Shalini",
  "Ritika",
  "Ashok",
  "Maddy",
  "Jeni",
  "Ginny",
  "Cathy",
  "Prit",
  "Becky",
  "Bheem",
  "Jackie",
  "Bubble",
  "Sammy",
  "Smasher",
  "Henry",
  "Amir",
  "Caesar",
  "Delacruz",
  "Jeremiah",
  "Lea",
  "Erin",
  "Nina",
  "Kairi",
  "Chloe",
  "Estella",
  "Armani",
  "Nicholas",
  "Isla",
  "Lilliana",
  "Maurice",
  "Carl",
  "Brody",
  "Zainab",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

var verbs, nouns, adjectives, adverbs, preposition;
nouns = [
  "bird",
  "clock",
  "boy",
  "plastic",
  "duck",
  "teacher",
  "old lady",
  "professor",
  "hamster",
  "dog",
];
verbs = [
  "kicked",
  "ran",
  "flew",
  "dodged",
  "sliced",
  "rolled",
  "died",
  "breathed",
  "slept",
  "killed",
];
adjectives = [
  "beautiful",
  "lazy",
  "professional",
  "lovely",
  "dumb",
  "rough",
  "soft",
  "hot",
  "vibrating",
  "slimy",
];
adverbs = [
  "slowly",
  "elegantly",
  "precisely",
  "quickly",
  "sadly",
  "humbly",
  "proudly",
  "shockingly",
  "calmly",
  "passionately",
];
preposition = [
  "down",
  "into",
  "up",
  "on",
  "upon",
  "below",
  "above",
  "through",
  "across",
  "towards",
];

export function generateSentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);

  var content =
    "The " +
    adjectives[rand1] +
    " " +
    nouns[rand2] +
    " " +
    adverbs[rand3] +
    " " +
    verbs[rand4] +
    // " because some " +
    // nouns[rand1] +
    // " " +
    // adverbs[rand1] +
    // " " +
    // verbs[rand1] +
    // " " +
    // preposition[rand1] +
    // " a " +
    // adjectives[rand2] +
    // " " +
    // nouns[rand5] +
    // " which, became a " +
    // adjectives[rand3] +
    // ", " +
    // adjectives[rand4] +
    // " " +
    // nouns[rand6] +
    ".";

  return content;
  // document.getElementById("sentence").innerHTML = "&quot;" + content + "&quot;";
}


function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
     return false;
    }
  }
  return true;
 }

 //Function to find the nth prime number
 export function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
     count++;
    }
    num++;
  }
  return num - 1;
 }