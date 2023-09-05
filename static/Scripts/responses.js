// This function takes user input, processes it, and returns a bot response.
function getBotResponse(input) {
	// Remove special characters and leading/trailing spaces from the input.
	input = input.replace(/[^\w\s]|_/g, '').trim();

	// Split the cleaned input into an array of words.
	const userTextParse2 = input.split(" ");

	// Define keywords that the bot can recognize.

	const keywords = [
		"hello",
		"hi",
		"hey",
		"how", //are you
		"what's", // up 
		"goodbye",
		"thanks",
		"help",
		"information",
		"support",
		"feedback",
		"account",
		"login",
		"register",
		"password",
		"reset",
		"pricing",
		"features",
		"demo",
		"trial",
		"buy",
		"cancel",
		"upgrade",
		"downgrade",
		"payment",
		"shipping",
		"tracking",
		"return",
		"refund",
		"order",
		"status",
		"availability",
		"schedule",
		"book",
		"appointment",
		"number",
		"phone",
		"contact",
		"email",
		"chat",
		"social",
		"marketing",
		"partnership",
		"job",
		"career",
		"internship",
		"about",
		"team",
		"blog",
		"news",
		"faq",
		"terms",
		"privacy"
	];

	// Define responses corresponding to the keywords.

	const responses = [
		"Hello! How can I assist you today?",
		"Hello! How can I assist you today?",
		"Hello! How can I assist you today?",
		"I'm doing well, thanks for asking! How about you?",
		"Not much, just here to help. What can I do for you?",
		"Goodbye! Have a great day.",
		"You're welcome! Let me know if you need any further assistance.",
		"Sure, I'd be happy to help. What do you need assistance with?",
		"What information are you looking for?",
		"I'm here to support you. How can I help?",
		"Thanks for your feedback. We appreciate it!",
		"What do you need help with regarding your account?",
		"Please login to access your account.",
		"To register for an account, please click on the registration button.",
		"What do you need help with regarding your password?",
		"Please follow the instructions to reset your password.",
		"Here's our pricing information.",
		"Here are the features we offer.",
		"Would you like a demo of our product?",
		"Would you like to try our product for free?",
		"Are you ready to make a purchase?",
		"Please let us know if you'd like to cancel your subscription.",
		"Would you like to upgrade your subscription?",
		"Would you like to downgrade your subscription?",
		"Please provide your payment information.",
		"Here's your shipping information.",
		"Please use the tracking number to track your order.",
		"Please follow the instructions to return your order.",
		"Please allow some time for your refund to be processed.",
		"Here's your order information.",
		"What's the status of your order?",
		"Is the item currently available?",
		"What's the best time for you to schedule an appointment?",
		"Please book an appointment using our online system.",
		"How can we contact you?",
		"Call us at: 718-570-0644",
		"Call us at: 718-570-0644",
		"You can reach us at inquiry@techincubatorqc.com",
		"You can reach us at inquiry@techincubatorqc.com",
		"How can we assist you on social media?",
		"How can we help with your marketing efforts?",
		"What kind of partnership are you interested in?",
		"Are you interested in a job opportunity?",
		"What kind of career are you interested in?",
		"Are you interested in an internship opportunity?",
		"Here's some information about our company.",
		"Here's our team's contact information.",
		"Here's our latest blog post.",
		"Here's our latest news update.",
		"Here are some frequently asked questions.",
		"Here are our terms and conditions.",
		"Here's our privacy policy."
	];




	// Iterate through the keywords and check if any of them are in the user's input.
	for (let i = 0; i < keywords.length; i++) {
		if (userTextParse2.includes(keywords[i])) {
			// If a keyword is found, return the corresponding response.
			return responses[i];
		}
	}

	// If no keyword is matched, return a default "I don't understand" response.
	return "I don't understand";

	// Scroll to the bottom of the chat bar (assuming there's an HTML element with id "chat-bar-bottom").
	document.getElementById("chat-bar-bottom").scrollIntoView(true);

}