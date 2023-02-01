document.getElementById("mobile").onClick = "abc"
function abc() {
	document.getElementById("navbar").style.right = "-100px";
}
	




document.querySelector("#cutbutten").onClick = "abc"
function xyz() {
	document.querySelector("#navbar").style.right = "-400px";
	

}


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
	section.forEach(sec =>
		{
			let top = window.scrollY;
			let offset = sec.offsetTop - 200;
			let height = sec.offserHeight;
			let id = sec.getAttribute('id');
			if(top + 500 >= offset && top + 500 < offset + height)
			{
				    navLinks.forEach(links =>{
					links.classlist.remove('active');
				   document.querySelector('nav a[href* =' + id + ']').classList.add('active');
				});
				
			};
		});
};