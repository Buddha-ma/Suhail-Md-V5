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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_02_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMyLFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFleERxbm93YktRa2F4RGdmeTg0VFc4MDl1MTdzakRsczhaZlNEQ0cxOTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkx4MmdTNFBaUURlRVlRQ1RIWkt4OGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjQ0NjMxY2YtM2EyYi00NzIyLThhZDYtNzVkYzIzMWYxNTY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDE1LFxuICAgICAgMTMzLFxuICAgICAgMTMyLFxuICAgICAgNzQsXG4gICAgICAxNyxcbiAgICAgIDExOCxcbiAgICAgIDg4LFxuICAgICAgMTQsXG4gICAgICAyMzgsXG4gICAgICAxODIsXG4gICAgICA0MyxcbiAgICAgIDEyLFxuICAgICAgMTUsXG4gICAgICAxNDYsXG4gICAgICA2NixcbiAgICAgIDE5MSxcbiAgICAgIDEyNSxcbiAgICAgIDIzNixcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAyMDYsXG4gICAgICAxNTMsXG4gICAgICAyMSxcbiAgICAgIDEzMixcbiAgICAgIDIyOSxcbiAgICAgIDgwLFxuICAgICAgOTAsXG4gICAgICAyLFxuICAgICAgODUsXG4gICAgICAxOTQsXG4gICAgICAyNDcsXG4gICAgICA0MSxcbiAgICAgIDIxOSxcbiAgICAgIDE0NyxcbiAgICAgIDExMSxcbiAgICAgIDE3OCxcbiAgICAgIDE3LFxuICAgICAgNjUsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjVHOVJGUkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDA2OTQ4NDc6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MDI2MTQ0NTg5NDIzNTo2NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeUU2NUVGRUxieXNyc0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9FV1BQUElrMjZ3Z3NTWTlVYU1aaWNOZmVQME9TM3psbFEybUM5OFpOaVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV1IzZUV1NGdHZkQ5ZnlwS3VHaXhOcVJoY0hWVmVKZEhGOXU2UGd1OGMxYzBOQlN5djdDd0ZOSmQxa0lhbk52SkZtbUQvbk9KbjdPTmlSWW5NTmx4Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia1lkZnNmVHE2QTZNWHZsV1lYajBETGZOeFZNbTZ3QlcrUzg3TWxyejYxWnN6Y2FDTEVZcDVDYnJxRy9IcFZNYW50OHBLeDRhWGk4TXNDajRId0I3Q3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDY5NDg0Nzo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUxNzg1NTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBdFhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF0WC5qc29uIjogIntcImtleURhdGFcIjpcIkdGTERYVm9vL2s2d0J4VVBHeWpNWHBFdkgrVURUdEo4bnYwbUpPb01ncnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3OTU4MjU4OCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
