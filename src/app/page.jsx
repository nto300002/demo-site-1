"use client";
import React, { useState } from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://ucarecdn.com/25b3393f-aac9-4914-9fcb-8366dbdbbf99/-/format/auto/')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <nav className="p-6">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-white text-3xl font-crimson-text">
                Clothing Exhibition
              </h1>
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => setActiveSection("about")}
                  className="text-white hover:text-[#e0e0e0] font-crimson-text"
                >
                  概要
                </button>
                <button
                  onClick={() => setActiveSection("location")}
                  className="text-white hover:text-[#e0e0e0] font-crimson-text"
                >
                  場所
                </button>
                <button
                  onClick={() => setActiveSection("workshop")}
                  className="text-white hover:text-[#e0e0e0] font-crimson-text"
                >
                  ワークショップ
                </button>
                <button
                  onClick={() => setActiveSection("products")}
                  className="text-white hover:text-[#e0e0e0] font-crimson-text"
                >
                  販売品
                </button>
              </div>
            </div>
          </nav>

          <div className="container mx-auto px-6 h-[calc(100vh-80px)] flex items-center">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl text-white mb-8 font-crimson-text">
                伝統と革新の融合
              </h2>
              <p className="text-xl text-white mb-8 font-crimson-text">
                日本の伝統的な織物技術と現代のデザインが出会う特別な展示会
              </p>
              <button
                onClick={() => setActiveSection("about")}
                className="bg-white text-[#333] px-8 py-3 rounded-md hover:bg-[#e0e0e0] transition duration-300 font-crimson-text"
              >
                詳細を見る
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-right">create in canva ai</p>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl mb-4 text-[#333] font-crimson-text">
              概要
            </h3>
            <p className="text-[#666] mb-4 font-crimson-text">
              伝統的な織物技術と現代デザインの融合を体験する展示会
            </p>
            <button
              onClick={() => setActiveSection("about")}
              className="text-[#333] hover:text-[#666] font-crimson-text"
            >
              詳しく見る →
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl mb-4 text-[#333] font-crimson-text">
              場所
            </h3>
            <p className="text-[#666] mb-4 font-crimson-text">
              東京都内の歴史ある建物で開催
            </p>
            <button
              onClick={() => setActiveSection("location")}
              className="text-[#333] hover:text-[#666] font-crimson-text"
            >
              アクセスを確認 →
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl mb-4 text-[#333] font-crimson-text">
              ワークショップ
            </h3>
            <p className="text-[#666] mb-4 font-crimson-text">
              織物技術を学べる体験型ワークショップ
            </p>
            <button
              onClick={() => setActiveSection("workshop")}
              className="text-[#333] hover:text-[#666] font-crimson-text"
            >
              予約する →
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl mb-4 text-[#333] font-crimson-text">
              販売品
            </h3>
            <p className="text-[#666] mb-4 font-crimson-text">
              展示作品の一部を限定販売
            </p>
            <button
              onClick={() => setActiveSection("products")}
              className="text-[#333] hover:text-[#666] font-crimson-text"
            >
              商品を見る →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
