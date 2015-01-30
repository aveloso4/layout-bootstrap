'use strict';

angular.module('storeManagerApp')
	.directive('chart', function() {
		return {
            restrict: 'A',
            controller: function ($scope, $attrs) {

				$scope.chart = new CanvasJS.Chart($attrs.id, {
					theme: 'theme2',
					height: 250,
					width: 500,
					backgroundColor: null,
		            animationEnabled: true,
		            axisY: {
		                tickThickness: 0,
		                lineThickness: 0,
		                valueFormatString: " ",
		                gridThickness: 0 ,
		                labelFontFamily: "helvetica"
		            },
		            axisX: {
		                tickThickness: 0,
		                lineThickness: 1,
		                labelFontSize: 15,
		                labelFontColor: "black",
		                labelFontFamily: "helvetica",
		                labelFontWeight: "normal"
		            },
		            data: [
			            {
							indexLabelFontSize: 16,
					        indexLabelFontFamily: "helvetica",
					        indexLabelFontColor: "#999999",
					        indexLabelFontWeight: "normal",
					        indexLabelFontStyle: "normal",
			                type: "bar",
			                dataPoints: [
			                    { y: 15, label: "Missed", color: "#339966", indexLabelFontFamily:"helvetica",indexLabelFontColor:"white", indexLabel:"15           ", indexLabelPlacement: "inside" },
			                    { y: 6, label: "Transferred", color: "#99CC66", indexLabelFontFamily:"helvetica",indexLabelFontColor:"white", indexLabel:"6  ", indexLabelPlacement: "inside" },
			                    { y: 32, label: "Answered", color: "#3399CC", indexLabelFontFamily:"helvetica",indexLabelFontColor:"white", indexLabel:"32                            ", indexLabelPlacement: "inside" },
			                    { y: 78, label: "Incoming", color: "#99CCCC", indexLabelFontFamily:"helvetica",indexLabelFontColor:"white", indexLabel:"78                                                                              ", indexLabelPlacement: "inside" }
			                ]
			            }
		            ]
				});

				$scope.chart.render(); //render the chart for the first time
			}
		};
	});