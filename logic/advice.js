function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateAdvice(breakdown) {
  let advice = [];

  // 👤 Profile weak
  if (breakdown.profile < 6) {
    advice.push(
      getRandom([
        "Improve your GitHub bio and profile picture to make a stronger first impression.",
        "Add a clear bio and professional profile picture to explain who you are as a developer.",
        "Your profile setup looks incomplete — a better bio can immediately improve credibility."
      ])
    );
  }

  // 📦 Low repository count
  if (breakdown.repos < 10) {
    advice.push(
      getRandom([
        "Add at least 2–3 real-world projects instead of tutorial-based repositories.",
        "Build and publish a few meaningful projects that demonstrate problem-solving skills.",
        "Your repository count is low — focus on quality projects rather than basic practice code."
      ])
    );
  }

  // 📝 Documentation weak
  if (breakdown.readme < 10) {
    advice.push(
      getRandom([
        "Improve README files by clearly explaining the problem, tech stack, and setup steps.",
        "Well-written README files can significantly improve how recruiters view your projects.",
        "Add proper documentation so others can understand and run your projects easily."
      ])
    );
  }

  // ⏳ Inconsistent activity
  if (breakdown.recentActivity < 5) {
    advice.push(
      getRandom([
        "Maintain daily contributions for the next two weeks, even if they are small changes.",
        "Consistency matters more than size — aim for regular commits to keep your profile active.",
        "Try following the 'no zero days' rule to rebuild consistency on GitHub."
      ])
    );
  }

  // ⭐ Low impact / legacy quality
  if (breakdown.legacyQuality < 5) {
    advice.push(
      getRandom([
        "Increase project impact by building applications with real-world use cases.",
        "Projects that receive stars, forks, or users tend to attract more recruiter attention.",
        "Focus on creating projects that solve real problems and can be shared publicly."
      ])
    );
  }

  // 🛡️ Safety net (strong profile)
  if (advice.length === 0) {
    advice.push(
      getRandom([
        "Your GitHub profile looks strong. Consider contributing to open-source projects next.",
        "You have a solid foundation — advanced projects or open-source work would be a great next step.",
        "This profile is well-structured. Focus on scaling impact through collaboration or open source."
      ])
    );
  }

  return advice;
}

module.exports = { generateAdvice };
