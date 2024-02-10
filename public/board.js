const notesContainer = document.getElementById("todayNotesContent");
const encouragementContainer = document.getElementById("encouragementContent");

function createNote(uuid, content) {
  const note = document.createElement("button");

  note.addEventListener("click", () => {
    window.location.href = `/singlepost.html?uuid=${uuid}`;
  });
  note.innerHTML = content;
  note.classList.add("note");

  notesContainer.appendChild(note);
}

function createEncouragement(content) {
  const encouragement = document.createElement("button");

  encouragement.innerHTML = content;
  encouragement.classList.add("note");

  encouragementContainer.appendChild(encouragement);
}

const woe = `
You've got this!
Keep going, you're doing great!
Believe in yourself.
You're making progress, step by step.
Stay strong and resilient.
Your hard work will pay off.
Keep pushing forward, you're closer than you think.
You are capable of amazing things.
Trust in your abilities.
Challenges make you stronger.
Embrace the journey, not just the destination.
You are resilient and can overcome anything.
Keep your head up, better days are coming.
Every effort counts, no matter how small.
Stay positive and keep moving forward.
You're braver than you believe, stronger than you seem, and smarter than you think.
Your determination will lead you to success.
Don't give up, you're closer than you were yesterday.
Believe in the power of your dreams.
You have the strength to weather any storm.
Your potential is limitless.
Take one step at a time, you'll get there.
Stay focused, stay positive, stay strong.
Your perseverance is inspiring.
Keep believing, keep achieving.
The best is yet to come.
Success is within your reach.
You're on the right track, keep going.
Your efforts will pay off in the end.
You are unstoppable.
Your determination knows no bounds.
You're stronger than you think you are.
Your journey matters, every step counts.
Keep your eyes on the prize.
Your courage is commendable.
Challenges are opportunities in disguise.
You're closer to success than you think.
Trust the process, embrace the journey.
Your resilience is your greatest strength.
You're capable of achieving greatness.
You're not alone, I believe in you.
You have the power to create your own destiny.
Keep striving for excellence.
You are destined for greatness.
Your determination will carry you through.
Your dreams are valid and attainable.
You have everything you need to succeed.
Believe in your abilities, believe in yourself.
You're making a difference, keep going.
Your efforts will yield results.
You're a shining example of resilience.
Keep your chin up, brighter days are ahead.
Your persistence will lead to success.
You're capable of overcoming any obstacle.
Keep pushing your limits, you'll break through.
You're making progress, keep moving forward.
Your hard work will pay off, just keep going.
Stay positive, stay strong, stay focused.
Your dedication is unmatched.
Believe in the beauty of your dreams.
You're stronger than the challenges you face.
Keep the faith, miracles happen every day.
You're not defined by your setbacks, but by how you overcome them.
Keep your spirits high, you're on the right path.
Your determination will lead to triumph.
You're an inspiration to those around you.
Keep shining bright, the world needs your light.
Trust in your journey, trust in yourself.
You're capable of achieving anything you set your mind to.
Keep your head up, the best is yet to come.
Your perseverance is admirable.
Believe in yourself as much as I believe in you.
You're making a difference with every step you take.
Keep chasing your dreams, they're within reach.
Your resilience will carry you through any challenge.
You're stronger than you know, braver than you think.
Keep going, even when it gets tough.
Your determination is unmatched.
Believe in your inner strength, it will guide you.
Keep pushing forward, even when it's difficult.
You're capable of turning obstacles into opportunities.
Keep your dreams alive, they are your future.
Your hard work will lead to success.
Believe in the power of your dreams, they're worth pursuing.
You're closer to your goals than you realize.
Keep believing, keep achieving, keep shining.
Your resilience is inspiring.
Keep going, your efforts will pay off.
You have the courage to overcome any obstacle.
Trust in your journey, trust in yourself.
Your determination will pave the way for success.
Keep pushing forward, you're making progress.
Your strength and perseverance will see you through.
Believe in yourself, anything is possible.
Keep your eyes on the prize, you're almost there.
Your persistence will lead you to victory.
Keep striving for greatness, it's within your reach.
You're capable of achieving your wildest dreams.
Believe in the power of your dreams, they're within reach.
Keep going, the best is yet to come!
`
  .split("\n")
  .slice(1, 101);

(async () => {
  const messages = await getMessagesCreatedToday();
  for (const message of messages) {
    createNote(message["uuid"], message["content"]);
  }

  // Shuffle array
  const shuffled = woe.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 10);

  for (w of selected) {
    createEncouragement(w);
  }
})();
