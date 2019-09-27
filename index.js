
document.addEventListener('keydown', (event) => {
	let key = event.key;
	if(key=='ArrowLeft'){
		playground.currentSlide--;
		if(playground.currentSlide<0){
			playground.currentSlide=0;
		}
		console.log(playground.currentSlide);
		return;
	}
	if(key=='ArrowRight'){
		playground.currentSlide++;
		if(playground.currentSlide>19){
			playground.currentSlide=19;
		}
		console.log(playground.currentSlide)
		return;
	}
	if(key=='ArrowUp'){
		sizeAdjust.zoom=sizeAdjust.zoom+0.1;
		console.log(sizeAdjust.zoom);
		return;
	}
	if(key=='ArrowDown'){
		sizeAdjust.zoom=sizeAdjust.zoom-0.1;
		console.log(sizeAdjust.zoom);
		return;
	}
});

const playground = new Vue({
	el: '#playground',
	data:{
		currentSlide:0,
	},
	computed: {
		windowShow:function(){return this.currentSlide>=2},
		page1:function(){return this.currentSlide===1},
		page2:function(){return this.currentSlide===2},
		page3:function(){return this.currentSlide===3},
		page4:function(){return this.currentSlide===4},
		page5:function(){return this.currentSlide===5},
		page6:function(){return this.currentSlide===6},
		page7:function(){return this.currentSlide===7},
		page8:function(){return this.currentSlide===8},
		page9:function(){return this.currentSlide===9},
		page10:function(){return this.currentSlide===10},
		page11:function(){return this.currentSlide===11},
		page12:function(){return this.currentSlide===12},
		page13:function(){return this.currentSlide===13},
		page14:function(){return this.currentSlide===14},
		page15:function(){return this.currentSlide===15},
		page16:function(){return this.currentSlide===16},
		page17:function(){return this.currentSlide===17},
		page18:function(){return this.currentSlide===18},
		page19:function(){return this.currentSlide===19},
		page20:function(){return this.currentSlide===20},
	},
})

const sizeAdjust = new Vue({
	el: '#sizeAdjust',
	data:{
		zoom:1
	}
})
