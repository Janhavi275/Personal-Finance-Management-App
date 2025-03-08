// import './analytic.css'
// import React from "react";
// import { Container, Row } from "react-bootstrap";
// import CircularProgressBar from "../components/CircularProgressBar";
// import LineProgressBar from "../components/LineProgressBar";
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// const Analytics = ({transactions}) => {
//     const TotalTransactions = transactions.length;
//   const totalIncomeTransactions = transactions.filter(
//     (item) => item.transactionType === "income"
//   );
//   const totalExpenseTransactions = transactions.filter(
//     (item) => item.transactionType === "expense"
//   );

//   let totalIncomePercent =
//     (totalIncomeTransactions.length / TotalTransactions) * 100;
//   let totalExpensePercent =
//     (totalExpenseTransactions.length / TotalTransactions) * 100;

//   // console.log(totalIncomePercent, totalExpensePercent);

//   const totalTurnOver = transactions.reduce(
//     (acc, transaction) => acc + transaction.amount,
//     0
//   );
//   const totalTurnOverIncome = transactions
//     .filter((item) => item.transactionType === "income")
//     .reduce((acc, transaction) => acc + transaction.amount, 0);
//   const totalTurnOverExpense = transactions
//     .filter((item) => item.transactionType === "expense")
//     .reduce((acc, transaction) => acc + transaction.amount, 0);

//   const TurnOverIncomePercent = (totalTurnOverIncome / totalTurnOver) * 100;
//   const TurnOverExpensePercent = (totalTurnOverExpense / totalTurnOver) * 100;

//   const categories = [
//     "Groceries",
//     "Rent",
//     "Salary",
//     "Tip",
//     "Food",
//     "Medical",
//     "Utilities",
//     "Entertainment",
//     "Transportation",
//     "Other",
//   ];

//   const colors = {
//     "Groceries": '#FF6384',
//     "Rent": '#36A2EB',
//     "Salary": '#FFCE56',
//     "Tip": '#4BC0C0',
//     "Food": '#9966FF',
//     "Medical": '#FF9F40',
//     "Utilities": '#8AC926',
//     "Entertainment": '#6A4C93',
//     "Transportation": '#1982C4',
//     "Other": '#F45B69',
//   };
  

//     return (
//         <Container className="mt-5">
//             <Row>
//                 {/* Total Transactions */}
//                 <div className="col-lg-3 col-md-6 mb-4">
//                     <div className="card h-100">
//                         <div className="card-header bg-dark text-white">
//                             <strong>Total Transactions:</strong> {TotalTransactions}
//                         </div>
//                         <div className="card-body">
//                             <h5 style={{ color: "green" }}>
//                                 Income: <ArrowDropUpIcon /> {totalIncomeTransactions.length}
//                             </h5>
//                             <h5 style={{ color: "red" }}>
//                                 Expense: <ArrowDropDownIcon /> {totalExpenseTransactions.length}
//                             </h5>
//                             <CircularProgressBar percentage={totalIncomePercent.toFixed(0)} color="green" />
//                             <CircularProgressBar percentage={totalExpensePercent.toFixed(0)} color="red" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Total Turnover */}
//                 <div className="col-lg-3 col-md-6 mb-4">
//                     <div className="card h-100">
//                         <div className="card-header bg-dark text-white">
//                             <strong>Total TurnOver:</strong> {totalTurnOver} <CurrencyRupeeIcon />
//                         </div>
//                         <div className="card-body">
//                             <h5 style={{ color: "green" }}>
//                                 Income: <ArrowDropUpIcon /> {totalTurnOverIncome} <CurrencyRupeeIcon />
//                             </h5>
//                             <h5 style={{ color: "red" }}>
//                                 Expense: <ArrowDropDownIcon /> {totalTurnOverExpense} <CurrencyRupeeIcon />
//                             </h5>
//                             <CircularProgressBar percentage={TurnOverIncomePercent.toFixed(0)} color="green" />
//                             <CircularProgressBar percentage={TurnOverExpensePercent.toFixed(0)} color="red" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Category-wise Income */}
//                 <div className="col-lg-3 col-md-6 mb-4">
//                     <div className="card h-100">
//                         <div className="card-header bg-dark text-white">
//                             <strong>Category-wise Income</strong>
//                         </div>
//                         <div className="card-body">
//                             {categories.map(category => {
//                                 const income = transactions
//                                     .filter(t => t.transactionType === "credit" && t.category === category)
//                                     .reduce((acc, t) => acc + t.amount, 0);
//                                 const incomePercent = (income / totalTurnOver) * 100;

//                                 return income > 0 && (
//                                     <LineProgressBar key={category} label={category} percentage={incomePercent.toFixed(0)} lineColor={colors[category]} />
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Category-wise Expense */}
//                 <div className="col-lg-3 col-md-6 mb-4">
//                     <div className="card h-100">
//                         <div className="card-header bg-dark text-white">
//                             <strong>Category-wise Expense</strong>
//                         </div>
//                         <div className="card-body">
//                             {categories.map(category => {
//                                 const expenses = transactions
//                                     .filter(t => t.transactionType === "expense" && t.category === category)
//                                     .reduce((acc, t) => acc + t.amount, 0);
//                                 const expensePercent = (expenses / totalTurnOver) * 100;

//                                 return expenses > 0 && (
//                                     <LineProgressBar key={category} label={category} percentage={expensePercent.toFixed(0)} lineColor={colors[category]} />
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </Row>
//         </Container>
//     );
// };

// export default Analytics;


import './analytic.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Pie, Bar } from 'react-chartjs-2';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Analytics = ({ transactions }) => {
  const totalTransactions = transactions.length;
  const totalIncomeTransactions = transactions.filter((item) => item.transactionType === 'income');
  const totalExpenseTransactions = transactions.filter((item) => item.transactionType === 'expense');

  const totalIncomePercent = (totalIncomeTransactions.length / totalTransactions) * 100 || 0;
  const totalExpensePercent = (totalExpenseTransactions.length / totalTransactions) * 100 || 0;

  const totalTurnOver = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalTurnOverIncome = totalIncomeTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalTurnOverExpense = totalExpenseTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  const TurnOverIncomePercent = (totalTurnOverIncome / totalTurnOver) * 100 || 0;
  const TurnOverExpensePercent = (totalTurnOverExpense / totalTurnOver) * 100 || 0;

  const categories = ['Groceries', 'Rent', 'Salary', 'Tip', 'Food', 'Medical', 'Utilities', 'Entertainment', 'Transportation', 'Other'];
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#8AC926', '#6A4C93', '#1982C4', '#F45B69'];

  const pieData = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [totalIncomePercent, totalExpensePercent],
        backgroundColor: ['green', 'red'],
        borderWidth: 1,
      },
    ],
  };

  const TurnOverPieData = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [TurnOverIncomePercent, TurnOverExpensePercent], // Uses monetary values, not count
        backgroundColor: ['green', 'red'],
        borderWidth: 1,
      },
    ],
  };
  
  const categoryData = {
    labels: categories,
    datasets: [
      {
        label: 'Income',
        data: categories.map((category) =>
          transactions.filter((t) => t.transactionType === 'income' && t.category === category).reduce((acc, t) => acc + t.amount, 0)
        ),
        backgroundColor: 'green',
      },
      {
        label: 'Expense',
        data: categories.map((category) =>
          transactions.filter((t) => t.transactionType === 'expense' && t.category === category).reduce((acc, t) => acc + t.amount, 0)
        ),
        backgroundColor: 'red',
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h1 className='text-white'>Finance Overview</h1>
      <Row className="d-flex justify-content-between">
        {/* Total Transactions Card */}
        <Col md={6}>
        <div className="card analytics-card">
          <div className="card-header">Total Transactions: {totalTransactions}</div>
          <div className="card-body">
            <h5 style={{ color: 'green' }}>Income: <ArrowDropUpIcon /> {totalIncomeTransactions.length}</h5>
            <h5 style={{ color: 'red' }}>Expense: <ArrowDropDownIcon /> {totalExpenseTransactions.length}</h5>
            <Pie data={pieData} />
          </div>
        </div> 
        </Col>

        <Col md={6}>
        {/* Total Turnover Card */}
        <div className="card analytics-card">
          <div className="card-header">Total TurnOver: {totalTurnOver} <CurrencyRupeeIcon /></div>
          <div className="card-body">
            <h5 style={{ color: 'green' }}>Income: <ArrowDropUpIcon /> {totalTurnOverIncome} <CurrencyRupeeIcon /></h5>
            <h5 style={{ color: 'red' }}>Expense: <ArrowDropDownIcon /> {totalTurnOverExpense} <CurrencyRupeeIcon /></h5>
            <Pie data={TurnOverPieData} />
          </div>
        </div>
        </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
        <div className="card analytics-card" style={{ minHeight: '400px', flexGrow: 1 }}>
        <div className="card-header">Category-wise Income & Expense</div>
        <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', height: '300px' }}>
            <Bar data={categoryData} options={{ maintainAspectRatio: false }} />
            </div>
        </div>
        </div>
        </Col>
        </Row>

      
    </Container>
  );
};

export default Analytics;
