// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'blah';

const upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
  return customerName;
};

const setBestCustomer = () => {
  bestCustomer = 'not bob';
  return bestCustomer;
};

const overwriteBestCustomer = () => {
  bestCustomer = 'maybe bob';
  return bestCustomer;
};


const changeLeastFavoriteCustomer = () => {
  leastFavoriteCustomer = 'someone else';
  console.log(leastFavoriteCustomer);
  return leastFavoriteCustomer;
};
