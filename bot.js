// Updated Responses object for Career Guidance and Academic Advice
const responses = {
  // Greetings
  "hi": [
    "Hi there! How can I help you with your career or studies today?",
    "Hello! I'm here to assist with your career and academic journey. What can I do for you?"
  ],
  
  // Career guidance
  "career options for cse": [
    "As a Computer Science Engineering (CSE) student, you have numerous career paths such as Software Developer, Data Scientist, Machine Learning Engineer, and IT Consultant.",
    "CSE offers exciting opportunities like Cloud Engineer, Cybersecurity Analyst, Full Stack Developer, and DevOps Engineer. The tech industry is booming with possibilities!"
  ],
  
  "career options for it": [
    "With an IT degree, you can explore roles like Software Engineer, Network Administrator, Systems Analyst, Database Manager, and more.",
    "IT careers range from Cybersecurity, Web Development, IT Consulting, to Data Engineering. The demand for IT professionals is on the rise!"
  ],
  
  // Academic Advice
  "how to balance studies and career preparation": [
    "Balancing studies and career preparation is key. Set a daily schedule, prioritize your assignments, and spend a few hours each week on coding practice.",
    "Create a timetable and allocate fixed times for both studying your subjects and preparing for job interviews or technical skills. Consistency is key!"
  ],

  "how to improve my grades": [
    "To improve your grades, focus on understanding core concepts rather than memorizing them. Take time to solve problems and practice coding regularly.",
    "Work on time management, break your study sessions into manageable chunks, and seek help from peers or mentors when needed."
  ],
  
  "what are the most important subjects for cse students": [
    "For CSE students, core subjects like Data Structures, Algorithms, Operating Systems, Database Management, and Networking are foundational.",
    "Understanding subjects like Discrete Mathematics, Object-Oriented Programming (OOP), and Computer Networks will also help you in the long run."
  ],

  "how to prepare for exams effectively": [
    "Effective exam preparation requires regular revision, solving previous year’s papers, and keeping up with your coursework throughout the semester.",
    "Focus on understanding the core concepts, make a study plan, and take breaks to avoid burnout. Practice mock exams to test your knowledge."
  ],
  
  // Motivation & Career Preparation
  "i need career advice": [
    "Start by identifying your interests and strengths. Whether it's software development, machine learning, or cybersecurity, choose a path that excites you.",
    "Explore internships to gain practical experience. Networking with professionals in your field can also open doors to various career opportunities."
  ],
  
  "i need job interview tips": [
    "To ace a job interview, focus on problem-solving, understanding algorithms, and practicing coding under time constraints.",
    "Research the company you're applying to, prepare for behavioral questions, and be ready to discuss your projects and achievements in detail."
  ],
  
  // Tech Knowledge
  "what is machine learning": [
    "Machine Learning is a subset of Artificial Intelligence that enables systems to learn from data and improve over time without explicit programming.",
    "To get started with Machine Learning, learn Python and study algorithms like linear regression, decision trees, and neural networks. Platforms like Coursera offer great introductory courses."
  ],
  
  "how to start with web development": [
    "Start by learning HTML, CSS, and JavaScript. Once you're comfortable with the basics, move on to frameworks like React.js, Angular, or Vue.js.",
    "Build simple projects like personal websites, blogs, or portfolio sites to get hands-on experience. Practice continuously and stay updated with new technologies."
  ],
  
  "what is data science": [
    "Data Science involves using algorithms, statistical models, and data analytics to extract insights from structured and unstructured data.",
    "To get started, learn programming languages like Python, tools like Pandas and NumPy, and concepts like data visualization, regression, and machine learning."
  ],

  "how to become a software developer": [
    "To become a software developer, start by learning programming languages such as Python, Java, or C++. Focus on mastering data structures, algorithms, and object-oriented design.",
    "Build projects, contribute to open-source, and stay updated on the latest software development trends. Also, work on understanding different software development methodologies like Agile."
  ],
  
  // Internship and Job Search
  "how to find internships in tech": [
    "Use platforms like LinkedIn, Glassdoor, or Internshala to find internships. Attend college career fairs and connect with industry professionals.",
    "Make sure to tailor your resume and cover letter for each application and don’t hesitate to reach out to professionals for guidance."
  ],
  
  "how to build a strong portfolio for tech jobs": [
    "A strong portfolio should showcase your coding projects, contributions to open-source, and any freelance work. Host your portfolio on GitHub or a personal website.",
    "Include detailed descriptions of each project, the technologies you used, and the problem-solving techniques you applied. Make sure your portfolio reflects your skills and interests."
  ],
  
  "what are the best companies to work for as a cse graduate": [
    "Top companies include tech giants like Google, Amazon, Microsoft, and Facebook. Startups in AI, Cloud Computing, and cybersecurity also provide great opportunities.",
    "Look for companies that match your interests—whether it’s software engineering, data science, or cybersecurity. Smaller companies and startups offer great exposure too!"
  ],
  
  // Extra Advice
  "how to get into cyber security": [
    "Start by learning the basics of networking, operating systems, and ethical hacking. Hands-on experience with tools like Kali Linux, Wireshark, and Metasploit is valuable.",
    "Certifications like CompTIA Security+, Certified Ethical Hacker (CEH), and CISSP will help you get recognized in the cybersecurity field."
  ],
  
  "how to build mobile apps": [
    "To build mobile apps, learn either Android (using Java or Kotlin) or iOS (using Swift) development. For cross-platform apps, consider using React Native or Flutter.",
    "Start by building simple apps like to-do lists, weather apps, or chat applications to gain practical experience. Understanding UX/UI design is also crucial for mobile apps."
  ],
  
  "how to improve coding skills": [
    "Improve coding skills by solving problems on coding platforms like LeetCode, Codeforces, or HackerRank. Focus on algorithms and data structures to strengthen your foundation.",
    "Building projects will also help solidify your coding knowledge. Consider contributing to open-source projects or developing your own app or website."
  ],

  "default": [
    "I’m here to help! Please ask me anything regarding your career or academic concerns.",
    "Feel free to ask any question. Whether it's about career options, academic advice, or tech industry insights, I'm here to assist you."
  ]
};

// Get a response based on user input
function getResponse(input) {
  input = input.toLowerCase();
  for (let key in responses) {
    if (input.includes(key)) return responses[key][Math.floor(Math.random() * responses[key].length)];
  }
  return responses.default[Math.floor(Math.random() * responses.default.length)];
}

// Append message to the chat container
function appendMessage(name, side, text) {
  const msgHTML = `
    <div class="msg ${side}">
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  document.getElementById("chat").insertAdjacentHTML("beforeend", msgHTML);
  const chatContainer = document.getElementById("chat");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Toggle the chatbot window visibility
function toggleChatbot() {
  const chatbot = document.getElementById("chatbotContainer");
  chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
}

// Handle form submission to send a message
document.querySelector(".msger-inputarea").addEventListener("submit", (e) => {
  e.preventDefault();
  const msgText = document.getElementById("userInput").value.trim();
  if (!msgText) return;
  appendMessage("You", "right-msg", msgText);
  document.getElementById("userInput").value = "";
  const botResponse = getResponse(msgText);
  setTimeout(() => {
    appendMessage("Career Bot", "left-msg", botResponse);
  }, 1000);
});

// Toggle the chatbot window visibility
function toggleChatbot() {
  window.location.href = '../../index.html'; // Redirect to home page when closing chatbot
}
