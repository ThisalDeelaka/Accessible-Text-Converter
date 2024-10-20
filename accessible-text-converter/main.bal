import ballerina/http;
import ballerina/io;

listener http:Listener textConverterListener = new(8080);

service /converter on textConverterListener {

    // Endpoint to convert text to uppercase
    resource function post toUpperCase(http:Caller caller, http:Request req) returns error? {
        string inputText = check req.getTextPayload();
        string upperCaseText = string:toUpperAscii(inputText);
        http:Response res = new;
        res.setPayload(upperCaseText);
        setCORSHeaders(res);
        _ = check caller->respond(res);
    }

    // Endpoint to convert text to lowercase
    resource function post toLowerCase(http:Caller caller, http:Request req) returns error? {
        string inputText = check req.getTextPayload();
        string lowerCaseText = string:toLowerAscii(inputText);
        http:Response res = new;
        res.setPayload(lowerCaseText);
        setCORSHeaders(res);
        _ = check caller->respond(res);
    }

    // Endpoint to convert text to a file
    resource function post textToFile(http:Caller caller, http:Request req) returns error? {
        json payload = check req.getJsonPayload();
        string textContent = payload.toString();
        string filePath = "./resources/output.txt";

        check writeToTextFile(filePath, textContent);

        string message = "Text converted and saved as a file at: " + filePath;
        http:Response res = new;
        res.setPayload(message);
        setCORSHeaders(res);
        _ = check caller->respond(res);
    }

    // Placeholder for PDF conversion
    resource function post convertToPDF(http:Caller caller, http:Request req) returns error? {
        string responseMessage = "This feature is under development.";
        http:Response res = new;
        res.setPayload(responseMessage);
        setCORSHeaders(res);
        _ = check caller->respond(res);
    }
}

// Helper function to write text to a file
function writeToTextFile(string filePath, string content) returns error? {
    check io:fileWriteString(filePath, content);
}

// Function to set CORS headers
function setCORSHeaders(http:Response res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}
