document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('pinkButton').onclick = switchPink;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
  document.getElementById('grayButton').style.boxShadow = 'none';
  document.getElementById('whiteButton').style.boxShadow = '5px 5px 5px black';
  document.getElementById('pinkButton').style.boxShadow = '5px 5px 5px black';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
   document.getElementById('grayButton').style.boxShadow = '5px 5px 5px black';
  document.getElementById('whiteButton').style.boxShadow = 'none';
  document.getElementById('pinkButton').style.boxShadow = '5px 5px 5px black';
}

function switchPink() {
	document.body.style.backgroundColor = 'lightpink';
	document.body.style.color = 'hotpink';
	document.getElementById('grayButton').style.boxShadow = '5px 5px 5px black';
  document.getElementById('whiteButton').style.boxShadow = '5px 5px 5px black';
  document.getElementById('pinkButton').style.boxShadow = 'none';
}