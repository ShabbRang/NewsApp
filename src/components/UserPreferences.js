import { useState, useEffect } from "react";
import { useEmail } from "./EmailContext";
import { Link } from "react-router-dom";

const UserPreferences = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedPreferences, setSelectedPreferences] = useState({});

  const { email } = useEmail();

  useEffect(() => {
    console.log(selectedPreferences);
  }, [selectedPreferences]);

  const countries = [
    { code: "ae", name: "United Arab Emirates" },
    { code: "ar", name: "Argentina" },
    { code: "at", name: "Austria" },
    { code: "au", name: "Australia" },
    { code: "be", name: "Belgium" },
    { code: "bg", name: "Bulgaria" },
    { code: "br", name: "Brazil" },
    { code: "ca", name: "Canada" },
    { code: "ch", name: "Switzerland" },
    { code: "cn", name: "China" },
    { code: "co", name: "Colombia" },
    { code: "cu", name: "Cuba" },
    { code: "cz", name: "Czech Republic" },
    { code: "de", name: "Germany" },
    { code: "eg", name: "Egypt" },
    { code: "fr", name: "France" },
    { code: "gb", name: "United Kingdom" },
    { code: "gr", name: "Greece" },
    { code: "hk", name: "Hong Kong" },
    { code: "hu", name: "Hungary" },
    { code: "id", name: "Indonesia" },
    { code: "ie", name: "Ireland" },
    { code: "il", name: "Israel" },
    { code: "in", name: "India" },
    { code: "it", name: "Italy" },
    { code: "jp", name: "Japan" },
    { code: "kr", name: "South Korea" },
    { code: "lt", name: "Lithuania" },
    { code: "lv", name: "Latvia" },
    { code: "ma", name: "Morocco" },
    { code: "mx", name: "Mexico" },
    { code: "my", name: "Malaysia" },
    { code: "ng", name: "Nigeria" },
    { code: "nl", name: "Netherlands" },
    { code: "no", name: "Norway" },
    { code: "nz", name: "New Zealand" },
    { code: "ph", name: "Philippines" },
    { code: "pl", name: "Poland" },
    { code: "pt", name: "Portugal" },
    { code: "ro", name: "Romania" },
    { code: "rs", name: "Serbia" },
    { code: "ru", name: "Russia" },
    { code: "sa", name: "Saudi Arabia" },
    { code: "se", name: "Sweden" },
    { code: "sg", name: "Singapore" },
    { code: "si", name: "Slovenia" },
    { code: "sk", name: "Slovakia" },
    { code: "th", name: "Thailand" },
    { code: "tr", name: "Turkey" },
    { code: "tw", name: "Taiwan" },
    { code: "ua", name: "Ukraine" },
    { code: "us", name: "United States" },
    { code: "ve", name: "Venezuela" },
    { code: "za", name: "South Africa" },
  ];

  const categories = [
    "business",
    "entertainment",
    "generalhealth",
    "science",
    "sports",
    "technology",
  ];

  const languages = [
    { code: "ar", name: "Arabic" },
    { code: "de", name: "German" },
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "he", name: "Hebrew" },
    { code: "it", name: "Italian" },
    { code: "nl", name: "Dutch" },
    { code: "no", name: "Norwegian" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "sv", name: "Swedish" },
    { code: "ud", name: "Urdu" },
    { code: "zh", name: "Chinese" },
  ];

  const handlePreferenceFormSubmit = async (e) => {
    e.preventDefault();

    console.log(email);

    const data = {
      email: email, // Include email in selected preferences
      country: selectedCountry,
      category: selectedCategory,
      languages: selectedLanguage,
    };

    setSelectedPreferences(data);

    // setSelectedPreferences({
    //   email: email, // Include email in selected preferences
    //   country: selectedCountry,
    //   category: selectedCategory,
    //   languages: selectedLanguage,
    // });

    try {
      const response = await fetch("/userPreference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedPreferences),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("Data sent successfully:", data);
      } else {
        console.error(
          "Failed to send data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <form
      className=" w-1/2 mx-auto border-2 border-gray-800 px-16 py-4 m-3 rounded-xl"
      onSubmit={handlePreferenceFormSubmit}
    >
      <h1 className="text-3xl font-bold">Give us your preferences 📝</h1>
      <div className="my-4">
        <label
          for="countries"
          className="block text-lg font-medium text-gray-900 "
        >
          Which country are you from 🌍?
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
        >
          <option>Select your country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="my-2">
        <label
          for="countries"
          className="block text-lg font-medium text-gray-900 "
        >
          What interests you 🏏?
        </label>

        <fieldset className=" flex justify-center gap-3 flex-wrap">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center my-2">
              <input
                id={`category-option-${index + 1}`}
                type="checkbox"
                name="categories"
                value={category}
                onChange={(e) => {
                  setSelectedCategory([...selectedCategory, category]);
                }}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`category-option-${index + 1}`}
                className="block ms-2 text-sm font-medium text-gray-900"
              >
                {category}
              </label>
            </div>
          ))}
        </fieldset>
      </div>

      <div className="mb-5">
        <label
          for="languages"
          className="block text-lg font-medium text-gray-900 "
        >
          What language do you speak 🔊?
        </label>

        <fieldset className=" flex justify-center gap-3 flex-wrap">
          {languages.map((language, index) => (
            <div key={index} className="flex items-center my-2">
              <input
                id={`language-option-${index + 1}`}
                type="checkbox"
                name="categories"
                value={language.code}
                onChange={(e) =>
                  setSelectedLanguage([...selectedLanguage, language.code])
                }
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`language-option-${index + 1}`}
                className="block ms-2 text-sm font-medium text-gray-900"
              >
                {language.name}
              </label>
            </div>
          ))}
        </fieldset>
      </div>

      <Link to="/">
        <button
          type="submit"
          className="mx-auto px-3 py-2 my-1 bg-slate-800 text-white rounded-xl flex justify-center"
        >
          Submit✅
        </button>
      </Link>
    </form>
  );
};

export default UserPreferences;
