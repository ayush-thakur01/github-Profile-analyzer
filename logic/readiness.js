function getInternshipReadiness(score) {
  if (score < 40) {
    return {
      level: "Not Ready",
      message:
        "This GitHub profile is not yet ready for internship applications. Focus on building consistency and complete projects."
    };
  }

  if (score < 65) {
    return {
      level: "Almost Ready",
      message:
        "You are close to being internship-ready. With better consistency and documentation, this profile can improve quickly."
    };
  }

  return {
    level: "Internship Ready",
    message:
      "This GitHub profile is strong and meets most expectations for internship-level roles."
  };
}

module.exports = { getInternshipReadiness };
