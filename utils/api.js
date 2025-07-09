
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
const signupAPI = async (data) => {
    try {
        const response = await fetch("/api/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to sign up");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
}

const getExperienceAPI = async () => {
    try {

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await fetch(`${baseUrl}/experience`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: 'no-store'
        }

        );

        if (!response.ok) {
            throw new Error("Failed to fetch experiences");
        }

        const result = await response.json();
        return result;
    }
    catch (error) {
        console.error("Error fetching experiences:", error);
        throw error;
    }
}

export {
    sendMgsApi,
    signupAPI,
    getExperienceAPI
}