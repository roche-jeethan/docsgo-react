import React, { useState } from "react";
import LanguageList from "../components/LanguageList";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { general, web, mobile, mlds } from "../languages";
import { FaFilter } from "react-icons/fa";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const filterLanguages = (languages) =>
    languages.filter((language) =>
      language.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredGeneral = filterLanguages(general);
  const filteredWeb = filterLanguages(web);
  const filteredMobile = filterLanguages(mobile);
  const filteredMLDS = filterLanguages(mlds);

  const renderLanguageSection = () => {
    if (activeFilter === "all") {
      return (
        <>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">General Purpose Languages</h2>
            <LanguageList languages={filteredGeneral} />
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Web Development Languages</h2>
            <LanguageList languages={filteredWeb} />
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Mobile Development Languages</h2>
            <LanguageList languages={filteredMobile} />
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Machine Learning & Data Science Languages</h2>
            <LanguageList languages={filteredMLDS} />
          </section>
        </>
      );
    }

    switch (activeFilter) {
      case "general":
        return (
          <section className="mb-8">
            <LanguageList languages={filteredGeneral} />
          </section>
        );
      case "web":
        return (
          <section className="mb-8">
            <LanguageList languages={filteredWeb} />
          </section>
        );
      case "mobile":
        return (
          <section className="mb-8">
            <LanguageList languages={filteredMobile} />
          </section>
        );
      case "mlds":
        return (
          <section className="mb-8">
            <LanguageList languages={filteredMLDS} />
          </section>
        );
      default:
        return null;
    }
  };

  const FilterButton = ({ label, filterKey, icon }) => {
    const isActive = activeFilter === filterKey;
    return (
      <button
      onClick={() => setActiveFilter(filterKey)}
      className={`mb-1 mr-1 md:mb-1.5 md:mr-1.5 rounded-lg px-3 py-1 flex items-center transition-colors focus:outline-none ${
        isActive
        ? "bg-blue-600 text-white border border-blue-600 shadow-sm dark:bg-blue-500 dark:border-blue-500"
        : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
      }`}
      >
      {icon && <span className="mr-1">{icon}</span>}
      <span>{label}</span>
      </button>
    );
  };

  return (
      <div>
        <div className="py-10">
          <h1 className="text-6xl font-bold text-center">Welcome to DocsGo</h1>
          <p className="text-xl italic text-center mt-4">
            All documentations at one place, with one click!
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <SearchBar
            title="Search Bar"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onFocus={() => setActiveFilter("all")}
          />
        </div>
        <div className="mb-3 flex flex-wrap justify-center md:mb-4">
          <FilterButton label="All" filterKey="all" icon={<FaFilter />} />
          <FilterButton label="General" filterKey="general" />
          <FilterButton label="Web" filterKey="web" />
          <FilterButton label="Mobile" filterKey="mobile" />
          <FilterButton label="ML & DS" filterKey="mlds" />
        </div>
        <main className="p-4 sm:px-8">
          {renderLanguageSection()}
        </main>
        <Footer />
      </div>
  );
}

export default Home;
