import { FC } from "react";
import ActionButton from "./ActionButton";
import { ACTIONS } from "../lib/constants";

const WalletActions: FC = () => {
  return (
    <section className="w-full max-w-350 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ring ring-secondary-700 mx-auto rounded-3xl px-4 py-6 shadow-300">
      {ACTIONS.map((action, index) => (
        <ActionButton key={index} action={action} />
      ))}
    </section>
  );
};

export default WalletActions;
