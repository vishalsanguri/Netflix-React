import React, { useState } from "react";
import "./Film.css";
import { Children, Drama, Romance, Suspense, Thriller } from "./item";
import Display from "../../../Display/Display";

export default function Film() {
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
        <p className="title-category1">Drama</p>
        <div className="card-row-flex1">
          <div className="card-row1">
            <div
              className="item"
              onClick={() => {
                showcontent(Drama.c1);
              }}
            >
              <img
                className="image-of-item1"
                src={Drama.c1.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent(Drama.c2);
              }}
            >
              <img
                className="image-of-item1"
                src={Drama.c2.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent(Drama.c3);
              }}
            >
              <img
                className="image-of-item1"
                src={Drama.c3.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent(Drama.c4);
              }}
            >
              <img
                className="image-of-item1"
                src={Drama.c4.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent(Drama.c5);
              }}
            >
              <img
                className="image-of-item1"
                src={Drama.c5.small}
                alt="childernseries"
              />
            </div>
          </div>
          {content.desc ? (
            <Display data={content} setContent={setContent} />
          ) : null}
        </div>
      </div>

      {/* two row */}

      <div>
        <p className="title-category1">Romance</p>
        <div className="card-row-flex1">
          <div className="card-row1">
            <div
              className="item"
              onClick={() => {
                showcontent1(Romance.c1);
              }}
            >
              <img
                className="image-of-item1"
                src={Romance.c1.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent1(Romance.c2);
              }}
            >
              <img
                className="image-of-item1"
                src={Romance.c2.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent1(Drama.c3);
              }}
            >
              <img
                className="image-of-item1"
                src={Romance.c3.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent1(Romance.c4);
              }}
            >
              <img
                className="image-of-item1"
                src={Romance.c4.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent1(Romance.c5);
              }}
            >
              <img
                className="image-of-item1"
                src={Romance.c5.small}
                alt="childernseries"
              />
            </div>
          </div>
          {content1.desc ? (
            <Display data={content1} setContent={setContent1} />
          ) : null}
        </div>
      </div>
      {/* three row */}
      <div>
        <p className="title-category1">Suspence</p>
        <div className="card-row-flex1">
          <div className="card-row1">
            <div
              className="item"
              onClick={() => {
                showcontent2(Suspense.c1);
              }}
            >
              <img
                className="image-of-item1"
                src={Suspense.c1.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent2(Suspense.c2);
              }}
            >
              <img
                className="image-of-item1"
                src={Suspense.c2.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent2(Drama.c3);
              }}
            >
              <img
                className="image-of-item1"
                src={Suspense.c3.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent2(Suspense.c4);
              }}
            >
              <img
                className="image-of-item1"
                src={Suspense.c4.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent2(Suspense.c5);
              }}
            >
              <img
                className="image-of-item1"
                src={Suspense.c5.small}
                alt="childernseries"
              />
            </div>
          </div>
          {content2.desc ? (
            <Display data={content2} setContent={setContent2} />
          ) : null}
        </div>
      </div>
      {/* 4 row */}
      <div>
        <p className="title-category1">Thriller</p>
        <div className="card-row-flex1">
          <div className="card-row1">
            <div
              className="item"
              onClick={() => {
                showcontent3(Thriller.c1);
              }}
            >
              <img
                className="image-of-item1"
                src={Thriller.c1.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent3(Thriller.c2);
              }}
            >
              <img
                className="image-of-item1"
                src={Thriller.c2.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent3(Drama.c3);
              }}
            >
              <img
                className="image-of-item1"
                src={Thriller.c3.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent3(Thriller.c4);
              }}
            >
              <img
                className="image-of-item1"
                src={Thriller.c4.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent3(Thriller.c5);
              }}
            >
              <img
                className="image-of-item1"
                src={Thriller.c5.small}
                alt="childernseries"
              />
            </div>
          </div>
          {content3.desc ? (
            <Display data={content3} setContent={setContent3} />
          ) : null}
        </div>
      </div>
      {/* 5 row */}
      <div>
        <p className="title-category1">Children</p>
        <div className="card-row-flex1">
          <div className="card-row1">
            <div
              className="item"
              onClick={() => {
                showcontent4(Children.c1);
              }}
            >
              <img
                className="image-of-item1"
                src={Children.c1.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent4(Children.c2);
              }}
            >
              <img
                className="image-of-item1"
                src={Children.c2.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent4(Children.c3);
              }}
            >
              <img
                className="image-of-item1"
                src={Children.c3.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent4(Children.c4);
              }}
            >
              <img
                className="image-of-item1"
                src={Children.c4.small}
                alt="childernseries"
              />
            </div>
            <div
              className="item"
              onClick={() => {
                showcontent4(Children.c5);
              }}
            >
              <img
                className="image-of-item1"
                src={Children.c5.small}
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
