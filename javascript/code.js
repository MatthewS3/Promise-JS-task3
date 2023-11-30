let people = []; // Assume you have an array of people data

    function displayPeople(peopleArray) {
      let resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';

      if (peopleArray.length === 0) {
        resultsDiv.innerHTML = '<p>Name not found.</p>';
        return;
      }

      peopleArray.forEach(person => {
        let personDiv = document.createElement('div');
        personDiv.textContent = person.name;
        resultsDiv.appendChild(personDiv);
      });
    }

    function searchAndDisplay() {
      let searchInput = document.getElementById('searchInput');
      let searchTerm = searchInput.value.toLowerCase();

      if (searchTerm === '') {
        displayPeople(people);
      } else {
        let filteredPeople = people.filter(person =>
          person.name.toLowerCase().includes(searchTerm)
        );
        displayPeople(filteredPeople);
      }
    }

    function toggleSorting() {
      people.reverse(); // Reverse the order of the people array
      searchAndDisplay();
    }

    // Example data - replace this with your own data retrieval logic
    people = [
      { name: 'Zenitsu Agatsuma' },
      { name: 'Tanjiro Kamado' },
      { name: 'Nezuko Kamado' },
      { name: 'Inosuke Hashibira' },
      { name: 'Rengoku Kyojuro' },
      { name: 'Kazuma Sato' },
      { name: 'Miku Nakano' },
      { name: 'Nino Nakano'},
      { name: 'Futaro Uesugi'},
      { name: 'Rimuru Tempest'},
      { name: 'Milim Nava'},
      { name: 'Ais Wallenstein'},
      { name: 'Bell Cranel'},
      { name: ''}

      // Add more people data here
    ];

    // Initial display
    displayPeople(people);

    // Event listeners
    let searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchAndDisplay);