document.addEventListener("DOMContentLoaded", function() {

	var bam2=document.getElementById('button2')
	var bam3=document.getElementById('button3')
	var bam4=document.getElementById('button4')
	var bam5=document.getElementById('button5')
	var bam=document.getElementById('button1');
	bam.onclick=function(event){
		event.preventDefault();
		var danhsach=$(this).data('all')
		console.log(danhsach);
		$('.sapxepanh ul li').each(function(){
			if ($(this).hasClass(danhsach)) {
				$(this).show(300);
				console.log('ra roi')
			}
			else{
				$(this).hide(300);
				console.log('xoa roi')
			}
		});}

bam2.onclick=function(event){
event.preventDefault();
		var danhsach=$(this).data('all')
		console.log(danhsach);
		$('.sapxepanh ul li').each(function(){
			if ($(this).hasClass(danhsach)) {
				$(this).show(300);
				console.log('ra roi')
			}
			else{
				$(this).hide(300);
				console.log('xoa roi')
			}
		});}

bam3.onclick=function(event){
event.preventDefault();
		var danhsach=$(this).data('all')
		console.log(danhsach);
		$('.sapxepanh ul li').each(function(){
			if ($(this).hasClass(danhsach)) {
				$(this).show(300);
				console.log('ra roi')
			}
			else{
				$(this).hide(300);
				console.log('xoa roi')
			}
		});}

bam4.onclick=function(event){
event.preventDefault();
		var danhsach=$(this).data('all')
		console.log(danhsach);
		$('.sapxepanh ul li').each(function(){
			if ($(this).hasClass(danhsach)) {
				$(this).show(300);
				console.log('ra roi')
			}
			else{
				$(this).hide(300);
				console.log('xoa roi')
			}

		});

	}
bam5.onclick=function(event){
event.preventDefault();
		var danhsach=$(this).data('all')
		console.log(danhsach);
		$('.sapxepanh ul li').each(function(){
			if ($(this).hasClass(danhsach)) {
				$(this).show(300);
				console.log('ra roi')
			}
			else{
				$(this).hide(300);
				console.log('xoa roi')
			}
		});
	}

return false;
		


},false)