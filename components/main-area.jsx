"use client";

import React, { useEffect, useState } from "react";
import InputArea from "./input-area";
import OutputArea from "./output-area";
import MainContent from "./main-content";

const base_url = `https://api.tinyurl.com/create?api_token=${process.env.NEXT_PUBLIC_TINY_API_KEY}`;

function MainArea() {
  const [loading, setLoading] = useState(false);
  const [allLink, setAllLink] = useState([]);

  async function handleInput(originalLink) {
    const response = await fetch(base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: originalLink,
        description: "string",
      }),
    });

    const result = await response.json();

    setAllLink([
      ...allLink,
      {
        original_link: originalLink,
        short_link: result.data.tiny_url,
      },
    ]);
    setLoading(true);
  }

  useEffect(() => {}, [loading]);

  return (
    <div className="mt-15 px-5 lg:px-20 text-center bg-dark-violet/5">
      <InputArea handleInput={handleInput} />
      {allLink.map((item, index) => (
        <OutputArea key={index} {...item} />
      ))}

      <MainContent />
    </div>
  );
}

export default MainArea;
