import "./App.css";

function App() {
  // const [users, setUsers] = useState();
  fetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      <h2>Users</h2>
      <section>
        <input type="search" placeholder="Search users" />
      </section>
    </>
  );
}

export default App;
