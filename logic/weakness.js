function getMainWeakness(breakdown) {
  let weakestKey = null;
  let lowestScore = Infinity;

  for (const key in breakdown) {
    if (breakdown[key] < lowestScore) {
      lowestScore = breakdown[key];
      weakestKey = key;
    }
  }

  const readableNames = {
    profile: "Profile Completeness",
    repos: "Project Count",
    readme: "Documentation",
    recentActivity: "Consistency / Recent Activity",
    legacyQuality: "Project Impact"
  };

  return {
    key: weakestKey,
    label: readableNames[weakestKey] || weakestKey,
    score: lowestScore,
    message: `Your biggest improvement area is ${readableNames[weakestKey]}.`
  };
}

module.exports = { getMainWeakness };
