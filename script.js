    const quotes = [
      { quote: "Helping other people is the best way to make up for your mistakes.", author: "Kenshin Himura" },
      { quote: "If you don’t share someone’s pain, you can never understand them.", author: "Nagato" },
      { quote: "There’s no shame in falling down! True shame is to not stand up again!", author: "Shintaro Midorima" },
      { quote: "We need to stop living for others. From now on…Let’s live for ourselves!", author: "Historia Reiss" },
      { quote: "People who can’t throw something important away can never hope to change anything.", author: "Armin Arlert" },
      { quote: "When it comes to people you really love, you don’t care about yourself.", author: "Kurosawa Yamato" },
      { quote: "Never trust anyone too much, remember, the devil was once an angel.", author: "Ken Kaneki" },
      { quote: "Human strength lies in the ability to change yourself.", author: "Saitama" },
      { quote: "You can die anytime, but living takes true courage.", author: "Kenshin Himura" },
      { quote: "A person can change, at the moment when the person wishes to change.", author: "Haruhi Fujioka" },
      { quote: "Believe in your own power.", author: "Mikasa Ackerman" },
      { quote: "The moment you find the courage to give up your life for someone… would be the moment you understand love.", author: "Kenshin Himura" },
      { quote: "People cannot win against their loneliness.", author: "Gaara" },
      { quote: "I'll leave tomorrow's problems to tomorrow's me.", author: "Saitama" },
      { quote: "I refuse to let my fear control me anymore.", author: "Maka Albarn" },
      { quote: "Hatred and sorrow are power. They are yours to control. All you have to do is to turn them into strength and use that strength to move forward.", author: "Sebastian Michaelis" },
    ];

 function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

    const button = document.getElementById("quoteButton");
    button.addEventListener("click", function() {
    const quoteElement = document.getElementById("quote");
    quoteElement.style.display = "none"
    const newQuote = getQuote();
    quoteElement.textContent = `"${newQuote.quote}" - ${newQuote.author}`;
    quoteElement.style.display = "block";
    
    let audio = document.getElementById("sparkle");
    audio.play();
  });