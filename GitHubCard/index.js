/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

//  * Step 8 Setup axios to access github user data

const cards = document.querySelector('.cards')

axios.get('https://api.github.com/users/gmgower')
.then(ghData => {
  console.log('gmgower Github', ghData)
  // ghUserCard(ghData.data)
  cards.appendChild(ghUserCard(ghData.data))
})
.catch(error => {
  console.log('Github user not available.', error)
})

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach((ghUserNames) => {
  axios.get(`https://api.github.com/users/${ghUserNames}`)
  .then(ghData => {
  cards.appendChild(ghUserCard(ghData.data))
  }).catch(error => {
    console.log('Github users not available.', error)
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

// Step 4 a. Check if elements are appendChild to parent element in DOM
          // b. c&p code to use on axios

// const cards = document.querySelector('.cards')
// cards.appendChild(ghUserCard())

function ghUserCard (ghUserObj){
  // * Step 1 define elements
  const card = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUserName = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardProfileLink = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  //  * Step 3 Setup structure of elements
  card.appendChild(cardImg)
  card.appendChild(cardInfo)

  cardProfile.appendChild(cardProfileLink)

  cardInfo.appendChild(cardName)
  cardInfo.appendChild(cardUserName)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)

  // * Step 5 Setup class name
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  cardName.classList.add('name')
  cardUserName.classList.add('username')
  
   // * Step 6 setup attr.
  cardImg.src = ghUserObj.avatar_url
  cardImg.alt = 'Github placeholder image.'
  cardProfileLink.textContent = ghUserObj.html_url
  cardProfileLink.href =  ghUserObj.html_url

//  * Step 7 Setup text content
cardName.textContent = ghUserObj.name
cardUserName.textContent = ghUserObj.login
cardLocation.textContent = `Location: ${ghUserObj.location}` 
cardProfile.textContent = `Profile: ${ghUserObj.url}`
cardFollowers.textContent = `Followers: ${ghUserObj.followers}` 
cardFollowing.textContent = `Following: ${ghUserObj.following}`
cardBio.textContent = `Bio: ${ghUserObj.bio}`

  // * Step 2 return card
  return card
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
