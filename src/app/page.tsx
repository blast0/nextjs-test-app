"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
// COMPONENTS
import Category from "./category";
import Highlight from "./highlight";
import Footer from "./footer";
import Guide from "./guide";
import Navbar from "./navbar";
import "@fontsource/ibm-plex-mono";
import "./page.css";

export default function Home() {
  const [highlights, setHighLights] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activities, setActivities] = useState([]);

  const fetchData = async (name: string, id?: string) => {
    let url = "";
    switch (name) {
      case "highlights":
        url = "http://localhost:3002/https://web-dev.dev.kimo.ai/v1/highlights";
        break;
      case "categories":
        url = "http://localhost:3002/https://web-dev.dev.kimo.ai/v1/categories";
        break;
      case "activities":
        url =
          "http://localhost:3002/https://web-dev.dev.kimo.ai/v1/activities/" +
          id;
        break;
      default:
        url = "";
        break;
    }
    try {
      const response = await fetch(url, {
        mode: "cors",
      });
      const data = await response.json();
      if (name === "highlights") setHighLights(data);
      else if (name === "categories") setCategories(data);
      else if (name === "activities") setActivities(data);
    } catch (error) {
      console.error("Error fetching ", name, ": ", error);
    }
  };

  useEffect(() => {
    fetchData("highlights");
    fetchData("categories");
    fetchData("activities", "surfing");
  }, []);

  const guidesData = [
    {
      id: 1,
      name: "Hadwin Malone",
      desc: "Guide since 2012",
    },
  ];

  return (
    <>
      <div className="Hero-section centerHV">
        <Navbar />
        <div className="hero-text centerV">Welcome to Hawaii</div>
      </div>
      <div className="page-body">
        <div className="highlights">
          <div>
            <div className="highlights-label IBM-700">Highlights</div>
            <div className="items">
              {highlights.map((item: any, index: number) => {
                return (
                  <Highlight
                    key={index}
                    imageUrl={item?.image}
                    headerText={item?.title}
                    bodyText={item?.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="categories-and-guides">
          <div className="categories">
            <div className="categories-label">Categories</div>
            {categories.map((item: any, index: number) => {
              return <Category key={index} text={item?.name} />;
            })}
          </div>
          <div className="guides">
            <div className="guides-label IBM-700">Travel Guide</div>
            <Guide />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
