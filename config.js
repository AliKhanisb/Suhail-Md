const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923421991002";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_30_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM5LFxuICAgICAgICA3MixcbiAgICAgICAgODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyLFxuICAgICAgICA1MyxcbiAgICAgICAgNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICAzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiLzY5cldUWmk2ZGkwbytpZ1BqUG95bytpSXMrb3RiOE82RHlhQXdzWkt6bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MjE5OTEwMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZEODZFODRGRDBDQkE1MDhCQTUzMjQ5RTg4NkNBRkVFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzk3MjIyNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWYldVbHNjeFRiT2NmM1FOaDQ0bl9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE5OTA0NTFmLTE1YjItNDI3My1iYzkzLWRjZjJlMmYzNzg5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAxNzIsXG4gICAgICAxOTUsXG4gICAgICAzNSxcbiAgICAgIDI0OSxcbiAgICAgIDY2LFxuICAgICAgMTU5LFxuICAgICAgMjIyLFxuICAgICAgMTI5LFxuICAgICAgMzIsXG4gICAgICAxNDksXG4gICAgICA0NCxcbiAgICAgIDYwLFxuICAgICAgMyxcbiAgICAgIDE2NCxcbiAgICAgIDg3LFxuICAgICAgMzAsXG4gICAgICA4LFxuICAgICAgMTUyLFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDMwLFxuICAgICAgNjgsXG4gICAgICAyMDMsXG4gICAgICAyOCxcbiAgICAgIDE0MSxcbiAgICAgIDIxOCxcbiAgICAgIDEyNSxcbiAgICAgIDI0NCxcbiAgICAgIDIxOSxcbiAgICAgIDE4NixcbiAgICAgIDEyMixcbiAgICAgIDE1MixcbiAgICAgIDI1NCxcbiAgICAgIDIxMyxcbiAgICAgIDE5NSxcbiAgICAgIDE0NSxcbiAgICAgIDEyNyxcbiAgICAgIDI2LFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdaV1c3OFdKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MjE5OTEwMDI6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc1NzAzMjg2ODkwNzAwOjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTW9vblwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091UHVlY0ZFUGJabUxNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTURTUmRBTWl5SDFPYW85S2h6L2tUb1FTTFIxZGZaU3ZncVhUMndIVVh6RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOTXdzZ2FVdTVuZGlVY01YUlBpOGZXcWN0eGc0dFEwSWZpUVhNQnl0UkljTlFtNGJTN01QTzNqL1IyRGpXOWJGUktZY1JKNGl0LzlHdER3WEVRaE1CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvWHlmbUlWWEtaWnJ6aGhKQ1M3cHdPcXVEbnNqaDhlblFYek9PVlVZQXJ5WFUyVlViR1ZNL3ZIcy8zclFTWmdCY3daZ0J2WkpISFRPUHJhZHRObDlodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MjE5OTEwMDI6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc5NzIyMTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFM1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUzUS5qc29uIjogIntcImtleURhdGFcIjpcInEvbGQyUWNocDZ2RUE4aHlSTmt5ci9pZTdhRms3V3lKUmZ0S20zSGdBWW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU1OTExOTg1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
