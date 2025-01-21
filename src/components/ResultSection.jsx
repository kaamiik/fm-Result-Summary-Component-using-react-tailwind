function ResultSection({ data }) {
  const calculateScore = (data) => {
    if (!data || data.length === 0) return 0;
    let totalScore = 0;
    for (let i = 0; i < data.length; i++) {
      totalScore += parseInt(data[i].score);
    }
    return Math.round(totalScore / data.length);
  };

  const calculateGrade = (score) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Great';
    if (score >= 50) return 'Average';
    return 'Needs Improvement';
  };

  const calculatePercentage = (score) => {
    if (score >= 90) return 90;
    if (score >= 70) return 65;
    if (score >= 50) return 45;
    return 20;
  };

  const score = calculateScore(data);
  const grade = calculateGrade(score);
  const percentage = calculatePercentage(score);

  return (
    <section
      aria-labelledby="result"
      className="flex flex-col gap-6 rounded-b-3xl bg-gradient-1 px-14 pb-10 pt-6 text-center font-bold text-light-blue drop-shadow-3xl md:gap-7 md:rounded-3xl md:pb-11 md:pt-9 md:drop-shadow-none"
    >
      <h1 id="result" className="text-lg sm:text-2xl">
        Your Result
      </h1>
      <div className="mx-auto grid aspect-square w-fit place-content-center rounded-full bg-gradient-2 px-10 md:mt-2 md:px-16">
        <p className="text-5xl font-extrabold text-white md:text-7xl">
          {score}
        </p>
        <p className="text-light-blue/50">of 100</p>
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-2xl text-white md:text-3xl">{grade}</p>
        <p className="text-balance font-medium">
          {`You scored higher than ${percentage}% of the people who have taken
          these tests.`}
        </p>
      </div>
    </section>
  );
}

export default ResultSection;
