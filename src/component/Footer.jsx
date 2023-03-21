export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        backgroundColor: "#0591af",
        color: "#fff",
        padding: "10px",
      }}
    >
      <p>@BMG Web Develop - 2023</p>

      <a href="https://github.com/slimdr" target="blank">
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/benigno-martinez-garcia-6304bb21b/" target="blank" style={{ marginLeft: '10px' }}>
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
    </footer>
  );
}
