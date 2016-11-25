import { Component } from '@angular/core';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'timeline-cmp',
	templateUrl: 'timeline.html',
	styleUrls: ['timeline.css'],
})
export class TimelineComponent { }

@Component({
	moduleId: module.id,
	selector: 'chat-cmp',
	templateUrl: 'chat.html'
})
export class ChatComponent {}

@Component({
	moduleId: module.id,
	selector: 'notifications-cmp',
	templateUrl: 'notifications.html'
})
export class NotificationComponent { }

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html'
})

export class HomeComponent {
	/* Carousel Variable */
	myInterval: number = 5000;
	index: number = 0;
	slides: Array<any> = [];
	imgUrl: Array<any> = [
		`http://conexaoeticacarrefour.com.br/images/ouvidoria.jpg`,
		`http://conexaoeticacarrefour.com.br/images/22.png`,
		`http://conexaoeticacarrefour.com.br/images/1.png`
	];
	/* END */
	/* Alert component */
	public alerts:Array<Object> = [
	   {
	     type: 'danger',
	     msg: 'Oh snap! Change a few things up and try submitting again.'
	   },
	   {
	     type: 'success',
	     msg: 'Well done! You successfully read this important alert message.',
	     closable: true
	   }
	 ];

	 public closeAlert(i:number):void {
	   this.alerts.splice(i, 1);
	 }
	/* END*/

	constructor() {
		for (let i = 0; i < 3; i++) {
			this.addSlide();
		}
	}

	/* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${[' ', ' ', '  ', '  '][this.slides.length % 3]}
      			${['', ' ', '  ', '  '][this.slides.length % 3]}`
		});
	}
	/* END */
}
