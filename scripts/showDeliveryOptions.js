const express = document.getElementById('express');
const pickup = document.getElementById('pickup');

const streetAddress = document.getElementById('streetAddress');
const orderComment = document.getElementById('orderComment');
const pickupPoint = document.getElementById('pickupPoint');

function showExpress() {
  const streetAddress = document.getElementById('streetAddress');
  const orderComment = document.getElementById('orderComment');
  const pickupPoint = document.getElementById('pickupPoint');

  streetAddress.style.display = 'flex';
  orderComment.style.display = 'flex';
  pickupPoint.style.display = 'none';

  //   streetAddress.style.borderColor = 'red';
  //   orderComment.style.borderColor = 'red';
  //   pickupPoint.style.borderColor = 'green';
}

function showPickup() {
  const streetAddress = document.getElementById('streetAddress');
  const orderComment = document.getElementById('orderComment');
  const pickupPoint = document.getElementById('pickupPoint');

  streetAddress.style.display = 'none';
  orderComment.style.display = 'none';
  pickupPoint.style.display = 'flex';

  //   streetAddress.style.borderColor = 'green';
  //   orderComment.style.borderColor = 'green';
  //   pickupPoint.style.borderColor = 'red';
}

function showPickupChoose() {
  const pickupPointList = document.getElementById('pickupPointList');
  const pickupChooseValue = pickupPointList.value;
  const pickupChooseIndex =
    pickupPointList.options[pickupPointList.selectedIndex].index;
  const pickupChooseText =
    pickupPointList.options[pickupPointList.selectedIndex].text;

  // console.log(pickupChooseValue);
  // console.log(pickupChooseIndex);
  // console.log(pickupChooseText);

  const pickupChoose = document.getElementById('pickupChoose');
  //pickupChoose.textContent = pickupChooseText;
  pickupChoose.textContent = points[pickupChooseIndex - 1].address;

  //console.log(points[pickupChooseIndex - 1].address);
}
