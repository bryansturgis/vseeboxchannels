// ================================
// Channel Data - vSeeBox Channels 2025
// ================================

// NOTE: Due to the size of the full dataset (1064 channels), this includes a representative sample.
// For production, you should load the complete channel data from /data/channels.json

const CHANNELS_DATA = [
    // Sample channels - Replace with full data in production
  // === National Channels (1–278) ===
  { number: 1, name: "A&E", category: "National Channels", playback: true, id: "national-channels-1", is247: true },
  { number: 2, name: "ABC East", category: "National Channels", playback: true, id: "national-channels-2", is247: true },
  { number: 3, name: "ABC West", category: "National Channels", playback: false, id: "national-channels-3", is247: false },
  { number: 4, name: "ABC News", category: "National Channels", playback: true, id: "national-channels-4", is247: true },
  { number: 5, name: "AccuWeather", category: "National Channels", playback: false, id: "national-channels-5", is247: false },
  { number: 6, name: "Adult Swim", category: "National Channels", playback: false, id: "national-channels-6", is247: false },
  { number: 7, name: "AMC East", category: "National Channels", playback: true, id: "national-channels-7", is247: true },
  { number: 8, name: "AMC West", category: "National Channels", playback: false, id: "national-channels-8", is247: false },
  { number: 9, name: "American Heroes Channel", category: "National Channels", playback: false, id: "national-channels-9", is247: false },
  { number: 10, name: "Animal Planet East", category: "National Channels", playback: false, id: "national-channels-10", is247: false },
  { number: 11, name: "Animal Planet West", category: "National Channels", playback: false, id: "national-channels-11", is247: false },
  { number: 12, name: "Antenna TV", category: "National Channels", playback: true, id: "national-channels-12", is247: true },
  { number: 13, name: "AXS TV", category: "National Channels", playback: false, id: "national-channels-13", is247: false },
  { number: 14, name: "BabyFirst TV", category: "National Channels", playback: false, id: "national-channels-14", is247: false },
  { number: 15, name: "BBC America", category: "National Channels", playback: false, id: "national-channels-15", is247: false },
  { number: 16, name: "BBC World News", category: "National Channels", playback: false, id: "national-channels-16", is247: false },
  { number: 17, name: "BET East", category: "National Channels", playback: false, id: "national-channels-17", is247: false },
  { number: 18, name: "BET West", category: "National Channels", playback: false, id: "national-channels-18", is247: false },
  { number: 19, name: "BET Her East", category: "National Channels", playback: false, id: "national-channels-19", is247: false },
  { number: 20, name: "BET Her West", category: "National Channels", playback: false, id: "national-channels-20", is247: false },
  { number: 22, name: "Boomerang", category: "National Channels", playback: false, id: "national-channels-22", is247: false },
  { number: 23, name: "Bounce TV", category: "National Channels", playback: false, id: "national-channels-23", is247: false },
  { number: 24, name: "Bravo East", category: "National Channels", playback: true, id: "national-channels-24", is247: true },
  { number: 25, name: "Bravo West", category: "National Channels", playback: false, id: "national-channels-25", is247: false },
  { number: 26, name: "Cartoon Network East", category: "National Channels", playback: false, id: "national-channels-26", is247: false },
  { number: 27, name: "Cartoon Network West", category: "National Channels", playback: false, id: "national-channels-27", is247: false },
  { number: 28, name: "CBS East", category: "National Channels", playback: true, id: "national-channels-28", is247: true },
  { number: 29, name: "CBS West", category: "National Channels", playback: false, id: "national-channels-29", is247: false },
  { number: 30, name: "Charge!", category: "National Channels", playback: false, id: "national-channels-30", is247: false },
  { number: 31, name: "Cinemax East", category: "National Channels", playback: false, id: "national-channels-31", is247: false },
  { number: 32, name: "Cinemax West", category: "National Channels", playback: false, id: "national-channels-32", is247: false },
  { number: 33, name: "Cleo TV", category: "National Channels", playback: false, id: "national-channels-33", is247: false },
  { number: 34, name: "CMT", category: "National Channels", playback: false, id: "national-channels-34", is247: false },
  { number: 35, name: "CNBC", category: "National Channels", playback: false, id: "national-channels-35", is247: false },
  { number: 36, name: "CNBC World", category: "National Channels", playback: false, id: "national-channels-36", is247: false },
  { number: 37, name: "CNN", category: "National Channels", playback: true, id: "national-channels-37", is247: true },
  { number: 38, name: "CNN International", category: "National Channels", playback: false, id: "national-channels-38", is247: false },
  { number: 39, name: "Comedy Central East", category: "National Channels", playback: false, id: "national-channels-39", is247: false },
  { number: 40, name: "Comedy Central West", category: "National Channels", playback: false, id: "national-channels-40", is247: false },
  { number: 41, name: "Comedy TV", category: "National Channels", playback: false, id: "national-channels-41", is247: false },
  { number: 42, name: "Comet", category: "National Channels", playback: false, id: "national-channels-42", is247: false },
  { number: 43, name: "Cooking Channel", category: "National Channels", playback: false, id: "national-channels-43", is247: false },
  { number: 44, name: "Court TV", category: "National Channels", playback: false, id: "national-channels-44", is247: false },
  { number: 45, name: "COZI TV", category: "National Channels", playback: false, id: "national-channels-45", is247: false },
  { number: 46, name: "Dabl", category: "National Channels", playback: false, id: "national-channels-46", is247: false },
  { number: 47, name: "Destination America", category: "National Channels", playback: false, id: "national-channels-47", is247: false },
  { number: 48, name: "Discovery Channel East", category: "National Channels", playback: true, id: "national-channels-48", is247: true },
  { number: 49, name: "Discovery Channel West", category: "National Channels", playback: false, id: "national-channels-49", is247: false },
  { number: 50, name: "Discovery Family", category: "National Channels", playback: false, id: "national-channels-50", is247: false },
  { number: 51, name: "Discovery Life", category: "National Channels", playback: false, id: "national-channels-51", is247: false },
  { number: 52, name: "Disney Channel East", category: "National Channels", playback: false, id: "national-channels-52", is247: false },
  { number: 53, name: "Disney Channel West", category: "National Channels", playback: false, id: "national-channels-53", is247: false },
  { number: 54, name: "Disney Junior East", category: "National Channels", playback: false, id: "national-channels-54", is247: false },
  { number: 55, name: "Disney Junior West", category: "National Channels", playback: false, id: "national-channels-55", is247: false },
  { number: 56, name: "Disney XD East", category: "National Channels", playback: false, id: "national-channels-56", is247: false },
  { number: 57, name: "Disney XD West", category: "National Channels", playback: false, id: "national-channels-57", is247: false },
  { number: 58, name: "E! East", category: "National Channels", playback: false, id: "national-channels-58", is247: false },
  { number: 59, name: "E! West", category: "National Channels", playback: false, id: "national-channels-59", is247: false },
  { number: 60, name: "FETV", category: "National Channels", playback: false, id: "national-channels-60", is247: false },
  { number: 61, name: "Food Network East", category: "National Channels", playback: false, id: "national-channels-61", is247: false },
  { number: 62, name: "Food Network West", category: "National Channels", playback: true, id: "national-channels-62", is247: true },
  { number: 63, name: "Fox Business Network", category: "National Channels", playback: false, id: "national-channels-63", is247: false },
  { number: 64, name: "Fox East", category: "National Channels", playback: true, id: "national-channels-64", is247: true },
  { number: 65, name: "Fox West", category: "National Channels", playback: false, id: "national-channels-65", is247: false },
  { number: 66, name: "Fox News Channel", category: "National Channels", playback: true, id: "national-channels-66", is247: true },
  { number: 67, name: "Freeform East", category: "National Channels", playback: false, id: "national-channels-67", is247: false },
  { number: 68, name: "Freeform West", category: "National Channels", playback: false, id: "national-channels-68", is247: false },
  { number: 69, name: "Fuse", category: "National Channels", playback: false, id: "national-channels-69", is247: false },
  { number: 70, name: "FX East", category: "National Channels", playback: false, id: "national-channels-70", is247: false },
  { number: 71, name: "FX West", category: "National Channels", playback: false, id: "national-channels-71", is247: false },
  { number: 72, name: "FXM FX Movie Channel", category: "National Channels", playback: false, id: "national-channels-72", is247: false },
  { number: 73, name: "FXX East", category: "National Channels", playback: false, id: "national-channels-73", is247: false },
  { number: 74, name: "FXX West", category: "National Channels", playback: false, id: "national-channels-74", is247: false },
  { number: 75, name: "FYI", category: "National Channels", playback: false, id: "national-channels-75", is247: false },
  { number: 76, name: "GAC Family", category: "National Channels", playback: false, id: "national-channels-76", is247: false },
  { number: 77, name: "Game Show Network", category: "National Channels", playback: false, id: "national-channels-77", is247: false },
  { number: 78, name: "Grit", category: "National Channels", playback: false, id: "national-channels-78", is247: false },
  { number: 79, name: "Hallmark Channel East", category: "National Channels", playback: true, id: "national-channels-79", is247: true },
  { number: 80, name: "Hallmark Channel West", category: "National Channels", playback: false, id: "national-channels-80", is247: false },
  { number: 81, name: "Hallmark Drama", category: "National Channels", playback: false, id: "national-channels-81", is247: false },
  { number: 82, name: "Hallmark Movies & Mysteries", category: "National Channels", playback: false, id: "national-channels-82", is247: false },
  { number: 83, name: "HBO Comedy East", category: "National Channels", playback: false, id: "national-channels-83", is247: false },
  { number: 84, name: "HBO Comedy West", category: "National Channels", playback: false, id: "national-channels-84", is247: false },
  { number: 85, name: "HBO East", category: "National Channels", playback: false, id: "national-channels-85", is247: false },
  { number: 86, name: "HBO West", category: "National Channels", playback: false, id: "national-channels-86", is247: false },
  { number: 87, name: "HBO Family East", category: "National Channels", playback: false, id: "national-channels-87", is247: false },
  { number: 88, name: "HBO Family West", category: "National Channels", playback: false, id: "national-channels-88", is247: false },
  { number: 89, name: "HBO Signature East", category: "National Channels", playback: false, id: "national-channels-89", is247: false },
  { number: 90, name: "HBO Signature West", category: "National Channels", playback: false, id: "national-channels-90", is247: false },
  { number: 91, name: "HBO2 East", category: "National Channels", playback: false, id: "national-channels-91", is247: false },
  { number: 92, name: "HBO2 West", category: "National Channels", playback: false, id: "national-channels-92", is247: false },
  { number: 93, name: "Heroes & Icons", category: "National Channels", playback: false, id: "national-channels-93", is247: false },
  { number: 94, name: "HGTV East", category: "National Channels", playback: true, id: "national-channels-94", is247: true },
  { number: 95, name: "HGTV West", category: "National Channels", playback: false, id: "national-channels-95", is247: false },
  { number: 96, name: "History", category: "National Channels", playback: true, id: "national-channels-96", is247: true },
  { number: 97, name: "HLN", category: "National Channels", playback: false, id: "national-channels-97", is247: false },
  { number: 98, name: "IFC", category: "National Channels", playback: false, id: "national-channels-98", is247: false },
  { number: 99, name: "INSP", category: "National Channels", playback: false, id: "national-channels-99", is247: false },
  { number: 100, name: "Investigation Discovery East", category: "National Channels", playback: true, id: "national-channels-100", is247: true },
  { number: 101, name: "Investigation Discovery West", category: "National Channels", playback: false, id: "national-channels-101", is247: false },
  { number: 102, name: "ION Mystery", category: "National Channels", playback: false, id: "national-channels-102", is247: false },
  { number: 103, name: "ION TV East", category: "National Channels", playback: false, id: "national-channels-103", is247: false },
  { number: 104, name: "ION TV West", category: "National Channels", playback: false, id: "national-channels-104", is247: false },
  { number: 105, name: "Justice Central", category: "National Channels", playback: false, id: "national-channels-105", is247: false },
  { number: 106, name: "Laff", category: "National Channels", playback: false, id: "national-channels-106", is247: false },
  { number: 107, name: "Lifetime", category: "National Channels", playback: true, id: "national-channels-107", is247: true },
  { number: 108, name: "LMN Lifetime Movies", category: "National Channels", playback: false, id: "national-channels-108", is247: false },
  { number: 109, name: "Logo", category: "National Channels", playback: false, id: "national-channels-109", is247: false },
  { number: 110, name: "LXTV", category: "National Channels", playback: false, id: "national-channels-110", is247: false },
  { number: 111, name: "Magnolia Network", category: "National Channels", playback: false, id: "national-channels-111", is247: false },
  { number: 112, name: "MSNBC", category: "National Channels", playback: true, id: "national-channels-112", is247: true },
  { number: 113, name: "MTV", category: "National Channels", playback: false, id: "national-channels-113", is247: false },
  { number: 114, name: "MTV2", category: "National Channels", playback: false, id: "national-channels-114", is247: false },
  { number: 115, name: "MTV Live", category: "National Channels", playback: false, id: "national-channels-115", is247: false },
  { number: 116, name: "Nat Geo East", category: "National Channels", playback: false, id: "national-channels-116", is247: false },
  { number: 117, name: "Nat Geo West", category: "National Channels", playback: false, id: "national-channels-117", is247: false },
  { number: 118, name: "Nat Geo Wild", category: "National Channels", playback: false, id: "national-channels-118", is247: false },
  { number: 119, name: "NBC East", category: "National Channels", playback: true, id: "national-channels-119", is247: true },
  { number: 120, name: "NBC West", category: "National Channels", playback: false, id: "national-channels-120", is247: false },
  { number: 121, name: "Newsmax TV", category: "National Channels", playback: false, id: "national-channels-121", is247: false },
  { number: 122, name: "NewsNation", category: "National Channels", playback: false, id: "national-channels-122", is247: false },
  { number: 123, name: "Newsy", category: "National Channels", playback: false, id: "national-channels-123", is247: false },
  { number: 124, name: "Nick Jr. East", category: "National Channels", playback: false, id: "national-channels-124", is247: false },
  { number: 125, name: "Nick Jr. West", category: "National Channels", playback: false, id: "national-channels-125", is247: false },
  { number: 126, name: "Nickelodeon East", category: "National Channels", playback: false, id: "national-channels-126", is247: false },
  { number: 127, name: "Nickelodeon West", category: "National Channels", playback: false, id: "national-channels-127", is247: false },
  { number: 128, name: "Nicktoons", category: "National Channels", playback: false, id: "national-channels-128", is247: false },
  { number: 129, name: "Oprah Winfrey Network", category: "National Channels", playback: false, id: "national-channels-129", is247: false },
  { number: 130, name: "Ovation", category: "National Channels", playback: false, id: "national-channels-130", is247: false },
  { number: 131, name: "Oxygen East", category: "National Channels", playback: false, id: "national-channels-131", is247: false },
  { number: 132, name: "Oxygen West", category: "National Channels", playback: false, id: "national-channels-132", is247: false },
  { number: 133, name: "Paramount Network East", category: "National Channels", playback: false, id: "national-channels-133", is247: false },
  { number: 134, name: "Paramount Network West", category: "National Channels", playback: false, id: "national-channels-134", is247: false },
  { number: 135, name: "Pop TV East", category: "National Channels", playback: false, id: "national-channels-135", is247: false },
  { number: 136, name: "Pop TV West", category: "National Channels", playback: false, id: "national-channels-136", is247: false },
  { number: 137, name: "Pursuit Channel", category: "National Channels", playback: false, id: "national-channels-137", is247: false },
  { number: 138, name: "Reelz", category: "National Channels", playback: false, id: "national-channels-138", is247: false },
  { number: 139, name: "RFD-TV", category: "National Channels", playback: false, id: "national-channels-139", is247: false },
  { number: 140, name: "Science Channel", category: "National Channels", playback: false, id: "national-channels-140", is247: false },
  { number: 141, name: "Showtime East", category: "National Channels", playback: false, id: "national-channels-141", is247: false },
  { number: 142, name: "Showtime West", category: "National Channels", playback: false, id: "national-channels-142", is247: false },
  { number: 143, name: "Smithsonian Channel East", category: "National Channels", playback: false, id: "national-channels-143", is247: false },
  { number: 144, name: "Smithsonian Channel West", category: "National Channels", playback: false, id: "national-channels-144", is247: false },
  { number: 145, name: "Start TV", category: "National Channels", playback: false, id: "national-channels-145", is247: false },
  { number: 146, name: "STARZ East", category: "National Channels", playback: false, id: "national-channels-146", is247: false },
  { number: 147, name: "STARZ West", category: "National Channels", playback: false, id: "national-channels-147", is247: false },
  { number: 148, name: "STARZ Encore East", category: "National Channels", playback: false, id: "national-channels-148", is247: false },
  { number: 149, name: "STARZ Encore West", category: "National Channels", playback: false, id: "national-channels-149", is247: false },
  { number: 150, name: "Sundance TV", category: "National Channels", playback: false, id: "national-channels-150", is247: false },
  { number: 151, name: "Syfy East", category: "National Channels", playback: false, id: "national-channels-151", is247: false },
  { number: 152, name: "Syfy West", category: "National Channels", playback: false, id: "national-channels-152", is247: false },
  { number: 153, name: "The CW East", category: "National Channels", playback: false, id: "national-channels-153", is247: false },
  { number: 154, name: "The CW West", category: "National Channels", playback: true, id: "national-channels-154", is247: true },
  { number: 155, name: "TBD", category: "National Channels", playback: false, id: "national-channels-155", is247: false },
  { number: 156, name: "TBS East", category: "National Channels", playback: true, id: "national-channels-156", is247: true },
  { number: 157, name: "TBS West", category: "National Channels", playback: false, id: "national-channels-157", is247: false },
  { number: 158, name: "TeenNick", category: "National Channels", playback: false, id: "national-channels-158", is247: false },
  { number: 159, name: "The Cowboy Channel", category: "National Channels", playback: false, id: "national-channels-159", is247: false },
  { number: 160, name: "TLC East", category: "National Channels", playback: true, id: "national-channels-160", is247: true },
  { number: 161, name: "TLC West", category: "National Channels", playback: false, id: "national-channels-161", is247: false },
  { number: 162, name: "TNT East", category: "National Channels", playback: false, id: "national-channels-162", is247: false },
  { number: 163, name: "TNT West", category: "National Channels", playback: false, id: "national-channels-163", is247: false },
  { number: 164, name: "Travel Channel East", category: "National Channels", playback: false, id: "national-channels-164", is247: false },
  { number: 165, name: "Travel Channel West", category: "National Channels", playback: false, id: "national-channels-165", is247: false },
  { number: 166, name: "truTV East", category: "National Channels", playback: false, id: "national-channels-166", is247: false },
  { number: 167, name: "truTV West", category: "National Channels", playback: false, id: "national-channels-167", is247: false },
  { number: 168, name: "TV Land East", category: "National Channels", playback: false, id: "national-channels-168", is247: false },
  { number: 169, name: "TV Land West", category: "National Channels", playback: false, id: "national-channels-169", is247: false },
  { number: 170, name: "TV One", category: "National Channels", playback: false, id: "national-channels-170", is247: false },
  { number: 171, name: "Universal Kids East", category: "National Channels", playback: false, id: "national-channels-171", is247: false },
  { number: 172, name: "Universal Kids West", category: "National Channels", playback: false, id: "national-channels-172", is247: false },
  { number: 173, name: "UPtv", category: "National Channels", playback: false, id: "national-channels-173", is247: false },
  { number: 174, name: "USA Network East", category: "National Channels", playback: true, id: "national-channels-174", is247: true },
  { number: 175, name: "USA Network West", category: "National Channels", playback: false, id: "national-channels-175", is247: false },
  { number: 176, name: "VH1", category: "National Channels", playback: false, id: "national-channels-176", is247: false },
  { number: 177, name: "Vice TV East", category: "National Channels", playback: false, id: "national-channels-177", is247: false },
  { number: 178, name: "Vice TV West", category: "National Channels", playback: false, id: "national-channels-178", is247: false },
  { number: 179, name: "WE tv", category: "National Channels", playback: false, id: "national-channels-179", is247: false },
  { number: 180, name: "The Weather Channel", category: "National Channels", playback: false, id: "national-channels-180", is247: false },
  { number: 181, name: "Telemundo East", category: "National Channels", playback: false, id: "national-channels-181", is247: false },
  { number: 182, name: "Telemundo West", category: "National Channels", playback: true, id: "national-channels-182", is247: true },
  { number: 183, name: "Univision East", category: "National Channels", playback: false, id: "national-channels-183", is247: false },
  { number: 184, name: "Univision West", category: "National Channels", playback: true, id: "national-channels-184", is247: true },
  { number: 185, name: "BET Jams", category: "National Channels", playback: false, id: "national-channels-185", is247: false },
  { number: 186, name: "BET Soul", category: "National Channels", playback: false, id: "national-channels-186", is247: false },
  { number: 187, name: "CMT Music", category: "National Channels", playback: false, id: "national-channels-187", is247: false },
  { number: 189, name: "HBO Zone", category: "National Channels", playback: false, id: "national-channels-189", is247: false },
  { number: 190, name: "HDNet Movies", category: "National Channels", playback: false, id: "national-channels-190", is247: false },
  { number: 191, name: "MoviePlex", category: "National Channels", playback: false, id: "national-channels-191", is247: false },
  { number: 192, name: "NickMusic", category: "National Channels", playback: false, id: "national-channels-192", is247: false },
  { number: 193, name: "Bloomberg", category: "National Channels", playback: false, id: "national-channels-193", is247: false },
  { number: 194, name: "Cheddar", category: "National Channels", playback: false, id: "national-channels-194", is247: false },
  { number: 195, name: "Starz Encore Westerns East", category: "National Channels", playback: false, id: "national-channels-195", is247: false },
  { number: 196, name: "Starz Encore Westerns West", category: "National Channels", playback: false, id: "national-channels-196", is247: false },
  { number: 197, name: "PokerGO", category: "National Channels", playback: false, id: "national-channels-197", is247: false },
  { number: 198, name: "World Poker Tour", category: "National Channels", playback: false, id: "national-channels-198", is247: false },
  { number: 199, name: "One American News Channel", category: "National Channels", playback: false, id: "national-channels-199", is247: false },
  { number: 200, name: "BYUtv", category: "National Channels", playback: false, id: "national-channels-200", is247: false },
  { number: 201, name: "Real America’s Voice", category: "National Channels", playback: false, id: "national-channels-201", is247: false },
  { number: 202, name: "MeTV East", category: "National Channels", playback: true, id: "national-channels-202", is247: true },
  { number: 203, name: "MeTV West", category: "National Channels", playback: false, id: "national-channels-203", is247: false },
  { number: 204, name: "BET Gospel", category: "National Channels", playback: false, id: "national-channels-204", is247: false },
  { number: 205, name: "Buzzr", category: "National Channels", playback: false, id: "national-channels-205", is247: false },
  { number: 206, name: "C-Span", category: "National Channels", playback: false, id: "national-channels-206", is247: false },
  { number: 207, name: "HSN", category: "National Channels", playback: false, id: "national-channels-207", is247: false },
  { number: 208, name: "QVC", category: "National Channels", playback: false, id: "national-channels-208", is247: false },
  { number: 209, name: "Cinemax MoreMax", category: "National Channels", playback: false, id: "national-channels-209", is247: false },
  { number: 210, name: "Cinemax ActionMax", category: "National Channels", playback: false, id: "national-channels-210", is247: false },
  { number: 211, name: "Cinemax ThrillerMax", category: "National Channels", playback: false, id: "national-channels-211", is247: false },
  { number: 212, name: "Cinemax 5StarMax", category: "National Channels", playback: false, id: "national-channels-212", is247: false },
  { number: 213, name: "Cinemax MovieMax", category: "National Channels", playback: false, id: "national-channels-213", is247: false },
  { number: 214, name: "Cinemax OuterMax", category: "National Channels", playback: false, id: "national-channels-214", is247: false },
  { number: 215, name: "AWE", category: "National Channels", playback: false, id: "national-channels-215", is247: false },
  { number: 216, name: "MGM+", category: "National Channels", playback: false, id: "national-channels-216", is247: false },
  { number: 217, name: "MGM+ Hits", category: "National Channels", playback: false, id: "national-channels-217", is247: false },
  { number: 218, name: "MGM+ Marquee", category: "National Channels", playback: false, id: "national-channels-218", is247: false },
  { number: 219, name: "MGM+ Drive-In", category: "National Channels", playback: false, id: "national-channels-219", is247: false },
  { number: 220, name: "Turner Classic Movies TCM", category: "National Channels", playback: false, id: "national-channels-220", is247: false },
  { number: 221, name: "Showtime 2", category: "National Channels", playback: false, id: "national-channels-221", is247: false },
  { number: 222, name: "Showtime Showcase", category: "National Channels", playback: false, id: "national-channels-222", is247: false },
  { number: 223, name: "SHO×BET", category: "National Channels", playback: false, id: "national-channels-223", is247: false },
  { number: 224, name: "Showtime Extreme", category: "National Channels", playback: false, id: "national-channels-224", is247: false },
  { number: 225, name: "Showtime Family Zone", category: "National Channels", playback: false, id: "national-channels-225", is247: false },
  { number: 226, name: "Showtime Next", category: "National Channels", playback: false, id: "national-channels-226", is247: false },
  { number: 227, name: "Showtime Women", category: "National Channels", playback: false, id: "national-channels-227", is247: false },
  { number: 228, name: "Daystar Television Network", category: "National Channels", playback: false, id: "national-channels-228", is247: false },
  { number: 229, name: "The Word Network", category: "National Channels", playback: false, id: "national-channels-229", is247: false },
  { number: 230, name: "Trinity Broadcasting Network", category: "National Channels", playback: false, id: "national-channels-230", is247: false },
  { number: 231, name: "Victory Television Network", category: "National Channels", playback: false, id: "national-channels-231", is247: false },
  { number: 232, name: "Circle", category: "National Channels", playback: false, id: "national-channels-232", is247: false },
  { number: 233, name: "Create TV", category: "National Channels", playback: false, id: "national-channels-233", is247: false },
  { number: 234, name: "DOGTV", category: "National Channels", playback: false, id: "national-channels-234", is247: false },
  { number: 235, name: "PBS Kids", category: "National Channels", playback: false, id: "national-channels-235", is247: false },
  { number: 236, name: "SonLife Broadcasting Network", category: "National Channels", playback: false, id: "national-channels-236", is247: false },
  { number: 237, name: "aspireTV", category: "National Channels", playback: false, id: "national-channels-237", is247: false },
  { number: 238, name: "Blaze TV", category: "National Channels", playback: false, id: "national-channels-238", is247: false },
  { number: 239, name: "El Rey Network", category: "National Channels", playback: false, id: "national-channels-239", is247: false },
  { number: 240, name: "Great American Family", category: "National Channels", playback: false, id: "national-channels-240", is247: false },
  { number: 241, name: "Law & Crime", category: "National Channels", playback: false, id: "national-channels-241", is247: false },
  { number: 242, name: "The Movie Channel", category: "National Channels", playback: false, id: "national-channels-242", is247: false },
  { number: 243, name: "NASA TV", category: "National Channels", playback: false, id: "national-channels-243", is247: false },
  { number: 244, name: "New England Cable News", category: "National Channels", playback: false, id: "national-channels-244", is247: false },
  { number: 246, name: "Sky Cinema Premiere", category: "National Channels", playback: false, id: "national-channels-246", is247: false },
  { number: 247, name: "Sky Cinema Hits", category: "National Channels", playback: false, id: "national-channels-247", is247: false },
  { number: 248, name: "Sky Cinema Greats", category: "National Channels", playback: false, id: "national-channels-248", is247: false },
  { number: 249, name: "Sky Cinema Animation", category: "National Channels", playback: false, id: "national-channels-249", is247: false },
  { number: 250, name: "Sky Cinema Family", category: "National Channels", playback: false, id: "national-channels-250", is247: false },
  { number: 251, name: "Sky Cinema Action", category: "National Channels", playback: false, id: "national-channels-251", is247: false },
  { number: 252, name: "Sky Cinema Comedy", category: "National Channels", playback: false, id: "national-channels-252", is247: false },
  { number: 253, name: "Sky Cinema Thriller", category: "National Channels", playback: false, id: "national-channels-253", is247: false },
  { number: 254, name: "Sky Cinema Drama", category: "National Channels", playback: false, id: "national-channels-254", is247: false },
  { number: 255, name: "Sky Cinema Sci-Fi Horror", category: "National Channels", playback: false, id: "national-channels-255", is247: false },
  { number: 256, name: "Tastemade", category: "National Channels", playback: false, id: "national-channels-256", is247: false },
  { number: 257, name: "Tastemade Home", category: "National Channels", playback: false, id: "national-channels-257", is247: false },
  { number: 258, name: "WeatherNation TV", category: "National Channels", playback: false, id: "national-channels-258", is247: false },
  { number: 259, name: "Vevo Hip-Hop", category: "National Channels", playback: false, id: "national-channels-259", is247: false },
  { number: 260, name: "Vevo Latino", category: "National Channels", playback: false, id: "national-channels-260", is247: false },
  { number: 261, name: "Vevo Pop", category: "National Channels", playback: false, id: "national-channels-261", is247: false },
  { number: 262, name: "Vevo R&B", category: "National Channels", playback: false, id: "national-channels-262", is247: false },
  { number: 263, name: "Music Choice Blues", category: "National Channels", playback: false, id: "national-channels-263", is247: false },
  { number: 264, name: "Music Choice Classic Country", category: "National Channels", playback: false, id: "national-channels-264", is247: false },
  { number: 265, name: "Music Choice Contemporary Christian", category: "National Channels", playback: false, id: "national-channels-265", is247: false },
  { number: 266, name: "Music Choice Jazz", category: "National Channels", playback: false, id: "national-channels-266", is247: false },
  { number: 267, name: "Music Choice Kids Only!", category: "National Channels", playback: false, id: "national-channels-267", is247: false },
  { number: 268, name: "Music Choice Party Favorites", category: "National Channels", playback: false, id: "national-channels-268", is247: false },
  { number: 269, name: "Music Choice Romance", category: "National Channels", playback: false, id: "national-channels-269", is247: false },
  { number: 270, name: "Music Choice Y2K", category: "National Channels", playback: false, id: "national-channels-270", is247: false },
  { number: 271, name: "MTV Classic", category: "National Channels", playback: false, id: "national-channels-271", is247: false },
  { number: 272, name: "TCT Network", category: "National Channels", playback: false, id: "national-channels-272", is247: false },
  { number: 273, name: "Catchy Comedy (Decades)", category: "National Channels", playback: false, id: "national-channels-273", is247: false },
  { number: 274, name: "Curiosity Stream", category: "National Channels", playback: false, id: "national-channels-274", is247: false },
  { number: 275, name: "EWTN Global Catholic Network", category: "National Channels", playback: false, id: "national-channels-275", is247: false },
  { number: 276, name: "Bounce XL", category: "National Channels", playback: false, id: "national-channels-276", is247: false },
  { number: 277, name: "getTV", category: "National Channels", playback: false, id: "national-channels-277", is247: false },
  { number: 278, name: "InfoWars", category: "National Channels", playback: false, id: "national-channels-278", is247: false },

  // === Local Channels (301–726) ===
  { number: 301, name: "NBC 4 Southern California KNBC", category: "Local Channels", playback: false, id: "local-channels-301", is247: false },
  { number: 302, name: "CBS 2 Los Angeles KCBS", category: "Local Channels", playback: false, id: "local-channels-302", is247: false },
  { number: 303, name: "ABC 7 Los Angeles KABC", category: "Local Channels", playback: false, id: "local-channels-303", is247: false },
  { number: 304, name: "FOX 11 Los Angeles KTTV", category: "Local Channels", playback: false, id: "local-channels-304", is247: false },
  { number: 305, name: "The CW 5 Los Angeles KTLA", category: "Local Channels", playback: true, id: "local-channels-305", is247: true },
  { number: 306, name: "MyTV 13 Los Angeles KCOP", category: "Local Channels", playback: true, id: "local-channels-306", is247: true },
  { number: 307, name: "ION TV 30 Los Angeles KPXN", category: "Local Channels", playback: false, id: "local-channels-307", is247: false },
  { number: 308, name: "Telemundo 52 Los Angeles KVEA", category: "Local Channels", playback: true, id: "local-channels-308", is247: true },
  { number: 309, name: "Univision 34 Los Angeles KMEX", category: "Local Channels", playback: true, id: "local-channels-309", is247: true },
  { number: 310, name: "CBS 9 Los Angeles KCAL", category: "Local Channels", playback: false, id: "local-channels-310", is247: false },
  { number: 311, name: "NBC 11 Bay Area KNTV", category: "Local Channels", playback: false, id: "local-channels-311", is247: false },
  { number: 312, name: "CBS 5 Bay Area KPIX", category: "Local Channels", playback: false, id: "local-channels-312", is247: false },
  { number: 313, name: "ABC 7 Bay Area KGO", category: "Local Channels", playback: false, id: "local-channels-313", is247: false },
  { number: 314, name: "FOX 2 Bay Area KTVU", category: "Local Channels", playback: false, id: "local-channels-314", is247: false },
  { number: 315, name: "The CW 44 Bay Area KBCW", category: "Local Channels", playback: false, id: "local-channels-315", is247: false },
  { number: 316, name: "MyTV 4 Bay Area KRON", category: "Local Channels", playback: false, id: "local-channels-316", is247: false },
  { number: 317, name: "ION TV 65 Bay Area KKPX", category: "Local Channels", playback: false, id: "local-channels-317", is247: false },
  { number: 318, name: "Telemundo 48 Bay Area KSTS", category: "Local Channels", playback: false, id: "local-channels-318", is247: false },
  { number: 319, name: "Univision 14 Bay Area KDTV", category: "Local Channels", playback: false, id: "local-channels-319", is247: false },
  { number: 320, name: "NBC 3 Sacramento KCRA", category: "Local Channels", playback: false, id: "local-channels-320", is247: false },
  { number: 321, name: "CBS 13 Sacramento KOVR", category: "Local Channels", playback: false, id: "local-channels-321", is247: false },
  { number: 322, name: "ABC 10 Sacramento KXTV", category: "Local Channels", playback: false, id: "local-channels-322", is247: false },
  { number: 323, name: "FOX 40 Sacramento KTXL", category: "Local Channels", playback: false, id: "local-channels-323", is247: false },
  { number: 324, name: "NBC 7 San Diego KNSD", category: "Local Channels", playback: false, id: "local-channels-324", is247: false },
  { number: 325, name: "CBS 8 San Diego KFMB", category: "Local Channels", playback: false, id: "local-channels-325", is247: false },
  { number: 326, name: "ABC 10 San Diego KGTV", category: "Local Channels", playback: false, id: "local-channels-326", is247: false },
  { number: 327, name: "FOX 5 San Diego KSWB", category: "Local Channels", playback: false, id: "local-channels-327", is247: false },
  { number: 328, name: "NBC 4 New York WNBC", category: "Local Channels", playback: true, id: "local-channels-328", is247: true },
  { number: 329, name: "CBS 2 New York WCBS", category: "Local Channels", playback: true, id: "local-channels-329", is247: true },
  { number: 330, name: "ABC 7 New York WABC", category: "Local Channels", playback: true, id: "local-channels-330", is247: true },
  { number: 331, name: "FOX 5 New York WNYW", category: "Local Channels", playback: true, id: "local-channels-331", is247: true },
  { number: 332, name: "PIX 11 New York WPIX", category: "Local Channels", playback: false, id: "local-channels-332", is247: false },
  { number: 333, name: "my 9 New York WWOR", category: "Local Channels", playback: false, id: "local-channels-333", is247: false },
  { number: 334, name: "ION TV 31 New York WPXN", category: "Local Channels", playback: false, id: "local-channels-334", is247: false },
  { number: 335, name: "Telemundo 47 New York WNJU", category: "Local Channels", playback: false, id: "local-channels-335", is247: false },
  { number: 336, name: "Univision 41 Nueva York WXTV", category: "Local Channels", playback: false, id: "local-channels-336", is247: false },
  { number: 337, name: "NBC 2 Buffalo WGRZ", category: "Local Channels", playback: false, id: "local-channels-337", is247: false },
  { number: 338, name: "CBS 4 Buffalo WIVB", category: "Local Channels", playback: false, id: "local-channels-338", is247: false },
  { number: 339, name: "ABC 7 Buffalo WKBW", category: "Local Channels", playback: false, id: "local-channels-339", is247: false },
  { number: 340, name: "FOX 29 Buffalo WUTV", category: "Local Channels", playback: false, id: "local-channels-340", is247: false },
  { number: 341, name: "NBC 8 Tampa Bay Area WFLA", category: "Local Channels", playback: false, id: "local-channels-341", is247: false },
  { number: 342, name: "CBS 10 Tampa Bay Area WTSP", category: "Local Channels", playback: false, id: "local-channels-342", is247: false },
  { number: 343, name: "ABC 28 Tampa Bay Area WFTS", category: "Local Channels", playback: false, id: "local-channels-343", is247: false },
  { number: 344, name: "ABC 7 Tampa Bay Area WWSB", category: "Local Channels", playback: false, id: "local-channels-344", is247: false },
  { number: 345, name: "FOX 13 Tampa Bay Area WTVT", category: "Local Channels", playback: false, id: "local-channels-345", is247: false },
  { number: 346, name: "NBC 2 Orlando Area WESH", category: "Local Channels", playback: false, id: "local-channels-346", is247: false },
  { number: 347, name: "CBS 6 Orlando Area WKMG", category: "Local Channels", playback: false, id: "local-channels-347", is247: false },
  { number: 348, name: "ABC 9 Orlando Area WFTV", category: "Local Channels", playback: false, id: "local-channels-348", is247: false },
  { number: 349, name: "FOX 35 Orlando Area WOFL", category: "Local Channels", playback: false, id: "local-channels-349", is247: false },
  { number: 350, name: "NBC 6 Miami WTVJ", category: "Local Channels", playback: false, id: "local-channels-350", is247: false },
  { number: 351, name: "CBS 4 Miami WFOR", category: "Local Channels", playback: false, id: "local-channels-351", is247: false },
  { number: 352, name: "ABC 10 Miami WPLG", category: "Local Channels", playback: false, id: "local-channels-352", is247: false },
  { number: 353, name: "FOX 7 Miami WSVN", category: "Local Channels", playback: false, id: "local-channels-353", is247: false },
  { number: 354, name: "NBC 5 West Palm Beach WPTV", category: "Local Channels", playback: false, id: "local-channels-354", is247: false },
  { number: 355, name: "CBS 12 West Palm Beach WPEC", category: "Local Channels", playback: false, id: "local-channels-355", is247: false },
  { number: 356, name: "ABC 25 West Palm Beach WPBF", category: "Local Channels", playback: false, id: "local-channels-356", is247: false },
  { number: 357, name: "FOX 29 West Palm Beach WFLX", category: "Local Channels", playback: false, id: "local-channels-357", is247: false },
  { number: 358, name: "NBC 12 Jacksonville WTLV", category: "Local Channels", playback: false, id: "local-channels-358", is247: false },
  { number: 359, name: "CBS 47 Jacksonville WJAX", category: "Local Channels", playback: false, id: "local-channels-359", is247: false },
  { number: 360, name: "ABC 25 Jacksonville WJXX", category: "Local Channels", playback: false, id: "local-channels-360", is247: false },
  { number: 361, name: "FOX 30 Jacksonville WFOX", category: "Local Channels", playback: false, id: "local-channels-361", is247: false },
  { number: 362, name: "NBC 5 Dallas KXAS", category: "Local Channels", playback: false, id: "local-channels-362", is247: false },
  { number: 363, name: "CBS 11 Dallas KTVT", category: "Local Channels", playback: false, id: "local-channels-363", is247: false },
  { number: 364, name: "ABC 8 Dallas WFAA", category: "Local Channels", playback: false, id: "local-channels-364", is247: false },
  { number: 365, name: "FOX 4 Dallas KDFW", category: "Local Channels", playback: false, id: "local-channels-365", is247: false },
  { number: 366, name: "NBC 2 Houston KPRC", category: "Local Channels", playback: false, id: "local-channels-366", is247: false },
  { number: 367, name: "CBS 11 Houston KHOU", category: "Local Channels", playback: false, id: "local-channels-367", is247: false },
  { number: 368, name: "ABC 13 Houston KTRK", category: "Local Channels", playback: false, id: "local-channels-368", is247: false },
  { number: 369, name: "FOX 26 Houston KRIV", category: "Local Channels", playback: false, id: "local-channels-369", is247: false },
  { number: 370, name: "NBC 4 San Antonio WOAI", category: "Local Channels", playback: false, id: "local-channels-370", is247: false },
  { number: 371, name: "CBS 5 San Antonio KENS", category: "Local Channels", playback: false, id: "local-channels-371", is247: false },
  { number: 372, name: "ABC 12 San Antonio KSAT", category: "Local Channels", playback: false, id: "local-channels-372", is247: false },
  { number: 373, name: "FOX 29 San Antonio KABB", category: "Local Channels", playback: false, id: "local-channels-373", is247: false },
  { number: 374, name: "NBC 36 Austin KXAN", category: "Local Channels", playback: false, id: "local-channels-374", is247: false },
  { number: 375, name: "CBS 42 Austin KEYE", category: "Local Channels", playback: false, id: "local-channels-375", is247: false },
  { number: 376, name: "ABC 24 Austin KVUE", category: "Local Channels", playback: false, id: "local-channels-376", is247: false },
  { number: 377, name: "FOX 7 Austin KTBC", category: "Local Channels", playback: false, id: "local-channels-377", is247: false },
  { number: 378, name: "NBC 3 Cleveland WKYC", category: "Local Channels", playback: false, id: "local-channels-378", is247: false },
  { number: 379, name: "CBS 19 Cleveland WOIO", category: "Local Channels", playback: false, id: "local-channels-379", is247: false },
  { number: 380, name: "News 5 Cleveland WEWS", category: "Local Channels", playback: false, id: "local-channels-380", is247: false },
  { number: 381, name: "FOX 8 Cleveland WJW", category: "Local Channels", playback: false, id: "local-channels-381", is247: false },
  { number: 382, name: "NBC 4 Columbus WCMH", category: "Local Channels", playback: false, id: "local-channels-382", is247: false },
  { number: 383, name: "CBS 10 Columbus WBNS", category: "Local Channels", playback: false, id: "local-channels-383", is247: false },
  { number: 384, name: "ABC 6 Columbus WSYX", category: "Local Channels", playback: false, id: "local-channels-384", is247: false },
  { number: 385, name: "NBC 5 Cincinnati WLWT", category: "Local Channels", playback: false, id: "local-channels-385", is247: false },
  { number: 386, name: "CBS 12 Cincinnati WKRC", category: "Local Channels", playback: false, id: "local-channels-386", is247: false },
  { number: 387, name: "ABC 9 Cincinnati WCPO", category: "Local Channels", playback: false, id: "local-channels-387", is247: false },
  { number: 388, name: "FOX 19 Cincinnati WXIX", category: "Local Channels", playback: false, id: "local-channels-388", is247: false },
  { number: 389, name: "NBC 12 Phoenix KPNX", category: "Local Channels", playback: false, id: "local-channels-389", is247: false },
  { number: 390, name: "CBS 5 Phoenix KPHO", category: "Local Channels", playback: false, id: "local-channels-390", is247: false },
  { number: 391, name: "ABC 15 Phoenix KNXV", category: "Local Channels", playback: false, id: "local-channels-391", is247: false },
  { number: 392, name: "FOX 10 Phoenix KSAZ", category: "Local Channels", playback: false, id: "local-channels-392", is247: false },
  { number: 393, name: "NBC 3 Las Vegas KSNV", category: "Local Channels", playback: false, id: "local-channels-393", is247: false },
  { number: 394, name: "CBS 8 Las Vegas KLAS", category: "Local Channels", playback: false, id: "local-channels-394", is247: false },
  { number: 395, name: "ABC 13 Las Vegas KTNV", category: "Local Channels", playback: false, id: "local-channels-395", is247: false },
  { number: 396, name: "FOX 5 Las Vegas KVVU", category: "Local Channels", playback: false, id: "local-channels-396", is247: false },
  { number: 397, name: "NBC 8 Portland KGW", category: "Local Channels", playback: false, id: "local-channels-397", is247: false },
  { number: 398, name: "CBS 6 Portland KOIN", category: "Local Channels", playback: false, id: "local-channels-398", is247: false },
  { number: 399, name: "ABC 2 Portland KATU", category: "Local Channels", playback: false, id: "local-channels-399", is247: false },
  { number: 400, name: "FOX 12 Oregon KPTV", category: "Local Channels", playback: false, id: "local-channels-400", is247: false },
  { number: 401, name: "NBC 5 Chicago WMAQ", category: "Local Channels", playback: false, id: "local-channels-401", is247: false },
  { number: 402, name: "CBS 2 Chicago WBBM", category: "Local Channels", playback: false, id: "local-channels-402", is247: false },
  { number: 403, name: "ABC 7 Chicago WLS", category: "Local Channels", playback: false, id: "local-channels-403", is247: false },
  { number: 404, name: "FOX 32 Chicago WFLD", category: "Local Channels", playback: false, id: "local-channels-404", is247: false },
  { number: 405, name: "The CW 26 Chicago WCIU", category: "Local Channels", playback: false, id: "local-channels-405", is247: false },
  { number: 406, name: "MyTV 50 Chicago WPWR", category: "Local Channels", playback: false, id: "local-channels-406", is247: false },
  { number: 407, name: "ION TV 38 Chicago WCPX", category: "Local Channels", playback: false, id: "local-channels-407", is247: false },
  { number: 408, name: "Telemundo 44 Chicago WSNS", category: "Local Channels", playback: false, id: "local-channels-408", is247: false },
  { number: 409, name: "Univision 66 Chicago WGBO", category: "Local Channels", playback: false, id: "local-channels-409", is247: false },
  { number: 410, name: "NBC 10 Philadelphia WCAU", category: "Local Channels", playback: false, id: "local-channels-410", is247: false },
  { number: 411, name: "CBS 3 Philadelphia KYW", category: "Local Channels", playback: false, id: "local-channels-411", is247: false },
  { number: 412, name: "ABC 6 Philadelphia WPVI", category: "Local Channels", playback: false, id: "local-channels-412", is247: false },
  { number: 413, name: "FOX 29 Philadelphia WTXF", category: "Local Channels", playback: false, id: "local-channels-413", is247: false },
  { number: 414, name: "The CW 57 Philadelphia WPSG", category: "Local Channels", playback: false, id: "local-channels-414", is247: false },
  { number: 416, name: "ION TV 61 Philadelphia WPPX", category: "Local Channels", playback: false, id: "local-channels-416", is247: false },
  { number: 417, name: "Telemundo 62 Philadelphia WWSI", category: "Local Channels", playback: false, id: "local-channels-417", is247: false },
  { number: 418, name: "Univision 65 Philadelphia WUVP", category: "Local Channels", playback: false, id: "local-channels-418", is247: false },
  { number: 419, name: "NBC 11 Pittsburgh WPXI", category: "Local Channels", playback: false, id: "local-channels-419", is247: false },
  { number: 420, name: "CBS 2 Pittsburgh KDKA", category: "Local Channels", playback: false, id: "local-channels-420", is247: false },
  { number: 421, name: "ABC 4 Pittsburgh WTAE", category: "Local Channels", playback: false, id: "local-channels-421", is247: false },
  { number: 422, name: "FOX 53 Pittsburgh WPGH", category: "Local Channels", playback: false, id: "local-channels-422", is247: false },
  { number: 423, name: "NBC 11 Atlanta WXIA", category: "Local Channels", playback: false, id: "local-channels-423", is247: false },
  { number: 424, name: "CBS 46 Atlanta WGCL", category: "Local Channels", playback: false, id: "local-channels-424", is247: false },
  { number: 425, name: "ABC 2 Atlanta WSB", category: "Local Channels", playback: false, id: "local-channels-425", is247: false },
  { number: 426, name: "FOX 5 Atlanta WAGA", category: "Local Channels", playback: false, id: "local-channels-426", is247: false },
  { number: 427, name: "The CW 69 Atlanta WUPA", category: "Local Channels", playback: false, id: "local-channels-427", is247: false },
  { number: 428, name: "ION TV 14 Atlanta WPXA", category: "Local Channels", playback: false, id: "local-channels-428", is247: false },
  { number: 429, name: "Telemundo 47 Atlanta WKTB", category: "Local Channels", playback: false, id: "local-channels-429", is247: false },
  { number: 430, name: "Univision 34 Atlanta WUVG", category: "Local Channels", playback: false, id: "local-channels-430", is247: false },
  { number: 431, name: "NBC 4 Washington WRC", category: "Local Channels", playback: false, id: "local-channels-431", is247: false },
  { number: 432, name: "CBS 9 Washington WUSA", category: "Local Channels", playback: false, id: "local-channels-432", is247: false },
  { number: 433, name: "ABC 7 Washington WJLA", category: "Local Channels", playback: false, id: "local-channels-433", is247: false },
  { number: 434, name: "FOX 5 Washington WTTG", category: "Local Channels", playback: false, id: "local-channels-434", is247: false },
  { number: 437, name: "Telemundo 44 Washington WZDC", category: "Local Channels", playback: false, id: "local-channels-437", is247: false },
  { number: 438, name: "Univision 14 Washington WFDC", category: "Local Channels", playback: false, id: "local-channels-438", is247: false },
  { number: 440, name: "FOX 5 Washington WDCA", category: "Local Channels", playback: false, id: "local-channels-440", is247: false },
  { number: 441, name: "NBC 5 Seattle KING", category: "Local Channels", playback: false, id: "local-channels-441", is247: false },
  { number: 442, name: "CBS 7 Seattle KIRO", category: "Local Channels", playback: false, id: "local-channels-442", is247: false },
  { number: 443, name: "ABC 4 Seattle KOMO", category: "Local Channels", playback: false, id: "local-channels-443", is247: false },
  { number: 444, name: "FOX 13 Seattle KCPQ", category: "Local Channels", playback: false, id: "local-channels-444", is247: false },
  { number: 445, name: "NBC 10 Boston WBTS", category: "Local Channels", playback: false, id: "local-channels-445", is247: false },
  { number: 446, name: "CBS 4 Boston WBZ", category: "Local Channels", playback: false, id: "local-channels-446", is247: false },
  { number: 447, name: "ABC 5 Boston WCVB", category: "Local Channels", playback: false, id: "local-channels-447", is247: false },
  { number: 448, name: "ABC 9 Boston WMUR", category: "Local Channels", playback: false, id: "local-channels-448", is247: false },
  { number: 449, name: "FOX 25 Boston WFXT", category: "Local Channels", playback: false, id: "local-channels-449", is247: false },
  { number: 450, name: "NBC 11 Minneapolis KARE", category: "Local Channels", playback: false, id: "local-channels-450", is247: false },
  { number: 451, name: "CBS 4 Minneapolis WCCO", category: "Local Channels", playback: false, id: "local-channels-451", is247: false },
  { number: 452, name: "ABC 5 Minneapolis KSTP", category: "Local Channels", playback: false, id: "local-channels-452", is247: false },
  { number: 453, name: "FOX 9 Minneapolis KMSP", category: "Local Channels", playback: false, id: "local-channels-453", is247: false },
  { number: 454, name: "NBC 4 Detroit WDIV", category: "Local Channels", playback: false, id: "local-channels-454", is247: false },
  { number: 455, name: "CBS 62 Detroit WWJ", category: "Local Channels", playback: false, id: "local-channels-455", is247: false },
  { number: 456, name: "ABC 7 Detroit WXYZ", category: "Local Channels", playback: false, id: "local-channels-456", is247: false },
  { number: 457, name: "FOX 2 Detroit WJBK", category: "Local Channels", playback: false, id: "local-channels-457", is247: false },
  { number: 458, name: "NBC 9 Denver KUSA", category: "Local Channels", playback: false, id: "local-channels-458", is247: false },
  { number: 459, name: "CBS 4 Denver KCNC", category: "Local Channels", playback: false, id: "local-channels-459", is247: false },
  { number: 460, name: "ABC 7 Denver KMGH", category: "Local Channels", playback: false, id: "local-channels-460", is247: false },
  { number: 461, name: "FOX 31 Denver KDVR", category: "Local Channels", playback: false, id: "local-channels-461", is247: false },
  { number: 462, name: "NBC 36 Charlotte WCNC", category: "Local Channels", playback: false, id: "local-channels-462", is247: false },
  { number: 463, name: "CBS 3 Charlotte WBTV", category: "Local Channels", playback: false, id: "local-channels-463", is247: false },
  { number: 464, name: "ABC 9 Charlotte WSOC", category: "Local Channels", playback: false, id: "local-channels-464", is247: false },
  { number: 465, name: "FOX 46 Charlotte WJZY", category: "Local Channels", playback: false, id: "local-channels-465", is247: false },
  { number: 466, name: "NBC 5 The Triangle WRAL", category: "Local Channels", playback: false, id: "local-channels-466", is247: false },
  { number: 467, name: "CBS 17 The Triangle WNCN", category: "Local Channels", playback: false, id: "local-channels-467", is247: false },
  { number: 468, name: "ABC 11 The Triangle WTVD", category: "Local Channels", playback: false, id: "local-channels-468", is247: false },
  { number: 469, name: "FOX 50 The Triangle WRAZ", category: "Local Channels", playback: false, id: "local-channels-469", is247: false },
  { number: 470, name: "NBC 5 St Louis KSDK", category: "Local Channels", playback: false, id: "local-channels-470", is247: false },
  { number: 471, name: "CBS 4 St Louis KMOV", category: "Local Channels", playback: false, id: "local-channels-471", is247: false },
  { number: 472, name: "ABC 30 St Louis KDNL", category: "Local Channels", playback: false, id: "local-channels-472", is247: false },
  { number: 473, name: "FOX 2 St Louis KTVI", category: "Local Channels", playback: false, id: "local-channels-473", is247: false },
  { number: 474, name: "NBC 13 Indianapolis WTHR", category: "Local Channels", playback: false, id: "local-channels-474", is247: false },
  { number: 475, name: "CBS 4 Indianapolis WTTV", category: "Local Channels", playback: false, id: "local-channels-475", is247: false },
  { number: 476, name: "ABC 6 Indianapolis WRTV", category: "Local Channels", playback: false, id: "local-channels-476", is247: false },
  { number: 477, name: "FOX 59 Indianapolis WXIN", category: "Local Channels", playback: false, id: "local-channels-477", is247: false },
  { number: 478, name: "NBC 11 Baltimore WBAL", category: "Local Channels", playback: false, id: "local-channels-478", is247: false },
  { number: 479, name: "CBS 13 Baltimore WJZ", category: "Local Channels", playback: false, id: "local-channels-479", is247: false },
  { number: 480, name: "ABC 2 Baltimore WMAR", category: "Local Channels", playback: false, id: "local-channels-480", is247: false },
  { number: 481, name: "FOX 45 Baltimore WBFF", category: "Local Channels", playback: false, id: "local-channels-481", is247: false },
  { number: 482, name: "NBC 4 Nashville WSMV", category: "Local Channels", playback: false, id: "local-channels-482", is247: false },
  { number: 483, name: "CBS 5 Nashville WTVF", category: "Local Channels", playback: false, id: "local-channels-483", is247: false },
  { number: 484, name: "ABC 2 Nashville WKRN", category: "Local Channels", playback: false, id: "local-channels-484", is247: false },
  { number: 485, name: "FOX 17 Nashville WZTV", category: "Local Channels", playback: false, id: "local-channels-485", is247: false },
  { number: 486, name: "NBC 5 Salt Lake City KSL", category: "Local Channels", playback: false, id: "local-channels-486", is247: false },
  { number: 487, name: "CBS 2 Salt Lake City KUTV", category: "Local Channels", playback: false, id: "local-channels-487", is247: false },
  { number: 488, name: "ABC 4 Salt Lake City KTVX", category: "Local Channels", playback: false, id: "local-channels-488", is247: false },
  { number: 489, name: "FOX 13 Salt Lake City KSTU", category: "Local Channels", playback: false, id: "local-channels-489", is247: false },
  { number: 490, name: "NBC 10 Hampton Roads WAVY", category: "Local Channels", playback: false, id: "local-channels-490", is247: false },
  { number: 491, name: "CBS 3 Hampton Roads WTKR", category: "Local Channels", playback: false, id: "local-channels-491", is247: false },
  { number: 492, name: "ABC 13 Hampton Roads WVEC", category: "Local Channels", playback: false, id: "local-channels-492", is247: false },
  { number: 493, name: "FOX 43 Hampton Roads WVBT", category: "Local Channels", playback: false, id: "local-channels-493", is247: false },
  { number: 494, name: "NBC 4 South Carolina WYFF", category: "Local Channels", playback: false, id: "local-channels-494", is247: false },
  { number: 495, name: "CBS 7 South Carolina WSPA", category: "Local Channels", playback: false, id: "local-channels-495", is247: false },
  { number: 496, name: "ABC 13 South Carolina WLOS", category: "Local Channels", playback: false, id: "local-channels-496", is247: false },
  { number: 497, name: "FOX 21 South Carolina WHNS", category: "Local Channels", playback: false, id: "local-channels-497", is247: false },
  { number: 498, name: "NBC 3 Louisville WAVE", category: "Local Channels", playback: false, id: "local-channels-498", is247: false },
  { number: 499, name: "CBS 32 Louisville WLKY", category: "Local Channels", playback: false, id: "local-channels-499", is247: false },
  { number: 500, name: "ABC 11 Louisville WHAS", category: "Local Channels", playback: false, id: "local-channels-500", is247: false },
  { number: 501, name: "FOX 41 Louisville WDRB", category: "Local Channels", playback: false, id: "local-channels-501", is247: false },
  { number: 502, name: "NBC 30 Connecticut WVIT", category: "Local Channels", playback: false, id: "local-channels-502", is247: false },
  { number: 503, name: "CBS 3 Connecticut WFSB", category: "Local Channels", playback: false, id: "local-channels-503", is247: false },
  { number: 504, name: "ABC 8 Connecticut WTNH", category: "Local Channels", playback: false, id: "local-channels-504", is247: false },
  { number: 505, name: "FOX 61 Connecticut WTIC", category: "Local Channels", playback: false, id: "local-channels-505", is247: false },
  { number: 506, name: "NBC 4 Little Rock KARK", category: "Local Channels", playback: false, id: "local-channels-506", is247: false },
  { number: 507, name: "CBS 11 Little Rock KTHV", category: "Local Channels", playback: false, id: "local-channels-507", is247: false },
  { number: 508, name: "ABC 7 Little Rock KATV", category: "Local Channels", playback: false, id: "local-channels-508", is247: false },
  { number: 509, name: "FOX 16 Little Rock KLRT", category: "Local Channels", playback: false, id: "local-channels-509", is247: false },
  { number: 510, name: "NBC 13 Hawaii KHNL", category: "Local Channels", playback: false, id: "local-channels-510", is247: false },
  { number: 511, name: "CBS 5 Hawaii KGMB", category: "Local Channels", playback: false, id: "local-channels-511", is247: false },
  { number: 512, name: "ABC 4 Hawaii KITV", category: "Local Channels", playback: false, id: "local-channels-512", is247: false },
  { number: 513, name: "FOX 2 Hawaii KHON", category: "Local Channels", playback: false, id: "local-channels-513", is247: false },
  { number: 514, name: "NBC 7 Boise KTVB", category: "Local Channels", playback: false, id: "local-channels-514", is247: false },
  { number: 515, name: "CBS 2 Boise KBOI", category: "Local Channels", playback: false, id: "local-channels-515", is247: false },
  { number: 516, name: "ABC 6 Boise KIVI", category: "Local Channels", playback: false, id: "local-channels-516", is247: false },
  { number: 517, name: "FOX 9 Boise KNIN", category: "Local Channels", playback: false, id: "local-channels-517", is247: false },
  { number: 518, name: "NBC 13 Des Moines WHO", category: "Local Channels", playback: false, id: "local-channels-518", is247: false },
  { number: 519, name: "CBS 8 Des Moines KCCI", category: "Local Channels", playback: false, id: "local-channels-519", is247: false },
  { number: 520, name: "ABC 5 Des Moines WOI", category: "Local Channels", playback: false, id: "local-channels-520", is247: false },
  { number: 521, name: "FOX 17 Des Moines KDSM", category: "Local Channels", playback: false, id: "local-channels-521", is247: false },
  { number: 522, name: "NBC 3 Wichita KSNW", category: "Local Channels", playback: false, id: "local-channels-522", is247: false },
  { number: 523, name: "CBS 12 Hutchinson KWCH", category: "Local Channels", playback: false, id: "local-channels-523", is247: false },
  { number: 524, name: "ABC 10 Wichita KAKE", category: "Local Channels", playback: false, id: "local-channels-524", is247: false },
  { number: 525, name: "FOX 24 Wichita KSAS", category: "Local Channels", playback: false, id: "local-channels-525", is247: false },
  { number: 526, name: "NBC 6 New Orleans WDSU", category: "Local Channels", playback: false, id: "local-channels-526", is247: false },
  { number: 527, name: "CBS 4 New Orleans WWL", category: "Local Channels", playback: false, id: "local-channels-527", is247: false },
  { number: 528, name: "ABC 26 New Orleans WGNO", category: "Local Channels", playback: false, id: "local-channels-528", is247: false },
  { number: 529, name: "FOX 8 New Orleans WVUE", category: "Local Channels", playback: false, id: "local-channels-529", is247: false },
  { number: 530, name: "NBC 6 Portland WCSH", category: "Local Channels", playback: false, id: "local-channels-530", is247: false },
  { number: 531, name: "CBS 13 Portland WGME", category: "Local Channels", playback: false, id: "local-channels-531", is247: false },
  { number: 532, name: "ABC 8 Portland WMTW", category: "Local Channels", playback: false, id: "local-channels-532", is247: false },
  { number: 533, name: "FOX 23 Portland WPFO", category: "Local Channels", playback: false, id: "local-channels-533", is247: false },
  { number: 534, name: "NBC 3 Jackson WLBT", category: "Local Channels", playback: false, id: "local-channels-534", is247: false },
  { number: 535, name: "CBS 12 Jackson WJTV", category: "Local Channels", playback: false, id: "local-channels-535", is247: false },
  { number: 536, name: "ABC 16 Jackson WAPT", category: "Local Channels", playback: false, id: "local-channels-536", is247: false },
  { number: 538, name: "NBC 13 Missoula KECI", category: "Local Channels", playback: false, id: "local-channels-538", is247: false },
  { number: 539, name: "CBS 8 Missoula KPAX", category: "Local Channels", playback: false, id: "local-channels-539", is247: false },
  { number: 540, name: "ABC 23 Missoula KTMF", category: "Local Channels", playback: false, id: "local-channels-540", is247: false },
  { number: 541, name: "NBC 6 Omaha WOWT", category: "Local Channels", playback: false, id: "local-channels-541", is247: false },
  { number: 542, name: "CBS 3 Omaha KMTV", category: "Local Channels", playback: false, id: "local-channels-542", is247: false },
  { number: 543, name: "ABC 7 Omaha KETV", category: "Local Channels", playback: false, id: "local-channels-543", is247: false },
  { number: 544, name: "FOX 42 Omaha KPTM", category: "Local Channels", playback: false, id: "local-channels-544", is247: false },
  { number: 545, name: "NBC 4 New Mexico KOB", category: "Local Channels", playback: false, id: "local-channels-545", is247: false },
  { number: 546, name: "CBS 13 New Mexico KRQE", category: "Local Channels", playback: false, id: "local-channels-546", is247: false },
  { number: 547, name: "ABC 7 New Mexico KOAT", category: "Local Channels", playback: false, id: "local-channels-547", is247: false },
  { number: 548, name: "NBC 4 Oklahoma City KFOR", category: "Local Channels", playback: false, id: "local-channels-548", is247: false },
  { number: 549, name: "CBS 9 Oklahoma City KWTV", category: "Local Channels", playback: false, id: "local-channels-549", is247: false },
  { number: 550, name: "ABC 5 Oklahoma City KOCO", category: "Local Channels", playback: false, id: "local-channels-550", is247: false },
  { number: 551, name: "FOX 25 Oklahoma City KOKH", category: "Local Channels", playback: false, id: "local-channels-551", is247: false },
  { number: 552, name: "NBC 10 Rhode Island WJAR", category: "Local Channels", playback: false, id: "local-channels-552", is247: false },
  { number: 553, name: "CBS 12 Rhode Island WPRI", category: "Local Channels", playback: false, id: "local-channels-553", is247: false },
  { number: 554, name: "ABC 6 Rhode Island WLNE", category: "Local Channels", playback: false, id: "local-channels-554", is247: false },
  { number: 555, name: "FOX 64 Providence WNAC", category: "Local Channels", playback: false, id: "local-channels-555", is247: false },
  { number: 556, name: "NBC 5 Vermont WPTZ", category: "Local Channels", playback: false, id: "local-channels-556", is247: false },
  { number: 557, name: "CBS 3 Vermont WCAX", category: "Local Channels", playback: false, id: "local-channels-557", is247: false },
  { number: 558, name: "ABC 22 Vermont WVNY", category: "Local Channels", playback: false, id: "local-channels-558", is247: false },
  { number: 559, name: "FOX 44 Vermont WFFF", category: "Local Channels", playback: false, id: "local-channels-559", is247: false },
  { number: 560, name: "NBC 3 Charleston WSAZ", category: "Local Channels", playback: false, id: "local-channels-560", is247: false },
  { number: 561, name: "CBS 13 Charleston WOWK", category: "Local Channels", playback: false, id: "local-channels-561", is247: false },
  { number: 562, name: "ABC 8 Charleston WCHS", category: "Local Channels", playback: false, id: "local-channels-562", is247: false },
  { number: 563, name: "NBC 4 Milwaukee WTMJ", category: "Local Channels", playback: false, id: "local-channels-563", is247: false },
  { number: 564, name: "CBS 58 Milwaukee WDJT", category: "Local Channels", playback: false, id: "local-channels-564", is247: false },
  { number: 565, name: "ABC 12 Milwaukee WISN", category: "Local Channels", playback: false, id: "local-channels-565", is247: false },
  { number: 566, name: "FOX 6 Milwaukee WITI", category: "Local Channels", playback: false, id: "local-channels-566", is247: false },
  { number: 567, name: "NBC 13 Rockford WREX", category: "Local Channels", playback: false, id: "local-channels-567", is247: false },
  { number: 568, name: "NBC 41 Kansas City KSHB", category: "Local Channels", playback: false, id: "local-channels-568", is247: false },
  { number: 569, name: "CBS 5 Kansas City KCTV", category: "Local Channels", playback: false, id: "local-channels-569", is247: false },
  { number: 570, name: "ABC 9 Kansas City KMBC", category: "Local Channels", playback: false, id: "local-channels-570", is247: false },
  { number: 571, name: "FOX 4 Kansas City WDAF", category: "Local Channels", playback: false, id: "local-channels-571", is247: false },
  { number: 572, name: "The CW 44 Tampa Bay WTOG", category: "Local Channels", playback: false, id: "local-channels-572", is247: false },
  { number: 573, name: "Fox 26 Fresno KMPH", category: "Local Channels", playback: false, id: "local-channels-573", is247: false },
  { number: 574, name: "ABC 30 Fresno KFSN", category: "Local Channels", playback: false, id: "local-channels-574", is247: false },
  { number: 575, name: "NBC 5 Bismarck KFYR", category: "Local Channels", playback: false, id: "local-channels-575", is247: false },
  { number: 577, name: "CBS 5 Bangor WABI", category: "Local Channels", playback: false, id: "local-channels-577", is247: false },
  { number: 578, name: "FOX 58 Bakersfield KBFX", category: "Local Channels", playback: false, id: "local-channels-578", is247: false },
  { number: 579, name: "ABC 23 Bakersfield KERO", category: "Local Channels", playback: false, id: "local-channels-579", is247: false },
  { number: 580, name: "CBS 2 Cedar Rapids KGAN", category: "Local Channels", playback: false, id: "local-channels-580", is247: false },
  { number: 581, name: "NBC 7 Waterloo KWWL", category: "Local Channels", playback: false, id: "local-channels-581", is247: false },
  { number: 582, name: "NBC 7 Lake Charles KPLC", category: "Local Channels", playback: false, id: "local-channels-582", is247: false },
  { number: 583, name: "CBS 17 Lake Charles KSWL", category: "Local Channels", playback: false, id: "local-channels-583", is247: false },
  { number: 584, name: "NBC 4 Tucson KVOA", category: "Local Channels", playback: false, id: "local-channels-584", is247: false },
  { number: 585, name: "CBS 13 Tucson KOLD", category: "Local Channels", playback: false, id: "local-channels-585", is247: false },
  { number: 586, name: "ABC 9 Tucson KGUN", category: "Local Channels", playback: false, id: "local-channels-586", is247: false },
  { number: 587, name: "FOX 11 Tucson KMSB", category: "Local Channels", playback: false, id: "local-channels-587", is247: false },
  { number: 588, name: "NBC 2 Bangor WLBZ", category: "Local Channels", playback: false, id: "local-channels-588", is247: false },
  { number: 589, name: "FOX 7 Bangor WVII", category: "Local Channels", playback: false, id: "local-channels-589", is247: false },
  { number: 590, name: "CBS 23 Rockford WIFR", category: "Local Channels", playback: false, id: "local-channels-590", is247: false },
  { number: 591, name: "ABC 17 Rockford WTVO", category: "Local Channels", playback: false, id: "local-channels-591", is247: false },
  { number: 592, name: "FOX 39 Rockford WQRF", category: "Local Channels", playback: false, id: "local-channels-592", is247: false },
  { number: 593, name: "NBC 17 Bakersfield KGET", category: "Local Channels", playback: false, id: "local-channels-593", is247: false },
  { number: 594, name: "CBS 29 Bakersfield KBAK", category: "Local Channels", playback: false, id: "local-channels-594", is247: false },
  { number: 595, name: "NBC 23 Tri-Cities KNDO", category: "Local Channels", playback: false, id: "local-channels-595", is247: false },
  { number: 596, name: "CBS 19 Tri-Cities KEPR", category: "Local Channels", playback: false, id: "local-channels-596", is247: false },
  { number: 597, name: "ABC 42 Tri-Cities KVEW", category: "Local Channels", playback: false, id: "local-channels-597", is247: false },
  { number: 598, name: "NBC 3 Savannah WSAV", category: "Local Channels", playback: false, id: "local-channels-598", is247: false },
  { number: 599, name: "ABC 22 Savannah WJCL", category: "Local Channels", playback: false, id: "local-channels-599", is247: false },
  { number: 600, name: "CBS 11 Savannah WTOC", category: "Local Channels", playback: false, id: "local-channels-600", is247: false },
  { number: 601, name: "FOX 28 Savannah WTGS", category: "Local Channels", playback: false, id: "local-channels-601", is247: false },
  { number: 602, name: "NBC 2 Dayton WDTN", category: "Local Channels", playback: false, id: "local-channels-602", is247: false },
  { number: 603, name: "CBS 7 Dayton WHIO", category: "Local Channels", playback: false, id: "local-channels-603", is247: false },
  { number: 604, name: "ABC 22 Dayton WKEF", category: "Local Channels", playback: false, id: "local-channels-604", is247: false },
  { number: 605, name: "NBC 13 Casper KCWY", category: "Local Channels", playback: false, id: "local-channels-605", is247: false },
  { number: 606, name: "FOX 27 Casper KFNB", category: "Local Channels", playback: false, id: "local-channels-606", is247: false },
  { number: 607, name: "CBS 14 Casper KGWC", category: "Local Channels", playback: false, id: "local-channels-607", is247: false },
  { number: 608, name: "ABC 2 Casper KTWO", category: "Local Channels", playback: false, id: "local-channels-608", is247: false },
  { number: 609, name: "CBS 5 Cheyenne KGWN", category: "Local Channels", playback: false, id: "local-channels-609", is247: false },
  { number: 610, name: "PBS Wyoming KCWC", category: "Local Channels", playback: false, id: "local-channels-610", is247: false },
  { number: 611, name: "The CW 19 Pittsburgh WPCW", category: "Local Channels", playback: false, id: "local-channels-611", is247: false },
  { number: 612, name: "CBS 2 Reno KTVN", category: "Local Channels", playback: false, id: "local-channels-612", is247: false },
  { number: 613, name: "ABC 8 Reno KOLO", category: "Local Channels", playback: false, id: "local-channels-613", is247: false },
  { number: 614, name: "NBC 4 Reno KRNV", category: "Local Channels", playback: false, id: "local-channels-614", is247: false },
  { number: 615, name: "FOX 11 Reno KRXI", category: "Local Channels", playback: false, id: "local-channels-615", is247: false },
  { number: 616, name: "PBS Reno KNPB", category: "Local Channels", playback: false, id: "local-channels-616", is247: false },
  { number: 617, name: "Telemundo 40 McAllen KTLM", category: "Local Channels", playback: false, id: "local-channels-617", is247: false },
  { number: 618, name: "CBS 6 Tallahassee WCTV", category: "Local Channels", playback: false, id: "local-channels-618", is247: false },
  { number: 619, name: "ABC 27 Tallahassee WTXL", category: "Local Channels", playback: false, id: "local-channels-619", is247: false },
  { number: 620, name: "NBC 40 Tallahassee WTWC", category: "Local Channels", playback: false, id: "local-channels-620", is247: false },
  { number: 621, name: "CBS 12 Chico–Redding KHSL", category: "Local Channels", playback: false, id: "local-channels-621", is247: false },
  { number: 622, name: "ABC 7 Chico–Redding KRCR", category: "Local Channels", playback: false, id: "local-channels-622", is247: false },
  { number: 623, name: "NBC 24 Chico–Redding KNVN", category: "Local Channels", playback: false, id: "local-channels-623", is247: false },
  { number: 624, name: "FOX 20 Chico–Redding KCVU", category: "Local Channels", playback: false, id: "local-channels-624", is247: false },
  { number: 625, name: "PBS 9 Chico–Redding KIXE", category: "Local Channels", playback: false, id: "local-channels-625", is247: false },
  { number: 626, name: "NBC 12 Rhinelander WJFW", category: "Local Channels", playback: false, id: "local-channels-626", is247: false },
  { number: 627, name: "ABC 9 Wisconsin WAOW", category: "Local Channels", playback: false, id: "local-channels-627", is247: false },
  { number: 628, name: "TV 38 Boston WSBK", category: "Local Channels", playback: false, id: "local-channels-628", is247: false },
  { number: 629, name: "NBC 6 Johnstown WJAC", category: "Local Channels", playback: false, id: "local-channels-629", is247: false },
  { number: 630, name: "CBS 10 Happy Valley WTAJ", category: "Local Channels", playback: false, id: "local-channels-630", is247: false },
  { number: 631, name: "ABC 23 Happy Valley WATM", category: "Local Channels", playback: false, id: "local-channels-631", is247: false },
  { number: 632, name: "FOX 8 Johnstown WWCP", category: "Local Channels", playback: false, id: "local-channels-632", is247: false },
  { number: 633, name: "FOX 10 Xtra Phoenix KUTP", category: "Local Channels", playback: false, id: "local-channels-633", is247: false },
  { number: 634, name: "TV 3 Arizona’s Family KTVK", category: "Local Channels", playback: false, id: "local-channels-634", is247: false },
  { number: 635, name: "PBS 8 Phoenix KAET", category: "Local Channels", playback: false, id: "local-channels-635", is247: false },
  { number: 636, name: "FOX 60 South Texas KFXV", category: "Local Channels", playback: false, id: "local-channels-636", is247: false },
  { number: 637, name: "CBS 10 Lincoln KOLN", category: "Local Channels", playback: false, id: "local-channels-637", is247: false },
  { number: 638, name: "ABC 8 Lincoln KLKN", category: "Local Channels", playback: false, id: "local-channels-638", is247: false },
  { number: 639, name: "FOX 51 Lincoln KFXL", category: "Local Channels", playback: false, id: "local-channels-639", is247: false },
  { number: 640, name: "NBC 9 Steubenville WTOV", category: "Local Channels", playback: false, id: "local-channels-640", is247: false },
  { number: 641, name: "NBC 21 Youngstown WFMJ", category: "Local Channels", playback: false, id: "local-channels-641", is247: false },
  { number: 642, name: "CBS 27 Youngstown WKBN", category: "Local Channels", playback: false, id: "local-channels-642", is247: false },
  { number: 643, name: "ABC 33 Youngstown WYTV", category: "Local Channels", playback: false, id: "local-channels-643", is247: false },
  { number: 644, name: "NBC 8 West Michigan WOOD", category: "Local Channels", playback: false, id: "local-channels-644", is247: false },
  { number: 645, name: "ABC 13 West Michigan WZZM", category: "Local Channels", playback: false, id: "local-channels-645", is247: false },
  { number: 646, name: "FOX 17 West Michigan WXMI", category: "Local Channels", playback: false, id: "local-channels-646", is247: false },
  { number: 647, name: "NBC 10 Knoxville WBIR", category: "Local Channels", playback: false, id: "local-channels-647", is247: false },
  { number: 648, name: "CBS 8 Knoxville WVLT", category: "Local Channels", playback: false, id: "local-channels-648", is247: false },
  { number: 649, name: "ABC 6 Knoxville WATE", category: "Local Channels", playback: false, id: "local-channels-649", is247: false },
  { number: 650, name: "FOX 43 Knoxville WTNZ", category: "Local Channels", playback: false, id: "local-channels-650", is247: false },
  { number: 651, name: "NBC 2 Terre Haute WTWO", category: "Local Channels", playback: false, id: "local-channels-651", is247: false },
  { number: 652, name: "CBS 10 Terre Haute WTHI", category: "Local Channels", playback: false, id: "local-channels-652", is247: false },
  { number: 653, name: "The CW 18 Charlotte WCCB", category: "Local Channels", playback: false, id: "local-channels-653", is247: false },
  { number: 654, name: "News 12 Long Island", category: "Local Channels", playback: false, id: "local-channels-654", is247: false },
  { number: 655, name: "News 12 New York", category: "Local Channels", playback: false, id: "local-channels-655", is247: false },
  { number: 656, name: "NBC 20 Fort Myers WBBH", category: "Local Channels", playback: false, id: "local-channels-656", is247: false },
  { number: 657, name: "CBS 11 Fort Myers WINK", category: "Local Channels", playback: false, id: "local-channels-657", is247: false },
  { number: 658, name: "ABC 26 Fort Myers WZVN", category: "Local Channels", playback: false, id: "local-channels-658", is247: false },
  { number: 659, name: "FOX 36 Fort Myers WFTX", category: "Local Channels", playback: false, id: "local-channels-659", is247: false },
  { number: 660, name: "7 News Boston WHDH", category: "Local Channels", playback: false, id: "local-channels-660", is247: false },
  { number: 661, name: "NBC 23 Dothan WRGX", category: "Local Channels", playback: false, id: "local-channels-661", is247: false },
  { number: 662, name: "CBS 4 Dothan WTVY", category: "Local Channels", playback: false, id: "local-channels-662", is247: false },
  { number: 663, name: "ABC 18 Dothan WDHN", category: "Local Channels", playback: false, id: "local-channels-663", is247: false },
  { number: 664, name: "FOX 34 Dothan WDFX", category: "Local Channels", playback: false, id: "local-channels-664", is247: false },
  { number: 665, name: "Telemundo 51 Fresno KNSO", category: "Local Channels", playback: false, id: "local-channels-665", is247: false },
  { number: 666, name: "Univision 21 Fresno KFTV", category: "Local Channels", playback: false, id: "local-channels-666", is247: false },
  { number: 667, name: "NBC 18 Lexington WLEX", category: "Local Channels", playback: false, id: "local-channels-667", is247: false },
  { number: 668, name: "CBS 27 Lexington WKYT", category: "Local Channels", playback: false, id: "local-channels-668", is247: false },
  { number: 669, name: "ABC 36 Lexington WTVQ", category: "Local Channels", playback: false, id: "local-channels-669", is247: false },
  { number: 670, name: "FOX 56 Lexington WDKY", category: "Local Channels", playback: false, id: "local-channels-670", is247: false },
  { number: 671, name: "NBC 6 Temple KCEN", category: "Local Channels", playback: false, id: "local-channels-671", is247: false },
  { number: 672, name: "CBS 10 Waco KWTX", category: "Local Channels", playback: false, id: "local-channels-672", is247: false },
  { number: 673, name: "ABC 25 Waco KXXV", category: "Local Channels", playback: false, id: "local-channels-673", is247: false },
  { number: 674, name: "FOX 44 Waco KWKT", category: "Local Channels", playback: false, id: "local-channels-674", is247: false },
  { number: 675, name: "NBC 5 Pueblo KOAA", category: "Local Channels", playback: false, id: "local-channels-675", is247: false },
  { number: 676, name: "CBS 11 Colorado Springs KKTV", category: "Local Channels", playback: false, id: "local-channels-676", is247: false },
  { number: 677, name: "ABC 13 Colorado Springs KRDO", category: "Local Channels", playback: false, id: "local-channels-677", is247: false },
  { number: 678, name: "FOX 21 Colorado Springs KXRM", category: "Local Channels", playback: false, id: "local-channels-678", is247: false },
  { number: 679, name: "NBC 5 Memphis WMC", category: "Local Channels", playback: false, id: "local-channels-679", is247: false },
  { number: 680, name: "CBS 3 Memphis WREG", category: "Local Channels", playback: false, id: "local-channels-680", is247: false },
  { number: 681, name: "ABC 24 Memphis WANT", category: "Local Channels", playback: false, id: "local-channels-681", is247: false },
  { number: 682, name: "FOX 13 Memphis WHBQ", category: "Local Channels", playback: false, id: "local-channels-682", is247: false },
  { number: 683, name: "NBC 6 Corpus Christi KRIS", category: "Local Channels", playback: false, id: "local-channels-683", is247: false },
  { number: 684, name: "CBS 10 Corpus Christi KZTV", category: "Local Channels", playback: false, id: "local-channels-684", is247: false },
  { number: 685, name: "ABC 3 Corpus Christi KIII", category: "Local Channels", playback: false, id: "local-channels-685", is247: false },
  { number: 686, name: "FOX 38 Corpus Christi KSCC", category: "Local Channels", playback: false, id: "local-channels-686", is247: false },
  { number: 687, name: "NBC 2 Tulsa KJRH", category: "Local Channels", playback: false, id: "local-channels-687", is247: false },
  { number: 688, name: "CBS 6 Tulsa KOTV", category: "Local Channels", playback: false, id: "local-channels-688", is247: false },
  { number: 689, name: "ABC 8 Tulsa KTUL", category: "Local Channels", playback: false, id: "local-channels-689", is247: false },
  { number: 690, name: "FOX 23 Tulsa KOKI", category: "Local Channels", playback: false, id: "local-channels-690", is247: false },
  { number: 691, name: "NBC 24 Fresno KSEE", category: "Local Channels", playback: false, id: "local-channels-691", is247: false },
  { number: 692, name: "CBS 47 Fresno KGPE", category: "Local Channels", playback: false, id: "local-channels-692", is247: false },
  { number: 693, name: "NBC 12 Greensboro WXII", category: "Local Channels", playback: false, id: "local-channels-693", is247: false },
  { number: 694, name: "CBS 2 Greensboro WFMY", category: "Local Channels", playback: false, id: "local-channels-694", is247: false },
  { number: 695, name: "ABC 45 Greensboro WXLV", category: "Local Channels", playback: false, id: "local-channels-695", is247: false },
  { number: 696, name: "FOX 8 Greensboro WGHP", category: "Local Channels", playback: false, id: "local-channels-696", is247: false },
  { number: 697, name: "ABC 9 Cedar Rapids KCRG", category: "Local Channels", playback: false, id: "local-channels-697", is247: false },
  { number: 698, name: "NBC 6 Davenport KWQC", category: "Local Channels", playback: false, id: "local-channels-698", is247: false },
  { number: 699, name: "CBS 4 Rock Island WHBF", category: "Local Channels", playback: false, id: "local-channels-699", is247: false },
  { number: 700, name: "ABC 8 Moline WQAD", category: "Local Channels", playback: false, id: "local-channels-700", is247: false },
  { number: 701, name: "FOX 18 Davenport KLJB", category: "Local Channels", playback: false, id: "local-channels-701", is247: false },
  { number: 702, name: "NBC 2 Utica WKTV", category: "Local Channels", playback: false, id: "local-channels-702", is247: false },
  { number: 703, name: "FOX 33 Utica WFXV", category: "Local Channels", playback: false, id: "local-channels-703", is247: false },
  { number: 704, name: "9 CHICAGO WGN", category: "Local Channels", playback: false, id: "local-channels-704", is247: false },
  { number: 705, name: "CBS 15 Fort Wayne WANE", category: "Local Channels", playback: false, id: "local-channels-705", is247: false },
  { number: 706, name: "ABC 21 Fort Wayne WPTA", category: "Local Channels", playback: false, id: "local-channels-706", is247: false },
  { number: 707, name: "FOX 55 Fort Wayne WFFT", category: "Local Channels", playback: false, id: "local-channels-707", is247: false },
  { number: 708, name: "PBS WFWA", category: "Local Channels", playback: false, id: "local-channels-708", is247: false },
  { number: 709, name: "NBC 8 Salinas KSBW", category: "Local Channels", playback: false, id: "local-channels-709", is247: false },
  { number: 710, name: "NBC 6 San Luis Obispo KSBY", category: "Local Channels", playback: false, id: "local-channels-710", is247: false },
  { number: 711, name: "The CW 33 Las Vegas KVCW", category: "Local Channels", playback: false, id: "local-channels-711", is247: false },
  { number: 712, name: "28 Cedar Rapids KFXA", category: "Local Channels", playback: false, id: "local-channels-712", is247: false },
  { number: 713, name: "NBC 9 El Paso KTSM", category: "Local Channels", playback: false, id: "local-channels-713", is247: false },
  { number: 714, name: "CBS 4 El Paso KDBC", category: "Local Channels", playback: false, id: "local-channels-714", is247: false },
  { number: 715, name: "ABC 7 El Paso KVIA", category: "Local Channels", playback: false, id: "local-channels-715", is247: false },
  { number: 716, name: "FOX 14 El Paso KFOX", category: "Local Channels", playback: false, id: "local-channels-716", is247: false },
  { number: 717, name: "NBC 11 Fargo KVLY", category: "Local Channels", playback: false, id: "local-channels-717", is247: false },
  { number: 718, name: "CBS 30 Fargo KXJB", category: "Local Channels", playback: false, id: "local-channels-718", is247: false },
  { number: 719, name: "ABC 6 Fargo WDAY", category: "Local Channels", playback: false, id: "local-channels-719", is247: false },
  { number: 720, name: "FOX 15 Fargo KVRR", category: "Local Channels", playback: false, id: "local-channels-720", is247: false },
  { number: 721, name: "Univision 17 San Diego KBNT", category: "Local Channels", playback: false, id: "local-channels-721", is247: false },
  { number: 722, name: "NBC 15 Mobile WPMI", category: "Local Channels", playback: false, id: "local-channels-722", is247: false },
  { number: 723, name: "CBS 5 Mobile WKRG", category: "Local Channels", playback: false, id: "local-channels-723", is247: false },
  { number: 724, name: "FOX 10 Mobile WALA", category: "Local Channels", playback: false, id: "local-channels-724", is247: false },
  { number: 725, name: "NBC 7 Panama City WJHG", category: "Local Channels", playback: false, id: "local-channels-725", is247: false },
  { number: 726, name: "ABC 3 Pensacola WEAR", category: "Local Channels", playback: false, id: "local-channels-726", is247: false },

  // === SPORTS ===
  { number: 801, name: "ACC Network", category: "Sports", playback: false, id: "sports-801", is247: false },
  { number: 802, name: "AT&T SportsNet Pittsburgh", category: "Sports", playback: false, id: "sports-802", is247: false },
  { number: 803, name: "AT&T SportsNet Rocky Mountain", category: "Sports", playback: false, id: "sports-803", is247: false },
  { number: 804, name: "AT&T SportsNet Southwest", category: "Sports", playback: false, id: "sports-804", is247: false },
  { number: 805, name: "Bally Sports Arizona", category: "Sports", playback: false, id: "sports-805", is247: false },
  { number: 806, name: "Bally Sports Detroit", category: "Sports", playback: false, id: "sports-806", is247: false },
  { number: 807, name: "Bally Sports Florida", category: "Sports", playback: false, id: "sports-807", is247: false },
  { number: 808, name: "Bally Sports Great Lakes", category: "Sports", playback: false, id: "sports-808", is247: false },
  { number: 809, name: "Bally Sports Indiana", category: "Sports", playback: false, id: "sports-809", is247: false },
  { number: 810, name: "Bally Sports Kansas City", category: "Sports", playback: false, id: "sports-810", is247: false },
  { number: 811, name: "Bally Sports Midwest", category: "Sports", playback: false, id: "sports-811", is247: false },
  { number: 812, name: "Bally Sports New Orleans", category: "Sports", playback: false, id: "sports-812", is247: false },
  { number: 813, name: "Bally Sports North", category: "Sports", playback: false, id: "sports-813", is247: false },
  { number: 814, name: "Bally Sports Ohio", category: "Sports", playback: false, id: "sports-814", is247: false },
  { number: 815, name: "Bally Sports Oklahoma", category: "Sports", playback: false, id: "sports-815", is247: false },
  { number: 816, name: "Bally Sports San Diego", category: "Sports", playback: false, id: "sports-816", is247: false },
  { number: 817, name: "Bally Sports SoCal", category: "Sports", playback: false, id: "sports-817", is247: false },
  { number: 818, name: "Bally Sports South", category: "Sports", playback: false, id: "sports-818", is247: false },
  { number: 819, name: "Bally Sports Southeast", category: "Sports", playback: false, id: "sports-819", is247: false },
  { number: 820, name: "Bally Sports Southwest", category: "Sports", playback: false, id: "sports-820", is247: false },
  { number: 821, name: "Bally Sports Sun", category: "Sports", playback: false, id: "sports-821", is247: false },
  { number: 822, name: "Bally Sports West", category: "Sports", playback: false, id: "sports-822", is247: false },
  { number: 823, name: "Bally Sports Wisconsin", category: "Sports", playback: false, id: "sports-823", is247: false },
  { number: 824, name: "BEIN Sport", category: "Sports", playback: false, id: "sports-824", is247: false },
  { number: 825, name: "BEIN Sport En Español", category: "Sports", playback: false, id: "sports-825", is247: false },
  { number: 826, name: "BTN (Big Ten Network)", category: "Sports", playback: true, id: "sports-826", is247: true },
  { number: 827, name: "CBS Sports Network", category: "Sports", playback: true, id: "sports-827", is247: true },
  { number: 828, name: "ESPN", category: "Sports", playback: true, id: "sports-828", is247: true },
  { number: 829, name: "ESPN Deportes", category: "Sports", playback: true, id: "sports-829", is247: true },
  { number: 830, name: "ESPN2", category: "Sports", playback: true, id: "sports-830", is247: true },
  { number: 831, name: "ESPNU", category: "Sports", playback: true, id: "sports-831", is247: true },
  { number: 832, name: "Fox Deportes", category: "Sports", playback: true, id: "sports-832", is247: true },
  { number: 833, name: "Fox Sports 1", category: "Sports", playback: true, id: "sports-833", is247: true },
  { number: 834, name: "Fox Sports 2", category: "Sports", playback: true, id: "sports-834", is247: true },
  { number: 835, name: "Golf Channel", category: "Sports", playback: true, id: "sports-835", is247: true },
  { number: 836, name: "MLB Network", category: "Sports", playback: true, id: "sports-836", is247: true },
  { number: 837, name: "Motor Trend", category: "Sports", playback: false, id: "sports-837", is247: false },
  { number: 838, name: "NBA TV", category: "Sports", playback: true, id: "sports-838", is247: true },
  { number: 839, name: "NBC Sports Bay Area", category: "Sports", playback: false, id: "sports-839", is247: false },
  { number: 840, name: "NBC Sports Boston", category: "Sports", playback: false, id: "sports-840", is247: false },
  { number: 841, name: "NBC Sports California", category: "Sports", playback: true, id: "sports-841", is247: true },
  { number: 842, name: "NBC Sports Chicago", category: "Sports", playback: false, id: "sports-842", is247: false },
  { number: 843, name: "NBC Sports Philadelphia", category: "Sports", playback: false, id: "sports-843", is247: false },
  { number: 844, name: "NBC Sports Washington", category: "Sports", playback: false, id: "sports-844", is247: false },
  { number: 845, name: "NFL Network", category: "Sports", playback: true, id: "sports-845", is247: true },
  { number: 846, name: "NFL RedZone", category: "Sports", playback: true, id: "sports-846", is247: true },
  { number: 848, name: "Pac-12 Network", category: "Sports", playback: false, id: "sports-848", is247: false },
  { number: 849, name: "SEC Network", category: "Sports", playback: true, id: "sports-849", is247: true },
  { number: 850, name: "SportsNet New York (SNY)", category: "Sports", playback: false, id: "sports-850", is247: false },
  { number: 851, name: "Stadium", category: "Sports", playback: false, id: "sports-851", is247: false },
  { number: 852, name: "Tennis Channel", category: "Sports", playback: false, id: "sports-852", is247: false },
  { number: 853, name: "TUDN", category: "Sports", playback: false, id: "sports-853", is247: false },
  { number: 854, name: "TVG Network", category: "Sports", playback: false, id: "sports-854", is247: false },
  { number: 855, name: "Altitude Sports", category: "Sports", playback: false, id: "sports-855", is247: false },
  { number: 856, name: "Fox Soccer Plus", category: "Sports", playback: false, id: "sports-856", is247: false },
  { number: 857, name: "BT Sports 1", category: "Sports", playback: false, id: "sports-857", is247: false },
  { number: 858, name: "BT Sports 2", category: "Sports", playback: false, id: "sports-858", is247: false },
  { number: 859, name: "BT Sports 3", category: "Sports", playback: false, id: "sports-859", is247: false },
  { number: 860, name: "BT Sports 4", category: "Sports", playback: false, id: "sports-860", is247: false },
  { number: 861, name: "Marquee Sports Network", category: "Sports", playback: false, id: "sports-861", is247: false },
  { number: 862, name: "Outdoor Channel", category: "Sports", playback: true, id: "sports-862", is247: true },
  { number: 863, name: "Pac-12 Arizona", category: "Sports", playback: false, id: "sports-863", is247: false },
  { number: 864, name: "Pac-12 Bay Area", category: "Sports", playback: false, id: "sports-864", is247: false },
  { number: 865, name: "Pac-12 Los Angeles", category: "Sports", playback: false, id: "sports-865", is247: false },
  { number: 866, name: "Pac-12 Mountain", category: "Sports", playback: false, id: "sports-866", is247: false },
  { number: 867, name: "Pac-12 Oregon", category: "Sports", playback: false, id: "sports-867", is247: false },
  { number: 868, name: "Pac-12 Washington", category: "Sports", playback: false, id: "sports-868", is247: false },
  { number: 869, name: "Sky Sports Arena", category: "Sports", playback: false, id: "sports-869", is247: false },
  { number: 870, name: "Sky Sports F1", category: "Sports", playback: false, id: "sports-870", is247: false },
  { number: 871, name: "Sky Sports Premier League", category: "Sports", playback: false, id: "sports-871", is247: false },
  { number: 873, name: "WWE Network", category: "Sports", playback: false, id: "sports-873", is247: false },
  { number: 874, name: "ESPNews", category: "Sports", playback: false, id: "sports-874", is247: false },
  { number: 875, name: "NESN", category: "Sports", playback: false, id: "sports-875", is247: false },
  { number: 876, name: "NESN+", category: "Sports", playback: false, id: "sports-876", is247: false },
  { number: 877, name: "NHL Network", category: "Sports", playback: false, id: "sports-877", is247: false },
  { number: 878, name: "Longhorn Network", category: "Sports", playback: false, id: "sports-878", is247: false },
  { number: 879, name: "YES Network", category: "Sports", playback: false, id: "sports-879", is247: false },
  { number: 880, name: "MAVTV", category: "Sports", playback: false, id: "sports-880", is247: false },
  { number: 881, name: "Root Sports Northwest", category: "Sports", playback: false, id: "sports-881", is247: false },
  { number: 882, name: "MASN", category: "Sports", playback: false, id: "sports-882", is247: false },
  { number: 883, name: "MASN2", category: "Sports", playback: false, id: "sports-883", is247: false },
  { number: 884, name: "Spectrum Sportsnet LA", category: "Sports", playback: false, id: "sports-884", is247: false },
  { number: 885, name: "Racing America", category: "Sports", playback: false, id: "sports-885", is247: false },
  { number: 886, name: "Hunt Channel", category: "Sports", playback: false, id: "sports-886", is247: false },
  { number: 887, name: "Sportsman Channel", category: "Sports", playback: false, id: "sports-887", is247: false },
  { number: 888, name: "MSG", category: "Sports", playback: false, id: "sports-888", is247: false },
  { number: 889, name: "MSG 2", category: "Sports", playback: false, id: "sports-889", is247: false },
  { number: 890, name: "MSG Plus", category: "Sports", playback: false, id: "sports-890", is247: false },
  { number: 891, name: "MSG Plus 2", category: "Sports", playback: false, id: "sports-891", is247: false },
  { number: 892, name: "Root Sports Plus", category: "Sports", playback: false, id: "sports-892", is247: false },
  { number: 893, name: "Sky Sports Golf", category: "Sports", playback: false, id: "sports-893", is247: false },
  { number: 894, name: "Spectrum SportsNet LA Lakers", category: "Sports", playback: false, id: "sports-894", is247: false },
  { number: 895, name: "Chive TV", category: "Sports", playback: false, id: "sports-895", is247: false },
  { number: 896, name: "Altitude Sports 2", category: "Sports", playback: false, id: "sports-896", is247: false },
  { number: 897, name: "World Fishing Network", category: "Sports", playback: false, id: "sports-897", is247: false },
  { number: 898, name: "Barca TV Latino", category: "Sports", playback: false, id: "sports-898", is247: false },
  { number: 899, name: "beIN Sports LaLiga", category: "Sports", playback: false, id: "sports-899", is247: false },
  { number: 900, name: "beIN Sports LaLiga Latino", category: "Sports", playback: false, id: "sports-900", is247: false },
  { number: 901, name: "Outside TV", category: "Sports", playback: false, id: "sports-901", is247: false },
  { number: 902, name: "Red Bull TV", category: "Sports", playback: false, id: "sports-902", is247: false },
  { number: 903, name: "NBC Sports California Plus", category: "Sports", playback: false, id: "sports-903", is247: false },
  { number: 904, name: "NBC Sports Philadelphia Plus", category: "Sports", playback: false, id: "sports-904", is247: false },
  { number: 905, name: "Bally Sports Oklahoma Extra", category: "Sports", playback: false, id: "sports-905", is247: false },
  { number: 906, name: "Bally Sports South Extra", category: "Sports", playback: false, id: "sports-906", is247: false },

  // === CANADA ===
  { number: 1001, name: "ABC Spark", category: "Canada", playback: false, id: "canada-1001", is247: false },
  { number: 1002, name: "APTN", category: "Canada", playback: false, id: "canada-1002", is247: false },
  { number: 1003, name: "BBC Earth CA", category: "Canada", playback: false, id: "canada-1003", is247: false },
  { number: 1004, name: "BNN Bloomberg", category: "Canada", playback: false, id: "canada-1004", is247: false },
  { number: 1005, name: "CBC Calgary", category: "Canada", playback: false, id: "canada-1005", is247: false },
  { number: 1006, name: "CBC Edmonton", category: "Canada", playback: false, id: "canada-1006", is247: false },
  { number: 1007, name: "CBC Montreal", category: "Canada", playback: false, id: "canada-1007", is247: false },
  { number: 1008, name: "CBC Ottawa", category: "Canada", playback: false, id: "canada-1008", is247: false },
  { number: 1009, name: "CBC Toronto", category: "Canada", playback: false, id: "canada-1009", is247: false },
  { number: 1010, name: "CBC Vancouver", category: "Canada", playback: false, id: "canada-1010", is247: false },
  { number: 1011, name: "CBC Winnipeg", category: "Canada", playback: false, id: "canada-1011", is247: false },
  { number: 1012, name: "CBC News Network", category: "Canada", playback: false, id: "canada-1012", is247: false },
  { number: 1013, name: "Citytv Calgary", category: "Canada", playback: false, id: "canada-1013", is247: false },
  { number: 1014, name: "Citytv Montreal", category: "Canada", playback: false, id: "canada-1014", is247: false },
  { number: 1015, name: "Citytv Toronto", category: "Canada", playback: false, id: "canada-1015", is247: false },
  { number: 1016, name: "Citytv Vancouver", category: "Canada", playback: false, id: "canada-1016", is247: false },
  { number: 1017, name: "Citytv Winnipeg", category: "Canada", playback: false, id: "canada-1017", is247: false },
  { number: 1018, name: "CMT CA", category: "Canada", playback: false, id: "canada-1018", is247: false },
  { number: 1019, name: "Cottage Life", category: "Canada", playback: false, id: "canada-1019", is247: false },
  { number: 1020, name: "CP24", category: "Canada", playback: false, id: "canada-1020", is247: false },
  { number: 1021, name: "CPAC", category: "Canada", playback: false, id: "canada-1021", is247: false },
  { number: 1022, name: "CRAVE 1", category: "Canada", playback: false, id: "canada-1022", is247: false },
  { number: 1023, name: "CRAVE 2", category: "Canada", playback: false, id: "canada-1023", is247: false },
  { number: 1024, name: "CRAVE 3", category: "Canada", playback: false, id: "canada-1024", is247: false },
  { number: 1025, name: "CRAVE 4", category: "Canada", playback: false, id: "canada-1025", is247: false },
  { number: 1026, name: "CTV Calgary", category: "Canada", playback: false, id: "canada-1026", is247: false },
  { number: 1027, name: "CTV Edmonton", category: "Canada", playback: false, id: "canada-1027", is247: false },
  { number: 1028, name: "CTV Kitchener", category: "Canada", playback: false, id: "canada-1028", is247: false },
  { number: 1029, name: "CTV Montreal", category: "Canada", playback: false, id: "canada-1029", is247: false },
  { number: 1030, name: "CTV Ottawa", category: "Canada", playback: false, id: "canada-1030", is247: false },
  { number: 1031, name: "CTV Prince Albert", category: "Canada", playback: false, id: "canada-1031", is247: false },
  { number: 1032, name: "CTV Regina", category: "Canada", playback: false, id: "canada-1032", is247: false },
  { number: 1033, name: "CTV Saskatoon", category: "Canada", playback: false, id: "canada-1033", is247: false },
  { number: 1034, name: "CTV Toronto", category: "Canada", playback: false, id: "canada-1034", is247: false },
  { number: 1035, name: "CTV Vancouver", category: "Canada", playback: false, id: "canada-1035", is247: false },
  { number: 1036, name: "CTV Winnipeg", category: "Canada", playback: false, id: "canada-1036", is247: false },
  { number: 1037, name: "CTV Yorkton", category: "Canada", playback: false, id: "canada-1037", is247: false },
  { number: 1038, name: "CTV2 Alberta", category: "Canada", playback: false, id: "canada-1038", is247: false },
  { number: 1039, name: "CTV2 Atlantic", category: "Canada", playback: false, id: "canada-1039", is247: false },
  { number: 1040, name: "CTV2 London", category: "Canada", playback: false, id: "canada-1040", is247: false },
  { number: 1041, name: "CTV2 Ottawa", category: "Canada", playback: false, id: "canada-1041", is247: false },
  { number: 1042, name: "CTV2 Toronto", category: "Canada", playback: false, id: "canada-1042", is247: false },
  { number: 1043, name: "CTV2 Vancouver", category: "Canada", playback: false, id: "canada-1043", is247: false },
  { number: 1044, name: "CTV2 Windsor", category: "Canada", playback: false, id: "canada-1044", is247: false },
  { number: 1045, name: "CTV Comedy Channel", category: "Canada", playback: false, id: "canada-1045", is247: false },
  { number: 1046, name: "CTV Drama Channel", category: "Canada", playback: false, id: "canada-1046", is247: false },
  { number: 1047, name: "CTV Life Channel", category: "Canada", playback: false, id: "canada-1047", is247: false },
  { number: 1048, name: "CTV News Channel", category: "Canada", playback: false, id: "canada-1048", is247: false },
  { number: 1049, name: "CTV Sci-Fi Channel", category: "Canada", playback: false, id: "canada-1049", is247: false },
  { number: 1050, name: "Discovery Channel CA", category: "Canada", playback: false, id: "canada-1050", is247: false },
  { number: 1051, name: "DTour", category: "Canada", playback: false, id: "canada-1051", is247: false },
  { number: 1052, name: "E! CA", category: "Canada", playback: false, id: "canada-1052", is247: false },
  { number: 1053, name: "Family East CA", category: "Canada", playback: false, id: "canada-1053", is247: false },
  { number: 1054, name: "Family West CA", category: "Canada", playback: false, id: "canada-1054", is247: false },
  { number: 1055, name: "Family JR CA", category: "Canada", playback: false, id: "canada-1055", is247: false },
  { number: 1056, name: "Fight Network", category: "Canada", playback: false, id: "canada-1056", is247: false },
  { number: 1057, name: "Food Network CA", category: "Canada", playback: false, id: "canada-1057", is247: false },
  { number: 1058, name: "Game+", category: "Canada", playback: false, id: "canada-1058", is247: false },
  { number: 1059, name: "GameTV", category: "Canada", playback: false, id: "canada-1059", is247: false },
  { number: 1060, name: "HBO 1 CA", category: "Canada", playback: false, id: "canada-1060", is247: false },
  { number: 1061, name: "HBO 2 CA", category: "Canada", playback: false, id: "canada-1061", is247: false },
  { number: 1062, name: "HGTV CA", category: "Canada", playback: false, id: "canada-1062", is247: false },
  { number: 1063, name: "Love Nature", category: "Canada", playback: false, id: "canada-1063", is247: false },
  { number: 1064, name: "MovieTime CA", category: "Canada", playback: false, id: "canada-1064", is247: false },
  { number: 1065, name: "MTV 2 CA", category: "Canada", playback: false, id: "canada-1065", is247: false },
  { number: 1066, name: "Sportsnet East", category: "Canada", playback: true, id: "canada-1066", is247: true },
  { number: 1067, name: "Sportsnet West", category: "Canada", playback: false, id: "canada-1067", is247: false },
  { number: 1068, name: "Sportsnet 360", category: "Canada", playback: true, id: "canada-1068", is247: true },
  { number: 1069, name: "Sportsnet One", category: "Canada", playback: false, id: "canada-1069", is247: false },
  { number: 1070, name: "Sportsnet Ontario", category: "Canada", playback: false, id: "canada-1070", is247: false },
  { number: 1071, name: "Sportsnet Pacific", category: "Canada", playback: false, id: "canada-1071", is247: false },
  { number: 1072, name: "Sportsnet PPV", category: "Canada", playback: false, id: "canada-1072", is247: false },
  { number: 1073, name: "TCM CA", category: "Canada", playback: false, id: "canada-1073", is247: false },
  { number: 1074, name: "TELETOON", category: "Canada", playback: false, id: "canada-1074", is247: false },
  { number: 1075, name: "The Weather Network CA", category: "Canada", playback: false, id: "canada-1075", is247: false },
  { number: 1076, name: "Treehouse TV CA", category: "Canada", playback: false, id: "canada-1076", is247: false },
  { number: 1077, name: "TSN 1", category: "Canada", playback: true, id: "canada-1077", is247: true },
  { number: 1078, name: "TSN 2", category: "Canada", playback: false, id: "canada-1078", is247: false },
  { number: 1079, name: "TSN 3", category: "Canada", playback: false, id: "canada-1079", is247: false },
  { number: 1080, name: "TSN 4", category: "Canada", playback: false, id: "canada-1080", is247: false },
  { number: 1081, name: "TSN 5", category: "Canada", playback: false, id: "canada-1081", is247: false },
  { number: 1082, name: "TVA", category: "Canada", playback: false, id: "canada-1082", is247: false },
  { number: 1083, name: "TVA Sports 1", category: "Canada", playback: false, id: "canada-1083", is247: false },
  { number: 1084, name: "TVA Sports 2", category: "Canada", playback: false, id: "canada-1084", is247: false },
  { number: 1085, name: "W Network", category: "Canada", playback: false, id: "canada-1085", is247: false },
  { number: 1086, name: "YTV EAST", category: "Canada", playback: false, id: "canada-1086", is247: false },
  { number: 1087, name: "YTV WEST", category: "Canada", playback: false, id: "canada-1087", is247: false },
  { number: 1088, name: "Global TV British Columbia", category: "Canada", playback: false, id: "canada-1088", is247: false },
  { number: 1089, name: "Global TV Calgary", category: "Canada", playback: false, id: "canada-1089", is247: false },
  { number: 1090, name: "Global TV Toronto", category: "Canada", playback: false, id: "canada-1090", is247: false },
  { number: 1091, name: "Discovery Velocity", category: "Canada", playback: false, id: "canada-1091", is247: false },
  { number: 1092, name: "CBC Regina", category: "Canada", playback: false, id: "canada-1092", is247: false },
  { number: 1093, name: "Global TV Regina", category: "Canada", playback: false, id: "canada-1093", is247: false },
  { number: 1094, name: "Global TV Edmonton", category: "Canada", playback: false, id: "canada-1094", is247: false },
  { number: 1095, name: "Citytv Edmonton", category: "Canada", playback: false, id: "canada-1095", is247: false },
  { number: 1096, name: "CHCH TV", category: "Canada", playback: false, id: "canada-1096", is247: false },
  { number: 1097, name: "Rogers TV St. Thomas", category: "Canada", playback: false, id: "canada-1097", is247: false },
  { number: 1098, name: "RDS", category: "Canada", playback: false, id: "canada-1098", is247: false },

  // === LATINO ===
  { number: 1201, name: "¡HOLA! TV", category: "Latino", playback: false, id: "latino-1201", is247: false },
  { number: 1202, name: "¡HOLA! TV Local", category: "Latino", playback: false, id: "latino-1202", is247: false },
  { number: 1203, name: "24 Horas", category: "Latino", playback: false, id: "latino-1203", is247: false },
  { number: 1204, name: "ADN 40", category: "Latino", playback: false, id: "latino-1204", is247: false },
  { number: 1205, name: "Almavision", category: "Latino", playback: false, id: "latino-1205", is247: false },
  { number: 1206, name: "AMC Latino", category: "Latino", playback: false, id: "latino-1206", is247: false },
  { number: 1207, name: "América Televisión", category: "Latino", playback: false, id: "latino-1207", is247: false },
  { number: 1208, name: "Animal Planet Latino", category: "Latino", playback: false, id: "latino-1208", is247: false },
  { number: 1209, name: "Antena 3 Latino", category: "Latino", playback: false, id: "latino-1209", is247: false },
  { number: 1210, name: "ATV", category: "Latino", playback: false, id: "latino-1210", is247: false },
  { number: 1211, name: "Azteca", category: "Latino", playback: false, id: "latino-1211", is247: false },
  { number: 1212, name: "Azteca 7", category: "Latino", playback: false, id: "latino-1212", is247: false },
  { number: 1213, name: "BabyTV Español", category: "Latino", playback: false, id: "latino-1213", is247: false },
  { number: 1214, name: "Bandamax", category: "Latino", playback: false, id: "latino-1214", is247: false },
  { number: 1215, name: "beIN SPORTS en Español", category: "Latino", playback: false, id: "latino-1215", is247: false },
  { number: 1216, name: "Bolivia TV", category: "Latino", playback: false, id: "latino-1216", is247: false },
  { number: 1217, name: "Bolivisión", category: "Latino", playback: false, id: "latino-1217", is247: false },
  { number: 1218, name: "Canal 5 Canal Cinco", category: "Latino", playback: false, id: "latino-1218", is247: false },
  { number: 1219, name: "Canal 13 HD", category: "Latino", playback: false, id: "latino-1219", is247: false },
  { number: 1220, name: "Canal Once", category: "Latino", playback: false, id: "latino-1220", is247: false },
  { number: 1221, name: "Caracol TV", category: "Latino", playback: false, id: "latino-1221", is247: false },
  { number: 1222, name: "CBTV Michoacán", category: "Latino", playback: false, id: "latino-1222", is247: false },
  { number: 1223, name: "Centroamerica TV", category: "Latino", playback: false, id: "latino-1223", is247: false },
  { number: 1224, name: "Chilevisión", category: "Latino", playback: false, id: "latino-1224", is247: false },
  { number: 1225, name: "Cine Estelar", category: "Latino", playback: false, id: "latino-1225", is247: false },
  { number: 1226, name: "Cine Mexicano", category: "Latino", playback: false, id: "latino-1226", is247: false },
  { number: 1227, name: "Cine Nostalgia", category: "Latino", playback: false, id: "latino-1227", is247: false },
  { number: 1228, name: "Cinelatino", category: "Latino", playback: false, id: "latino-1228", is247: false },
  { number: 1229, name: "Cinema Dinamita", category: "Latino", playback: false, id: "latino-1229", is247: false },
  { number: 1230, name: "Cinemax Latino", category: "Latino", playback: false, id: "latino-1230", is247: false },
  { number: 1231, name: "CNN En Español", category: "Latino", playback: false, id: "latino-1231", is247: false },
  { number: 1232, name: "Canal Cocina", category: "Latino", playback: false, id: "latino-1232", is247: false },
  { number: 1233, name: "De PelÍcula", category: "Latino", playback: false, id: "latino-1233", is247: false },
  { number: 1234, name: "De PelÍcula Clásico", category: "Latino", playback: false, id: "latino-1234", is247: false },
  { number: 1235, name: "Discovery Channel Latino", category: "Latino", playback: false, id: "latino-1235", is247: false },
  { number: 1236, name: "Discovery en Español", category: "Latino", playback: false, id: "latino-1236", is247: false },
  { number: 1237, name: "Discovery Familia", category: "Latino", playback: false, id: "latino-1237", is247: false },
  { number: 1238, name: "Discovery Kids Latino", category: "Latino", playback: false, id: "latino-1238", is247: false },
  { number: 1239, name: "DISNEY Channel Latino", category: "Latino", playback: false, id: "latino-1239", is247: false },
  { number: 1240, name: "DISNEY JR Latino", category: "Latino", playback: false, id: "latino-1240", is247: false },
  { number: 1241, name: "E! Latino", category: "Latino", playback: false, id: "latino-1241", is247: false },
  { number: 1242, name: "Ecuador TV", category: "Latino", playback: false, id: "latino-1242", is247: false },
  { number: 1243, name: "Ecuavisa", category: "Latino", playback: false, id: "latino-1243", is247: false },
  { number: 1244, name: "El Gourmet", category: "Latino", playback: false, id: "latino-1244", is247: false },
  { number: 1245, name: "El Trece", category: "Latino", playback: false, id: "latino-1245", is247: false },
  { number: 1246, name: "Enlace", category: "Latino", playback: false, id: "latino-1246", is247: false },
  { number: 1247, name: "ESPN Deportes", category: "Latino", playback: false, id: "latino-1247", is247: false },
  { number: 1248, name: "Estrella News", category: "Latino", playback: false, id: "latino-1248", is247: false },
  { number: 1249, name: "Estrella TV", category: "Latino", playback: false, id: "latino-1249", is247: false },
  { number: 1250, name: "FOROtv", category: "Latino", playback: false, id: "latino-1250", is247: false },
  { number: 1251, name: "FOX Deportes", category: "Latino", playback: false, id: "latino-1251", is247: false },
  { number: 1252, name: "Fox Life", category: "Latino", playback: false, id: "latino-1252", is247: false },
  { number: 1253, name: "FX Latino", category: "Latino", playback: false, id: "latino-1253", is247: false },
  { number: 1254, name: "Galavisión", category: "Latino", playback: false, id: "latino-1254", is247: false },
  { number: 1255, name: "Gamavision", category: "Latino", playback: false, id: "latino-1255", is247: false },
  { number: 1256, name: "GolTV", category: "Latino", playback: false, id: "latino-1256", is247: false },
  { number: 1257, name: "HBO Latino", category: "Latino", playback: false, id: "latino-1257", is247: false },
  { number: 1258, name: "HBO 2 Latino", category: "Latino", playback: false, id: "latino-1258", is247: false },
  { number: 1259, name: "HBO FAMILY Latino", category: "Latino", playback: false, id: "latino-1259", is247: false },
  { number: 1260, name: "HBO Signature Local", category: "Latino", playback: false, id: "latino-1260", is247: false },
  { number: 1261, name: "History en Español", category: "Latino", playback: false, id: "latino-1261", is247: false },
  { number: 1262, name: "HITN TV", category: "Latino", playback: false, id: "latino-1262", is247: false },
  { number: 1263, name: "La Red", category: "Latino", playback: false, id: "latino-1263", is247: false },
  { number: 1264, name: "Las Estrellas", category: "Latino", playback: false, id: "latino-1264", is247: false },
  { number: 1265, name: "Latina", category: "Latino", playback: false, id: "latino-1265", is247: false },
  { number: 1266, name: "Lifetime Latino", category: "Latino", playback: false, id: "latino-1266", is247: false },
  { number: 1267, name: "Más Chic", category: "Latino", playback: false, id: "latino-1267", is247: false },
  { number: 1268, name: "Mega TV", category: "Latino", playback: false, id: "latino-1268", is247: false },
  { number: 1269, name: "Mexicanal", category: "Latino", playback: false, id: "latino-1269", is247: false },
  { number: 1270, name: "MTV Latino", category: "Latino", playback: false, id: "latino-1270", is247: false },
  { number: 1271, name: "Multimedios", category: "Latino", playback: false, id: "latino-1271", is247: false },
  { number: 1272, name: "Nat Geo Mundo", category: "Latino", playback: false, id: "latino-1272", is247: false },
  { number: 1273, name: "Nat Geo Wild Latino", category: "Latino", playback: false, id: "latino-1273", is247: false },
  { number: 1274, name: "NTN24", category: "Latino", playback: false, id: "latino-1274", is247: false },
  { number: 1275, name: "Nu9ve", category: "Latino", playback: false, id: "latino-1275", is247: false },
  { number: 1276, name: "Nuestra Tele NTEL", category: "Latino", playback: false, id: "latino-1276", is247: false },
  { number: 1277, name: "Oromar Televisión", category: "Latino", playback: false, id: "latino-1277", is247: false },
  { number: 1278, name: "Panamericana", category: "Latino", playback: false, id: "latino-1278", is247: false },
  { number: 1279, name: "Pasiones", category: "Latino", playback: false, id: "latino-1279", is247: false },
  { number: 1280, name: "RCN Novelas", category: "Latino", playback: false, id: "latino-1280", is247: false },
  { number: 1281, name: "RCN TV", category: "Latino", playback: false, id: "latino-1281", is247: false },
  { number: 1282, name: "RTS", category: "Latino", playback: false, id: "latino-1282", is247: false },
  { number: 1283, name: "Señal Colombia", category: "Latino", playback: false, id: "latino-1283", is247: false },
  { number: 1284, name: "Sony Cine", category: "Latino", playback: false, id: "latino-1284", is247: false },
  { number: 1285, name: "Sony Latino", category: "Latino", playback: false, id: "latino-1285", is247: false },
  { number: 1286, name: "SUR Perú", category: "Latino", playback: false, id: "latino-1286", is247: false },
  { number: 1287, name: "Teleamazonas", category: "Latino", playback: false, id: "latino-1287", is247: false },
  { number: 1288, name: "Telecentro TC", category: "Latino", playback: false, id: "latino-1288", is247: false },
  { number: 1289, name: "Telefe", category: "Latino", playback: false, id: "latino-1289", is247: false },
  { number: 1290, name: "TeleFórmula", category: "Latino", playback: false, id: "latino-1290", is247: false },
  { number: 1291, name: "Telemundo East", category: "Latino", playback: false, id: "latino-1291", is247: false },
  { number: 1292, name: "Telemundo West", category: "Latino", playback: false, id: "latino-1292", is247: false },
  { number: 1293, name: "Todo Noticias", category: "Latino", playback: false, id: "latino-1293", is247: false },
  { number: 1294, name: "Tr3s", category: "Latino", playback: false, id: "latino-1294", is247: false },
  { number: 1295, name: "TUDN", category: "Latino", playback: false, id: "latino-1295", is247: false },
  { number: 1296, name: "TV Chile", category: "Latino", playback: false, id: "latino-1296", is247: false },
  { number: 1297, name: "TVE", category: "Latino", playback: false, id: "latino-1297", is247: false },
  { number: 1298, name: "Tvn Televisión Nacional de Chile", category: "Latino", playback: false, id: "latino-1298", is247: false },
  { number: 1299, name: "TyC Sports", category: "Latino", playback: false, id: "latino-1299", is247: false },
  { number: 1300, name: "Universo East", category: "Latino", playback: false, id: "latino-1300", is247: false },
  { number: 1301, name: "Universo West", category: "Latino", playback: false, id: "latino-1301", is247: false },
  { number: 1302, name: "Univision East", category: "Latino", playback: false, id: "latino-1302", is247: false },
  { number: 1303, name: "Univision West", category: "Latino", playback: false, id: "latino-1303", is247: false },
  { number: 1304, name: "Video Rola", category: "Latino", playback: false, id: "latino-1304", is247: false },
  { number: 1305, name: "ViendoMovies", category: "Latino", playback: false, id: "latino-1305", is247: false },
  { number: 1306, name: "Vme Kids", category: "Latino", playback: false, id: "latino-1306", is247: false },
  { number: 1307, name: "WAPA America", category: "Latino", playback: false, id: "latino-1307", is247: false },
  { number: 1308, name: "Star Channel", category: "Latino", playback: false, id: "latino-1308", is247: false },
  { number: 1309, name: "A24", category: "Latino", playback: false, id: "latino-1309", is247: false },
  { number: 1310, name: "ATB Red", category: "Latino", playback: false, id: "latino-1310", is247: false },
  { number: 1311, name: "Azteca Uno", category: "Latino", playback: false, id: "latino-1311", is247: false },
  { number: 1312, name: "C5N", category: "Latino", playback: false, id: "latino-1312", is247: false },
  { number: 1313, name: "Canal 26", category: "Latino", playback: false, id: "latino-1313", is247: false },
  { number: 1314, name: "Canal Capital", category: "Latino", playback: false, id: "latino-1314", is247: false },
  { number: 1315, name: "Canal Sur", category: "Latino", playback: false, id: "latino-1315", is247: false },
  { number: 1316, name: "Citytv", category: "Latino", playback: false, id: "latino-1316", is247: false },
  { number: 1317, name: "CNN Chile", category: "Latino", playback: false, id: "latino-1317", is247: false },
  { number: 1318, name: "Cronica HD", category: "Latino", playback: false, id: "latino-1318", is247: false },
  { number: 1319, name: "El Nueve", category: "Latino", playback: false, id: "latino-1319", is247: false },
  { number: 1320, name: "Globovisión", category: "Latino", playback: false, id: "latino-1320", is247: false },
  { number: 1321, name: "Imagen Televisión", category: "Latino", playback: false, id: "latino-1321", is247: false },
  { number: 1322, name: "Investigation Discovery Latino", category: "Latino", playback: false, id: "latino-1322", is247: false },
  { number: 1323, name: "Nick Jr. Latino", category: "Latino", playback: false, id: "latino-1323", is247: false },
  { number: 1324, name: "Paramount Latino", category: "Latino", playback: false, id: "latino-1324", is247: false },
  { number: 1325, name: "Syfy Latino", category: "Latino", playback: false, id: "latino-1325", is247: false },
  { number: 1326, name: "TV Perú", category: "Latino", playback: false, id: "latino-1326", is247: false },
  { number: 1327, name: "Televen", category: "Latino", playback: false, id: "latino-1327", is247: false },
  { number: 1328, name: "Unitel Bolivia", category: "Latino", playback: false, id: "latino-1328", is247: false },
  { number: 1329, name: "A&E Latino", category: "Latino", playback: false, id: "latino-1329", is247: false },
  { number: 1330, name: "Mega TV PR", category: "Latino", playback: false, id: "latino-1330", is247: false },
  { number: 1332, name: "WAPA America", category: "Latino", playback: false, id: "latino-1332", is247: false },
  { number: 1333, name: "The Weather Channel en Español", category: "Latino", playback: false, id: "latino-1333", is247: false },
  { number: 1334, name: "WIPR TV", category: "Latino", playback: false, id: "latino-1334", is247: false },
  { number: 1335, name: "Comedy Central Latino", category: "Latino", playback: false, id: "latino-1335", is247: false },
  { number: 1336, name: "Distrito Comedia", category: "Latino", playback: false, id: "latino-1336", is247: false },

  // === 24/7 ===
  { number: 2001, name: "24/7 Black Mirror", category: "24/7", playback: false, id: "24-7-2001", is247: true },
  { number: 2002, name: "24/7 CSI", category: "24/7", playback: false, id: "24-7-2002", is247: true },
  { number: 2003, name: "24/7 Friends", category: "24/7", playback: false, id: "24-7-2003", is247: true },
  { number: 2004, name: "24/7 House M.D.", category: "24/7", playback: false, id: "24-7-2004", is247: true },
  { number: 2005, name: "24/7 I Love Lucy", category: "24/7", playback: false, id: "24-7-2005", is247: true },
  { number: 2006, name: "24/7 MasterChef", category: "24/7", playback: false, id: "24-7-2006", is247: true },
  { number: 2007, name: "24/7 Only Fools And Horses", category: "24/7", playback: false, id: "24-7-2007", is247: true },
  { number: 2008, name: "24/7 Planet Earth", category: "24/7", playback: false, id: "24-7-2008", is247: true },
  { number: 2009, name: "24/7 Planet Earth 2", category: "24/7", playback: false, id: "24-7-2009", is247: true },
  { number: 2010, name: "24/7 Rick and Morty", category: "24/7", playback: false, id: "24-7-2010", is247: true },
  { number: 2011, name: "24/7 Seinfeld", category: "24/7", playback: false, id: "24-7-2011", is247: true },
  { number: 2012, name: "24/7 South Park", category: "24/7", playback: false, id: "24-7-2012", is247: true },
  { number: 2013, name: "24/7 The Mary Tyler Moore Show", category: "24/7", playback: false, id: "24-7-2013", is247: true },
  { number: 2014, name: "24/7 The Office", category: "24/7", playback: false, id: "24-7-2014", is247: true },
  { number: 2015, name: "24/7 The Simpsons", category: "24/7", playback: false, id: "24-7-2015", is247: true },
  { number: 2016, name: "24/7 The Sopranos", category: "24/7", playback: false, id: "24-7-2016", is247: true },
  { number: 2017, name: "24/7 The Wire", category: "24/7", playback: false, id: "24-7-2017", is247: true },
  { number: 2018, name: "24/7 The X-Files", category: "24/7", playback: false, id: "24-7-2018", is247: true },
  { number: 2019, name: "24/7 Top Gear", category: "24/7", playback: false, id: "24-7-2019", is247: true },
  { number: 2020, name: "24/7 WWE Wrestling", category: "24/7", playback: false, id: "24-7-2020", is247: true },
  { number: 2021, name: "24/7 90210", category: "24/7", playback: false, id: "24-7-2021", is247: true },
  { number: 2022, name: "24/7 ALF", category: "24/7", playback: false, id: "24-7-2022", is247: true },
  { number: 2023, name: "24/7 Different Strokes", category: "24/7", playback: false, id: "24-7-2023", is247: true },
  { number: 2024, name: "24/7 Family Matters", category: "24/7", playback: false, id: "24-7-2024", is247: true },
  { number: 2025, name: "24/7 Knight Rider", category: "24/7", playback: false, id: "24-7-2025", is247: true },
  { number: 2026, name: "24/7 Sanford and Son", category: "24/7", playback: false, id: "24-7-2026", is247: true },
  { number: 2027, name: "24/7 Saved by the Bell", category: "24/7", playback: false, id: "24-7-2027", is247: true },
  { number: 2028, name: "24/7 Scooby Doo Guess Who", category: "24/7", playback: false, id: "24-7-2028", is247: true },
  { number: 2029, name: "24/7 Step by Step", category: "24/7", playback: false, id: "24-7-2029", is247: true },
  { number: 2030, name: "24/7 Taxi", category: "24/7", playback: false, id: "24-7-2030", is247: true },
  { number: 2031, name: "24/7 Three’s Company", category: "24/7", playback: false, id: "24-7-2031", is247: true },
  { number: 2032, name: "24/7 UFC", category: "24/7", playback: false, id: "24-7-2032", is247: true }
];
  



// Load full channel data from external JSON if available
async function loadFullChannelData() {
    try {
        const response = await fetch('./data/channels.json');
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.warn('Full channel data not available, using sample data');
    }
    return CHANNELS_DATA;
}

// ================================
// Application State
// ================================

const AppState = {
    channels: [],
    filteredChannels: [],
    paginatedChannels: [],
    searchQuery: '',
    selectedCategory: 'all',
    favorites: new Set(),
    darkMode: false,
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 1
};

// ================================
// Category Filter Configuration
// ================================

const CATEGORY_FILTERS = [
    { id: 'all', label: 'All Channels', color: 'bg-blue', icon: '📺' },
    { id: 'playback', label: '7-Day Playback', color: 'bg-emerald', icon: '⏰' },
    { id: 'network', label: 'Network TV', color: 'bg-purple', icon: '🖥️' },
    { id: 'regional', label: 'Regional Locals', color: 'bg-orange', icon: '📍' },
    { id: 'sports', label: 'Sports Networks', color: 'bg-red', icon: '🏆' },
    { id: 'favorites', label: 'Favorites', color: 'bg-rose', icon: '❤️' }
];

// ================================
// FAQ Data
// ================================

const FAQ_DATA = [
    {
        id: 1,
        question: 'What channels are available on vSeeBox?',
        answer: 'vSeeBox supports over 1,000 live channels, including major sports, news, movies, regional locals, and international options. Use the search tool above or browse our full vSeeBox channels list 2025 for details. New channels are added periodically to keep your experience fresh.'
    },
    {
        id: 2,
        question: 'Does vSeeBox include 7-day playback?',
        answer: 'Yes, vSeeBox apps support up to 7-day playback on over 50 live channels, letting you rewatch recently aired programs without recording. Playback channels are listed in the Heat Live app section of our channel guide.'
    },
    {
        id: 3,
        question: 'Does vSeeBox have live sports?',
        answer: 'Yes — vSeeBox provides access to all major live sports, including NFL, NBA, MLB, NHL, UFC, Boxing, and Pay-Per-View events. Sports channels stream 24/7 through apps like Heat Live, covering both local and international leagues.'
    },
    {
        id: 4,
        question: 'Do I need a subscription to use vSeeBox?',
        answer: 'No, vSeeBox is a one-time purchase with no monthly or hidden fees. Once activated, access all pre-installed apps like Heat Live for free, including the complete vSeeBox channel lineup.'
    },
    {
        id: 5,
        question: 'Does any internet work with vSeeBox?',
        answer: 'Yes, vSeeBox works with any stable internet connection — Wi-Fi, Ethernet, or hotspot. For smooth HD streaming, we recommend at least 15 Mbps, and 25 Mbps+ for 4K quality.'
    },
    {
        id: 6,
        question: 'Can I use vSeeBox outside of the United States?',
        answer: 'Yes, vSeeBox works worldwide with a stable connection, including access to international channels. Channel availability may vary slightly by region.'
    },
    {
        id: 7,
        question: 'Where can I buy an official vSeeBox?',
        answer: 'Purchase from official sellers such as vSeeTV.shop for verified devices, updates, and support. Avoid unauthorized resellers to ensure authenticity and performance.'
    },
    {
        id: 8,
        question: 'How often is the vSeeBox channels list updated?',
        answer: 'Updates occur monthly in 2025 as new channels become available. Check the official vSeeBox channels list for the latest additions.'
    },
    {
        id: 9,
        question: 'What internet speed do I need for vSeeBox?',
        answer: 'A minimum of 15 Mbps is recommended for HD streaming and 25 Mbps or higher for 4K. Ethernet connections offer the best performance.'
    },
    {
        id: 10,
        question: 'Can I record on the vSeeBox?',
        answer: 'Recording isn\'t currently supported on Heat Live, but 50+ playback channels let you rewatch content up to seven days after it airs — serving as a modern DVR replacement.'
    }
];

// ================================
// Utility Functions
// ================================

function getCategoryTitle(category) {
    const titles = {
        all: 'All Channels',
        playback: '7-Day Playback Channels',
        network: 'Network TV',
        regional: 'Regional Locals',
        sports: 'Sports Networks',
        favorites: 'Favorite Channels'
    };
    return titles[category] || 'All Channels';
}

function getCategoryCount(categoryId) {
    if (categoryId === 'all') return AppState.channels.length;
    if (categoryId === 'favorites') return AppState.favorites.size;
    if (categoryId === 'playback') return AppState.channels.filter(ch => ch.playback).length;
    if (categoryId === 'network') return AppState.channels.filter(ch => ch.category === 'National Channels').length;
    if (categoryId === 'regional') return AppState.channels.filter(ch => ch.category === 'Local Channels').length;
    if (categoryId === 'sports') return AppState.channels.filter(ch => ch.category === 'Sports').length;
    return 0;
}

function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// ================================
// Local Storage Functions
// ================================

function loadFromLocalStorage() {
    try {
        const savedFavorites = localStorage.getItem('vseeboxFavorites');
        if (savedFavorites) {
            AppState.favorites = new Set(JSON.parse(savedFavorites));
        }
        
        const savedDarkMode = localStorage.getItem('vseeboxDarkMode');
        if (savedDarkMode !== null) {
            AppState.darkMode = savedDarkMode === 'true';
            if (AppState.darkMode) {
                document.body.classList.add('dark-mode');
            }
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
    }
}

function saveFavoritesToLocalStorage() {
    try {
        localStorage.setItem('vseeboxFavorites', JSON.stringify([...AppState.favorites]));
    } catch (error) {
        console.error('Error saving favorites:', error);
    }
}

function saveDarkModeToLocalStorage() {
    try {
        localStorage.setItem('vseeboxDarkMode', AppState.darkMode.toString());
    } catch (error) {
        console.error('Error saving dark mode:', error);
    }
}

// ================================
// Filtering Functions
// ================================

function filterChannels() {
    let filtered = [...AppState.channels];
    
    // Apply search filter
    if (AppState.searchQuery) {
        const query = AppState.searchQuery.toLowerCase();
        filtered = filtered.filter(channel =>
            channel.name.toLowerCase().includes(query) ||
            channel.number.toString().includes(query)
        );
    }
    
    // Apply category filter
    if (AppState.selectedCategory === 'favorites') {
        filtered = filtered.filter(channel => AppState.favorites.has(channel.id));
    } else if (AppState.selectedCategory === 'playback') {
        filtered = filtered.filter(channel => channel.playback);
    } else if (AppState.selectedCategory === 'network') {
        filtered = filtered.filter(channel => channel.category === 'National Channels');
    } else if (AppState.selectedCategory === 'regional') {
        filtered = filtered.filter(channel => channel.category === 'Local Channels');
    } else if (AppState.selectedCategory === 'sports') {
        filtered = filtered.filter(channel => channel.category === 'Sports');
    } 
    
    
    AppState.filteredChannels = filtered;
    AppState.totalPages = Math.ceil(filtered.length / AppState.itemsPerPage);
    
    // Reset to page 1 if current page exceeds total pages
    if (AppState.currentPage > AppState.totalPages && AppState.totalPages > 0) {
        AppState.currentPage = 1;
    }
    
    paginateChannels();
}

function paginateChannels() {
    const startIndex = (AppState.currentPage - 1) * AppState.itemsPerPage;
    const endIndex = startIndex + AppState.itemsPerPage;
    AppState.paginatedChannels = AppState.filteredChannels.slice(startIndex, endIndex);
}

// ================================
// Render Functions
// ================================

function renderCategoryFilters() {
    const container = document.getElementById('categoryFilters');
    container.innerHTML = '';
    
    CATEGORY_FILTERS.forEach(filter => {
        const count = getCategoryCount(filter.id);
        const isActive = AppState.selectedCategory === filter.id;
        
        const button = document.createElement('button');
        button.className = `category-filter ${isActive ? 'active' : filter.color}`;
        button.innerHTML = `
            <span>${filter.icon}</span>
            <span>${filter.label}</span>
            <span class="category-count">${count}</span>
        `;
        button.onclick = () => handleCategoryChange(filter.id);
        
        container.appendChild(button);
    });
}

function renderChannelGrid() {
    const container = document.getElementById('channelGrid');
    
    if (AppState.paginatedChannels.length === 0) {
        container.innerHTML = '<div class="no-results">No channels found matching your criteria.</div>';
        return;
    }
    
    container.innerHTML = AppState.paginatedChannels.map(channel => {
        const isFavorite = AppState.favorites.has(channel.id);
        const highlightedName = highlightText(channel.name, AppState.searchQuery);
        
        return `
            <div class="channel-card">
                <div class="channel-number">${channel.number}</div>
                <div class="channel-info">
                    <h3 class="channel-name">${highlightedName}</h3>
                    <p class="channel-meta">${channel.category} • Channel ${channel.number}</p>
                </div>
                <div class="channel-actions">
                    <button 
                        class="favorite-button ${isFavorite ? 'favorited' : ''}" 
                        onclick="toggleFavorite('${channel.id}')"
                        aria-label="Toggle favorite"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderPaginationControls() {
    const paginationHTML = `
        <div class="pagination-left">
            <span>Show:</span>
            <select class="pagination-select" id="itemsPerPageSelect">
                <option value="10" ${AppState.itemsPerPage === 10 ? 'selected' : ''}>10</option>
                <option value="25" ${AppState.itemsPerPage === 25 ? 'selected' : ''}>25</option>
                <option value="50" ${AppState.itemsPerPage === 50 ? 'selected' : ''}>50</option>
            </select>
            <span>per page</span>
        </div>
        <div class="pagination-right">
            <button 
                class="pagination-button" 
                onclick="handlePageChange(${Math.max(1, AppState.currentPage - 1)})"
                ${AppState.currentPage === 1 ? 'disabled' : ''}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <span class="pagination-info">Page ${AppState.currentPage} of ${AppState.totalPages || 1}</span>
            <button 
                class="pagination-button" 
                onclick="handlePageChange(${Math.min(AppState.totalPages || 1, AppState.currentPage + 1)})"
                ${AppState.currentPage >= AppState.totalPages ? 'disabled' : ''}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    `;
    
    document.getElementById('paginationTop').innerHTML = paginationHTML;
    
    if (AppState.totalPages > 1) {
        document.getElementById('paginationBottom').innerHTML = paginationHTML;
        document.getElementById('paginationBottom').classList.remove('hidden');
    } else {
        document.getElementById('paginationBottom').classList.add('hidden');
    }
    
    // Add event listener for items per page
    const selects = document.querySelectorAll('#itemsPerPageSelect');
    selects.forEach(select => {
        select.onchange = (e) => handleItemsPerPageChange(parseInt(e.target.value));
    });
}

function renderPageTitle() {
    const title = document.getElementById('pageTitle');
    const subtitle = document.getElementById('pageSubtitle');
    
    if (AppState.searchQuery) {
        title.textContent = 'All Channels';
        subtitle.textContent = `Searching for "${AppState.searchQuery}" - ${AppState.filteredChannels.length} results`;
    } else {
        title.textContent = getCategoryTitle(AppState.selectedCategory);
        subtitle.textContent = `Browse ${AppState.filteredChannels.length} ${getCategoryTitle(AppState.selectedCategory).toLowerCase()}`;
    }
}

function renderFAQ() {
    const container = document.getElementById('faqAccordion');
    container.innerHTML = FAQ_DATA.map((faq, index) => `
        <div class="faq-item" data-faq-id="${faq.id}">
            <button class="faq-question" onclick="toggleFAQ(${faq.id})">
                <div class="faq-number">${index + 1}</div>
                <span class="faq-question-text">${faq.question}</span>
                <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">
                    <p class="faq-answer-text">${faq.answer}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function render() {
    renderCategoryFilters();
    renderChannelGrid();
    renderPaginationControls();
    renderPageTitle();
}

// ================================
// Event Handlers
// ================================

function handleSearchChange(query) {
    AppState.searchQuery = query;
    AppState.currentPage = 1;
    filterChannels();
    render();
}

function handleCategoryChange(category) {
    AppState.selectedCategory = category;
    AppState.currentPage = 1;
    filterChannels();
    render();
}

function handlePageChange(page) {
    if (page >= 1 && page <= AppState.totalPages) {
        AppState.currentPage = page;
        paginateChannels();
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function handleItemsPerPageChange(value) {
    AppState.itemsPerPage = value;
    AppState.currentPage = 1;
    filterChannels();
    render();
}

function toggleFavorite(channelId) {
    if (AppState.favorites.has(channelId)) {
        AppState.favorites.delete(channelId);
    } else {
        AppState.favorites.add(channelId);
    }
    
    saveFavoritesToLocalStorage();
    
    // Re-render if we're on the favorites view
    if (AppState.selectedCategory === 'favorites') {
        filterChannels();
    }
    
    render();
}

function toggleDarkMode() {
    AppState.darkMode = !AppState.darkMode;
    document.body.classList.toggle('dark-mode');
    saveDarkModeToLocalStorage();
}

function toggleFAQ(faqId) {
    const faqItem = document.querySelector(`[data-faq-id="${faqId}"]`);
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleDownload() {
    window.open('https://docs.google.com/spreadsheets/d/1J16LxliPjec1Vy5n8NjghqC0qPF-53ej1f0WaKMbLNI/edit?usp=sharing', '_blank');
}

// ================================
// Event Listeners
// ================================

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        handleSearchChange(e.target.value);
    });
    
    // Keyboard shortcut (Cmd/Ctrl + K)
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Download button
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', handleDownload);
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    backToTopBtn.addEventListener('click', handleBackToTop);
}

// ================================
// Initialization
// ================================

async function init() {
    // Load data
    loadFromLocalStorage();
    
    // Load channels (try to load full data, fallback to sample)
    AppState.channels = await loadFullChannelData();
    
    // Initial filtering and rendering
    filterChannels();
    render();
    renderFAQ();
    
    // Setup event listeners
    setupEventListeners();
    
    console.log('vSeeBox Channels App Initialized');
    console.log(`Total Channels: ${AppState.channels.length}`);
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
