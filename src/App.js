import HamburgerMenu from "react-hamburger-menu";
import React from 'react';

function App() {
  const imageUrl = "https://i.ibb.co/3S5p7VQ/d-BSycj-W7yj-Ws.png";
  const slash = "/";
  const jsx = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    backgroundAttachment: "fixed",
    backgroundColor: "transparent"
    /* background-repeat: no-repeat; */
    // backgroundColor: "rgba(0, 0, 0, 0.7)"
  };
  return (
    <>
      <div className="part-1">
        <header className="heading-container" style={jsx}>
          <h3>DOGSTUDIO / DEPT.</h3>
          <p>Our showreel</p>
          <HamburgerMenu
            width={32}
            height={24}
            strokeWidth={3}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
        </header>
        <section className="sec-1" style={jsx}>
          <div className="title">
            <span className="fx-1">
              <span>W</span>
              <span>E</span>
            </span>
            <span className="fx-2">
              <span>M</span>
              <span>A</span>
              <span>K</span>
              <span>E</span>
            </span>
            <span className="fx-3">
              <span>G</span>
              <span>O</span>
              <span>O</span>
              <span>D</span>
            </span>
            <span className="fx-4">
              <span>S</span>
              <span>H</span>
              <span>I</span>
              <span>T</span>
            </span>
          </div>
          <div className="fy-main" style={jsx}>
            <span className="fy-1">
              <h3>
                Dogstudio is a multidisciplinary creative studio at the
                intersection of art, design and technology.
              </h3>
            </span>
            <br />
            <br />
            <p className="fy-2">
              Our goal is to deliver amazing experiences that make people talk,
              and build strategic value for brands, tech, entertainment, arts &
              culture.
            </p>
            <div className="fy-3">
              <span className="fy">Facebook</span>
              {slash}
              <span className="fy">Instagram</span>
              {slash}
              <span className="fy">Dribbble</span>
              {slash}
              <span className="fy">Twitter</span>
              {slash}
              <span className="fy">Newsletter</span>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h6 className="feature">
            F&nbsp;E&nbsp;A&nbsp;T&nbsp;U&nbsp;R&nbsp;E&nbsp;D&nbsp;&nbsp;&nbsp;P&nbsp;R&nbsp;O&nbsp;J&nbsp;E&nbsp;C&nbsp;T&nbsp;S
          </h6>
          <br />
          <br />
          <br />
        </section>
      </div>
      <div className="part-2">
        <div className="content-container" style={jsx}>
          <section className="content-1">
            <h6 style={{ color: "orange", padding: "30px", fontSize: "12px" }}>
              WEB
            </h6>
            <h1
              style={{
                paddingLeft: "30px",
                fontFamily: "serif",
                fontWeight: "lighter"
              }}
            >
              Tommorowland
            </h1>
            <br />
            <div style={{ paddingLeft: "30px", fontSize: "15px" }}>
              <p>Building a new kind of</p>
              <br />
              <p>immerse experience</p>
              <br />
              <p>the famous music festival</p>
            </div>
          </section>
          <section className="content-2">
            <img src="https://i.ibb.co/j8pgcC4/1.png" height="250px" />
          </section>
        </div>
      </div>
      <div className="part-3">
        <div className="content-container" style={jsx}>
          <section className="content-1">
            <img src="https://i.ibb.co/TYLy7Rv/2.png" height="250px" />
          </section>
          <section className="content-2">
            <h6
              style={{ color: "cyan", fontSize: "12px", paddingLeft: "30px" }}
            >
              S&nbsp;T&nbsp;R&nbsp;A&nbsp;T&nbsp;E&nbsp;G&nbsp;Y
            </h6>
            <h1
              style={{
                paddingLeft: "30px",
                fontFamily: "serif",
                fontWeight: "lighter"
              }}
            >
              Navy Pier
            </h1>
            <br />
            <div style={{ paddingLeft: "30px", fontSize: "15px" }}>
              <p>"Enchanted waters" is an immersive</p>
              <br />
              <p>and uplifting reflections on Chicago's</p>
              <br />
              <p>relationship with a Lake Michigan</p>
            </div>
          </section>
        </div>
      </div>
      <div className="part-4">
        <div className="content-container" style={jsx}>
          <section className="content-1">
            <h6
              style={{ color: "cyan", fontSize: "12px", paddingLeft: "30px" }}
            >
              S&nbsp;T&nbsp;R&nbsp;A&nbsp;T&nbsp;E&nbsp;G&nbsp;Y
            </h6>
            <h1
              style={{
                paddingLeft: "30px",
                fontFamily: "serif",
                fontWeight: "lighter"
              }}
            >
              MSI CHICAGO
            </h1>
            <br />
            <div style={{ paddingLeft: "30px", fontSize: "15px" }}>
              <p>Rethinking,redesigning and improving</p>
              <br />
              <p>the website of the great & famous</p>
              <br />
              <p>Meseum of Science and Industry of Chicago</p>
            </div>
          </section>
          <section className="content-2">
            <img src="https://i.ibb.co/D5D1zzp/3.png" height="250px" />
          </section>
        </div>
      </div>
      <div className="part-5">
        <div className="content-container" style={jsx}>
          <section className="content-1">
            <img src="https://i.ibb.co/wNnmJsn/4.png" height="250px" />
          </section>
          <section className="content-2">
            <h6
              style={{
                color: "rgb(212,46,175)",
                fontSize: "12px",
                paddingLeft: "30px"
              }}
            >
              D&nbsp;E&nbsp;S&nbsp;I&nbsp;G&nbsp;N
            </h6>
            <h1
              style={{
                paddingLeft: "30px",
                fontFamily: "serif",
                fontWeight: "lighter"
              }}
            >
              This was Louise's Phone
            </h1>
            <br />
            <div style={{ paddingLeft: "30px", fontSize: "15px" }}>
              <p>Creating a heart moving immersive</p>
              <br />
              <p>experience to educate people about</p>
              <br />
              <p>the hell of cyber bullying</p>
            </div>
          </section>
        </div>
      </div>
      <div className="part-6">
        <div className="content-container" style={jsx}>
          <section className="content-1">
            <h6
              style={{
                color: "rgb(212,46,175)",
                fontSize: "12px",
                paddingLeft: "30px"
              }}
            >
              D&nbsp;E&nbsp;S&nbsp;I&nbsp;G&nbsp;N
            </h6>
            <h1
              style={{
                paddingLeft: "30px",
                fontFamily: "serif",
                fontWeight: "lighter"
              }}
            >
              KIKK Festival 201<span style={{ fontSize: "70px" }}>8</span>
            </h1>
            <br />
            <div style={{ paddingLeft: "30px", fontSize: "15px" }}>
              <p>Another KIKK Festival yearly revamp: The</p>
              <br />
              <p>"Spices and Beyond" edition</p>
            </div>
          </section>
          <section className="content-2">
            <img src="https://i.ibb.co/0hPWpNH/5.png" height="250px" />
          </section>
        </div>
      </div>
      <div className="part-7">
        <div className="content-container" style={jsx}>
          <section className="content-1">
            <img src="https://i.ibb.co/80qfwF0/6.png" height="250px" />
          </section>
          <section className="content-2">
            <h6
              style={{
                color: "rgb(58,176,109)",
                fontSize: "12px",
                paddingLeft: "30px"
              }}
            >
              D&nbsp;E&nbsp;S&nbsp;I&nbsp;G&nbsp;N
            </h6>
            <h1
              style={{
                paddingLeft: "30px",
                fontFamily: "serif",
                fontWeight: "lighter"
              }}
            >
              The Kennedy Center
            </h1>
            <br />
            <div style={{ paddingLeft: "30px", fontSize: "15px" }}>
              <p>Building an immersive website</p>
              <br />
              <p>to celebrate the memory of the</p>
              <br />
              <p>unforgettable Jhon F.Kennedy</p>
            </div>
          </section>
        </div>
      </div>
      <div className="part-8">
        <div className="content-container" style={jsx}>
          <section className="content-1">
            <h6
              style={{
                color: "rgb(133,117,82)",
                fontSize: "12px",
                paddingLeft: "30px"
              }}
            >
              D&nbsp;E&nbsp;S&nbsp;I&nbsp;G&nbsp;N
            </h6>
            <h1
              style={{
                paddingLeft: "30px",
                fontFamily: "serif",
                fontWeight: "lighter"
              }}
            >
              Royal Opera Of Wallonia
            </h1>
            <br />
            <div style={{ paddingLeft: "30px", fontSize: "15px" }}>
              <p>Imagining and designing an oniric</p>
              <br />
              <p>universe to promote the upcoming</p>
              <br />
              <p>Season of renown Belgian opera house</p>
            </div>
          </section>
          <section className="content-2">
            <img src="https://i.ibb.co/PrRN1v9/7.png" height="250px" />
          </section>
        </div>
      </div>
      <div className="part-9">
        <div style={jsx}>
          <h6
            style={{
              color: "rgb(133,117,82)",
              fontSize: "12px",
              paddingLeft: "30px",
              paddingTop: "30px"
            }}
          >
            THIS IS HOW WE DO IT
          </h6>
          <h1
            style={{
              paddingLeft: "30px",
              fontFamily: "serif",
              fontWeight: "lighter",
              paddingTop: "10px"
            }}
          >
            We're crafting emotional experiences aimed at improving result
          </h1>
          <div
            style={{
              paddingLeft: "30px",
              fontSize: "15px",
              paddingTop: "10px",
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            <div
              style={{
                width: "50%",
                paddingRight: "10px",
                textAlign: "justify"
              }}
            >
              <p style={{ color: "gray" }}>
                Dogstudio is a design & technology firm working globally from
                our offices based in Belgium and Chicago.
              </p>
              <br />
              <p style={{ color: "gray" }}>
                Our strong focus on producing high quality & emotional
                brandings, digital products and experiences became a signature.
              </p>
              <br />
            </div>

            <div
              style={{
                width: "50%",
                paddingLeft: "10px",
                textAlign: "justify",
                paddingRight: "10px"
              }}
            >
              <p style={{ color: "gray" }}>
                We’re passionate about moving people and solving problems for
                the likes of Microsoft, The Museum of Science And Industry Of
                Chicago, The Kennedy Center of Washington, Dragone, Quanta
                Magazine, and many more.
              </p>
            </div>
          </div>
          <br />
          <br />
          <h5
            style={{
              paddingLeft: "30px",
              paddingBottom: "20px",
              textDecoration: "underline",
              textDecorationColor: "red"
            }}
          >
            Discover our values
          </h5>
        </div>
      </div>

      <div className="last-content">
        <div className="parent-1" style={jsx}>
          <div>
            <h4>Chicago .</h4>
            <p>+1.312.709.6815</p>
          </div>
          <div>
            <h4>México .</h4>
            <p>+52.55.1178.3954</p>
          </div>
          <div>
            <h4>Amsterdam .</h4>
            <p>+32.10.25.60.55</p>
          </div>
          <div>
            <h4>Namur .</h4>
            <p>+32.81.65.77.42</p>
          </div>
        </div>
        <div className="parent-2" style={jsx}>
          <strong>WE</strong>
          <strong>MAKE</strong>
          <strong>GOOD</strong>
          <strong>SHIT</strong>
        </div>
      </div>

      <div style={{ backgroundColor: "rgb(22, 23, 28)" }}>
        <br />
        <hr />
      </div>
      <footer>
        <div style={{ color: "gray" }}>We'd love to hear from you --- </div>
        <div>hello@koustubh.com</div>
        <div style={{ color: "gray" }}>Subscribe to our newsletter</div>
        <div>Language: English</div>
      </footer>
    </>
  );
}

export default App;
