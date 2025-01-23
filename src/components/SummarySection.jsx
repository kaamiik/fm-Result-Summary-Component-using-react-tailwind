import Button from './Button';

function SummarySection({ data }) {
  return (
    <section
      aria-labelledby="summary"
      className="flex flex-col gap-6 rounded-e-3xl bg-white px-8 pb-8 pt-6 font-bold md:gap-7 md:px-10 md:pb-12 md:pt-10"
    >
      <h2 id="summary" className="text-lg text-dark-navy sm:text-2xl">
        Summary
      </h2>
      <ul className="flex flex-col gap-4">
        {data.map((item, index) => {
          let color;
          if (item.category === 'Reaction') {
            color = 'red';
          } else if (item.category === 'Memory') {
            color = 'yellow';
          } else if (item.category === 'Verbal') {
            color = 'green';
          } else if (item.category === 'Visual') {
            color = 'blue';
          } else {
            throw new Error('This category is undefined');
          }

          return (
            <li
              key={index}
              className={`flex items-center justify-between rounded-[12px] bg-${color}/5 p-4`}
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt="" />
                <p className={`text-${color}`}>{item.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <p>{item.score}</p>
                <span className="text-dark-navy/50"> / 100</span>
              </div>
            </li>
          );
        })}
      </ul>
      <Button>Continue</Button>
    </section>
  );
}

export default SummarySection;
