/* CSS Expirment JS */
/*Requires JQUERY */
csejs();
function csejs(){
	$('body').append(`<div id="contextMenu" class="context-menu" style="display: none"><ul class="menu" id="menu"> </ul></div> `);
	document.onclick = hideMenu;
	document.oncontextmenu = rightClick;

	function hideMenu() {
	    document.getElementById("contextMenu")
	        .style.display = "none"
	}

	function rightClick(e) {
	    e.preventDefault();

	    if (document.getElementById("contextMenu").style.display == "block") {
	        hideMenu();
	    } else {
	        var menu = document.getElementById("contextMenu")
	        menu.style.display = 'block';
	        menu.style.left = e.pageX + "px";
	        menu.style.top = e.pageY + "px";
	    }
	}

	function addMenu(data){
		$('#menu').append(`
			<li class="inspt"><a href="#" onclick="${data.onclick}"><i class="${data.icon}" aria-hidden="true"></i> ${data.title}</a></li>  
		`);
	}

	//Default Menus
	addMenu({ onclick:"window.location.reload()",icon:"fa fa-refresh",title:"Reload/Refresh Webpage" });
	addMenu({ onclick:"csejs()",icon:"fa fa-refresh",title:"Reload JS" });
}

function hideAlert(id){
	$('#alert-'+id).hide();
}
/* END JS*/