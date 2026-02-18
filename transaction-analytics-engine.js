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

// [
//     { userId: "u1", totalAmount: 400, transactionCount: 2 },
//     { userId: "u2", totalAmount: 400, transactionCount: 1 },
//   ]

const getValidtrans = (transactions) => {
  let obj = {};

  const uniqueArray = transactions.filter(
    (obj, index, self) => index === self.findIndex((item) => item.id === obj.id)
  );

  for (let trans of uniqueArray) {
    if (
      trans.amount &&
      isNaN(trans.amount) === false &&
      Number(trans.amount) > 0 &&
      trans.status === "SUCCESS"
    ) {
      const id = trans.userId;
      obj = {
        ...obj,
        [id]: {
          userId: id,
          totalAmount:
            (Number(obj[id]?.totalAmount) || 0) + Number(trans.amount),
          transactionCount: (obj[id]?.transactionCount || 0) + 1,
        },
      };
    }
  }
  return Object.values(obj);
};

console.log(getValidtrans(transactions));
