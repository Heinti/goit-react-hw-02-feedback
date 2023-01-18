import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

// global styles uesd

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
    return(
        <section>
            <ul>
            <li key={"good"}>Good: {good}</li>
            <li key={"neutral"}>Neutral: {neutral}</li>
            <li key={"bad"}>Bad: {bad}</li>
            <li key={"total"}>Total: {total} </li>
            <li key={"positivePercentage"}>Positive feedback: {positivePercentage}%</li>
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    
}
