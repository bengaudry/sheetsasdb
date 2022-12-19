import ResponsiveContainer from "../components/Layout/ResponsiveContainer";
import CtaPrimary from "../components/Buttons/CtaPrimary";
import CtaSecondary from "../components/Buttons/CtaSecondary";
import ButtonWrapper from "../components/Buttons/ButtonWrapper";
import { JSONPrettier } from "../components/JSONPrettier";
import HomePagePros from "../components/HomePagePros";
import Footer from "../components/Footer/Footer";
import { FakeWindow } from "../components/FakeWindow/FakeWindow";

const jsonExampleCode = `skills: [
  {
    uid: 1,
    job_title: "Software Engineer",
    skills: ["JavaScript", "Python", "HTML", "CSS"],
    degree: "Master of Science"
  },
  {
    uid: 2,
    job_title: "Senior Developer",
    skills: ["Java", "C#", "Python"],
    degree: "Engineering Degree"
  }
]`;

export default function Home() {
  return (
    <div className="w-full">
      <ResponsiveContainer childrenClassName="flex flex-row items-center gap-20 py-28">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold">
            Use Google Sheets
            <br />
            as a free database
            <br /> for your project
          </h1>
          <p className="text-2xl pt-6">
            Sheets as Db acts like an API and fetches the data from your Google
            Sheet to return it in JSON
          </p>
          <ButtonWrapper className="mt-10">
            <CtaPrimary to="/docs">Get started</CtaPrimary>
            <a
              href="/home#why"
              className="font-semibold w-max flex flex-row items-center text-xl border-2 border-green-500 bg-transparent text-green-500 transition-colors duration-300 hover:bg-green-500 hover:text-white px-10 py-3 rounded-full"
            >
              Discover
            </a>
          </ButtonWrapper>
        </div>
        <div className="flex-1">
          <FakeWindow light>
            <img
              src="/src/res/sheets-screenshot.webp"
              alt="Google sheets screenshot"
              className="shadow-2xl rounded-b-xl"
            />
          </FakeWindow>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer
        parentClassName="bg-slate-900 text-white"
        childrenClassName="flex flex-row items-center gap-20 py-28"
      >
        <div>
          <JSONPrettier value={jsonExampleCode} />
        </div>
        <div>
          <h2 className="text-5xl font-extrabold">Easy and powerful</h2>
          <p className="text-xl mt-5">
            Sheets as db provides a fully rest API that supports reading,
            writing, editing and deleting data. It also provides a simple but
            powerful environment to manage your data visually or by writing
            code.
          </p>
          <CtaPrimary to="/" className="mt-5 text-lg px-8 py-2">
            Get Started
          </CtaPrimary>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer childrenClassName="py-28 text-center" id="why">
        <h2 className="text-5xl font-extrabold">Why Sheets as Db</h2>
        <ul className="flex flex-row items-center justify-center mt-14 gap-8">
          <HomePagePros
            title="More data types"
            content="Sheets as Db uses a system that provides different types of data else than string such as arrays, or booleans represented with a checkbox"
            isImportant="false"
          />
          <HomePagePros
            title="Entirely free and open-source"
            content="Sheets as Db was initially created to provide a free and open-source alternative to the similar services that are currently provided"
            isImportant="true"
          />
          <HomePagePros
            title="Easily editable data"
            content="Google Sheets allows users to provide a simple interface to their clients that allows them to edit data on the website in real time without editing the source code"
            isImportant="false"
          />
        </ul>
        <CtaPrimary to="/" className="m-auto mt-10">
          Start now
        </CtaPrimary>
      </ResponsiveContainer>
      <Footer />
    </div>
  );
}
