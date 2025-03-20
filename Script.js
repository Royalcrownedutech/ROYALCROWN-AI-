document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        displayMessage("RoyalCrown AI 🤖: Welcome! I am your educational assistant. How can I help you today?", "ai");
    }, 1000);
});

// Handle Enter Key Press
document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    displayMessage("👤 " + userInput, "user");
    document.getElementById("user-input").value = "";
    document.getElementById("user-input").focus();

    setTimeout(() => {
        getAIResponse(userInput);
    }, 1000);
}

function displayMessage(message, sender) {
    let chatMessages = document.getElementById("chat-messages");
    let messageElement = document.createElement("div");
    let timestamp = document.createElement("span");

    messageElement.classList.add("message", sender);
    messageElement.textContent = message;

    timestamp.classList.add("timestamp");
    timestamp.textContent = getCurrentTime();

    messageElement.appendChild(timestamp);
    chatMessages.appendChild(messageElement);

    setTimeout(() => {
        messageElement.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
}

// AI Response Logic
function getAIResponse(userInput) {
    let chatMessages = document.getElementById("chat-messages");

    let typingElement = document.createElement("div");
    typingElement.classList.add("message", "ai");
    typingElement.textContent = "RoyalCrown AI is typing...";
    chatMessages.appendChild(typingElement);

    setTimeout(() => {
        typingElement.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);

    setTimeout(() => {
        chatMessages.removeChild(typingElement);

        let lowerInput = userInput.toLowerCase();
        let response = findBestResponse(lowerInput) || "🤔 I'm still learning. Please click on the blinking icon below to contact support for more assistance or report your request.";

        displayMessage("RoyalCrown AI 🤖: " + response, "ai");
    }, 1000);
}
const responses = {
    "what is royalcrown techverse": "🚀 RoyalCrown Techverse is a tech company specializing in AI, education, and software development.",
    "who owns royalcrown techverse": "👨‍💼 It is owned by Abodunrin Oluwafemi Eniola, a visionary entrepreneur in tech education.",
    "when was royalcrown techverse established": "📅 RoyalCrown Techverse was founded in 2025 with a mission to drive innovation.",
    "what does royalcrown techverse do": "🛠️ It develops AI tools, builds websites, and provides programming education.",
    "does royalcrown techverse offer ai development": "🤖 Yes! The company specializes in AI solutions, including chatbots and automation.",
    "can royalcrown techverse build websites": "🌐 Yes! The company develops professional websites for businesses and individuals.",
    "how can i contact royalcrown techverse": "📞 Reach out via their official website or customer support channels.",
    "does royalcrown techverse provide fintech services": "💰 Yes! The company plans to launch RoyalCrown Bank with full banking features.",
    "is royalcrown techverse hiring": "📢 Yes! They often seek skilled programmers and AI developers.",
    "what makes royalcrown techverse unique": "🚀 Innovation, AI-driven solutions, and a strong focus on education and technology.",

    // New Questions about Abodunrin Oluwafemi Eniola (RoyalCrown)
    "who is abodunrin oluwafemi eniola": "👨‍💼 He is the founder of RoyalCrown EduTech and RoyalCrown Techverse.",
    "what is the vision of abodunrin oluwafemi eniola": "🌍 His vision is to transform education using AI and technology.",
    "what inspired abodunrin oluwafemi eniola": "💡 He was inspired by the need to simplify education and improve learning experiences.",
    "is abodunrin oluwafemi eniola an engineer": "⚙️ Yes! He is a mechatronics engineering student and a tech entrepreneur.",
    "does abodunrin oluwafemi eniola develop AI": "🤖 Yes! He specializes in AI, software development, and educational technology.",
    "what projects has abodunrin oluwafemi eniola worked on": "🚀 He developed RoyalCrown AI, RoyalCrown EduTech, and RoyalCrown Bank.",
    "how can i learn from abodunrin oluwafemi eniola": "📖 Follow his tech platforms and enroll in RoyalCrown EduTech courses.",
    "is abodunrin oluwafemi eniola on social media": "📱 Yes! You can find him on LinkedIn, Twitter, and other platforms.",
    "where is abodunrin oluwafemi eniola from": "🌍 He is from Nigeria and is passionate about tech education.",
    "what is the mission of abodunrin oluwafemi eniola": "🎯 His mission is to make AI-driven learning accessible to everyone.",
    "successful student": "🎯 Success requires time management, focus, and consistent effort. Need study tips?",
    "hello": "👋 Hi! How can I assist you today?",
    "hi": "Hello! I am RoyalCrown AI, how can I assist you?",
    "help": "💡 I am here to assist with education-related inquiries. Ask me anything!",
    "how are you": "I am a chatbot, I have no feelings.",
    "ok": "Alright, I am always here for you.",
    "good": "Thanks for your feedback! If you have further suggestions, click on the icon below.",
    "thank you": "😊 You're welcome! Let me know if you need more help.",
    "thanks": "You're welcome! I’ll be here whenever you need me.",
    "edutech": "RoyalCrown EduTech is an institution of education and technology founded by Engr. Abodunrin Oluwafemi Eniola, a technopreneur and educational consultant.",
    "royalcrown chatbot": "👑 RoyalCrown Chatbot is an advanced educational AI designed to help with admission, course requirements, and academic-related queries.",
    "contact support": "📞 You can reach our support team at +2349052999251 for further assistance or click the icon below.",
    "premium service": "🌟 For premium support, please contact 09052999251 to get more personalized help.",
     "jamb subject combination": "📖 For JAMB, you need English and three related subjects based on your chosen course.",
    "what is your name": "I'm RoyalCrown AI, your educational chatbot.",
    "who created you": "I was created by RoyalCrown Techverse.",
    "what can you do": "I answer education-related questions.",
    "admission requirements": "🏫 Admission requirements vary by institution. Please check your desired school's official website.",
    "waec requirements": "📜 WAEC requires five credits including English and Mathematics, plus three related subjects.",
    "cgpa calculation": "📊 CGPA is calculated by dividing total grade points by total credit units. Want a calculator?",
    "medicine": "🩺 For Medicine, you need English, Biology, Chemistry, and Physics.",
    "engineering": "🔧 For Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "law": "⚖️ For Law, you need English, Literature in English, Government, and any other subject.",
    "economics": "💵 For Economics, you need English, Mathematics, Economics, and any other subject.",
    "political science": "🏛️ For Political Science, you need English, Government, Economics, and any other subject.",
    "social work": "👥 For Social Work, you need English, Government, Economics, and any other subject.",
    "zoology": "🦓 For Zoology, you need English, Biology, Chemistry, and Physics.",
    "botany": "🌿 For Botany, you need English, Biology, Chemistry, and Physics.",
    "geology": "🪨 For Geology, you need English, Mathematics, Chemistry, and Physics.",
    "meteorology": "🌦️ For Meteorology, you need English, Mathematics, Physics, and any other Science subject.",
    "marine biology": "🐠 For Marine Biology, you need English, Biology, Chemistry, and Physics.",
    "ecology": "🌍 For Ecology, you need English, Biology, Chemistry, and Physics.",
    "industrial physics": "⚛️ For Industrial Physics, you need English, Mathematics, Physics, and Chemistry.",
    "biotechnology": "🧬 For Biotechnology, you need English, Biology, Chemistry, and Physics.",
    "genetics": "🧪 For Genetics, you need English, Biology, Chemistry, and any other Science subject.",
    "forensic science": "🔬 For Forensic Science, you need English, Biology, Chemistry, and Physics.",
    
    // Health & Medical Sciences (Additional)
    "optometry": "👓 For Optometry, you need English, Biology, Chemistry, and Physics.",
    "veterinary medicine": "🐾 For Veterinary Medicine, you need English, Biology, Chemistry, and Physics.",
    "dietetics and nutrition": "🥦 For Dietetics and Nutrition, you need English, Biology, Chemistry, and any other Science subject.",
    "audiology": "👂 For Audiology, you need English, Biology, Chemistry, and Physics.",
    "speech therapy": "🗣️ For Speech Therapy, you need English, Biology, and any other two Science subjects.",
    
    // Environmental & Earth Sciences
    "surveying and geoinformatics": "🌍 For Surveying and Geoinformatics, you need English, Mathematics, Physics, and any other subject.",
    "geography": "🗺️ For Geography, you need English, Geography, and any other two Science subjects.",
    "hydrology": "💧 For Hydrology, you need English, Mathematics, Geography, and any other Science subject.",
    
    // Engineering & Technology (More Specializations)
    "petroleum engineering": "⛽ For Petroleum Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "agricultural engineering": "🚜 For Agricultural Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "marine engineering": "🚢 For Marine Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "biomedical engineering": "🧠 For Biomedical Engineering, you need English, Mathematics, Biology, and Physics.",
    "metallurgical engineering": "🔩 For Metallurgical Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "textile engineering": "👕 For Textile Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "wood products engineering": "🪵 For Wood Products Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "mining engineering": "⛏️ For Mining Engineering, you need English, Mathematics, Physics, and Chemistry.",
    
    // Business & Management (More)
    "entrepreneurship": "🚀 For Entrepreneurship, you need English, Mathematics, Economics, and any other subject.",
    "cooperative economics and management": "👥 For Cooperative Economics and Management, you need English, Mathematics, Economics, and any other subject.",
    "transport management": "🚛 For Transport Management, you need English, Mathematics, Economics, and any other subject.",
    
    // Social Sciences (More)
    "peace and conflict resolution": "✌️ For Peace and Conflict Resolution, you need English, Government, and any other two subjects.",
    "public administration": "🏛️ For Public Administration, you need English, Government, Economics, and any other subject.",
    "development studies": "📈 For Development Studies, you need English, Economics, and any other two subjects.",
    
    // Arts & Humanities (More)
    "philosophy": "📜 For Philosophy, you need English, Government, and any other two subjects.",
    "archaeology": "🏺 For Archaeology, you need English, History, and any other two subjects.",
    "religious studies": "✝️☪️ For Religious Studies, you need English, CRS/IRS, and any other two subjects.",
    "music": "🎵 For Music, you need English, Music, and any other two subjects.",
    "fine and applied arts": "🎨 For Fine and Applied Arts, you need English, Fine Arts, and any other two subjects.",
    "creative arts": "🎭 For Creative Arts, you need English, Literature in English, and any other two subjects.",
    
    // Education (More Specializations)
    "education and history": "📚 For Education and History, you need English, History, and any other two subjects.",
    "education and chemistry": "📚 For Education and Chemistry, you need English, Chemistry, and any other two Science subjects.",
    "education and physics": "📚 For Education and Physics, you need English, Physics, and any other two Science subjects.",
    "education and geography": "📚 For Education and Geography, you need English, Geography, and any other two subjects.",
    
    // Hospitality, Tourism & Hotel Management
    "hospitality and tourism management": "🏨 For Hospitality and Tourism Management, you need English, Mathematics, Economics, and any other subject.",
    "catering and hotel management": "🍽️ For Catering and Hotel Management, you need English, Mathematics, Economics, and any other subject.",
    
    // Media & Communication
    "broadcasting": "📺 For Broadcasting, you need English, Literature in English, Government, and any other subject.",
    "film production": "🎬 For Film Production, you need English, Literature in English, and any other two subjects.",
    "public relations": "📢 For Public Relations, you need English, Literature in English, and any other two subjects.",
    
    // Other Specialized Fields
    "sports science": "🏅 For Sports Science, you need English, Biology, and any other two Science subjects.",
    "library and information science": "📚 For Library and Information Science, you need English, Literature in English, and any other two subjects.",
    "fashion design and textiles": "👗 For Fashion Design and Textiles, you need English, Fine Arts, and any other two subjects.",
    "industrial design": "🏭 For Industrial Design, you need English, Fine Arts, and any other two subjects.",
    "security and intelligence studies": "🕵️‍♂️ For Security and Intelligence Studies, you need English, Government, and any other two subjects.",
    // Medicine & Health Sciences
    "medicine": "🩺 For Medicine, you need English, Biology, Chemistry, and Physics.",
    "nursing": "🏥 For Nursing, you need English, Biology, Chemistry, and Physics.",
    "pharmacy": "💊 For Pharmacy, you need English, Biology, Chemistry, and Physics.",
    "dentistry": "🦷 For Dentistry, you need English, Biology, Chemistry, and Physics.",
    "medical laboratory science": "🔬 For Medical Laboratory Science, you need English, Biology, Chemistry, and Physics.",
    "physiology": "⚕️ For Physiology, you need English, Biology, Chemistry, and Physics.",
    "radiography": "📸 For Radiography, you need English, Biology, Chemistry, and Physics.",
    "anatomy": "🦴 For Anatomy, you need English, Biology, Chemistry, and Physics.",
    "physiotherapy": "🏃 For Physiotherapy, you need English, Biology, Chemistry, and Physics.",
    "public health": "🏥 For Public Health, you need English, Biology, Chemistry, and any other Science subject.",
    
    // Engineering & Technology
    "engineering": "🔧 For Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "mechanical engineering": "⚙️ For Mechanical Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "electrical engineering": "⚡ For Electrical Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "civil engineering": "🏗️ For Civil Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "chemical engineering": "🧪 For Chemical Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "computer engineering": "💻 For Computer Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "software engineering": "🖥️ For Software Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "aerospace engineering": "✈️ For Aerospace Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "automobile engineering": "🚗 For Automobile Engineering, you need English, Mathematics, Physics, and Chemistry.",
    "mechatronics engineering": "🤖 For Mechatronics Engineering, you need English, Mathematics, Physics, and Chemistry.",

    // Science & Technology
    "computer science": "🖥️ For Computer Science, you need English, Mathematics, Physics, and any other Science subject.",
    "information technology": "📡 For Information Technology, you need English, Mathematics, Physics, and any other Science subject.",
    "biochemistry": "🧪 For Biochemistry, you need English, Biology, Chemistry, and Physics.",
    "microbiology": "🦠 For Microbiology, you need English, Biology, Chemistry, and Physics.",
    "industrial chemistry": "⚗️ For Industrial Chemistry, you need English, Chemistry, Mathematics, and any other Science subject.",
    "physics": "🔭 For Physics, you need English, Mathematics, Physics, and Chemistry.",
    "mathematics": "📊 For Mathematics, you need English, Mathematics, Physics, and any other Science subject.",
    "statistics": "📉 For Statistics, you need English, Mathematics, and any other two Science subjects.",
    
    // Business & Management
    "accounting": "💰 For Accounting, you need English, Mathematics, Economics, and any other subject.",
    "business administration": "📊 For Business Administration, you need English, Mathematics, Economics, and any other subject.",
    "banking and finance": "🏦 For Banking and Finance, you need English, Mathematics, Economics, and any other subject.",
    "marketing": "📢 For Marketing, you need English, Mathematics, Economics, and any other subject.",
    "insurance": "🛡️ For Insurance, you need English, Mathematics, Economics, and any other subject.",
    
    // Arts & Humanities
    "law": "⚖️ For Law, you need English, Literature in English, Government, and any other subject.",
    "political science": "🏛️ For Political Science, you need English, Government, Economics, and any other subject.",
    "mass communication": "📻 For Mass Communication, you need English, Literature in English, Government, and any other subject.",
    "theatre arts": "🎭 For Theatre Arts, you need English, Literature in English, and any other two subjects.",
    "linguistics": "🗣️ For Linguistics, you need English, Literature in English, and any other two subjects.",
    "international relations": "🌍 For International Relations, you need English, Government, and any other two subjects.",
    "history": "📜 For History, you need English, History, Government, and any other subject.",
    "english language": "📖 For English Language, you need English, Literature in English, and any other two subjects.",
    
    // Social Sciences
    "economics": "💵 For Economics, you need English, Mathematics, Economics, and any other subject.",
    "psychology": "🧠 For Psychology, you need English, Biology, and any other two subjects.",
    "sociology": "👥 For Sociology, you need English, Government, Economics, and any other subject.",
    "criminology": "🚔 For Criminology, you need English, Government, Economics, and any other subject.",
    "social work": "👥 For Social Work, you need English, Government, Economics, and any other subject.",
    
    // Agricultural & Environmental Sciences
    "agriculture": "🌾 For Agriculture, you need English, Biology, Chemistry, and Physics.",
    "forestry": "🌲 For Forestry, you need English, Biology, Chemistry, and Physics.",
    "food science": "🍽️ For Food Science, you need English, Biology, Chemistry, and Physics.",
    "environmental science": "🌱 For Environmental Science, you need English, Biology, Chemistry, and Physics.",
    "fisheries": "🐟 For Fisheries, you need English, Biology, Chemistry, and Physics.",
    "animal science": "🐄 For Animal Science, you need English, Biology, Chemistry, and Physics.",
    
    // Education
    "education and biology": "📚 For Education and Biology, you need English, Biology, and two other Science subjects.",
    "education and mathematics": "📚 For Education and Mathematics, you need English, Mathematics, and two other Science subjects.",
    "education and english": "📚 For Education and English, you need English, Literature in English, and any other two subjects.",
    "education and economics": "📚 For Education and Economics, you need English, Mathematics, Economics, and any other subject.",
    "education and government": "📚 For Education and Government, you need English, Government, and any other two subjects.",

    // Others
    "estate management": "🏠 For Estate Management, you need English, Mathematics, Economics, and any other subject.",
    "urban and regional planning": "🏙️ For Urban and Regional Planning, you need English, Mathematics, Geography, and any other subject.",
    "quantity surveying": "📏 For Quantity Surveying, you need English, Mathematics, Physics, and any other subject.",
    "architecture": "🏛️ For Architecture, you need English, Mathematics, Physics, and any other Science subject.",
    "register": "📝 To register, visit our official website or contact support.",
    "job opportunities": "💼 It depends on the field! Let me know your area of interest.",
    "nigeria": "🇳🇬 Nigeria is a country in West Africa with a strong educational sector.",
    "digital skills": "💻 Some valuable digital skills include programming, UI/UX design, AI development, and cybersecurity.",
     "jamb registration": "📝 We assist students with JAMB registration, ensuring a smooth process. Send us a WhatsApp message at +2349052999251 to get started.",
    "post utme registration": "🎓 Need help registering for Post UTME? We’ve got you covered! Message us on WhatsApp at +2349052999251.",
    "waec & neco registration": "📜 We handle WAEC & NECO registrations with guaranteed smooth processing. Contact us on WhatsApp at +2349052999251.",
    "jupeb & ijmb registration": "📚 Secure direct university admission through JUPEB & IJMB programs. Send us a message on WhatsApp at +2349052999251 for guidance.",
    "admission processing": "🏫 We assist with university, polytechnic, and college admissions, ensuring stress-free entry. Chat with us on WhatsApp at +2349052999251.",
    "change of institution & course": "🔄 Need to change your institution or course? We can help! Message us on WhatsApp at +2349052999251.",
    "o-level result upgrading": "📈 Upgrade your WAEC/NECO/GCE result legally and securely. Contact us at +2349052999251 on WhatsApp.",
    "transcript processing": "📑 Need your academic transcript fast? We provide secure and verified transcript processing. WhatsApp us at +2349052999251.",
    "scholarship applications": "🎓 Looking for scholarships? We help students apply for local and international scholarships. Send us a message on WhatsApp at +2349052999251.",
    "study abroad services": "✈️ Want to study abroad? We assist with applications, visas, and travel plans. Reach out on WhatsApp at +2349052999251.",
    "course & career counseling": "🔍 Not sure what to study? We provide expert career counseling. Chat with us on WhatsApp at +2349052999251.",
    "student loan assistance": "💰 Need a student loan? We provide guidance on securing educational funding. Contact us at +2349052999251 via WhatsApp.",
    "exam past questions & answers": "📖 Get JAMB, WAEC, NECO, and Post UTME past questions. Message us on WhatsApp at +2349052999251 to order.",
    "online tutoring": "🖥️ We offer one-on-one and group tutoring for JAMB, WAEC, and university courses. Enroll via WhatsApp at +2349052999251.",
    "university clearance & mobilization": "🎓 Need NYSC or school clearance? We assist with all clearance processes. Contact us on WhatsApp at +2349052999251.",
    "customized educational services": "📚 Have a special educational request? We provide personalized services. Send us a WhatsApp message at +2349052999251.",
    "online learning platform": "📚 Enroll in online courses, video tutorials, and educational resources on our website. Send us a message at +2349052999251 for details.",
    "certificate verification": "📜 Need to verify academic certificates? We help with authentication. Message us on WhatsApp at +2349052999251.",
    "school project & research assistance": "📖 We help students with research projects, assignments, and final-year projects. Chat with us at +2349052999251.",
    "essay & thesis writing": "✍️ Get expert assistance with essays, theses, and dissertations. Contact us on WhatsApp at +2349052999251.",
    "internship & industrial training placement": "🏢 We assist students in securing internship & IT placements. Reach out via WhatsApp at +2349052999251.",
    "cv & personal statement writing": "📄 Need a strong CV or personal statement? We provide expert writing services. Message us at +2349052999251.",
    "professional certification courses": "🎓 Upgrade your skills with professional certification courses. Contact us at +2349052999251.",
    "school fee payment assistance": "💳 We provide secure assistance with school fee payments. Chat with us on WhatsApp at +2349052999251.",
    "international exam registration": "🌍 Register for IELTS, TOEFL, SAT, GRE, and GMAT with ease. Send us a WhatsApp message at +2349052999251.",
    "computer training & digital skills": "💻 Learn coding, graphics design, and other digital skills. Contact us via WhatsApp at +2349052999251.",
    "teacher recruitment & job placement": "👨‍🏫 We connect teachers with schools and education job opportunities. Chat with us at +2349052999251.",
    "home lesson tutors": "🏠 Need a private tutor for your child? We provide home tutoring services. WhatsApp us at +2349052999251.",
    "online school management system": "🏫 We build online school portals for registration, grading, and management. Contact us at +2349052999251.",
    "e-learning content development": "📚 Need custom e-learning materials for your school? We provide expert services. WhatsApp us at +2349052999251.",
    "😊": "😃 I'm glad to see you're happy!",
    "😂": "🤣 Haha! I love a good laugh too!",
    "😢": "😔 Oh no! What's wrong? I'm here to help.",
    "👍": "👍 Great! Let me know if you need anything else.",
    "👎": "🙁 Oh, I'm sorry! How can i help you further.",
      "jamb registration deadline": "🗓️ The JAMB registration deadline varies each year. Stay updated by visiting the official JAMB website or contacting us at +2349052999251.",
    "federal university": "🏛️ Looking for federal universities in Nigeria? We provide a full list of accredited institutions. Message us on WhatsApp at +2349052999251.",
    "state university in nigeria": "🏛️ Need information on state universities in Nigeria? We’ve got you covered. Chat with us now at +2349052999251.",
    "private university in nigeria": "🏛️ Searching for private universities in Nigeria? Get a detailed list by reaching out to us on WhatsApp at +2349052999251.",
    "polytechnic in nigeria": "🏛️ Want to explore polytechnics in Nigeria? We can help! Contact us via WhatsApp at +2349052999251.",

    // JAMB FAQ
    "jamb registration": "📝 JAMB registration details are available! Message us on WhatsApp at +2349052999251 for guidance.",
    "cut-off mark": "🎯 Want to know the latest JAMB cut-off marks for universities and polytechnics? Chat with us at +2349052999251.",
    "jamb result": "📊 You can check your JAMB result online. Need help? Contact us on WhatsApp at +2349052999251.",
    "jamb admission letter": "📜 Printing your JAMB admission letter? Get step-by-step guidance by messaging us at +2349052999251.",
    "jamb admission status": "🔍 Check your JAMB admission status online. Need assistance? Contact us on WhatsApp at +2349052999251.",
    "jamb registration deadline": "⏳ Stay updated on the JAMB registration deadline! Chat with us at +2349052999251.",
    "jamb registration fee": "💰 The JAMB registration fee varies yearly. Message us at +2349052999251 for the latest amount.",
    "can i register jamb twice in a year?": "🚫 No, JAMB allows only one registration per candidate per year.",
    "can i change my jamb email?": "✉️ No, you cannot change the email used for JAMB registration.",
    "jamb exam date": "📅 Want to know the JAMB exam date? Contact us at +2349052999251.",
    "jamb exam centers": "📍 JAMB assigns exam centers based on your selected state. Check your JAMB slip for details.",
    "can i change my jamb exam center?": "❌ No, JAMB does not allow changes to exam centers after registration.",
    "jamb slip reprint": "🖨️ Need to reprint your JAMB slip? Get a step-by-step guide by messaging us at +2349052999251.",
    "how many subjects are in jamb?": "📚 JAMB consists of four subjects, including English, which is compulsory.",
    "jamb past questions": "📖 Get free JAMB past questions and answers! Message us at +2349052999251.",
    "how to check jamb score": "📊 You can check your JAMB score online via the official JAMB portal.",
    "how to retrieve jamb profile code": "📩 Lost your JAMB profile code? Send 'RESEND' to 55019 from your registered phone number.",
    "how to link email to jamb": "📧 To link your email to JAMB, send 'email youremail@gmail.com' to 55019.",
    "jamb recommended textbooks": "📚 Need the best textbooks for JAMB? Contact us at +2349052999251 for a list.",
    "how to change jamb course or institution": "🔄 To change your course or institution, visit the JAMB portal or a CBT center.",
    "can i use awaiting result for jamb?": "✅ Yes, you can register JAMB with an awaiting O'Level result.",
    "jamb syllabus": "📖 Download the latest JAMB syllabus by chatting with us at +2349052999251.",
    "how many times can i write jamb?": "♻️ You can write JAMB as many times as you wish until you gain admission.",
    "jamb cbt exam tips": "💡 Want to pass JAMB easily? Get expert CBT tips by messaging us at +2349052999251.",
    "how to check jamb admission list": "📜 Check your admission status via the JAMB CAPS portal.",
    "what is jamb caps?": "🖥️ JAMB CAPS is an online system that manages admission processes for institutions.",
    "how to accept or reject admission on jamb caps": "👍 Log in to JAMB CAPS, go to ‘Admission Status,’ and click ‘Accept’ or ‘Reject.’",
    "difference between jamb and post utme": "📌 JAMB is a national exam for tertiary admission, while Post UTME is a screening by specific universities.",
    "how to create jamb profile": "🆕 Register on the JAMB portal to create your profile before registration.",
    "how many questions are in jamb?": "❓ JAMB consists of 180 questions: English (60), and 3 other subjects (40 each).",
    "can i use two sittings for jamb?": "✅ Yes, some institutions accept two O'Level results for admission.",
    "jamb registration centers": "📍 Find accredited JAMB registration centers by chatting with us at +2349052999251.",
    "how to correct jamb registration mistakes": "⚠️ You can correct errors via the JAMB correction of data service.",
    "is jamb compulsory for university admission?": "🎓 Yes, JAMB is required for admission into Nigerian universities.",
    "how to recover lost jamb registration number": "📩 Recover your registration number via the JAMB portal or WhatsApp us at +2349052999251.",
    "how to upgrade jamb score": "🚨 Beware of fraudsters! JAMB scores cannot be upgraded.",
    "how to check jamb result with sms": "📩 Send 'RESULT' to 55019 using your JAMB registered phone number.",
    "jamb cut-off mark for universities": "🎯 Cut-off marks vary by institution. Message us at +2349052999251 for details.",
    "how to print jamb original result slip": "🖨️ Visit the JAMB portal and log in to print your original result slip.",
    "how to check jamb admission letter": "📜 Log in to JAMB CAPS to check and print your admission letter.",
    "jamb admission list for federal universities": "📋 Check the admission list on JAMB CAPS or the school’s portal.",
    "can i write jamb and direct entry together?": "❌ No, JAMB and Direct Entry are separate applications.",
    "how long does jamb result last?": "📅 JAMB results are valid for one year.",
    "can i register jamb with neco gce?": "✅ Yes, NECO GCE is accepted for JAMB registration.",
    "how to reset jamb password": "🔑 Reset your password via the JAMB portal or email support.",
    "how much is jamb correction of data?": "💰 The cost of correction of data varies. Contact us at +2349052999251 for the latest fee.",
    "how many times can i change my jamb institution?": "♻️ You can change your institution up to twice.",
    "can i use jamb to study abroad?": "🌍 No, JAMB is only valid for Nigerian institutions.",
    "jamb e-pin": "🏷️ Purchase JAMB e-PIN from accredited banks or online payment platforms.",
    "change jamb phone number": "📞 You cannot change your phone number after registration.",
    "jamb exam date and time?": "📅 Check your JAMB slip for your exam schedule.",
    " not yet admitted": "❌ Keep checking JAMB CAPS, or message us at +2349052999251 for help.",
    "miss my jamb exam": "⚠️ You must wait for the next JAMB registration cycle.",
    "jamb mock": "❌ No, JAMB mock is optional but useful for practice.",
    "jamb biometric verification issues": "🔍 Visit a JAMB office to resolve biometric issues.",
    "jamb regularization": "🛠️ Log in to the JAMB portal to track your regularization request.",
    // FAQ About RoyalCrown AI (The Chatbot)  
    "royalcrown ai": "🤖 RoyalCrown AI is an advanced educational chatbot designed to assist students with admission inquiries, CGPA calculations, and more.",  
    "what can royalcrown ai do": "🎓 RoyalCrown AI helps with admission requirements, university information, CGPA calculation, and educational guidance.",  
    "royalcrown ai": "🛠️ RoyalCrown AI was developed by ROYALCROWN Techverse, founded by Abodunrin Oluwafemi Eniola.",  
    "ai work": "💡 i processes user queries, checks predefined responses, and provides instant answers based on the available database.",  
    "is royalcrown ai free": "✅ Yes! The chatbot is free for basic inquiries. Premium access is available for detailed academic support.",  
    " predict my admission": "📊 No, but it can analyze admission requirements and give insights on your chances.",  
    "where can i access royalcrown ai": "🔗 You can chat with RoyalCrown AI on our website or WhatsApp.",  

    // FAQ About the Code & Development  
    "what programming language is used in royalcrown ai": "🖥️ RoyalCrown AI is built using HTML, CSS, JavaScript (frontend), and Python (Django backend).",  
    "who developed the royalcrown ai code": "👨‍💻 The AI was developed by Abodunrin Oluwafemi Eniola and the ROYALCROWN Techverse team.",  
    "can i get the source code for royalcrown ai": "❌ No, the source code is private and not available for public use.",  
    "is royalcrown ai fully ai-powered": "⚙️ It is a frontend-based chatbot with predefined responses and an admin-uploaded database.",  
    "how do i report a bug in the chatbot": "🐛 Report issues via WhatsApp at +2349052999251.",  

    // FAQ About ROYALCROWN Techverse & EduTech  
    "what is royalcrown techverse": "🏢 ROYALCROWN Techverse is a tech company focused on programming education, website development, and AI-powered solutions.",  
    "what is royalcrown edutech": "🎓 ROYALCROWN EduTech is an educational platform offering online courses, university guidance, and digital skills training.",  
    "who is the founder of royalcrown techverse": "👤 The founder is Abodunrin Oluwafemi Eniola.",  
    "what services does royalcrown offer": "🔹 Programming Training 🔹 AI Chatbots 🔹 Website Development 🔹 Digital Skills Training 🔹 Educational Support.",  
    "how can i join royalcrown techverse": "📞 Contact us on WhatsApp at +2349052999251 to learn about opportunities.",  

    // FAQ About Abodunrin Oluwafemi Eniola  
    "who is abodunrin oluwafemi eniola": "👨‍💻 He is a mechatronics engineering student, a full-stack developer, and the founder of ROYALCROWN Techverse.",  
    "what does abodunrin eniola do": "🛠️ He specializes in AI, Machine Learning, Full-Stack Development, and digital education.",  
    "is abodunrin eniola a programmer": "✅ Yes, he is a skilled programmer in Python, JavaScript, and web development.",  
    "how can i contact abodunrin eniola": "📧 You can reach him via ROYALCROWN Techverse at +2349052999251.",
};

// Find the best matching response based on keywords
function findBestResponse(input) {
    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }
    return null;
}

// Get the current time in HH:mm AM/PM format
function getCurrentTime() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12; // Convert to 12-hour format, and set 12 for midnight (0)
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hour}:${minutes} ${ampm}`;
}