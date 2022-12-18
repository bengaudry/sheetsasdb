import ResponsiveContainer from "../components/Layout/ResponsiveContainer";
import CtaPrimary from "../components/Buttons/CtaPrimary";
import CtaSecondary from "../components/Buttons/CtaSecondary";
import ButtonWrapper from "../components/Buttons/ButtonWrapper";
import { JSONPrettier } from "../components/JSONPrettier";

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
            <CtaSecondary to="/">Discover</CtaSecondary>
          </ButtonWrapper>
        </div>
        <div className="flex-1">
          <img
            src="/src/res/sheets-screenshot.webp"
            alt="Google sheets screenshot"
            className="shadow-2xl rounded-xl"
          />
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer
        parentClassName="bg-slate-900 text-white"
        childrenClassName="flex flex-row items-center gap-20 py-20"
      >
        <JSONPrettier value={jsonExampleCode} />
      </ResponsiveContainer>
    </div>
  );
}
