import { useState } from "react";

const TextConverterForm = () => {
    const [text, setText] = useState("");
    const [convertedText, setConvertedText] = useState("");
    const [selectedOption, setSelectedOption] = useState("toUpperCase");

    const handleConvert = async () => {
        try {
            const response = await fetch(`http://localhost:8080/converter/${selectedOption}`, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: text,
            });
            const result = await response.text();
            setConvertedText(result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="p-6 max-w-lg w-full bg-white rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    🌟 Accessible Text Converter 🌟
                </h2>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text here..."
                    className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none transition"
                    rows={4}
                />
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                >
                    <option value="toUpperCase">🔠 Convert to Uppercase</option>
                    <option value="toLowerCase">🔡 Convert to Lowercase</option>
                    <option value="textToFile">💾 Save Text to File</option>
                </select>
                <button
                    onClick={handleConvert}
                    className="w-full p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                    Convert 🚀
                </button>
                {convertedText && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner">
                        <p className="text-lg font-semibold text-gray-700 mb-2">Converted Text:</p>
                        <div className="p-2 bg-gray-200 rounded-lg">
                            <p className="text-gray-900">{convertedText}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextConverterForm;
