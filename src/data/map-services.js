const accessToken = 'pk.eyJ1IjoiZXZhbnl5IiwiYSI6ImNraWY0cTBidTA2c3EycnMxYmt4cGlyeGQifQ.ZJo6coCBNne5tnpZvRuYUg';

export const mapServices = [
  {
    name: 'OpenStreetMap',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    name: 'Mapbox',
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    url: `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`
  }
];
