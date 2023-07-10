import "./Main.css";

export default function Main(props) {
  return (
    <div className="main-content">
      <div id="menu-button">
        <input
          type="checkbox"
          name=""
          id="checkbox-menu"
          onChange={(e) => {
            return props.onSetModeSb(e.target.checked);
          }}
        />
        <label htmlFor="checkbox-menu" id="menu-label">
          <div id="hamburger"></div>
        </label>
      </div>
    </div>
  );
}
