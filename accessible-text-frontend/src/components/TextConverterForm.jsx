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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="p-8 max-w-lg w-full bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Accessible Text Converter
                </h2>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type or paste your text here..."
                    className="w-full p-4 mb-6 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition duration-200 text-gray-700"
                    rows={5}
                />
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full p-3 mb-6 border border-gray-200 rounded-lg bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-600"
                >
                    <option value="toUpperCase">Convert to Uppercase</option>
                    <option value="toLowerCase">Convert to Lowercase</option>
                    <option value="textToFile">Save Text to File</option>
                </select>
                <button
                    onClick={handleConvert}
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Convert
                </button>
                {convertedText && (
                    <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-inner">
                        <p className="text-lg font-semibold text-gray-800 mb-2">Converted Text:</p>
                        <div className="p-3 bg-white border border-gray-200 rounded-lg">
                            <p className="text-gray-700">{convertedText}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextConverterForm;
