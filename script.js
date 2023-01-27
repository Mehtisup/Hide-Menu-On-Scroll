<script>
window.onscroll = function() {scrollFunction()};

var menu = window.pageYOffset;

function scrollFunction() {
    var myMenu = window.pageYOffset;

    if (menu > myMenu) {
        document.getElementById("myMenu").style.top = "0"
    } else {
        document.getElementById("myMenu").style.top = "-60px"
    }
    menu = myMenu;
}
</script>
