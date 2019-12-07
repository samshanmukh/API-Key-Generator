var d = new Date().getTime();
var APIKey = 'xxxxxxxxxxxx4xxxyxxxyyxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    var reg = (d + Math.random() * 32) % 32 | 0;
    d = Math.floor(d/32);
    return (char == 'x' ? reg : (reg & 0x3 | 0x8)).toString(32);
});

module.exports = APIKey
