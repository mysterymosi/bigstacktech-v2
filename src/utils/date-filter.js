import Vue from "vue";

const months = [
  "Jauary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const dateFilter = (value) => {
  return formatDate(value);
};

function formatDate(inputDate) {
  const extDate = inputDate.slice(0, 10);
  const dateArr = extDate.split("-");
  const year = dateArr[0];
  const day = dateArr[2];
  const month = +dateArr[1] - 1;

  const date = months[month] + " " + day + ", " + year;
  return date;
}

Vue.filter("dateFilter", dateFilter);
