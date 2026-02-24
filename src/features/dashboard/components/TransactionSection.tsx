import { FC } from "react";
import TransactionItem from "./TransactionItem";
import { TRANSACTIONS } from "../lib/constants";

const TransactionSection: FC = () => {
  return (
    <section className="w-full max-w-350 ring ring-secondary-700 mx-auto rounded-3xl px-4 py-6 shadow-300">
      <header className="flex justify-between items-center py-0.5">
        <span className="text-lg text-secondary-500 font-medium font-poppins">
          Recent Transactions
        </span>
        <button>
          <span className="text-sm text-primary-100 font-medium font-poppins hover:text-primary-50">
            View All
          </span>
        </button>
      </header>
      <div>
        {TRANSACTIONS.map((transaction, index) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            isLast={index === TRANSACTIONS.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default TransactionSection;
