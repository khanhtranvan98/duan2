// alert('ok');
document.addEventListener('DOMContentLoaded', function(){
    var searchIcon = document.getElementById('test');
    var searchForm = document.getElementById('test1');

  searchIcon.addEventListener('click', function(){

    if(searchForm.style.display === 'block'){
        searchForm.style.display = 'none';
    }else{
        searchForm.style.display = 'block';
    }
  });
});