"use client";

import AsciiCamera from "@/components/AsciiCamera";
import UploadConverter from "@/components/UploadConverter";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"camera" | "upload">("camera");

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono flex flex-col">
      {/* Header */}
      <header className="border-b border-green-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-green-300 tracking-widest">
            ASCII<span className="text-green-600">CAM</span>
          </span>
          <span className="text-xs text-green-700 border border-green-900 px-2 py-0.5 rounded">
            EQUIPO 5
          </span>
        </div>
        <nav className="flex gap-1">
          <button
            onClick={() => setActiveTab("camera")}
            className={`px-4 py-1.5 text-sm rounded transition-all cursor-pointer ${
              activeTab === "camera"
                ? "bg-green-950 text-green-300 border border-green-700"
                : "text-green-700 hover:text-green-500"
            }`}
          >
            [ CAMERA ]
          </button>
          <button
            onClick={() => setActiveTab("upload")}
            className={`px-4 py-1.5 text-sm rounded transition-all cursor-pointer ${
              activeTab === "upload"
                ? "bg-green-950 text-green-300 border border-green-700"
                : "text-green-700 hover:text-green-500"
            }`}
          >
            [ UPLOAD API ]
          </button>
        </nav>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {activeTab === "camera" ? <AsciiCamera /> : <UploadConverter />}
      </div>

      {/* Footer */}
      <footer className="border-t border-green-900 px-6 py-3 text-xs text-green-800 flex justify-between">
        <span>TOpicos Avanzados de ProgramaciOn Web — Next.js Expo</span>
      </footer>
    </main>
  );
}
