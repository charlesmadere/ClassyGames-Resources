function measureBoard()
{
	var board = document.getElementById("board");
	var boardWidth = board.offsetWidth;
	board.style.height = boardWidth + "px";

	var rows = board.childNodes;
	var rowHeight = boardWidth / 8;

	for (var i = 0; i < rows.length; ++i)
	{
		var row = rows[i];

		if (row.className == "row")
		{
			row.style.height = rowHeight + "px";
			var positions = row.childNodes;

			for (var j = 0; j < positions.length; ++j)
			{
				var position = positions[j];
				var piece = position.childNodes;

				for (var k = 0; k < piece.length; ++k)
				{
					var pieceImage = piece[k];

					if (pieceImage.tagName == "IMG")
					{
						resizePieceImage(pieceImage, rowHeight);
					}
				}
			}
		}
	}
}


function showPositionInfo(position)
{
	var x = position.getAttribute("data-x");
	var y = position.getAttribute("data-y");
	var textToShow = "x: " + x + ", y: " + y;

	var positionInfo = document.getElementById("positionInfo");
	positionInfo.innerHTML = textToShow;
	positionInfo.style.display = "block";
}
