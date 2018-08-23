var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
var max=0;
var bg;
var c;
var f=0;
function remove() {
    document.getElementById("list").style.display = "none";
}
var icon = document.getElementsByClassName("icon");
icon[0].addEventListener("click", displayNone);

function displayNone(){
    document.getElementById("search").value = "";
}
var itr=0;
function checkList() {
    max=0;
    itr=0;
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
        var flag=0;
        var fCount = 0;
        for (var i = 0; i < names.length; i++) {
            var li = document.createElement('li');
            var sentence = names[i];
            sentence = sentence.toLowerCase();
            searchText = searchText.toString().toLowerCase();
            if (sentence.indexOf(searchText.toString()) !== -1) {
                flag3 = 1;
                count++;
                flag=1;
                fCount++;
                if(flag==1 && fCount==1){
                    li.style.backgroundColor = "#002266";
                    li.style.color = "#CCFFFF";
                }
                else{
                    li.style.backgroundColor = "#111109"
                    li.style.color = "#FFFFFF";
                }
                li.style.border = "5px solid #CCFFFF";
                li.style.height = "28px";
                li.setAttribute("class","li-items");
                flag2 = 0;
                ul.appendChild(li);
                max++;
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

document.onkeydown = function(e){
    if(e.keyCode===40){
        itr++;
        var li = document.getElementsByClassName("li-items")[itr];
        console.log("down");
        console.log(itr);
        if(itr>=max){
            itr=max-1;
        }
        if(li==null){
            itr=max-1;
        }
        else{
            var x = li.innerHTML;
            console.log(x);
            bg = li.previousSibling.style.backgroundColor;
            li.previousSibling.style.backgroundColor = li.style.backgroundColor;
            li.style.backgroundColor = bg;
            c = li.previousSibling.style.color;
            li.previousSibling.style.color = li.style.color;
            li.style.color = c;
        }
        if(itr>4){
            document.getElementById("list").scrollBy(0,38);
        }
    }
    else if(e.keyCode === 38){
        itr--;
        var li = document.getElementsByClassName("li-items")[itr];
        console.log("up");
        console.log(itr);
        if(li==null){
            itr=0;
        }
        else{
            var x = li.innerHTML;
            console.log(x);
            bg = li.nextSibling.style.backgroundColor;
            li.nextSibling.style.backgroundColor = li.style.backgroundColor;
            li.style.backgroundColor = bg;
            c = li.nextSibling.style.color;
            li.nextSibling.style.color = li.style.color;
            li.style.color = c;
        }
        if(itr<max-4){
            document.getElementById("list").scrollBy(0,-38);
        }
    }
    else if(e.keyCode === 13){
        var li = document.getElementsByClassName("li-items")[itr];
        addValue(li.innerHTML);
    }
}
function addValue(value) {
    document.getElementById("search").value = value;
    document.getElementById("list").style.display = "none";
}
