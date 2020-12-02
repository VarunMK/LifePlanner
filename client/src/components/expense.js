import React from "react";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";

import { GlobalProvider } from "../context/GlobalState";
import "../styles/planner.css";
function expense() {
  return (
    <div>
      <GlobalProvider>
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default expense;
