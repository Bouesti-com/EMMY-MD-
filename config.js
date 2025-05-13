const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09keGlkb0tCL0diWHhhT0NIbnBxU1BNU0JQd28wZ0hLZFJxa2VZYkwyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXkrYXJpRzZMaldDSTRLUjgxaEthdFF1UTZJNmV1NXpIV0JYbGs3RnlBdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SzFZUEp5dFlXZDd4R0pMazQ4eTIzVzAzZTVrUnZ6cWtyTDV5eldRRlU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnVW5KZWs1S29PRmhlNE45bnpZV2hoQXltUi9nYnZSczE1bUVDamxHU0dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPdVNjT2RrWkt6cnkvdjEwTUh6RDVxejNDVXFBbEV2ZW8zSEUxRG0vVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVGajBOeFBidWFzKzFNMWFIR2ZRRU54K2Jya1BtYU9FSUxFUTM1bDhTMDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtUK3B4Q2lXdW85MmVDQXBFaUpkN0hWUjNsSEFNQ3c2NS9pVEVtdkNIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2liUktCZ0tQclR5S0pWL3NUd2pNVHRVbjZxQWJSVHVBMjFxa0NJZjEyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZNTkhYVVM3UXZlUHBHL1FvcVA3VHZTdytEVW00TXlGYTAvWG9Fdi9LSzA5bDE0cTFmYkNpL3I0Q1RjMlMvTTZFcm1ocDVPM1F6bGNmQ0lQbUN5SUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJwd1pxWC9RMUVmV1hENUJVTVlBU2ZFdVRKUEZYY01SQkpLNzFVWWRJY0U0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzgzMTIwMjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTdCRDkxNTI5NjBCMTc1NkZCRTMxNDdCMEVDMzNCNUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzE0MDU2Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3ODMxMjAyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQTExRDY2NzNCRDVDRjRGNDI5MUY4NEI0NTk2OUQ0MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3MTQwNTY2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmVFZFTXNIMlFkS1VNeUVlSWE5SW53IiwicGhvbmVJZCI6ImUzYTFmNDE2LTZhYTktNGIzZC04NmI2LWE2ZjI1OWE4NDIzYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3VEc4SzlPeGJMZEJLcTFFQzcwbVNNaTJCRzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjlsUHltNEpDUEJ5eEtvMFViZUJSMG9kMS9jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVON1pZVlhHIiwibWUiOnsiaWQiOiIyMzQ3MDc4MzEyMDIzOjQwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfmKXwn5ilIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQcWdzSEVRd3YrTXdRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRcWxsNnpRdnE1cHRrVHdQTWdycTVnTWpjd3I4Q3pLU2ovNXlwUDFEbkVZPSIsImFjY291bnRTaWduYXR1cmUiOiJIVUNkQ0hPREJuM0ZLQ0xhcXNzK3FVSzd4bjBGeGJNaXlPcXpWdGoxTnJyZzIrNWNRM0NKVW5jZExYbHVSQmRzWUc3aE1xemhqSUwyS1hSaFdBVjJEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL28zMmN0Vm1tUG5mM1cycksrSzdTNW8zbHM4Nk50K3FvZFAxZHBjN2hvcGdXSnpuZ1B1R1A2UGlBVmV2czcxTVM5RGF2NjcwaUNub0piRk1yMHJ0QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDc4MzEyMDIzOjQwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVLcFplczBMNnVhYlpFOER6SUs2dVlESTNNSy9Bc3lrby8rY3FUOVE1eEcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDcxNDA3NDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1NBIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY EMMY-MD 🤍*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "EMMY-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "EMMY-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "92342758XXXX",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "EMMY WHITE",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ EMMY WHITE*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/mpgtqa.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EMMY-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2347078312023",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
