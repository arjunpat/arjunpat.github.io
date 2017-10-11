const api = '/json-api.json';

function getOrdinalNum(n) {
	return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

$(function() {
	$.ajax({
		type: 'GET',
		url: api,
		success: function(data) {
			var minutes,
				dateNiceFormat,
				d = new Date(),
				currentMilitaryTime,
				currentI,
				daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
				monthsOfTheYear = ['January','February','March','April','May','June','July','August','September','October','November','December'];
			dateNiceFormat = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
			$('#today-date').css({'width': '', 'background-color': 'transparent', 'margin-bottom': ''}).removeClass('not-loaded').text(daysOfTheWeek[d.getDay()] + ', ' + monthsOfTheYear[d.getMonth()] + ' ' + getOrdinalNum(d.getDate()));

			if (d.getMinutes() < 10) {
				minutes = '0' + d.getMinutes();
			} else {
				minutes = d.getMinutes();
			}
			console.log(dateNiceFormat);
			currentMilitaryTime = d.getHours() + ':' + minutes;

			if (data.days[dateNiceFormat]) {

				if (data.days[dateNiceFormat].type) {
					data.days[dateNiceFormat].schedule = data.presets[data.days[dateNiceFormat].type].schedule;
					if (!data.days[dateNiceFormat].name) {
						data.days[dateNiceFormat].name = data.presets[data.days[dateNiceFormat].type].name;
					}
				}

				$('#type-of-day').css({'width': '', 'background-color': 'transparent'}).removeClass('not-loaded').text(data.days[dateNiceFormat].name);

				for (i in data.days[dateNiceFormat].schedule) {

					var fromThisTime = dateNiceFormat + ' ' + data.days[dateNiceFormat].schedule[i].from + ':00';
					var toThisTime = dateNiceFormat + ' ' + data.days[dateNiceFormat].schedule[i].to + ':00';
					var currentDateParseTime = Date.parse(dateNiceFormat + ' ' + currentMilitaryTime + ':00');
					
					if ((Date.parse(fromThisTime) <= currentDateParseTime) && (Date.parse(toThisTime) >= currentDateParseTime)) {
						currentI = i;
						var lastAction = Date.parse(fromThisTime);
						var nextAction = Date.parse(toThisTime);
						var totalTimeOfAction = nextAction - lastAction;
						var progressBar = 0;
						var intervalLength = 0;
						if (typeof(data.days[dateNiceFormat].schedule[currentI].name) == 'number') {
							data.days[dateNiceFormat].schedule[currentI].name = getOrdinalNum(data.days[dateNiceFormat].schedule[currentI].name) + ' Period';
						}
						$('#current-period').css('width', '').removeClass('not-loaded').text(data.days[dateNiceFormat].schedule[currentI].name);
						
						var x = setInterval(function() {

							var now = new Date().getTime();
							var distance = nextAction - now;

							var percentDoneWith = Math.floor(100 * (1 - (distance / totalTimeOfAction)));

							var days = Math.floor(distance / (1000 * 60 * 60 * 24));
							var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days * 24);
							var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
							var seconds = Math.floor((distance % (1000 * 60)) / 1000);

							if (seconds < 0) {
								currentI++;
								count = 0;
								$('#progress-bar').animate({width:  "0%"}, 2000);
								try {
									fromThisTime = dateNiceFormat + ' ' + data.days[dateNiceFormat].schedule[currentI].from + ':00';
									toThisTime = dateNiceFormat + ' ' + data.days[dateNiceFormat].schedule[currentI].to + ':00';
									lastAction = Date.parse(fromThisTime);
									nextAction = Date.parse(toThisTime);
									totalTimeOfAction = nextAction - lastAction;
									progressBar = 0;
									if (typeof(data.days[dateNiceFormat].schedule[currentI].name) == 'number') {
										data.days[dateNiceFormat].schedule[currentI].name = getOrdinalNum(data.days[dateNiceFormat].schedule[currentI].name) + ' Period';
									}
									$('#current-period').text(data.days[dateNiceFormat].schedule[currentI].name);
								} catch (e) {
									$('#progress-bar-text').text('Nothin\'');
									$('#current-period').text("You're free!");
									count++;
									if (count > 300) {
										location.reload();
										count = 0;
									}
								}
							} else {
								if (seconds < 10) {
									seconds = '0' + seconds;
								}
								if (minutes < 10 && hours != 0) {
									minutes = '0' + minutes;
								}

								if (hours != 0) {
									html = hours + ':' + minutes + ':' + seconds;
								} else {
									html = minutes + ':' + seconds;
								}

								$('#progress-bar-text').text(html);
								if (progressBar != percentDoneWith) {
									$('#progress-bar').animate({width: percentDoneWith + "%"}, 2000);
									progressBar = percentDoneWith;
								}

								document.title = html + ' left of ' + data.days[dateNiceFormat].schedule[currentI].name;
							}

						}, intervalLength);
						intervalLength = 1000;
					}
				}
			}
			if (!x) {
				$('#progress-bar-text').text('Nothin\'');
				$('#current-period').css('width', '').removeClass('not-loaded').text("You're free!");
			}
		}
	});
});