import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");
  const [input, setInput] = React.useState({
    count: "",
    load: "",
    duration: "",
  });

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput({ ...input, [e.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setInput({
      count: "",
      load: "",
      duration: "",
    });
  };

  return (
    <div className="gradient__bg h-screen w-screen">
      <div className="text-indigo-900 flex flex-1 justify-center items-center">
        <h1 className="gradient__head text-4xl mt-8 font-extrabold">
          Cloud Computing (CPU)
        </h1>
      </div>
      <div className="ml-96">
        <div className="items-center justify-center w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            CPU Count
          </label>
          <input
            type="number"
            name="count"
            value={input.count}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2 text-black"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            CPU LOAD (MIN VALUE = 0, MAX VALUE = 1)
          </label>
          <input
            type="number"
            name="load"
            value={input.load}
            min="0"
            max="1"
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2 text-black"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            DURATION (in days)
          </label>
          <input
            type="number"
            name="duration"
            value={input.duration}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2 text-black"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            //   onClick={saveEmployee}
            onClick={() => console.log(input)}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2"
          >
            Get Co2e
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="mt-8">
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Tabs
            value={value}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="AWS" />
            <Tab value="two" label="Azure" />
            <Tab value="three" label="GCP" />
            <Tab value="four" label="Recommended" />
          </Tabs>
        </Box>
      </div>
    </div>
  );
}
