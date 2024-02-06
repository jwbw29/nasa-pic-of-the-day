"use client";
/*Steps for turning off real data and turning on fake data so we don't expire the key

1. Comment out the fetchPhotoData function
2. Comment out the useEffect hook
3. Comment out the fetchPhotoData call in the useEffect hook
4. uncomment the fakeData object
5. uncomment everything with fakeData in it
*/

import React, { useState, useEffect } from "react";
import Image from "next/image";

const API_KEY = "DEMO_KEY";
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const fakeData = {
  copyright: "\nJordi L. Coy\n",
  date: "2023-08-08",
  explanation:
    "What's that below the Moon? Jupiter -- and its largest moons.  Many skygazers across planet Earth enjoyed the close conjunction of Earth's Moon passing nearly in front of Jupiter in mid-June. The featured image is a single exposure of the event taken from Mor\u00f3n de la Frontera, Spain. The sunlit lunar crescent on the left is overexposed, while the Moon's night side, on the right, is only faintly illuminated by Earthshine. Lined up diagonally below the Moon, left to right, are Jupiter's bright Galilean satellites: Callisto, Ganymede, Io (hard to see as it is very near to Jupiter), and Europa.  In fact, Callisto, Ganymede, and Io are larger than Earth's Moon, while Europa is only slightly smaller. NASA's robotic spacecraft Juno is currently orbiting Jupiter and made a close pass near Io only a week ago.  If you look up in the night sky tonight, you will again see two of the brightest objects angularly close together -- because tonight is another Moon-Jupiter conjunction.",
  hdurl: "https://apod.nasa.gov/apod/image/2308/MoonsJupiter_Coy_2630.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Moon Meets Jupiter",
  url: "https://apod.nasa.gov/apod/image/2308/MoonsJupiter_Coy_960.jpg",
};

export default function Home() {
  const [photoData, setPhotoData] = useState(null);

  // const fetchPhotoData = async () => {
  //   try {
  //     const res = await fetch(API_URL);
  //     const data = await res.json();
  //     setPhotoData(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    // fetchPhotoData();
    setPhotoData(fakeData);
  }, []);

  const {
    title,
    date,
    explanation,
    url,
    hdurl,
    media_type,
    copyright,
    service_version,
  } = fakeData;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-24">
      <div className="max-w-5xl w-full items-end justify-start font-mono lg:flex gap-4">
        <h1 className="text-8xl tracking-wide ">APOD</h1>
        <p className=" text-lg pb-2">Astronomy Picture of the Day</p>
      </div>
      <div className="flex max-w-5xl w-full">
        <div className="w-1/2">
          <Image src={url} alt={title} width={500} height={500} />
        </div>
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl font-bold tracking-wider">{title}</h1>
          <div className="flex gap-8 pt-1">
            <h3 className=" font-extrabold text-lg">{copyright}</h3>
            <h3 className=" font-light">{date}</h3>
          </div>
          <p className="pt-8">{explanation}</p>
        </div>
      </div>
    </main>
  );
}
