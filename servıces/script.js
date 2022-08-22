let searchable = [
    'ASTHMA TREATMENT',
    'DIABETES TREATMENT',
    'CANCER TREATMENT',
    'BRAIN AND NERVE SURGERY',
    'HEART SURGERY',
    'PLASTIC SURGERY',
    'ACIBADEM HOSPİTAL',
    'MEMORİAL HOSPİTALİ',
    'MEDİCAL PARK HOSPİTAL',
    'MEDİKAL PARK HOSPİTAL',
    'BHT HOSPİTAL',
    'MEDİCANA HOSPİTAL',
    'LİV HOSPİTAL',
    
   

  ];
  
  const searchInput = document.getElementById('search');
  const searchWrapper = document.querySelector('.wrapper');
  const resultsWrapper = document.querySelector('.results');
  
  searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
      results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    renderResults(results);
  });
  
  function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li>${item}</li>`;
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  }
  