document.getElementById('vehicle-search-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const make = document.getElementById('make').value;
  const model = document.getElementById('model').value;
  const year = document.getElementById('year').value;
  const budget = document.getElementById('budget').value;
  const fuelType = document.getElementById('fuelType').value;
  const transmission = document.getElementById('transmission').value;
  const sortBy = document.getElementById('sortBy').value;
  const Mileage = document.getElementById('Mileage').value;

  fetch('/vehicles')
      .then(response => response.json())
      .then(vehicles => {
          let filteredResults = vehicles.filter(vehicle => {
              return (!make || vehicle.make.toLowerCase().includes(make.toLowerCase())) &&
                     (!model || vehicle.model.toLowerCase().includes(model.toLowerCase())) &&
                     (!year || vehicle.year >= year) &&
                     (!budget || vehicle.price <= budget) &&
                     (!fuelType || vehicle.fuelType === fuelType) &&
                     (!transmission || vehicle.transmission === transmission);
          });

          if (sortBy === 'price') {
              filteredResults.sort((a, b) => a.price - b.price);
          } else if (sortBy === 'year') {
              filteredResults.sort((a, b) => b.year - a.year);
          }

          const resultDiv = document.getElementById('vehicle-list');
          resultDiv.innerHTML = '';

          if (filteredResults.length > 0) {
              filteredResults.forEach(vehicle => {
                  resultDiv.innerHTML += `
                      <div>
                          <h3>${vehicle.make} ${vehicle.model}</h3>
                          <p>Year: ${vehicle.year}</p>
                          <p>Price: INR ${vehicle.price}</p>
                          <p>Fuel Type: ${vehicle.fuelType}</p>
                          <p>Transmission: ${vehicle.transmission}</p>
                      </div>
                  `;
              });
          } else {
              resultDiv.innerHTML = '<p>No vehicles found matching your criteria.</p>';
          }
      });
});
