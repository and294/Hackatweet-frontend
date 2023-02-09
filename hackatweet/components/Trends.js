import styles from "../styles/Trends.module.css";

function Trends() {
  return (
    <>
      <h1 className={styles.trendTitle}>Trends</h1>
      <div className={styles.trendContainer}>
        <div className={styles.trend}>
          <h4>#hackatweet</h4>
          <p style={{ color: "gray" }}>2 Tweets</p>
        </div>
      </div>
    </>
  );
}

export default Trends;
