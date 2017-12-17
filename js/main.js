$(document).ready(function() {
	//declaring arrys representing pegs
	const start = [5, 4, 3, 2, 1]
	const middle = []
	const end = []

	//currently selected value from array
	let temporalFrist = null
	let temporalSecond = null

	//DOM element
	let selectedBlock = null

	//moves tracker
	let counter = 0

	//time
	let time = 0
	let onStart = true

	function timeStamp() {
		return Math.floor(Date.now() / 1000)
	}

	//instructions toggle

	function toggleView() {
		$(".instructions").hide()
	}
	toggleView()

	$(".bttn").click(function(e) {
		e.preventDefault
		if ($(".instructions").is(":hidden")) {
			$(".instructions").show()
			$(".bttn").css("color", "#ff5842")
		} else if ($(".instructions").is(":visible")) {
			$(".instructions").hide()
			$(".bttn").css("color", "#000000")
		}
	})

	//click event
	$(".peg").click(function(e) {
		//things that I need only to happen once for the round of game
		$("span, .bttn").hide()

		if (onStart) {
			$(".moves").text(`MIN 31 MOVES`)
			timeStart = timeStamp()
			onStart = false
			console.log(timeStart)
		}

		e.preventDefault()

		//checking if this is the click no.1
		if (temporalFrist === null) {
			//checking what peg was clicked
			//getting value from array for selection
			//selecting the function to remove that vale from inital array if move happens
			if ($(this).attr("class") == "peg start") {
				temporalFrist = start[start.length - 1]
				popFirst = function() {
					start.pop()
				}
				selectedBlock = $(this)
					.children()
					.last()
				selectedBlock.css("margin-bottom", "auto")
				console.log(e)
			}

			if ($(this).attr("class") == "peg middle") {
				temporalFrist = middle[middle.length - 1]
				popFirst = function() {
					middle.pop()
				}
				selectedBlock = $(this)
					.children()
					.last()
				selectedBlock.css("margin-bottom", "auto")
			}

			if ($(this).attr("class") == "peg end") {
				temporalFrist = end[end.length - 1]
				popFirst = function() {
					end.pop()
				}
				selectedBlock = $(this)
					.children()
					.last()
				selectedBlock.css("margin-bottom", "auto")
			}
		} else if (temporalFrist !== null && temporalSecond === null) {
			//checking condition for the second click
			//checking clicked peg and taking its value from the array representation of it
			//selectin function that will add new element to the array of second click
			if ($(this).attr("class") == "peg start") {
				temporalSecond = start[start.length - 1]
				pushSecond = function() {
					start.push(temporalFrist)
				}
			}

			if ($(this).attr("class") == "peg middle") {
				temporalSecond = middle[middle.length - 1]
				pushSecond = function() {
					middle.push(temporalFrist)
				}
			}

			if ($(this).attr("class") == "peg end") {
				temporalSecond = end[end.length - 1]
				pushSecond = function() {
					end.push(temporalFrist)
				}
			}

			//two if statements, move happening+game-end check, move not happening

			if (
				temporalFrist < temporalSecond ||
				temporalSecond === 0 ||
				temporalSecond === null ||
				temporalSecond === undefined
			) {
				$(this).append(selectedBlock)
				selectedBlock.css("margin-bottom", "inherit")
				//methods setting the values in arrays
				popFirst()
				pushSecond()

				//end of game conditon+elapsed time
				if (end.length === 5) {
					timeEnd = timeStamp()
					time = timeEnd - timeStart
					$(".moves").text(`${counter} MOVES IN ${time} SEC`)
					return
				}

				//reseting the values if the move has happened, move display

				temporalFrist = null
				temporalSecond = null
				counter++

				$(".moves").text(`${counter}`)
			}

			//move not happening
			if (temporalFrist >= temporalSecond) {
				selectedBlock.css("margin-bottom", "inherit")

				selectedBlock = null
				temporalFrist = null
				temporalSecond = null
				return
			}
		}
	})
})
