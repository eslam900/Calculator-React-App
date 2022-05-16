
export const Buttons = [
  "AC",
  "C",
  "/",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "%",
  "=",
];

function Button({ getValue }) {
  return Buttons.map((btn, idx) => (
    <button className="day" key={idx} value={btn} onClick={(e) => getValue(e.target.value)}>
      {btn}
    </button>
  ));
}

export default Button;
