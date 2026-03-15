import { Link, useRouteError } from "react-router-dom";

export default function Error() {

    const err = useRouteError();
    console.log(err);
    

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>{err.status}</h1>
        <h2 style={styles.title}>Page Not Found</h2>
        <p style={styles.text}>
          Oops!  {err.data} 
        </p>

        <Link to="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4f46e5, #9333ea)",
    fontFamily: "sans-serif",
  },
  card: {
    background: "white",
    padding: "50px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    maxWidth: "420px",
  },
  code: {
    fontSize: "80px",
    margin: "0",
    color: "#4f46e5",
  },
  title: {
    margin: "10px 0",
  },
  text: {
    color: "#555",
    marginBottom: "25px",
  },
  button: {
    background: "#4f46e5",
    color: "white",
    padding: "12px 22px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};