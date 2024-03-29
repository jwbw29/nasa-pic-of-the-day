"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const api_key = process.env.API_KEY || "DEMO_KEY";
const api_url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

// const fakeData = {
//   copyright: "\nJordi L. Coy\n",
//   date: "2023-08-08",
//   explanation:
//     "What's that below the Moon? Jupiter -- and its largest moons.  Many skygazers across planet Earth enjoyed the close conjunction of Earth's Moon passing nearly in front of Jupiter in mid-June. The featured image is a single exposure of the event taken from Mor\u00f3n de la Frontera, Spain. The sunlit lunar crescent on the left is overexposed, while the Moon's night side, on the right, is only faintly illuminated by Earthshine. Lined up diagonally below the Moon, left to right, are Jupiter's bright Galilean satellites: Callisto, Ganymede, Io (hard to see as it is very near to Jupiter), and Europa.  In fact, Callisto, Ganymede, and Io are larger than Earth's Moon, while Europa is only slightly smaller. NASA's robotic spacecraft Juno is currently orbiting Jupiter and made a close pass near Io only a week ago.  If you look up in the night sky tonight, you will again see two of the brightest objects angularly close together -- because tonight is another Moon-Jupiter conjunction.",
//   hdurl: "https://apod.nasa.gov/apod/image/2308/MoonsJupiter_Coy_2630.jpg",
//   media_type: "image",
//   service_version: "v1",
//   title: "Moon Meets Jupiter",
//   url: "https://apod.nasa.gov/apod/image/2308/MoonsJupiter_Coy_960.jpg",
// };

async function fetchData() {
  const res = await fetch(api_url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchDataAsync();
  }, []);

  if (!data) {
    return <div>Loading......</div>;
  }

  const { url, title, explanation, date, copyright } = data;

  return (
    <main className="flex min-h-screen flex-col font-mono items-center justify-start p-24 gap-24">
      <div className=" max-w-7xl w-full items-end justify-start lg:flex gap-4">
        <h1 className="text-8xl tracking-wide ">APOD</h1>
        <p className=" text-lg pb-2">Astronomy Picture of the Day</p>
      </div>
      <div className="flex max-w-7xl w-full">
        <div className="w-1/2">
          <Image
            src={url}
            alt={title}
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-16">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold tracking-wider">{title}</h1>
            <div>
              <h3 className=" font-semibold text-lg">{copyright}</h3>
            </div>
            <div>
              <h3 className=" font-light">{date}</h3>
            </div>
          </div>
          <p>{explanation}</p>
        </div>
      </div>
    </main>
  );
}
