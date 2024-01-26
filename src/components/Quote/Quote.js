import  classes from "./Quote.module.css";
const Quote = () => {
  return (
    <div className={classes.mainQuote}>
      <div className={classes.mainQuoteAuthor}>Albert Einstien</div>
      <div className={classes.mainQuoteDescription}>
        "Imagination is more important than knowledge." - "The only real
        valuable thing is intuition." -"Everything should be made as simple as
        possible, but not simpler."
      </div>
    </div>
  );
};

export default Quote;
