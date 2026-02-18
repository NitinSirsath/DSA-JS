const transactions = [
  {
    id: "t1",
    userId: 1,
    amount: "8000",
    currency: "INR",
    status: "success",
    timestamp: "2023-01-01",
  },
  {
    id: "t2",
    userId: 1,
    amount: -100,
    currency: "USD",
    status: "success",
    timestamp: "2023-01-02",
  },
  {
    id: "t1",
    userId: 1,
    amount: "8000",
    currency: "INR",
    status: "success",
    timestamp: "2023-01-01",
  }, // duplicate
  {
    id: "t3",
    userId: 2,
    amount: "abc",
    currency: "INR",
    status: "failed",
    timestamp: "2023-01-03",
  },
  {
    id: "t4",
    userId: 2,
    amount: 5000,
    currency: "INR",
    status: "success",
    timestamp: null,
  },
  {
    id: "t5",
    userId: 3,
    amount: 12000,
    currency: "INR",
    status: "success",
    timestamp: "2023-01-05",
  },
];

//   [
//     { userId: 1, totalAmount: 8000, transactionCount: 1 },
//     { userId: 2, totalAmount: 5000, transactionCount: 1 },
//     { userId: 3, totalAmount: 12000, transactionCount: 1 }
//   ]

const normalizeOutput = (data) => {
  const obj = {
    userId: null,
    totalAmount: 0,
    transactionCount: 0,
    transactionFailedCount: 0,
    timestamp: null,
  };

  data.forEach((element) => {
    const usdAmount =
      element.currency === "INR" ? Number(element.amount) / 80 : element.amount;

    const isDateLatest =
      new Date(obj[element.userId]?.timestamp) < new Date(element.timestamp);
    obj[element.userId] = {
      userId: element.userId,
      totalAmount: obj[element]?.totalAmount
        ? obj[element]?.totalAmount + usdAmount
        : usdAmount,
      transactionCount:
        obj[element]?.status === "success"
          ? obj[element]?.transactionCount + 1
          : obj[element]?.transactionCount,
      transactionFailedCount:
        obj[element]?.status === "failed"
          ? obj[element]?.transactionFailedCount + 1
          : obj[element]?.transactionCount,
      timestamp: isDateLatest
        ? obj[element.userId].timestamp
        : element.timestamp,
    };
  });
  return obj;
};

console.log(normalizeOutput(transactions));
