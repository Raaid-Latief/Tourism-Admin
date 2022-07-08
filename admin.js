let properties = JSON.parse(localStorage.getItem('property')) ? 
JSON.parse(localStorage.getItem('property')) : [{
    id: "1",
    image: "https://i.postimg.cc/W1grGtXk/house-1836070-1920.jpg",
    title: "Modern House",
    type: "House",
    location: "Crawford",
    price: "R13 000 pm",
    sqFeet: "4000 sqFt",

},
{
    id: "2",
    image: "https://i.postimg.cc/NGnrZRnX/house-6967908-1920.jpg",
    title: "Forest Hideaway",
    type: "Cottage",
    location: "Tokai",
    price: "R12 00 pm",
    sqFeet: "3200 sqFt",

},
{
    id: "3",
    image: "https://i.postimg.cc/26z48mdB/large-home-389271-1280.jpg",
    title: "Beach House",
    type: "House",
    location: "Strand",
    price: "R17 000 pm",
    sqFeet: "4280 sqFt",

},
{
    id: "4",
    image: "https://i.postimg.cc/3wHGnpRT/interior-2685517-1920.jpg",
    title: "Studio Apartment",
    type: "Apartment",
    location: "CBD",
    price: "R11 000 pm",
    sqFeet: "2670 sqFt",

},
{
    id: "5",
    image: "https://i.postimg.cc/TPjV6hb6/house-1477041-1280.jpg",
    title: "Influencer Mansion",
    type: "House",
    location: "Claremont",
    price: "R21 000 pm",
    sqFeet: "4890 sqFt",

},
{
    id: "6",
    image: "https://i.postimg.cc/PxrwnyhW/house-1867187-1920.jpg",
    title: "Double Story Beachhouse",
    type: "House",
    location: "Strand",
    price: "18 000 pm",
    sqFeet: "4000 sqFt",
  
},
{
    id: "7",
    image: "https://i.postimg.cc/XNp26rZJ/grant-Uhp-YKnq-Zw-E8-unsplash.jpg",
    title: "Antique Apartment",
    type: "Apartment",
    location: "Claremont",
    price: "R12 000 pm",
    sqFeet: "2560 sqFt",

},
{
    id: "8",
    image: "https://i.postimg.cc/k5TBchsj/point3d-commercial-imaging-ltd-Tkpr-Gwyg-O5-Q-unsplash.jpg",
    title: "Modernised Apartment",
    type: "Apartment",
    location: "CBD",
    price: "R14 000 pm",
    sqFeet: "2340 sqFt",

},
{
    id: "9",
    image: "https://i.postimg.cc/8zBFFC6g/med-badr-chemmaoui-xt-Dp-Xi-a-YQ-unsplash.jpg",
    title: "Green Apartment",
    type: "Apartment",
    location: "Crawford",
    price: "R13 000 pm",
    sqFeet: "2800 sqFt",

},
{
    id: "10",
    image: "https://i.postimg.cc/13vT3BR4/abbilyn-zavgorodniaia-u-OYak90r4-L0-unsplash.jpg",
    title: "Hobbit House",
    type: "Cottage",
    location: "Claremont",
    price: "R16 000 pm",
    sqFeet: "2970 sqFt",
  
  },
  {
    id: "11",
    image: "https://i.postimg.cc/D01HfKmK/stephen-leonardi-XKIO6-Zg-CObo-unsplash.jpg",
    title: "Mountain Mansion",
    type: "Mansion",
    location: "Tokai",
    price: "R21 000 pm",
    sqFeet: "4450 sqFt",
  
  },
  {
    id: "12",
    image: "https://i.postimg.cc/j2N0W7gm/webaliser-TPTXZd9m-Oo-unsplash.jpg",
    title: "City Mansion",
    type: "Mansion",
    location: "CBD",
    price: "R18 000 pm",
    sqFeet: "3840 sqFt",
  },  
];

// 
// Display array on screen




function showProperties() {
    const forSaleContainer = document.getElementById("boxes");
    forSaleContainer.innerHTML = "";
    
    properties.forEach((property, index) => {
        forSaleContainer.innerHTML += `
        <div class="container">
        <div>
        <p class="outset py-3">
            <div class="row">
               
                <div class="col-lg-1" >
                    <h4>${property.id}</h4>
                </div>
                
                <div class="col-lg-1">
                    <img>${property.image}</img>
                </div>
                <div class="col-lg-1">
                    <h4>${property.title}</h4>
                </div>
                
                <div class="col-lg-1">
                    <h4>${property.type}</h4>
                </div>
                
                <div class="col-lg-1">
                    <h4> ${property.location}</h4>
                </div>
              
                <div class="col-lg-1">
                <h4> ${property.price}</h4>
            </div>
                <div class="col-lg-1">
                    <h4>${property.sqFeet}</h4>
                </div>
              
                <div class="col-lg-5">
                <div class="row">
                <h2 class="col-lg-6">
                <button class="button"><i class="fa-solid fa-pen-to-square"></i></button>
                </h2>
                <h2 class="col-lg-5">
     
                   <button class="button" onclick="deleteProperty(${index})"><i class="fa-solid fa-trash"></i></button>
                </h2>
            </div>
            </div>
            </div>
        </p>
    </div>
    </div>
            `;

    })
};
  showProperties
  ();

//   CRUD Functionality

// Add task
function addProperty(){
    // Fetch data from the form
    properties.push(
        {
            id: properties.length + 1,
            image: document.querySelector('#image').value,
            title: document.querySelector('#title').value,
            type:  document.querySelector('#type').value,
            location:  document.querySelector('#location').value,
            price:  document.querySelector('#price').value,
            sqFeet:  document.querySelector('#size').value,
        }
    );
    // Save to local storage
    localStorage.setItem('property', JSON.stringify(properties));
    //
    showProperties();
}
// delete function
function deleteProperty(id) {
    if(id > -1) {
        properties.splice(id, 1);
    }
    localStorage.setItem('property', JSON.stringify(properties));
    showProperties();
}
// edit function
// function editPropert(id) {
//     if(id > -1) {
//       let updatevalue = {
//         id: properties.length + 1,
//         image: document.querySelector('#image').value,
//         title: document.querySelector('#title').value,
//         type:  document.querySelector('#type').value,
//         location:  document.querySelector('#location').value,
//         price:  document.querySelector('#price').value,
//         sqFeet:  document.querySelector('#size').value,
//     }
//         properties.splice(id, 1, updatevalue);
//     }
//     localStorage.setItem('property', JSON.stringify(properties));
//     showProperties();
// })


// Navbar

function toggleNav() {
    document.querySelector('#navbar').classList.toggle("active");
  }
  