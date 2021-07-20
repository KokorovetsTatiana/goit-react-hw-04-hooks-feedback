import { useEffect, useState } from 'react';

import Options from '../FeedbackOptions/FeedbackOptions';
import SectionTitle from '../Section/SectionTitle';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';


export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
	const [positive, setPositive] = useState('');

  const handleClick = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
	};
	
	useEffect(() => {
		setTotal(good + neutral + bad);
	}, [good, neutral, bad]);

	useEffect(() => {
		setPositive(((good / total) * 100).toFixed());
  }, [good, total]);
  
  return (
    <div>
        <SectionTitle title={'Please leave feedback'}>
          <Options
            onLeaveFeedback={handleClick}
          />
        </SectionTitle>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <SectionTitle title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        </SectionTitle>
      )}
      </div>    
  );
}
