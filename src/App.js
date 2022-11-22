import "./App.css";


function App() {
  const movie = [
    {
      name: "FREE",
      cost: "0$/Month",
      des: "single user",
      des1: "5GB Storage",
      des2: "Unlimited Public Projects",
      des3: "Community Access",
      des4: "Unlimited Private Projects",
      des5: "Dedicated Phone Support",
      des6: "Free Subdomain",
      des7: "Monthly Status Reports"
    }, {
      name: "PLUS",
      cost: "49$/Month",
      des: "5 user",
      des1: "50GB Storage",
      des2: "Unlimited Public Projects",
      des3: "Community Access",
      des4: "Unlimited Private Projects",
      des5: "Dedicated Phone Support",
      des6: "Free Subdomain",
      des7: "Monthly Status Reports"
    }, {
      name: "PRO",
      cost: "149$/Month",
      des: "muilt user",
      des1: "150GB Storage",
      des2: "Unlimited Public Projects",
      des3: "Community Access",
      des4: "Unlimited Private Projects",
      des5: "Dedicated Phone Support",
      des6: "UNLIMITED Free Subdomain",
      des7: "Monthly Status Reports"
    }
  ];
  return (
    <div className="App">
      {movie.map((user, i) => {
        return (
          <>
            {/* <h4 className="plan">{user.name}</h4>
            <h2 className="prise">{user.cost}</h2>
            <h6 className="option">{user.des}</h6> */}
            <div key={i} className="user">
              <Usr name={user.name} cost={user.cost} des={user.des} des1={user.des1} des2={user.des2} des3={user.des3} des4={user.des4} des5={user.des5} des6={user.des6} des7={user.des7} />
              <div class="d-grid">
                <a href="#" class="button"><b>view more</b></a>
              </div>

            </div>
          </>
        )
      })}



    </div>
  )
}
function Usr({ name, cost, des, des1, des2, des3, des4, des5, des6, des7 }) {
  return (
    <div>
      <h4 className="plan">{name}</h4>
      <h2 className="prise">{cost}</h2>
      <div className="option">{des}</div>
      <div className="option">{des1}</div>
      <div className="option">{des2}</div>
      <div className="option">{des3}</div>
      <div className="option">{des4}</div>
      <div className="option">{des5}</div>
      <div className="option">{des6}</div>
      <div className="option">{des7}</div>
      {/* <div className="button">
        <button type="button">view more</button>
      </div> */}

    </div>
  )
}
export default App;