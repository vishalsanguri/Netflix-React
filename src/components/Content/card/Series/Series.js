import React, { useState } from "react";
import "./Series.css";
import { Children, Comedy, Crime, Documentaries, Feelgood } from "./item";
import Display from "../../../Display/Display";

export default function Seriescard() {
  const [content, setContent] = useState({ small: "", large: "", desc: "" });
  const [content1, setContent1] = useState({ small: "", large: "", desc: "" });
  const [content2, setContent2] = useState({ small: "", large: "", desc: "" });
  const [content3, setContent3] = useState({ small: "", large: "", desc: "" });
  const [content4, setContent4] = useState({ small: "", large: "", desc: "" });
  function showcontent1(e) {
    setContent1({ ...content1, ...e });
  }
  function showcontent(e) {
    setContent({ ...content, ...e });
  }
  function showcontent2(e) {
    setContent2({ ...content2, ...e });
  }
  function showcontent3(e) {
    setContent3({ ...content3, ...e });
  }
  function showcontent4(e) {
    setContent4({ ...content4, ...e });
  }

  return (
    <>
      <div>
        <p className="title-category">Children</p>
        <div className="card-row-flex">
          <div className="card-row">
            <div
              className="item"
              onClick={() => {
                showcontent(Children.c1);
              }}
            >
              <img
                className="image-of-item"
                src={Children.c1.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent(Children.c2);
              }}
            >
              <img
                className="image-of-item"
                src={Children.c2.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent(Children.c3);
              }}
            >
              <img
                className="image-of-item"
                src={Children.c3.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent(Children.c4);
              }}
            >
              <img
                className="image-of-item"
                src={Children.c4.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent(Children.c5);
              }}
            >
              <img
                className="image-of-item"
                src={Children.c5.small}
                alt="childernseries"
              />
            </div>
          </div>
          {content.desc ? (
            <Display data={content} setContent={setContent} />
          ) : null}
        </div>
      </div>
      <div>
        <p className="title-category">Comedy</p>
        <div className="card-row-flex">
          <div className="card-row">
            <div
              className="item"
              onClick={() => {
                showcontent1(Comedy.c1);
              }}
            >
              <img
                className="image-of-item"
                src={Comedy.c1.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent1(Comedy.c2);
              }}
            >
              <img
                className="image-of-item"
                src={Comedy.c2.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent1(Comedy.c3);
              }}
            >
              <img
                className="image-of-item"
                src={Comedy.c3.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent1(Comedy.c4);
              }}
            >
              <img
                className="image-of-item"
                src={Comedy.c4.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent1(Comedy.c5);
              }}
            >
              <img
                className="image-of-item"
                src={Comedy.c5.small}
                alt="childernseries"
              />
            </div>
          </div>
          {content1.desc ? (
            <Display data={content1} setContent={setContent1} />
          ) : null}
        </div>
      </div>
      {/* third row */}
      <div>
        <p className="title-category">Crime</p>
        <div className="card-row-flex">
          <div className="card-row">
            <div
              className="item"
              onClick={() => {
                showcontent2(Crime.c1);
              }}
            >
              <img
                className="image-of-item"
                src={Crime.c1.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent2(Crime.c2);
              }}
            >
              <img
                className="image-of-item"
                src={Crime.c2.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent2(Crime.c3);
              }}
            >
              <img
                className="image-of-item"
                src={Crime.c3.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent2(Crime.c4);
              }}
            >
              <img
                className="image-of-item"
                src={Crime.c4.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent2(Crime.c5);
              }}
            >
              <img
                className="image-of-item"
                src={Crime.c5.small}
                alt="childernseries"
              />
            </div>
          </div>
          {content2.desc ? (
            <Display data={content2} setContent={setContent2} />
          ) : null}
        </div>
      </div>
      {/* row 3 */}
      <div>
        <p className="title-category">Documentaries</p>
        <div className="card-row-flex">
          <div className="card-row">
            <div
              className="item"
              onClick={() => {
                showcontent3(Documentaries.c1);
              }}
            >
              <img
                className="image-of-item"
                src={Documentaries.c1.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent3(Documentaries.c2);
              }}
            >
              <img
                className="image-of-item"
                src={Documentaries.c2.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent3(Documentaries.c3);
              }}
            >
              <img
                className="image-of-item"
                src={Documentaries.c3.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent3(Documentaries.c4);
              }}
            >
              <img
                className="image-of-item"
                src={Documentaries.c4.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent3(Documentaries.c5);
              }}
            >
              <img
                className="image-of-item"
                src={Documentaries.c5.small}
                alt="childernseries"
              />
            </div>
          </div>
          {content3.desc ? (
            <Display data={content3} setContent={setContent3} />
          ) : null}
        </div>
      </div>
      {/* row 4 */}
      <div>
        <p className="title-category">Fell Good</p>
        <div className="card-row-flex">
          <div className="card-row">
            <div
              className="item"
              onClick={() => {
                showcontent4(Feelgood.c1);
              }}
            >
              <img
                className="image-of-item"
                src={Feelgood.c1.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent4(Feelgood.c2);
              }}
            >
              <img
                className="image-of-item"
                src={Feelgood.c2.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent4(Feelgood.c3);
              }}
            >
              <img
                className="image-of-item"
                src={Feelgood.c3.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent4(Feelgood.c4);
              }}
            >
              <img
                className="image-of-item"
                src={Feelgood.c4.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent4(Feelgood.c5);
              }}
            >
              <img
                className="image-of-item"
                src={Feelgood.c5.small}
                alt="childernseries"
              />
            </div>
          </div>
          {content4.desc ? (
            <Display data={content4} setContent={setContent4} />
          ) : null}
        </div>
      </div>
    </>
  );
}
