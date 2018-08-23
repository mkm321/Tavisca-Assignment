var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];

function remove() {
    document.getElementById("list").style.display = "none";
}
var icon = document.getElementsByClassName("icon");
icon[0].addEventListener("click", displayNone);

function displayNone(){
    document.getElementById("search").value = "";
}

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
        names.sort();
        var flag2 = 0;
        var flag3 = 0;
        var count=0;
        for (var i = 0; i < names.length; i++) {
            var li = document.createElement('li');
            var sentence = names[i];
            sentence = sentence.toLowerCase();
            searchText = searchText.toString().toLowerCase();
            if (sentence.indexOf(searchText.toString()) !== -1) {
                flag3 = 1;
                count++;
                if (flag2 == 0) {
                    li.style.backgroundColor = "#c2d6d6";
                    li.style.border = "5px solid #CCFFFF";
                    li.style.height = "28px";
                    li.setAttribute("onmouseover","setProperty(this)");
                    li.setAttribute("onmouseleave","setNormal(this,'#c2d6d6','#111109')");
                    flag2 = 1;
                } else {
                    li.style.backgroundColor = "#111109"
                    li.style.color = "#FFFFFF";
                    li.style.border = "5px solid #CCFFFF";
                    li.style.height = "28px";
                    li.setAttribute("onmouseover","setProperty(this)");
                    li.setAttribute("onmouseleave","setNormal(this,'#111109','#FFFFFF')");
                    flag2 = 0;
                }
                ul.appendChild(li);
                li.innerHTML = li.innerHTML + names[i];
                if(count>5){
                    listRef.style.overflowY = "scroll";
                }
                else{
                    listRef.style.overflow = "hidden";
                }
            }
            li.setAttribute("onclick", "addValue(this.innerHTML)");
        }
        if (flag3 == 0) {
            document.getElementById("list").style.display = "inline-block";
            var li = document.createElement("li");
            ul.appendChild(li);
            li.style.backgroundColor = "#002266";
            li.style.color = "#CCFFFF";
            li.style.border = "5px solid #CCFFFF";
            li.style.height = "28px";
            li.innerHTML = "No Data Found!";
        }
    }
}
function setNormal(li,BackgroundColor,Color){
    li.style.backgroundColor = BackgroundColor;
    li.style.color = Color;
}
function setProperty(li){
    li.style.backgroundColor = "#002266";
    li.style.color = "#CCFFFF";
}
function addValue(value) {
    document.getElementById("search").value = value;
    document.getElementById("list").style.display = "none";
}
