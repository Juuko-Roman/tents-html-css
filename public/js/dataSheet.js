const popup=document.getElementById('popup');
const overlay=document.getElementById('overlay');
function showDataSheet(imageUrl, title, descption) {

  var bigImage=imageUrl;
  var colors="Green and Tan";
  var use="Providing shade for vehicles";
  var measurements="(15*24)ft - (15*23)M";
  // var descption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse possimus, obcaecati doloremque veniam consectetur voluptatum, animi ducimus";
  var rightImage=imageUrl;
  var leftImage=imageUrl;

document.getElementById('description').innerHTML=descption;
document.getElementById('colors').innerHTML=colors;
document.getElementById('measurements').innerHTML=measurements;
document.getElementById('use').innerHTML=use;
document.getElementById('bigImage').src=leftImage;
document.getElementById('leftImage').src=leftImage;
document.getElementById('rightImage').src=rightImage;

  overlay.style.display="block";
  popup.style.display="block";

}
function closeDataSheet(){
  overlay.style.display="none";
  popup.style.display="none";
}