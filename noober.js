window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Pick the ride class and modify the content
  let pageConentElement = document.querySelector(`.rides`)
  
  // Empty the rides div element
  pageConentElement.innerHTML = ``

  // Fill in actual data with design mockup
  for (i=0; i<json.length;i++) { 
    let ride = json[i]

  //Determine car type
    if (ride.purpleRequested == true) {
      // If the rider has requested the luxury "Purple" level of service, i.e. purpleRequested, display "Noober Purple". Display "Noober Purple" as the level of service.
      // If a Noober Purple has been requested, it doesn't matter the number of passengers.
      cartype = `Noober Purple`
    } else if (ride.purpleRequested == false && ride.numberPassenger > 3) {
      // If the numberOfPassengers in a single ride request is greater than 3, we'll need to upgrade to a larger car. Display "Noober XL" as the level of service.
      cartype = `Noober XL`
    } else {
      // Anything else is the normal level of service
      cartype = `Noober X`
    }

    // Loop in datapoint in right position in structure
    pageConentElement.insertAdjacentHTML(
      `beforeend`,
      `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span> ${cartype} </span>
        </h1>
  
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1"> ${ride.passengerDetails.first} ${ride.passengerDetails.last} </h2>
            <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride.numberOfPassengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride.pickupLocation.address}</p>
            <p>${ride.pickupLocation.city} ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride.dropoffLocation.address}</p>
            <p>${ride.dropoffLocation.city} ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
          </div>
        </div>
      </div>    
      `
    )
    
  }
  // 🔥 YOUR CODE ENDS HERE 🔥

  })  



