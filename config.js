const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theycallmeprofessormirza@gmail.com"
global.location="islamabad,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mirzaonfire:1432578901@cluster0.kthm6u0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴹᴵᴿᶻᴬ ᴬᴸᵂᴬᵞˢ ᴼᴺ ᵀᴼᴾ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923168066637";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "truee";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'available' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_30_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDg2LFxuICAgICAgICA4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI5LFxuICAgICAgICA0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgNSxcbiAgICAgICAgODgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaFBOdzNsa3ZwVXZBRGd0R0d5MXlDNTVWd1FNb1FrL0syU0I3cXlLL1VSdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidlllRWJFQ2lSei05RXdLM2hZdDhFZ1wiLFxuICBcInBob25lSWRcIjogXCJmODdjODBkOS04NzVlLTQyMjktODcyMC02NjZjODA3M2U4MmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICA3MCxcbiAgICAgIDgwLFxuICAgICAgMTQ1LFxuICAgICAgNDEsXG4gICAgICA0NSxcbiAgICAgIDI0NCxcbiAgICAgIDY3LFxuICAgICAgMTU2LFxuICAgICAgODksXG4gICAgICAyMjgsXG4gICAgICA3LFxuICAgICAgMTIxLFxuICAgICAgMTA5LFxuICAgICAgNTAsXG4gICAgICAxMjYsXG4gICAgICAyMjcsXG4gICAgICAyMzQsXG4gICAgICAxNzksXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDc1LFxuICAgICAgMTgsXG4gICAgICAxNTAsXG4gICAgICAyMDIsXG4gICAgICA0OCxcbiAgICAgIDE5LFxuICAgICAgNDcsXG4gICAgICAxNDksXG4gICAgICA1LFxuICAgICAgMjQ2LFxuICAgICAgMjQzLFxuICAgICAgNixcbiAgICAgIDMzLFxuICAgICAgNTksXG4gICAgICAyMSxcbiAgICAgIDIwOCxcbiAgICAgIDE3MCxcbiAgICAgIDQ5LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXFCN0VvUTc4SzZ0UVlZQ0NBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKa3c0bnlLOFZwZWxuNlIvazlzYlBOanRCYUxvKytYcFdneVNDRDBNTFI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFFdmYvUlJxTHc1SWdlRUlEcGV5cWZGQ0pnRk5DcHE5L0VQNnpBRmx3cmVjMFFJeHQvZXgxeVU5QWVSQk5SZHJZbmtRN1hybDhOcjNZeU5RTU9vaEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhUb2pQTXA3Vi81TXRiazJYam1FQ1FicnUrM2E1WXgraDIza2tuenpwbElyY0pRWkl0Y1V6KzVHTW5SNzlsd3VleXE3Z1lVNU5LOFhSVDYxc2dFWmhRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTY4MDY2NjM3OjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTS14LU1cIixcbiAgICBcImxpZFwiOiBcIjI4MDUwMDQ1NTQwMzc0NDo1MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE2ODA2NjYzNzo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3MjA2MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFESzVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURLMC5qc29uIjogIntcImtleURhdGFcIjpcIkdFSStyYWUxZHVuNGJOWnU4cG9CSG1rTGptaTlCQkl1ZEx4VUg0SXY2dXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU2OTU4OTIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFESzEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrYjE3bk1ONkgxTllXNDhzMytFbWJpMGl1Q3JSaXdFZHpyOXJ6UWJPWXMwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1Njk1ODkyMixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjM0NjMwNTEwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREsyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaXBrN0JGRkpZL2YwdFQxdThpMUI3YzBud04wejhyd1VKY253cUlKN1kwbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTY5NTg5MjIsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMyw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFESzMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5VlNaYTh4WEpjQjRiVHZvZWs1WHIxRHFUMVhoazNvSGNwK1FaSnNabDM0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1Njk1ODkyMixcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzLDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURLNC5qc29uIjogIntcImtleURhdGFcIjpcIit4M3BnbElSdVRvWDJaQVpUYkhWcmFYdDFOYmlNN0dtbkdNOXBPRjQrRFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU2OTU4OTIyLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURLNS5qc29uIjogIntcImtleURhdGFcIjpcImIya1l6SVYvajAyelkvbHRhc0xNejgyMWZPWXpDNnBGVkg2RTAyQk9JNkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU2OTU4OTIyLFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjcyMDU4ODg5NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『ᴹᴵᴿᶻᴬ ᴬᴸᵂᴬᵞˢ ᴼᴺ ᵀᴼᴾ 』```", //*『ᴹᴵᴿᶻᴬ ᴬᴸᵂᴬᵞˢ ᴼᴺ ᵀᴼᴾ』*\n youtube.com/@@TheDeadLockYT0"),
 
  author : process.env.PACK_AUTHER|| "MIRZA",
  packname: process.env.PACK_NAME || "MIRZA",
  botname : process.env.BOT_NAME  || "ᴹᴵᴿᶻᴬ",
  ownername:process.env.OWNER_NAME|| "MIRZA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
