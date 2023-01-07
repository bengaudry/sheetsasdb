import { useState } from "react";

export function Manage() {
  const [maxCalls, setMaxCalls] = useState(1000);
  const [callFrequency, setCallFrequency] = useState<"day" | "month" | "year">(
    "day"
  );

  return (
    <div>
      <p className="font-semibold text-lg block mb-1">
        Set a maximum of calls for the API
      </p>
      <div className="flex flex-row gap-3 items-center">
        <input
          id="api-key-input"
          type="number"
          value={maxCalls}
          min={0}
          onInput={(e: any) => {
            updateMaxCalls(e.target.value, callFrequency, setMaxCalls);
          }}
          step={100}
          className="w-28 border-2 border-slate-300 rounded-lg px-3 py-1 text-slate-500 outline-none focus:text-black"
        />
        per
        <select
          className="bg-slate-200 rounded-lg px-3 py-2"
          onChange={(e: any) => setCallFrequency(e.target.value)}
        >
          <option selected value="day">
            Day
          </option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div className="flex flex-row justify-end gap-4 py-4">
        <button className="bg-white text-green-500 font-semibold px-5 py-2 rounded-full border-2 border-green-500">
          Reset
        </button>
        <button className="bg-green-500 text-white font-semibold px-5 py-2 rounded-full border-2 border-green-500">
          Apply changes
        </button>
      </div>
    </div>
  );
}

function updateMaxCalls(
  nb: number,
  callFrequency: "day" | "month" | "year",
  setter: CallableFunction
) {
  if (nb < 0) {
    alert(
      "The max calls per day for the API must be greater than or equal to 0"
    );
  } else {
    const checker = checkMaxCalls(nb, callFrequency);
    if (checker.val) {
      setter(nb);
    } else {
      alert(checker.message);
    }
  }
}

interface checkerReturn {
  val: boolean;
  message: string;
}

function checkMaxCalls(nb: number, callFrequency: string): checkerReturn {
  var max = undefined;
  if (callFrequency === "day") {
    max = 1000;
  } else if (callFrequency === "month") {
    max = 30000;
  } else if (callFrequency === "year") {
    max = 365000;
  }
  if (max !== undefined) {
    return {
      val: nb <= max,
      message: `The maximum calls per ${callFrequency} that you can make to the API is ${max}. Upgrade your profile to get more.`,
    };
  } else {
    return {
      val: false,
      message: `The maximum calls per ${callFrequency} that you can make to the API is ${max}. Upgrade your profile to get more.`,
    };
  }
}
