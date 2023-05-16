const tabs = document.querySelectorAll('.tabheader__item');
const tabcontents = document.querySelectorAll('.tabcontent');
const tabsParent = document.querySelector('.tabheader__items');


function hideTabs() {
	tabs.forEach((item)=>{
		item.classList.remove("tabheader__item_active")
	})
	tabcontents.forEach((item)=>{
		item.classList.add("hide")
	});
}



function showTabs(i=0) {
	tabs[i].classList.add("tabheader__item_active");
	tabcontents[i].classList.remove("hide", "fade");
	tabcontents[i].classList.add("show", "fade");
	
}

hideTabs();
showTabs()

tabsParent.addEventListener('click', (e)=>{
	const target = e.target;

	if (target.classList.contains('tabheader__item')) {
		tabs.forEach((item, index)=>{
			if(target == item){
				console.log(index);
				hideTabs();
         showTabs(index)
			}
		});
	}
})

