const dummyFeeData = {
  student: {
    name: "Ankit Singh",
    department: "Information Technology",
    studentId: "IT23041",
    semester: 5,
    avatar: "",
  },

  fee: {
    total: 7000,
    paid: 3000,
    due: 4000,
    dueDate: "15 Aug 2026",
    status: "PARTIAL",
  },

  breakdown: [
    {
      title: "Tuition Fee",
      amount: 5000,
    },
    {
      title: "Exam Fee",
      amount: 1000,
    },
    {
      title: "Library Fee",
      amount: 500,
    },
    {
      title: "Development Fee",
      amount: 500,
    },
  ],

  history: [
    {
      id: 1,
      date: "12 Jan 2026",
      method: "Razorpay",
      amount: 2000,
      status: "SUCCESS",
    },
    {
      id: 2,
      date: "18 Mar 2026",
      method: "UPI",
      amount: 1000,
      status: "SUCCESS",
    },
  ],
};

export default dummyFeeData;