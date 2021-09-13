import React from "react";

export default function Hero({ handleLogout }) {
  return (
    <section>
      <h2>welcome</h2>
      <button onClick={handleLogout}>logout</button>
    </section>
  );
}
