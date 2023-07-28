import React from "react";

export default function Test() {
  return (
    <div className="h-screen w-screen bg-gray-400 p-40">
      <div
        className="h-10 w-10 bg-red-400"
        onDrag={() => console.log("draggin")}
        onDragEnd={() => console.log("drag end")}
        onDragStart={() => console.log("drag start")}
      >
        Test
      </div>
      <div
        className="h-20 w-20 bg-blue-400"
        onDragOver={() => console.log("drag capture?")}
      >
        Test2
      </div>
    </div>
  );
}
