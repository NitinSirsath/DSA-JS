const transactions = [
  { id: "t1", userId: "u1", amount: "100", currency: "INR", status: "SUCCESS" },
  { id: "t2", userId: "u2", amount: 200, currency: "INR", status: "FAILED" },
  { id: "t3", userId: "u1", amount: "300", currency: "INR", status: "SUCCESS" },
  { id: "t1", userId: "u1", amount: "100", currency: "INR", status: "SUCCESS" }, // duplicate
  { id: "t4", userId: "u3", amount: null, currency: "INR", status: "SUCCESS" },
  {
    id: "t5",
    userId: "u2",
    amount: "invalid",
    currency: "INR",
    status: "SUCCESS",
  },
  { id: "t6", userId: "u2", amount: "400", currency: "INR", status: "SUCCESS" },
];

//remove dublicate id's

const getUniqueIds = (trans) => {
  let obj = {};

  for (let trans of transactions) {
    obj = {
      ...obj,
      [trans.id]: trans,
    };
  }

  return Object.values(obj);
};

console.log(getUniqueIds(transactions));
