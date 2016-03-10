$(document).ready(function(){
  var quotes = ["There's no risk when you go after a dream. Theres a tremendous risk when you play it safe. - Bill Burr",
  "At the end of the day I say to myself, 'Did I make a difference?' I hope the answer is always yes. - Lenny Robinson",
  "Your future self is watching you right now through memories. - Anonymous",
  "They tried to bury us. They didn't know we were seeds. - Mexican Proverb",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. - Earl Nightingale",
  "Fear is wisdom in the face of danger. It is nothing to be ashamed of. - Sherlock",
  "Once you push yourself into something new, a whole new world of opportunities opens up. You will get hurt. But when you heal, you are somewhere you've never been. - Terry Crews",
  "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self. - Ernest Hemingway",
  "If I quit now, I will soon be back to where I started. When I started, I was desperately wishing to be where I am now. - Anonymous",
  "You are a ghost driving a meat coated skeleton made from stardust riding a rock floating through space. Fear nothing. - Anonymous",
  "When 99% of people doubt your idea, you're either gravely wrong or about to make history. - Scott Belsky",
  "Everybody says they're trying to get their piece of the pie. They don't realize that the world is a kitchen. You can make your own pie. - Terry Crews",
  "Embrace the grind, lower your shoulder, and keep driving through that motherfucker. Change will come. - Dwayne 'The Rock' Johnson",
  "If you don't make the time to work on creating the life you want, you're eventually going to be forced to spend a LOT of time dealing with a life you don't want. - Kevin Ngo",
  "In the face of such hopelessness as our eventual, unavoidable death, there it little sense in not at least TRYING to accomplish all your wildest dreams. - Kevin Smith",
  "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude. - Thomas Jefferson",
  "The world is changed by your example, not your opinion. - Paulo Coelho",
  "Only put off until tomorrow what you are willing to die having left undone. - Pablo Picasso",
  "Man cannot remake himself without suffering. For he is both the marble and the sculptor. - Alexis Carrel",
  "You don't have to be great to get started, but you have to get started to be great. - Zig Ziglar",
  "You'll never chance your life until you change something you do daily. The secret of your success is found in your daily routine. - John C. Maxwell",
  "It is impossible to live without failing at something, unless you live so cautiously that you might as well not lived at all, in which case you fail by default. - J.K. Rowling",
  "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.' - Muhammad Ali",
  "Doubt is only removed by action. If you're not working then that;s when doubt comes in. - Connor McGregor",
  "You don't learn to walk by following rules. You learn by doing and by falling over. - Richard Branson",
  "If you want to live a happy life, tie it to a goal, not to people or objects. - Albert Einstein",
  "Everyone who's ever had a shower has had a good idea. It's the people who dry off and do something about it that make a difference. Nolan Bushnell",
  "I survived because the fire inside me burned brighter than the fire around me. - Joshua Graham",
  "One of the most profound concepts in psychology is that when you do something, your emotions follow along behind. If you wait around to feel good or non-anxious, you'll be waiting forever. You need to start DOING, and then you will BECOME. - Sean Cooper",
  "",
  "Deep down, everyone is just faking it until they figure it out. And you will too, because you are awesome and everyone else sucks. - April Ludgate",
  "Who is happier man, he who has braved the storm of life and lived or he who has stayed securely on shore and merely existed? - Hunter S. Thompson",
  "Satisfaction lies in the effort, not in the attainment, full effort is full victory. - Mahatma Gandhi",
  "It was in the middle of winter that I finally discovered that there was within me an invincible summer. - Albert Camus"];

  // var backgroundColors = ['#F26D5B', '#C03546', '#3B8686', '#47B8E0', '#DF405A'];
  var backgroundColors = ['#ff7043', '#ffa726', '#ffca28', '#d4e157', '#9ccc65', '#66bb6a', '#26a69a', '#26c6da', '#29b6f6', '#42a5f5', '#5c6bc0', '#7e57c2', '#ab47bc', '#ec407a', '#ef5350'];
  
  var videos = ['https://www.youtube.com/watch?v=7dqzLxhwgas', 'https://www.youtube.com/watch?v=gXuSMjrx_e8'];

  var rand = quotes[Math.floor( Math.random() * quotes.length )];
  var index;
  $('blockquote').text(rand);  
  $('.quote').click(function(){
    index = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    $('body').css('background-color', index);
    $('#tagline').css('display', 'none');
    $('blockquote').text(quotes[Math.floor( Math.random() * quotes.length )]);
  });
  // $('.tweet').click(function(){
  //   $('.tweet a').attr('href','https://twitter.com/intent/tweet?text='+encodeURIComponent(rand) + "quote from: shootforthetop.com");
  // });

   $('.modal-trigger').leanModal();
   $('#videoStart').on('click', function(ev) {
    $("#votm")[0].src += "?autoplay=1";
    ev.preventDefault();
 
  });

});