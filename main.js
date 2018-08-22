var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];

function checkList() {
    document.getElementById("list").style.display = "none";
    var listRef = document.getElementById("list");
    while (listRef.firstChild) {
        listRef.removeChild(listRef.firstChild);
    }
    document.getElementById("list").style.display = "inline-block";
    var ul = document.createElement('ul');
    ul.style.listStyle = "none";
    listRef.appendChild(ul);
    var searchText = document.getElementById("search").value;
    if (searchText.toString() == "") {
        document.getElementById("list").style.display = "none";
    } else {
        for (var i = 0; i < names.length; i++) {
            var sentence = names[i];
            console.log(sentence);
            console.log(searchText.toString());
            if (sentence.indexOf(searchText.toString()) !== -1) {
                var li = document.createElement('li');
                ul.appendChild(li);
                li.innerHTML = li.innerHTML + sentence;
            }
        }
    }
}