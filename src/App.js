import "./App.css";

const name = "nazar";
const url = "https://www.youtube.com/";
const a = 3;
const b = 5;
const color = ["Червоний", "Синій", "Зелений"]

function App() {
  return (
    <>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img width={400} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg"} alt={"cat"} />
      <a href={url}>youtube</a>
      <p>{a + b}</p>
      <ul>
        {
          color.map((item, id) => {
            return (
              <li key={id}>
                <p>{item}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default App;