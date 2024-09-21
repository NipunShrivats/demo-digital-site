import React, { useState } from "react";
import "./ClientListStyle.css";

// pics

import client1 from "../../assets/clientHandles/list-pic1.png";
import client2 from "../../assets/clientHandles/list-pic2.png";
import client3 from "../../assets/clientHandles/list-pic3.png";
import client4 from "../../assets/clientHandles/list-pic4.png";
import client5 from "../../assets/clientHandles/list-pic5.png";
import client6 from "../../assets/clientHandles/list-pic6.png";
import client7 from "../../assets/clientHandles/list-pic7.png";
import client8 from "../../assets/clientHandles/list-pic8.png";
import client9 from "../../assets/clientHandles/list-pic9.png";
import client10 from "../../assets/clientHandles/list-pic10.png";
import client11 from "../../assets/clientHandles/list-pic11.png";
import client12 from "../../assets/clientHandles/list-pic12.png";
import client13 from "../../assets/clientHandles/list-pic13.png";

import down from "../../assets/imgAssets/down.png";
import up from "../../assets/imgAssets/up.png";

function ClientListElement(props) {
  const { src, name, instaHandle } = props;
  return (
    <>
      <div className="list">
        <div className="imgBox">
          <img src={src} alt="" className="list-img" />
        </div>
        <div className="content">
          <h4>{name}</h4>
          <p>{instaHandle}</p>
        </div>
      </div>
    </>
  );
}

export default function ClientList() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="ClientList stiff-block">
        <div className="clientListContainer">
          <div className="list-1">
            <div className="client-box">
              <h3 className="client-title">social media handling</h3>

              <ClientListElement
                src={client1}
                name={"Shveta Sharma"}
                instaHandle={"@ahaana_holistichealing"}
              />
              <ClientListElement
                src={client2}
                name={"Naira Sri"}
                instaHandle={"@cutiekuhoo"}
              />
              <ClientListElement
                src={client3}
                name={"Virender Sharma"}
                instaHandle={"@virendersharmababa_ji"}
              />
              <ClientListElement
                src={client4}
                name={"Glance Fire & Safety"}
                instaHandle={"@glanceenterprise"}
              />

              <div
                className={`client-box ${
                  toggle ? "hidden-part" : "visible-part"
                }`}
              >
                <ClientListElement
                  src={client5}
                  name={"Suchitha joshi"}
                  instaHandle={"@p5yoga_wellness"}
                />
                <ClientListElement
                  src={client6}
                  name={"Aiman Mehtab"}
                  instaHandle={"@thetribeofhealing"}
                />
                <ClientListElement
                  src={client7}
                  name={"Durvam's Diary"}
                  instaHandle={"@durvasumedha"}
                />
                <ClientListElement
                  src={client8}
                  name={"Dr. Mukesh Kumar"}
                  instaHandle={"@urocaredrmukeshkumarvijay"}
                />
                <ClientListElement
                  src={client9}
                  name={"Adit Sinha"}
                  instaHandle={"@aditsinhashow"}
                />
                <ClientListElement
                  src={client10}
                  name={"Avi Sinha"}
                  instaHandle={"@avisinhashow"}
                />
                <ClientListElement
                  src={client11}
                  name={"Yuva 4 Life"}
                  instaHandle={"@yuva4life.in"}
                />
                <ClientListElement
                  src={client12}
                  name={"Shveta sharma"}
                  instaHandle={"@shvetazworld"}
                />
                <ClientListElement
                  src={client13}
                  name={"NUB'S"}
                  instaHandle={"@nubs_nitika_"}
                />
              </div>
            </div>
          </div>

          <div className="list-2">
            <div className="client-box">
              <h3 className="client-title">Brand Promotion</h3>

              <ClientListElement
                src={client1}
                name={"Shveta Sharma"}
                instaHandle={"@ahaana_holistichealing"}
              />
              <ClientListElement
                src={client2}
                name={"Naira Sri"}
                instaHandle={"@cutiekuhoo"}
              />
              <ClientListElement
                src={client3}
                name={"Virender Sharma"}
                instaHandle={"@virendersharmababa_ji"}
              />
              <ClientListElement
                src={client4}
                name={"Glance Fire & Safety"}
                instaHandle={"@glanceenterprise"}
              />

              <div
                className={`client-box ${
                  toggle ? "hidden-part" : "visible-part"
                }`}
              >
                <ClientListElement
                  src={client5}
                  name={"Suchitha joshi"}
                  instaHandle={"@p5yoga_wellness"}
                />
                <ClientListElement
                  src={client6}
                  name={"Aiman Mehtab"}
                  instaHandle={"@thetribeofhealing"}
                />
                <ClientListElement
                  src={client7}
                  name={"Durvam's Diary"}
                  instaHandle={"@durvasumedha"}
                />
                <ClientListElement
                  src={client8}
                  name={"Dr. Mukesh Kumar"}
                  instaHandle={"@urocaredrmukeshkumarvijay"}
                />
                <ClientListElement
                  src={client9}
                  name={"Adit Sinha"}
                  instaHandle={"@aditsinhashow"}
                />
                <ClientListElement
                  src={client10}
                  name={"Avi Sinha"}
                  instaHandle={"@avisinhashow"}
                />
                <ClientListElement
                  src={client11}
                  name={"Yuva 4 Life"}
                  instaHandle={"@yuva4life.in"}
                />
                <ClientListElement
                  src={client12}
                  name={"Shveta sharma"}
                  instaHandle={"@shvetazworld"}
                />
                <ClientListElement
                  src={client13}
                  name={"NUB'S"}
                  instaHandle={"@nubs_nitika_"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="viewBtn">
          <button className="btn dark-btn" onClick={() => setToggle(!toggle)}>
            View {toggle ? "More" : "Less"}
            <span>
              <img src={toggle ? down : up} alt="" className="arrows" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
