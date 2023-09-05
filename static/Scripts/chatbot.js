// Collapsible

window.sessionStorage;
var coll = document.getElementsByClassName("collapsible");
const form1 = document.querySelector('#userInput');

var AllsubPage = ["service", "services", "virtual", "membership", "memberships", "co", "working", "request", "requests", "payment", "payments",
	"programs", "program", "founders", "fellowship", "fellowships", "certificate", "certificates", "internship", "internships",
	"more", "course", "courses", "inquiry", "inquiries", "archieve", "archieves", "newletter", "newsletter", "covid", "19",
	"social", "socials", "media", "linkedin", "facebook", "twitter", "instagram",
	"classes", "class", "Entrepreneurs", "Entrepreneur", "careers", "development", "events", "event", "upcoming"
];

var subPageKeywords = [
	["service", "assistance", "aid", "support", "help", "maintenance", "repair"],
	["services", "solutions", "offerings", "provisions", "facilities", "amenities", "features"],
	["virtual", "digital", "online", "remote", "cyber", "electronic", "web-based"],
	["membership", "member", "subscription", "registration", "admission", "join", "participation"],
	["memberships", "subscriptions", "enrollments", "registrations", "admissions", "participations", "affiliations"],
	["co", "collaborative", "co-working", "joint", "group", "collective", "united"],
	["working", "employment", "occupation", "job", "profession", "career", "vocation"],
	["request", "petition", "solicitation", "appeal", "demand", "entreaty", "plea"],
	["requests", "petitions", "solicitations", "appeals", "demands", "entreaties", "pleas"],
	["payment", "transaction", "settlement", "compensation", "reimbursement", "disbursement", "transmittal"],
	["payments", "transactions", "settlements", "compensations", "reimbursements", "disbursements", "transmittals"],
	["programs", "initiatives", "projects", "campaigns", "undertakings", "activities", "endeavors"],
	["program", "scheme", "system", "plan", "strategy", "method", "approach"],
	["founders", "originators", "creators", "pioneers", "innovators", "architects", "establishers"],
	["fellowship", "companionship", "association", "camaraderie", "comradeship", "friendship", "kinship"],
	["fellowships", "icorp", "camaraderies", "comradeships", "friendships", "kinships", "societies"], //
	["certificate", "diploma", "credential", "document", "testament", "testimonial", "attestation"],
	["certificates", "diplomas", "credentials", "documents", "testaments", "testimonials", "attestations"], //
	["internship", "apprenticeship", "intern", "traineeship", "placement", "job", "externship"],
	["internships", "apprenticeships", "interns", "traineeships", "placements", "jobs", "externships"],
	["more", "additional", "extra", "further", "supplementary", "complementary", "incremental"],
	["course", "programme", "curriculum", "syllabus", "module", "lesson", "lecture"],
	["courses", "programmes", "curricula", "syllabi", "modules", "lessons", "lectures"],
	["inquiry", "query", "question", "investigation", "examination", "probe", "inquisition"],
	["inquiries", "queries", "questions", "investigations", "examinations", "probes", "inquisitions"],
	["archive", "repository", "collection", "record", "database", "inventory", "catalogue"],
	["archives", "repositories", "collections", "records", "databases", "inventories", "catalogues"],
	["newsletter", "bulletin", "magazine", "journal", "periodical", "publication", "digest"],
	["newsletters", "bulletins", "magazines", "journals", "periodicals", "publications", "digests"],
	["covid", "coronavirus", "pandemic", "outbreak", "epidemic", "infection", "virus"],
	["19", "COVID-19", "coronavirus disease", "SARS-CoV-2", "novel coronavirus", "pandemic"],
	["social", "societal", "follow", "public", "collective", "shared", "group"],
	["socials", "follows", "follow", "parties", "meetups", "mixers", "hangouts"],
	["media", "press", "news", "journalism", "reporting", "communication", "broadcasting"],
	["linkedin", "professional network", "career platform", "business social network", "employment website", "job search engine", "work-related site"],
	["facebook", "social networking site", "online community", "virtual meeting place", "social media platform", "communication network", "online forum"],
	["twitter", "microblogging site", "social media service", "online news platform", "information network", "real-time messaging app", "social networking tool"],
	["instagram", "photo-sharing app", "image-focused social network", "visual communication platform", "picture-sharing website", "social media site", "online photo album"],
	["class", "category", "type", "group", "grade", "rank", "level"],
	["classes", "categories", "types", "groups", "grades", "ranks", "levels"],
	["event", "occasion", "happening", "function", "gathering", "meeting", "assembly"],
	["events", "occasions", "happenings", "functions", "gatherings", "meetings", "assemblies"], //
	["Entrepreneurs", "business", "innovation", "startups", "venture", "ambitious", "leadership"],
	["Entrepreneur", "risk-taker", "visionary", "founder", "self-starter", "innovator", "motivated"],
	["careers", "profession", "employment", "occupation", "job", "vocation", "work"],
	["development", "growth", "progress", "advancement", "evolution", "improvement", "expansion"],
	["upcoming", "events", "gatherings", "functions", "occasions", "festivities", "conferences"],


];

const KeywordUrlArray = [
	["reserve", "book", "secure", "room"],
	["regional", "i-corp", "local", "entrepreneurship"],
	["welovementors", "at", "tiqc", "mentorship"],
	["google", "career", "certificate", "scholarship"],
	["upcoming", "events", "forthcoming", "activities"],
	["workshops", "workshop", "entrepreneur", "learning"],
	["past", "classes", "previous", "workshops"],
	["people", "individuals", "persons", "humans"],
	["opportunities", "chances", "prospects", "possibilities"],
	["resource", "center", "information", "hub"],
	["learning", "academy", "education", "center"],
	["job", "board", "employment", "marketplace"],
	["donate", "contribute", "give", "support"],
	["visitor", "access", "request", "guest"],
	["cuny", "city", "university", "of"],
	["in2nyc", "international", "innovators", "initiative"],
	["directions", "location", "located", "queens"],
	["directions", "tech", "techincubator", "located"],
	["privacy", "policy", "data", "protection"],
	["subscribe", "join", "sign", "newsletter"],
	["resources", "resource", "content", "information"]
];

const urlsArray = ['https://techincubatorqc.com/virtual-internship-program/',
	'https://techincubatorqc.com/wp-content/uploads/2023/02/I-Corp-srping-2023.pdf',
	'https://techincubatorqc.com/welovementors/',
	'https://www.coursera.org/career-academy/programs/the-tech-incubator-a-google-learning-program-vi7am',
	'https://techincubatorqc.com/events1/',
	'https://techincubatorqc.com/classes-workshops-for-entrepreneurs/',
	'https://techincubatorqc.com/past-classes-workshops/',
	'https://techincubatorqc.com/people/',
	'https://techincubatorqc.com/learning-opportunities/',
	'https://techincubatorqc.com/resources/',
	'https://learn.techincubatorqc.com/',
	'https://jobs.technyc.org/companies',
	'https://qccommunity.qc.cuny.edu/pages/funds/tech-collectives-tiqc-fund',
	'https://techincubatorqc.com/visitor-request-for-campus-access/',
	'http://www.cuny.edu/',
	'http://www.in2.nyc',
	'https://www.qc.cuny.edu/a/directions/',
	'https://www.google.com/maps/place/Tech+Incubator+at+Queens+College/@40.734209,-73.817021,15z/data=!4m6!3m5!1s0x89c2605dd7ddee6b:0x4db6269f55795624!8m2!3d40.7342085!4d-73.8170209!16s%2Fg%2F11ddwj53qq?hl=en-US&entry=ttu',
	'http://www.cuny.edu/website/privacy-policy/',
	'https://techincubatorqc.us16.list-manage.com/subscribe?u=276a4e33331d7c148761ba2ca&id=aaadb76d9c',
	'https://techincubatorqc.com/resources/'
];

var SubPage = ["services", "programs", "people", "donate", "course"];

var services = ["Membership", "Co-Working Services", "Service Request", "Payment", "Co-Payment"];
var servicesLinks = ["https://techincubatorqc.com/virtual-membership/",
	"https://techincubatorqc.com/co-working/",
	"https://techincubatorqc.com/service-request/",
	"https://techincubatorqc.com/payment/",
	"https://techincubatorqc.com/co-working/"

];

var programs = ["Founders Fellowship", "Google Certificate Program", "Internships", "I-Corp Program"];
var programsLinks = ["https://platform.younoodle.com/competition/founders_fellowship_program",
	"https://www.coursera.org/career-academy/programs/the-tech-incubator-a-google-learning-program-vi7am",
	"https://techincubatorqc.com/virtual-internship-program/",
	"https://techincubatorqc.com/wp-content/uploads/2023/02/I-Corp-srping-2023.pdf",
]
var more = ["Courses", "Inquiry", "NewLetter Archieve", "Covid 19 Related"];
var moreLinks = ["https://learn.techincubatorqc.com/",
	"https://techincubatorqc.com/inquiry/",
	"https://us16.campaign-archive.com/home/?u=276a4e33331d7c148761ba2ca&id=aaadb76d9c",
	"https://techincubatorqc.com/covid-19-information/"
]
var SocialMedia = ["Linkedin", "Facebook", "Twitter", "Instagram"];
var SocialMediaLinks = ["https://www.linkedin.com/company/tiqc/",
	"https://www.facebook.com/QCTechIncubator",
	"https://twitter.com/QCTechIncubator",
	"https://www.instagram.com/qctechincubator/",

];
var Classes = ["Upcoming Events", "Classes for Entrepreneur", "Classes for Career Devlelopment", "Past Classes"];
var ClassesLinks = ["https://techincubatorqc.com/events1/",
	"https://techincubatorqc.com/classes-workshops-for-entrepreneurs/",
	"https://techincubatorqc.com/classes-workshops-for-career-development/",
	"https://techincubatorqc.com/past-classes-workshops/"
]


var contactform = ["representative", "employee", "person", "someone", "staff", "operator", "support", "specialist"];

// Initialize variables
let BotstorageCount = 97;
let storageCount = 65;
let storedMessages2;

// Add click event listeners to elements with the class 'coll'
for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			sessionStorage.setItem("Close", "true");
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
			sessionStorage.setItem("Close", "false");
		}
	});
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
	var content = document.querySelector(".content");
	// Check sessionStorage for the "Close" flag and adjust element visibility accordingly
	if (sessionStorage.getItem("Close") == "true") content.style.maxHeight = null;
	else if (sessionStorage.getItem("Close") == "false") content.style.maxHeight = content.scrollHeight + "px";
});

// Function to get the current time in HH:MM format
function getTime() {
	let today = new Date();
	hours = today.getHours();
	minutes = today.getMinutes();
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	let time = hours + ":" + minutes;
	return time;
}

// Function to display the first bot message
function firstBotMessage() {
	let firstMessage = "Hi, How can I help you?"
	document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
	let time = getTime();
	$("#chat-timestamp").append(time);
	document.getElementById("userInput").scrollIntoView(false);
}

// Call the function to display the first bot message
firstBotMessage();

// Function to append a list of items to the chatbox
function appendList(arraylist, arraylistLinks) {
	var sets = 0;
	for (let j = 0; j < arraylist.length; j++) {
		let botHtml = '<p class="botText1"><span>' + '<a href="' + arraylistLinks[j] + '"class="BotLink">' + arraylist[j] + '</a> </span></p>';
		storedMessages2 = botHtml;
		if (sessionStorage.getItem("k") != null) storageCount = sessionStorage.getItem("k");
		sessionStorage.setItem(String.fromCharCode(storageCount), storedMessages2);
		storageCount++;
		sets++;
		sessionStorage.setItem("k", storageCount);
		$("#chatbox").append(botHtml);
		if (j == arraylist.length - 1) sessionStorage.setItem(String.fromCharCode(storageCount), "QUIT");
		storageCount++;
	}
	if (storageCount % 2 == 0) storageCount++;
}

let ContactTrigger = 0;

// Function to handle user input and provide responses
function getHardResponse(userText) {
	userText = userText.replace(/[^\w\s]|_/g, '').trim();
	let ResponseIsMade = false;
	const userTextParse1 = userText.split(" ");
	// Check if specific keywords are present in the user's input and perform actions accordingly
	if (userTextParse1.includes("people")) location.href = "https://techincubatorqc.com/people/";
	if (userTextParse1.includes("donate")) location.href = "https://qccommunity.qc.cuny.edu/pages/funds/tech-collectives-tiqc-fund";

	for (let i = 0; i < userTextParse1.length; i++) {
		if (contactform.includes(userTextParse1[i].toLowerCase()) == true) {
			// Display a message about not being able to provide a representative and show a contact form
			let botHtml = '<p class="botText"><span> Unfortunately, we can\'t get you a representative at this time, but if you leave your contact information, we will get back to you.</span></p>';
			$("#chatbox").append(botHtml);

			botHtml = '<style>' +
				'#form {' +
				'transition: all 1.0s ease;' +
				'}' +
				'#checkmark {' +
				'transition: all 2.0s ease;' +
				'}' +
				'</style>' +
				'<form id="form2">' +
				'<input type="" placeholder="Name" name="entry.1972578318"><br>' +
				'<input type="email" placeholder="Email address" name="entry.1763392573"><br>' +
				'<input type="text" placeholder="Message" name="entry.516327284"><br>' +
				'<input type="submit" value="Submit"><br>' +
				'</form>' +
				'<div id="checkmark" style="display: none;">' +
				'<p class="botText1"><span> Confirmed, we will reach out as soon as possible.</span></p>' +
				'</div>' +
				'<script>' +
				'document.getElementById("form2").addEventListener("submit", function(event) {' +
				'event.preventDefault();' +
				'var formData = new FormData(event.target);' +
				'var request = new XMLHttpRequest();' +
				'request.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSePhcQPUZ2Gv7m65cOLwuChCMnaM5UU4ARumZNS7mzrU1OfaQ/formResponse");' +
				'request.send(formData);' +
				'document.getElementById("form2").style.display = "none";' +
				'document.getElementById("checkmark").style.display = "block";' +
				'});' +
				'</script>';
			$("#chatbox").append(botHtml);
			botHtml = '';
			ResponseIsMade = true;
			break;
		} else {
            //Append various Sub Catogaries based on the key word typed
			for (let Lookup = 0; Lookup < subPageKeywords.length; Lookup++) {
				if (subPageKeywords[Lookup].includes(userTextParse1[i].toLowerCase())) {
					let index = Lookup;
					let botHtml = '<p class="botText"><span>' + "We Offer : " + '</span></p>';
					if (sessionStorage.getItem("k") != null) storageCount = sessionStorage.getItem("k");
					sessionStorage.setItem(String.fromCharCode(storageCount), "We Offer");
					storageCount++;
					sessionStorage.setItem("k", storageCount);

					$("#chatbox").append(botHtml);
					if (index <= 10) appendList(services, servicesLinks);
					if (index > 10 && index <= 19) appendList(programs, programsLinks);
					if (index > 19 && index <= 30) appendList(more, moreLinks);
					if (index > 30 && index <= 37) appendList(SocialMedia, SocialMediaLinks);
					if (index > 37) appendList(Classes, ClassesLinks);
					ResponseIsMade = true;
					break;
				}
			}
		}
		if (ResponseIsMade == true) break;
	}

	let max = 0;
	let closestmatch = 0;
	let linkIndex = -1;
    //If  keyword is not found, The program looks for the Link/Category that matches the input
	if (ResponseIsMade == false) {
		for (let row1 = 0; row1 < KeywordUrlArray.length; row1++) {
			for (let webArr = 0; webArr < userTextParse1.length; webArr++) {
				if (KeywordUrlArray[row1].includes(userTextParse1[webArr].toLowerCase())) closestmatch++;
			}
			if (closestmatch > max) {
				linkIndex = row1;
				max = closestmatch;
				closestmatch = 0;
			}
		}
		if (linkIndex >= 0) location.href = urlsArray[linkIndex];
		if (max > 0) ResponseIsMade = true;
	}
    //If program cant find closestMatch, Create a contact form to collect users information
	if (ResponseIsMade == false) {
		let botResponse = getBotResponse(userText.toLowerCase());
		if (sessionStorage.getItem("k") != null) storageCount = sessionStorage.getItem("k");
		let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
		sessionStorage.setItem(String.fromCharCode(storageCount), botResponse);
		sessionStorage.setItem("k", storageCount);

		if (botResponse.includes("understand")) {
			ContactTrigger = sessionStorage.getItem("Trigger");
			ContactTrigger++;
			sessionStorage.setItem("Trigger", ContactTrigger);
		}
		if (ContactTrigger == 2) {
			let botHtml = '<p class="botText"><span> Unfortunately, I don\'t understand, but you can leave a message, and we will get back to you shortly.</span></p>';
			$("#chatbox").append(botHtml);

			botHtml = '<style>' +
				'#form {' +
				'transition: all 1.0s ease;' +
				'}' +
				'#checkmark {' +
				'transition: all 2.0s ease;' +
				'}' +
				'</style>' +
				'<form id="form2">' +
				'<input type="" type="text" placeholder="Name" name="entry.1972578318"><br>' +
				'<input type="email" placeholder="Email address" name="entry.1763392573"><br>' +
				'<input type="text" placeholder="Message" name="entry.516327284"><br>' +
				'<input type="submit" value="Submit"><br>' +
				'</form>' +
				'<div id="checkmark" style="display: none;">' +
				'<p class="botText1"><span> Confirmed, we will reach out as soon as possible.</span></p>' +
				'</div>' +
				'<script>' +
				'document.getElementById("form2").addEventListener("submit", function(event) {' +
				'event.preventDefault();' +
				'var formData = new FormData(event.target);' +
				'var request = new XMLHttpRequest();' +
				'request.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSePhcQPUZ2Gv7m65cOLwuChCMnaM5UU4ARumZNS7mzrU1OfaQ/formResponse");' +
				'request.send(formData);' +
				'document.getElementById("form2").style.display = "none";' +
				'document.getElementById("checkmark").style.display = "block";' +
				'});' +
				'</script>';
			$("#chatbox").append(botHtml);
			botHtml = '';
		} else {
			let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
			$("#chatbox").append(botHtml);
		}
	}

	document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Function to get the user's input and process it
function getResponse() {
	let userText = $("#textInput").val();
	let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
	var storedMessages;
	userText = userText.replace(/[^\w\s]|_/g, '').trim();
	const userTextParse = userText.split(" ");
	$("#textInput").val("");
	$("#chatbox").append(userHtml);
	storedMessages = userText;
    //Store All messages so user can switch from page to page and the converstation wont dissapear
	if (sessionStorage.getItem("k") != null) storageCount = sessionStorage.getItem("k");
	if (sessionStorage.getItem(String.fromCharCode(storageCount)) == "QUIT") storageCount++;
	if (storageCount % 2 == 0) storageCount++;
	sessionStorage.setItem(String.fromCharCode(storageCount), storedMessages);
	storageCount++;
	sessionStorage.setItem("k", storageCount);

	document.getElementById("chat-bar-bottom").scrollIntoView(true);

	setTimeout(() => {
		getHardResponse(userText);
	}, 1000)
}

// Event listener for sending a message when the "Send" button is clicked
async function sendButton() {
	const messageInput = document.querySelector('#textInput');
	const message = messageInput.value;
	const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSexBrxAJjH1vei9dN8UfGBYy-44335H-Q2Bt7BgCO39JELBFA/formResponse';
	const formData = new FormData();
	formData.append('entry.1609194512', message);
	getResponse();
	await fetch(url, {
		method: 'POST',
		body: formData
	});
	messageInput.value = '';
}

// Press enter to send a message
$("#textInput").keypress(async function(e) {
	if (e.which == 13) {
		const messageInput = document.querySelector('#textInput');
		const message = messageInput.value;
		const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSexBrxAJjH1vei9dN8UfGBYy-44335H-Q2Bt7BgCO39JELBFA/formResponse';
		const formData = new FormData();
		formData.append('entry.1609194512', message);
		getResponse();
		await fetch(url, {
			method: 'POST',
			body: formData
		});
		messageInput.value = '';
	}
});