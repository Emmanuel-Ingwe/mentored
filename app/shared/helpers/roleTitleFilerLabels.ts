export const roleTitleFilerLabels = (topMentors: User[]) => {
  if (!topMentors.length) {
    return [];
  }
  const jobCounts = topMentors?.reduce((counts, mentor) => {
    const jobTitle = mentor.jobTitle;
    if (jobTitle) {
      // @ts-expect-error can access object via string
      counts[jobTitle] = (counts[jobTitle] || 0) + 1;
    }
    return counts;
  }, {});

  const jobCountsArray =
    jobCounts &&
    Object.entries(jobCounts).map(([jobTitle, count]) => {
      return {
        count: count as number,
        jobTitle,
      };
    });
  return jobCountsArray;
};
