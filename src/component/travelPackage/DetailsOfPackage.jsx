import "./detailsOfPackage.css";

function DetailsOfPackage() {
  return (
    <div className="container">
      <div className="main-content">
        <div className="details">
          <div className="info-section">
            <div className="info-item">
              <span className="icon">&#128204;</span>
              <div>
                <h2>Places Covered:</h2>
                <p>Srinagar » Pahalgam » Gulmarg</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">&#128337;</span>
              <div>
                <h2>Duration:</h2>
                <p>4 Nights/5 Days</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">&#128178;</span>
              <div>
                <h2>Package Cost:</h2>
                <p>
                  Starting From: ₹ 10,800 <br /> (Customize this tour as per
                  your requirements)
                </p>
              </div>
            </div>
          </div>
          <h2 className="special-attentions-title">
            <span className="icon">&#9873;</span> Special Attentions
          </h2>
          <ul className="special-attentions">
            <li>Personal assistance by our representative at airports</li>
            <li>
              Special take care of senior citizens, physically challenged
              travelers, and kids
            </li>
            <li>
              At arrival, you will get a kit of your complete tour documents
            </li>
          </ul>
        </div>
        <h2>Tour Description</h2>
        <p>
          We know the feeling when there are long weekends or holidays or simply
          it's yearning to bunk from work to take off...
        </p>
      </div>
    </div>
  );
}

export default DetailsOfPackage;
