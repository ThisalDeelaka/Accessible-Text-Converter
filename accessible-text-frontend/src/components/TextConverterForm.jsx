import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-8 max-w-lg w-full bg-gray-900 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
                <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-400 tracking-wider">
                    Text Converter Pro
                </h2>
                <p className="text-sm text-center text-gray-400 mb-8 italic">"Empowering your text transformation"</p>
                <motion.textarea
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type your text here..."
                    className="w-full p-4 mb-6 border border-gray-700 bg-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 transition duration-300 resize-none"
                    rows={5}
                />
                <motion.select
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full p-3 mb-6 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 transition duration-300"
                >
                    <option value="toUpperCase">Convert to Uppercase</option>
                    <option value="toLowerCase">Convert to Lowercase</option>
                    <option value="textToFile">Save Text to File</option>
                </motion.select>
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleConvert}
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                    <span className="mr-2">Convert</span> <FiArrowRight />
                </motion.button>
                {convertedText && (
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 p-4 bg-gray-800 rounded-lg shadow-inner"
                    >
                        <p className="text-lg font-semibold text-blue-400 mb-2">Converted Text:</p>
                        <div className="p-3 bg-gray-900 border border-gray-700 rounded-lg">
                            <p className="text-gray-200">{convertedText}</p>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default TextConverterForm;
