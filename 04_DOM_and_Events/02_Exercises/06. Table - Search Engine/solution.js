function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchInput = document.getElementById('searchField');

   function onClick() {
      const searchedString = searchInput.value;
      const tableRowsContainer = Array.from(document.querySelectorAll('tbody tr'))

      tableRowsContainer
         .map((tr) => tr.classList.remove('select'))
      
      tableRowsContainer
         .filter((tr) => tr.textContent.includes(searchedString))
         .forEach((tr) => tr.classList.add('select'))

      searchInput.value = '';
   }

}