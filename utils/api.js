
const sendMgsApi = async (data) => {
    try {
        // console.log(data);
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(response);

        if (!response.ok) {
            throw new Error("Failed to send message");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
}

export {
    sendMgsApi
}