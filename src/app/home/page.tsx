"use client";
import { useState } from "react";

export default function HomePage() {
  const filesByBranch: Record<
    string,
    { id: string; name: string; content: string }[]
  > = {
    main: [
      {
        id: "1",
        name: "chapter1.txt",
        content: "This is the intro on main branch.",
      },
      {
        id: "2",
        name: "chapter2.md",
        content: "Outline draft for main branch.",
      },
    ],
    "draft-idea": [
      {
        id: "3",
        name: "new-opening.txt",
        content: "Draft idea: A new opening scene...",
      },
    ],
    feedback: [
      {
        id: "4",
        name: "review-notes.txt",
        content: 'Feedback notes: "Make it less boring."',
      },
    ],
    "chapter-2": [
      {
        id: "5",
        name: "chapter-2.txt",
        content: "Chapter 2 draft starts here...",
      },
    ],
  };

  const [branch, setBranch] = useState("main");
  const [selectedFile, setSelectedFile] = useState(filesByBranch["main"][0]);
  const [mapView, setMapView] = useState(false);

  const files = filesByBranch[branch];

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newBranch = e.target.value;
    setBranch(newBranch);
    setSelectedFile(filesByBranch[newBranch][0]);
  };

  return (
    <main className="flex h-screen bg-[#e4e2dd] text-[#2b2b2b] font-times">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#2b2b2b]/20 px-4 py-6 flex flex-col bg-[#f5f4f2]">
        {/* Branch Selector */}
        <div className="space-y-4 sticky top-0 bg-[#f5f4f2] z-10 pb-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Branch</label>
            <select
              value={branch}
              onChange={handleBranchChange}
              className="w-full px-3 py-2 rounded-md border border-[#2b2b2b]/20 bg-white text-sm focus:outline-none"
            >
              {Object.keys(filesByBranch).map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">View</label>
            <button
              onClick={() => setMapView(!mapView)}
              className="w-full mt-2 text-sm px-3 py-2 rounded-md border border-[#2b2b2b]/20 bg-white hover:bg-[#2b2b2b]/5 transition"
            >
              {mapView ? "Back to Editor" : "Switch to Map View"}
            </button>
          </div>
        </div>

        {!mapView && (
          <div className="flex-1 overflow-y-auto mt-4 text-sm space-y-2">
            <h3 className="font-semibold mb-2">Files in "{branch}"</h3>
            {files.map((file) => (
              <div
                key={file.id}
                className={`px-3 py-1 rounded cursor-pointer ${
                  file.id === selectedFile?.id
                    ? "bg-[#2b2b2b] text-white"
                    : "hover:bg-[#2b2b2b]/10"
                }`}
                onClick={() => setSelectedFile(file)}
              >
                {file.name}
              </div>
            ))}
          </div>
        )}
      </aside>

      {/* Right Panel */}
      <section className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {mapView ? (
            <>
              <h1 className="text-2xl font-serif mb-6">
                🗺️ Map View: All Files in "{branch}"
              </h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="bg-white rounded border border-[#2b2b2b]/20 shadow-sm p-4"
                  >
                    <h2 className="text-lg font-serif mb-2">{file.name}</h2>
                    <textarea
                      value={file.content}
                      onChange={(e) => {
                        const newContent = e.target.value;
                        filesByBranch[branch] = files.map((f) =>
                          f.id === file.id ? { ...f, content: newContent } : f
                        );
                      }}
                      className="w-full h-48 text-sm leading-relaxed border border-[#2b2b2b]/10 rounded p-2 bg-[#fefefe] resize-none"
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-serif mb-4">{selectedFile?.name}</h1>
              <textarea
                value={selectedFile?.content}
                onChange={(e) =>
                  setSelectedFile({ ...selectedFile, content: e.target.value })
                }
                placeholder="Start writing here..."
                className="w-full h-[70vh] px-4 py-3 text-lg leading-relaxed rounded border border-[#2b2b2b]/20 bg-white shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#2b2b2b]/30"
              />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
