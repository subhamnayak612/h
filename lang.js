// translations and language management for p.html
const translations = {
  en: {
    questions: [
      "What’s your favorite color today?",
      "Do you prefer sunrise 🌅 or sunset 🌇?",
      "If you could eat one snack right now, what would it be?",
      "Would you rather listen to calm music 🎶 or energetic beats 🎧?",
      "One word that describes your mood right now?"
    ],
    messages: [
      "✨ You are doing great, take a deep breath.",
      "🌸 Relax, you’re exactly where you need to be.",
      "🌈 The best is yet to come.",
      "🚀 Small steps lead to big achievements."
    ],
    ui: {
      placeholder: "Type your answer here...",
      next: "Next",
      emptyAlert: "Please enter your answer 🙂",
      thankYou: "Thank you! 🌟"
    }
  },
  hi: {
    questions: [
      "आज आपका पसंदीदा रंग कौन सा है?",
      "क्या आप सूर्योदय 🌅 पसंद करते हैं या सूर्यास्त 🌇?",
      "अगर आप अभी एक नाश्ता खा सकते हैं, तो क्या होगा?",
      "क्या आप शांत संगीत 🎶 सुनना पसंद करेंगे या ऊर्जावान बीट्स 🎧?",
      "एक शब्द जो अभी आपके मूड का वर्णन करे?"
    ],
    messages: [
      "✨ आप अच्छी तरह कर रहे हैं, गहरी सांस लें।",
      "🌸 शांत हो जाइए, आप वहीं हैं जहाँ होना चाहिए।",
      "🌈 सबसे अच्छा आने वाला है।",
      "🚀 छोटे कदम बड़े उपलब्धियों की ओर ले जाते हैं।"
    ],
    ui: {
      placeholder: "अपना उत्तर यहाँ लिखें...",
      next: "आगे",
      emptyAlert: "कृपया अपना उत्तर दर्ज करें 🙂",
      thankYou: "धन्यवाद! 🌟"
    }
  },
  or: {
    questions: [
      "ଆଜି ଆପଣଙ୍କର ପ୍ରିୟ ରଙ୍ଗ କେଉଁଟି?",
      "ଆପଣ ସୂର୍ଯ୍ୟୋଦୟ 🌅 କିମ୍ବା ସୂର୍ଯ୍ୟାସ୍ତ 🌇 ବାଛିବେ?",
      "ଜଦି ଏହିଠାରେ ଏକ ନାସ୍ତା ଖାଇବାକୁ ପାଇଥାନ୍ତେ, କ'ଣ ଥାନ୍ତା?",
      "ଆପଣ ଶାନ୍ତ ସଙ୍ଗୀତ 🎶 କିମ୍ବା ଉତ୍ସାହଭରା ବିଟ୍ସ 🎧 ଶୁଣିବାକୁ ପସନ୍ଦ କରିବେ?",
      "ଏକ ଶବ୍ଦ ଯାହା ଏବେ ଆପଣଙ୍କର ମନୋଭାବକୁ ବର୍ଣ୍ଣନା କରେ?"
    ],
    messages: [
      "✨ ଆପଣ ଭଲ କରୁଛନ୍ତି, ଗଭୀର ସ୍ୱାସ ନିଅନ୍ତୁ।",
      "🌸 ଶାନ୍ତ ହୁଅନ୍ତୁ, ଆପଣ ସେଠାରେ ଅଛନ୍ତି ଯେଉଁଠାରେ ଥିବା ଆବଶ୍ୟକ।",
      "🌈 ସବୁଠାରୁ ଭଲ ଆସିବ।",
      "🚀 ଛୋଟ ପଦକ୍ଷେପ ବଡ଼ ସାଧନାକୁ ନେଉଛି।"
    ],
    ui: {
      placeholder: "ଉତ୍ତର ଏଠାରେ ଟାଇପ୍ କରନ୍ତୁ...",
      next: "ପରବର୍ତ୍ତୀ",
      emptyAlert: "ଦୟାକରି ଆପଣଙ୍କର ଉତ୍ତର ଦିଅନ୍ତୁ 🙂",
      thankYou: "ଧନ୍ୟବାଦ! 🌟"
    }
  }
};

let lang = 'en';
let current = 0;

function setLanguage(code) {
  lang = code;
  const t = translations[lang];
  const questionEl = document.getElementById('question');
  const answerEl = document.getElementById('answer');
  const nextBtn = document.getElementById('nextBtn');
  if (questionEl) questionEl.textContent = t.questions[current] || t.questions[0];
  if (answerEl) answerEl.placeholder = t.ui.placeholder;
  if (nextBtn) nextBtn.textContent = t.ui.next;
}

function nextQuestion() {
  const answerEl = document.getElementById('answer');
  const questionEl = document.getElementById('question');
  const app = document.getElementById('app');
  const t = translations[lang];
  const answer = answerEl.value.trim();
  if (!answer) { alert(t.ui.emptyAlert); return; }
  answerEl.value = '';
  current++;
  if (current < t.questions.length) {
    questionEl.textContent = t.questions[current];
  } else {
    showMessages();
  }
}

function showMessages() {
  const app = document.getElementById('app');
  const t = translations[lang];
  app.innerHTML = `<h2 class='message'>${t.ui.thankYou}</h2>`;
  let i = 0;
  const interval = setInterval(() => {
    if (i < t.messages.length) {
      app.innerHTML += `<p class='message'>${t.messages[i]}</p>`;
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => { window.location.href = 'https://mindforest-connect.lovable.app/'; }, 3000);
    }
  }, 1500);
}

// expose for inline event handlers
window.setLanguage = setLanguage;
window.nextQuestion = nextQuestion;

// auto-initialize when loaded
window.addEventListener('DOMContentLoaded', () => setLanguage(lang));
