// import fs from 'fs'
// import path from 'path'

// function fetchData() {
//   return [{ email: 'test1@email.com' }, { email: 'test12@email.com' }]
// }

// const MEMBERS_CACHE_PATH = path.resolve('.members')

// export default async function getData() {
//   let cachedData

//   try {
//     cachedData = JSON.parse(
//       fs.readFileSync(path.join(__dirname, MEMBERS_CACHE_PATH), 'utf8')
//     )
//   } catch (error) {
//     console.log('Cache not initialized')
//   }

//   if (!cachedData) {
//     const data = fetchData()

//     try {
//       fs.writeFileSync(
//         path.join(__dirname, MEMBERS_CACHE_PATH),
//         JSON.stringify(data),
//         'utf8'
//       )
//       console.log('Wrote to cache')
//     } catch (error) {
//       console.log('ERROR WRITING CACHE TO FILE')
//       console.log(error)
//     }

//     cachedData = data
//   }

//   return cachedData
// }