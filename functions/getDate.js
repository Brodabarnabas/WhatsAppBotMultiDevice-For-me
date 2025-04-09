const getDate = () => {
    const date = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
    });
    return new Date(date);
};

module.exports = getDate;

