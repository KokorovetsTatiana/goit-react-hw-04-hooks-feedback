import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const Options = ({ onLeaveFeedback }) => {
  return (
    <>
      <ul className={css.buttons}>
        <li className={css.buttonItem}>
          <button
            className={css.feedbackButton}
            type="button"
            name="good"
            onClick={onLeaveFeedback}
          >
          Good
          </button>
        </li>
        <li className={css.buttonItem}>
          <button
            className={css.feedbackButton}
            type="button"
            name="neutral"
            onClick={onLeaveFeedback}
          >
          Neutral
          </button>
        </li>
        <li className={css.buttonItem}>
          <button
            className={css.feedbackButton}
            type="button"
            name="bad"
            onClick={onLeaveFeedback}
          >
          Bad
          </button>
        </li>
      </ul>
    </>
  );
};

Options.propTypes = {
	onLeaveFeedback: PropTypes.func.isRequired
};

export default Options;
