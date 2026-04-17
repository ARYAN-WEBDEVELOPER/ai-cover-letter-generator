export default function OutputBox({ text }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div className="output">
      <h3>Generated Cover Letter</h3>
      <p>{text}</p>
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
}