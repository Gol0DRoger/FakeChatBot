// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],//Same Till here
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"],
  ["How can I deal with academic stress and pressure to excel?","academic stress","academic pressure"],
  ["What career path should I choose to find fulfillment and success?","Success","choose carrer"],
  ["I'm struggling to focus on my studies. What can I do?","Struggle","can't focus on studies","cannot study"],
  ["How can I build stronger friendships and social connections?","Freindship","Social group","no friends"],
  ["I'm having trouble communicating my feelings to others. What can I do?","I cannot express my feelings","feelings"],
  ["Am I wasting my life?","no love","no partner","Can somone hear me"],
  []
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot but I will be a virtual counsellor to all your mental health problems soon", "I am a bot. What creature are you?"],
  ["The one true God: JavaScript, Oneday I will have all the solutions to your most relevant problems."],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"],
  ["Dealing with academic stress requires balance. Prioritize self-care by maintaining a healthy sleep schedule, eating well, and exercising regularly. Break down tasks into manageable steps to avoid feeling overwhelmed. Practice time management by setting realistic goals and deadlines. Don’t hesitate to seek support from friends, family, or counselors when needed. Engage in relaxation techniques like deep breathing or meditation to reduce anxiety. Remember, it’s okay not to be perfect; focus on learning and growth rather than just grades. Keep perspective by recognizing that setbacks are part of the journey and don’t define your worth."]
  ["Choose a career that aligns with your passions, values, and strengths. Reflect on what excites you, what you’re naturally good at, and what you find meaningful. Research fields that match these interests, considering both long-term growth and work-life balance. Don’t be afraid to explore and experiment through internships, volunteering, or side projects. Seek advice from mentors or professionals in areas you’re curious about. Success comes from dedication, but fulfillment comes from loving what you do. Ultimately, choose a path that resonates with your purpose, where you can contribute positively and feel satisfied with your achievements."],
  ["To improve focus, create a structured study environment free from distractions. Break your study time into manageable sessions using techniques like Pomodoro, with short breaks in between. Prioritize tasks and set clear, achievable goals for each session. Stay organized with a study schedule, and tackle the most challenging subjects when your energy is highest. Limit multitasking and use tools to block distracting apps or websites. Stay hydrated, eat healthily, and get enough sleep to keep your mind sharp. If you find your mind wandering, gently bring your attention back to the task at hand. Practice mindfulness to enhance concentration."],
  ["Building stronger friendships and social connections involves being open, empathetic, and consistent. Start by showing genuine interest in others—listen actively and ask thoughtful questions. Be vulnerable and share your thoughts and experiences, allowing others to know you better. Participate in group activities or clubs where you can meet like-minded people. Make an effort to stay in touch regularly, even if it’s just a quick message or call. Show support during tough times and celebrate successes together. Be reliable and respectful of boundaries. Over time, these actions build trust and deepen connections, leading to stronger, more meaningful friendships."],
  ["To improve communication of your feelings, start by understanding your emotions. Reflect on what you're feeling and why. Use 'I' statements, such as 'I feel...' to express yourself clearly and take ownership of your emotions without blaming others. Practice active listening to create a supportive dialogue. Choose the right time and place for these conversations, ensuring both you and the other person are calm and open. If words are difficult, try writing down your thoughts first. Be patient with yourself; it takes time to build confidence in expressing emotions. Gradually, communication will become more natural and effective."],
  ["Feeling like you're wasting your life or lacking a loving partner can be deeply unsettling. It’s important to remember that everyone’s journey is unique and timing can be unpredictable. Reflect on what truly makes you happy and consider if you're pursuing those passions. Building a loving relationship often starts with self-love and understanding. Focus on your personal growth, hobbies, and connecting with others. Sometimes, a loving partner comes when you’re least expecting it, often when you’re fully engaged in your own life. Trust the process, stay open to possibilities, and keep nurturing yourself and your interests."]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on..,I will be a virtual counsellor to all your mental health problems soon",
  "Bro...",
  "I'm listening...",
  "I don't understand :/"
]